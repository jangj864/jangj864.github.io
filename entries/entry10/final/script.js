document.addEventListener('DOMContentLoaded', function() {
    // Define an array of messages for each button
    let messages = [
      ['It was Regretful!', 'I expected Kiwi flavor', 'But it tastes like Cucumber', 'Definitely Regretful!'],
      ['It was Regretful!', 'I spilled water on my laptop', 'So there was no choice for me','I had to buy new one.', 'Definitely Regretful!'],
      ['It was Satisfied!', 'It tastes like sparkling Powerade', 'Way much better than Sparkling Cucumber.','Definitely satisfied!'],
      ['It was Satisfied!', 'The price was affordable', 'And It was Delicious!','Definitely satisfied!']
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
  


