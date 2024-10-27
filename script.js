const speakerCard = document.getElementById('card'); 
const speakerCard2 = document.getElementById('card2'); 
const speakerCard3 = document.getElementById('card3'); 


const speakerModal = document.getElementById('modal');
const speakerModal2 = document.getElementById('modal2');
const speakerModal3 = document.getElementById('modal3');


const modalClose = document.getElementById('close');
const modalClose2 = document.getElementById('close2');
const modalClose3 = document.getElementById('close3');

// modal1
speakerCard.addEventListener('click', () => {
  speakerModal.style.display = 'block';
});

modalClose.addEventListener('click', () => {
  speakerModal.style.display = 'none'; 
});

// modal2

speakerCard2.addEventListener('click', () => {
    speakerModal2.style.display = 'block';
  });
  
  modalClose2.addEventListener('click', () => {
    speakerModal2.style.display = 'none'; 
  });

// modal3

  speakerCard3.addEventListener('click', () => {
    speakerModal3.style.display = 'block';
  });
  
  modalClose3.addEventListener('click', () => {
    speakerModal3.style.display = 'none'; 
  });

