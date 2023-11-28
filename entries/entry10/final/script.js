document.addEventListener('DOMContentLoaded', function() {
    // Define an array of messages for each button
    let messages = [
      ['It was Regrettable!', 'I expected a kiwi flavor', 'But it tasted like cucumber', 'Definitely Regrettable!'],
      ['It was Regrettable!', 'I spilled water on my laptop', 'So I had no choice but to buy a new one', 'Definitely Regrettable!'],
      ['It was Satisfying!', 'It tastes like sparkling POWERADE', 'Which was much better than sparkling cucumber', 'Definitely Satisfying!'],
      ['It was Satisfying!', 'The price was affordable', 'And it was delicious!', 'Definitely Satisfying!']
    ];
    
    // Define a function to handle button clicks
    function handleButtonClick(buttonId, outputId, messageIndex) {
      let button = document.getElementById(buttonId);
      let output = document.getElementById(outputId);
      let clickCount = 0; // Keep track of clicks
  
      button.addEventListener('click', function() {
        // Display the next message or show a popup if out of messages
        if (clickCount < messages[messageIndex].length) {
          output.textContent = messages[messageIndex][clickCount];
          clickCount++;
        } else {
          alert('All explanations are over for this item. Move to next one!');
        }
      });
    }
  
    // Initialize each button with its handler
    handleButtonClick('actionButton1', 'output1', 0);
    handleButtonClick('actionButton2', 'output2', 1);
    handleButtonClick('actionButton3', 'output3', 2);
    handleButtonClick('actionButton4', 'output4', 3);
  });
  


