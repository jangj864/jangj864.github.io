document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('actionButton');
    var output = document.getElementById('output');

    button.addEventListener('click', function() {
        output.textContent = 'You clicked the button!';
    });
});

