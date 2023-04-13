function toggleNav() {
    const nav = document.getElementById("nav");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
  
    nav.classList.toggle("nav-active");
    hamburgerIcon.classList.toggle("hamburger-icon-active");
  }
  
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
  
  