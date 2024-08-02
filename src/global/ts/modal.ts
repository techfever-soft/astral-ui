import gsap from 'gsap';

// TODO: Gest the modal content from the user
export const openModal = () => {
  const modal = document.createElement('astral-modal');
  modal.innerHTML = `
    <div slot="container">
        <h1 slot="title">Modal title</h1>
        <p slot="content">This is a modal content</p>
        <astral-button slot="actions" color="primary">Primary action</astral-button>
        <astral-button slot="actions" color="secondary">Secondary action</astral-button>
    </div>
    `;
  const modalContent = modal.querySelector('div[slot="container"]');

  modal.addEventListener('click', (event: MouseEvent) => {
    if (event.target === modal) {
      gsap.to(modal, {
        opacity: 0,
        duration: 0.3,
      });
      gsap.to(modalContent, {
        scale: 0,
        onComplete: () => {
          modal.remove();
        },
      });
    }
  });

  document.querySelector('astral-cdk').appendChild(modal);
  gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  gsap.fromTo(
    modalContent,
    {
      scale: 0,
      duration: 0.3,
    },
    {
      scale: 1,
      duration: 0.3,
    },
  );
};
