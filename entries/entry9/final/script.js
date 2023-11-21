$(document).ready(function() {
    // list one content
    var one = [
        "Sweet", "Salty", "Sour", "Bitter", "Spicy", "Savory", "Crunchy", "Creamy", "Crispy", "Juicy", "Tender", "Fresh", "Ripe", "Rich", "Smoky",
    ];

    // list two content
    var two = [
        "Apple", "Vegetable", "Chicken", "Fish", "Milk", "Banana", "Pasta", "Bread", "Nuts", "Coffee", "Noodle", "Orange", "Pizza", "Salads", "Beef",
    ];

    // list three content
    var three = [
        "Target", "7eleven", "Wall Mart", "CVS", "Costco", "Walgreens", "Whole Foods Market", "Taco Bell", "KFC", "Parsons", "McDonald's", "Starbucks", "Trader Joe's", "Amazon Fresh"
    ];

    function select_random(x){
        return x[Math.floor(Math.random()*x.length)];
    }

    function generate(){
        var selected_one = select_random(one);
        var selected_two = select_random(two);
        var selected_three = select_random(three);

        $('.list-one').html(selected_one);
        $('.list-two').html(selected_two);
        $('.list-three').html(selected_three);
    }

    $('button').click(function(){
        generate();
    });

    generate();
});
