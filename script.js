//Navigation Sidepanel
function toggleNav() {
    const nav = document.getElementById("nav");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
  
    nav.classList.toggle("nav-active");
    hamburgerIcon.classList.toggle("hamburger-icon-active");
}
  
// Typing Text Title
var textArray = ["Gozo", "AyItsMe", "Rank 1 Xerath OCE", "Adam Wyatt"];
var typingIndex = 0;
var typingElement = document.getElementById("typing");
var typingAnimation = typingElement.style.animation;
  
function typeText() {
  // Set the text and animation properties of the paragraph element
  typingElement.innerHTML = "";
  typingElement.style.animation = "none";
  
  // Start typing the next word character by character
  typeCharacter(textArray[typingIndex], 0);
}
  
function typeCharacter(word, index) {
  // Add the next character to the text content of the paragraph element
  typingElement.innerHTML += word.charAt(index);
  
  // If there are more characters to add, wait a short delay and then call this function again with the next index
  if (index < word.length - 1) {
    setTimeout(function() {
      typeCharacter(word, index + 1);
    }, 100);
  }
  // If this is the last character, wait a longer delay and then start deleting the word
  else {
    setTimeout(deleteText, 1000);
  }
}
  
function deleteText() {
  // Set the text and animation properties of the paragraph element
  typingElement.style.animation = "none";

  // Start deleting the current word character by character
  deleteCharacter(textArray[typingIndex], textArray[typingIndex].length - 1);
}
  
function deleteCharacter(word, index) {
  // Remove the next character from the text content of the paragraph element
  typingElement.innerHTML = word.substring(0, index);

  // If there are more characters to remove, wait a short delay and then call this function again with the next index
  if (index > 0) {
    setTimeout(function() {
      deleteCharacter(word, index - 1);
    }, 100);
  }
  // If this is the first character, wait a longer delay and then start typing the next word
  else {
    typingIndex++;
    if (typingIndex >= textArray.length) {
      typingIndex = 0;
    }
    setTimeout(typeText, 1000);
  }
}
  
// Start typing the first word
typeText();


// Fade Up Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-up');
      observer.unobserve(entry.target);
    }
  });
});

const fadeUpObjects = document.querySelectorAll('.fade-up-object');
fadeUpObjects.forEach(object => {
  observer.observe(object);
});


// Copy Discord text to clipboard
const copyButton = document.querySelector('#copy-button');

copyButton.addEventListener('click', () => {
  const textToCopy = copyButton.getAttribute('data-clipboard-text');

  navigator.clipboard.writeText(textToCopy).then(() => {
    alert('Copied to clipboard!');
  }, (err) => {
    console.error('Failed to copy: ', err);
  });
});


// Smooth scrolling effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Fade in and out Profile images
const images = document.querySelectorAll('.slideshow-profile');
let currentIndex = 0;

setInterval(() => {
  images[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = 1;
}, 3000);