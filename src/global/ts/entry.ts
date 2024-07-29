document.addEventListener('DOMContentLoaded', () => {
  const script = document.createElement('script');
  script.src = '/assets/material-components-web.min.js';
  script.onload = () => {
    if ((window as any).mdc) {
      (window as any).mdc.autoInit();
    } else {
      console.error('MDC library is not loaded');
    }
  };

  const link = document.createElement('link');
  link.href = '/assets/material-components-web.min.css';

  document.head.appendChild(script);
  document.head.appendChild(link);
});
