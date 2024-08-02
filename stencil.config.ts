import { Config } from '@stencil/core';
import gzip from 'rollup-plugin-gzip';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'astralui',
  globalStyle: 'src/global/scss/index.scss',
  globalScript: 'src/global/ts/entry.ts',
  plugins: [
    sass({
      includePaths: ['node_modules'],
    }),
    gzip({
      additionalFiles: ['dist/**/*.js', 'dist/**/*.css'],
    }),
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'assets',
        },
        {
          src: 'global/scss',
          dest: 'scss',
        },
      ],
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: 'assets',
        },
        {
          src: 'global/scss',
          dest: 'scss',
        },
      ],
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
