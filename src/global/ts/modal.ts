/**
 * Open a modal with the given content
 * @param content HTMLElement
 */
export const openModal = (modalId: string, content: HTMLElement) => {
  let modal = document.querySelector(`astral-modal[data-id="${modalId}"]`) as HTMLAstralModalElement;

  if (!modal) {
    modal = document.createElement('astral-modal');
    modal.setAttribute('data-id', modalId);
    document.querySelector('astral-cdk').appendChild(modal);
  } else {
    // Clear existing content
    modal.innerHTML = '';
  }

  const container = document.createElement('div');
  container.slot = 'container';
  container.appendChild(content);

  modal.appendChild(container);

  modal.open();
};