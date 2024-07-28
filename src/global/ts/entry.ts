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
  document.head.appendChild(script);
});
