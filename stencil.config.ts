import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'astralui',
  globalStyle: 'src/global/scss/index.scss',
  globalScript: 'src/global/ts/entry.ts',
  plugins: [
    sass({
      includePaths: ['node_modules'],
    }),
  ],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: 'astralui',
      directivesProxyFile: '../astral-ui/src/lib/stencil-generated/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {
          src: 'assets',
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
      ],
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
};
