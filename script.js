const speakerCard = document.getElementById('card'); 
const speakerModal = document.getElementById('modal');
const modalClose = document.getElementById('close');

speakerCard.addEventListener('click', () => {
  speakerModal.style.display = 'block';
});

modalClose.addEventListener('click', () => {
  speakerModal.style.display = 'none'; 
});

