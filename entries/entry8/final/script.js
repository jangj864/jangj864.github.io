$(document).ready(function() {
    var clickCount = 0; // Counter for the button clicks

    // Click event for the 'go' button
    $("#go").click(function() {
        // Increment click count
        clickCount++;

        // Determine the text to display based on the click count
        var textToShow = "";
        switch (clickCount) {
            case 1: textToShow = "<p class='home-text'>home</p>"; break;
            case 2: textToShow = "<p class='seven-eleven-text'>711</p>"; break;
            case 3: textToShow = "<p class='cvs-text'>cvs</p>"; break;
            case 4: textToShow = "<p class='weee-text'>weee</p>"; break;
            case 5: textToShow = "<p class='parsons-text'>parsons</p>"; break;
            case 6:
                textToShow = "<p class='refresh-text'>Refresh to Restart!</p>";
                // Move the block back to its original position
                $("#block").animate({
                    marginLeft: "-340px"
                }, 500);
                clickCount = -1; // Reset the count
                break;
        }

        // Update the info div with the new text
        $("#info").html(textToShow); // Use .html instead of .text when you're setting HTML content

        // Calculate the new margin-left for the #block
        if (clickCount < 6) {
            var dest = parseInt($("#block").css("margin-left").replace("px", "")) + 220;
            if (dest > 1320) {
                // If destination is greater than 1320px, reset to 10px
                $("#block").animate({
                    marginLeft: "10px"
                }, 500); // Changed duration to 500 to match the reset animation
            } else {
                // Otherwise, move to the new destination
                $("#block").animate({
                    marginLeft: dest + "px"
                }, 500); // Changed duration to 500 for consistency
            }
        }
    });
});

