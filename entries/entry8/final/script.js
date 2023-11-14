$(document).ready(function() {
    var clickCount = 0; // Counter for the button clicks

    // Click event for the 'go' button
    $("#go").click(function() {
        // Increment click count
        clickCount++;

        // Determine the text to display based on the click count
        var textToShow = "";
        switch (clickCount) {
            case 1: textToShow = "<p class='home-text'><span>Hot Dried Pot</span> : Free Food. My friend spent his money.</p>"; 
            break;
            case 2:
                textToShow = "<p class='seven-eleven-text'><span>Chicken</span> : The chicken has no meat, only batter, and it tastes bad.</p>" +
                             "<p class='seven-eleven-text2'><span>Doritos</span> : Nacho cheese is the second-best flavor.</p>";
                break;
            case 3: 
                textToShow = "<p class='cvs-text'><span>Menthol Spray</span> : It's Chloraseptic® Sore Throat Medicine.</p>" +
                             "<p class='cvs-text'><span>C4® Energy Drink</span> : Dynamic taste and explosive energy to enhance performance.</p>";
                break;
            case 4: 
                textToShow = "<p class='weee-text'><span>Cooked White Rice</span> : Essential supplies for securing food this month.</p>" +
                             "<p class='weee-text2'><span>Stir-Fried Topokki</span> : Delicious but detrimental to diet.</p>"; 
                
                break;
            case 5: textToShow = "<p class='parsons-text'><span>TNS Restaurants</span> : I ordered a pepperoni pizza, but although I was very hungry, the size was too small.</p>"; break;
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
                }, 500);
            } else {
                // Otherwise, move to the new destination
                $("#block").animate({
                    marginLeft: dest + "px"
                }, 500);
            }
        }
    });
});