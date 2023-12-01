document.addEventListener('DOMContentLoaded', function() {
    // Define an array of messages for each button
    
    let messagesStack = [
        ' It was Regrettable! ', 'I expected a kiwi flavor', 
        'But it tasted like cucumber', 'Definitely Regrettable!',
        // ... other messages
        'Announcement: Move to the next one!'
    ];
    let currentMessageIndex = 0;
    
    function displayNextMessage() {
        if (currentMessageIndex < messagesStack.length) {
            let message = messagesStack[currentMessageIndex];
            alert(message); // Change this to however you wish to display the message
            currentMessageIndex++;
        } else {
            alert('No more messages.');
        }
    }
    
    
    // Define a function to handle button clicks
    function handleButtonClick(buttonId, outputId, messageIndex) {
      let button = document.getElementById(buttonId);
      let output = document.getElementById(outputId);
      let clickCount = 0; // Keep track of clicks
  
      button.addEventListener('click', function() {
        // Display the next message or show a popup if out of messages
        if (currentMessageIndex < messagesStack.length) {
          displayNextMessage();
          
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
  


