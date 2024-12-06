
function handleMouseEnter() {
  this.classList.add('s-card--hovered');
}

function addEventListinersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  
  for (let i = 0; i < cardElements.length; i++) {
    const card = cardElements[i];
    card.addEventListener('mouseenter', handleMouseEnter);
  }
}

document.addEventListener("DOMContentLoaded", addEventListinersToCards, false);