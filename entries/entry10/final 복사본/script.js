document.addEventListener('DOMContentLoaded', function() {
  let messages = [
    ['1. It was Regrettable!', '2. I expected a kiwi flavor', '3. But it tasted like cucumber', '4. Definitely Regrettable!'],
    ['1. It was Regrettable!', '2. I spilled water on my laptop', '3. So I had no choice but to buy a new one', '4. Definitely Regrettable!'],
    ['1. It was Satisfying!', '2. It tastes like sparkling POWERADE', '3. Which was much better than sparkling cucumber', '4. Definitely Satisfying!'],
    ['1. It was Satisfying!', '2. The price was affordable', '3. And it was delicious!', '4. Definitely Satisfying!']
  ];

  // Function to handle button clicks
  function handleButtonClick(buttonId, outputId, messageIndex) {
    let button = document.getElementById(buttonId);
    let output = document.getElementById(outputId);
    let clickCount = 0; // Tracks the number of clicks

    // Check if the button already has an event listener
    if (button.getAttribute('listener') !== 'true') {
      button.setAttribute('listener', 'true'); // Mark this button as having an event listener
      button.addEventListener('click', function() {
        // Display next message or show an alert if out of messages
        if (clickCount < messages[messageIndex].length) {
          let newSentenceDiv = document.createElement('div');
          newSentenceDiv.textContent = messages[messageIndex][clickCount];
          output.appendChild(newSentenceDiv);
          clickCount++;
        } else {
          alert('All explanations are over for this item. Move to the next one!');
        }
      });
    }
  }

  // Initialize each button with its handler
  handleButtonClick('actionButton1', 'output1', 0);
  handleButtonClick('actionButton2', 'output2', 1);
  handleButtonClick('actionButton3', 'output3', 2);
  handleButtonClick('actionButton4', 'output4', 3);
});

