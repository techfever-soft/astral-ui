import { initCDK } from './cdk';
import { openModal } from './modal';

document.addEventListener('DOMContentLoaded', () => {
  initCDK();

  // NOTE: FOR TESTING PURPOSES
  document.querySelectorAll('[astral-open-modal]').forEach(element => {
    element.addEventListener('click', (event: Event) => {
      const button = event.currentTarget as HTMLElement;
      const modalId = button.getAttribute('data-modal-id') || 'default';
      const content = document.createElement('div');
      content.innerHTML = `
        <h1>Modal with ID ${modalId}</h1>
        <p>This is content for modal ${modalId}</p>
      `;
      openModal(modalId, content);
    });
  });
});