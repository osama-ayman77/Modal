'use strict';

// DOM Emelents
const showModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

let openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Loop On 3 Show Modal Buttons
showModalBtns.forEach(Btn => {
  // Remove The Class "hidden" From The Modal And Overlay Elements To Show Them
  Btn.addEventListener('click', openModal);
});

// Close The Opened Modal Function
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Calling A CloseModal Function When The (closeBtn || overlay) Clicked
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
