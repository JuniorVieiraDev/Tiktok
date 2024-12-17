const textElement = document.getElementById('text');
const words = ["Desenvolvedor", "Web Designer", "Programador", "Freelancer"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const typingSpeed = 200;
const erasingSpeed = 100;
const delayBetweenWords = 1500;

function type() {
  const currentWord = words[wordIndex];
  const currentText = currentWord.slice(0, letterIndex);
  
  textElement.textContent = currentText;

  if (!isDeleting && letterIndex < currentWord.length) {
    letterIndex++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && letterIndex > 0) {
    letterIndex--;
    setTimeout(type, erasingSpeed);
  } else if (!isDeleting && letterIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(type, delayBetweenWords);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, typingSpeed);
});
