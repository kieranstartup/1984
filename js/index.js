jQuery(document).ready(function() {


    function paragraphOneImages() {

        // var imgsArray = ["!", "amazon", "balloons", "Beauty", "bikini body", "buy now"];
        var numberOfFaces = 5;
        var paragraph3 = document.getElementById("p3");

        for (var i = 0; i < numberOfFaces; i++) {
            var img = document.createElement("img");

            img.src = "popups/amazon.png";

            var topLoc = Math.floor(Math.random() * 400);
            var botLoc = Math.floor(Math.random() * 400);

            // changes are here!
            img.style.top = topLoc + "px"; // added px
            img.style.left = botLoc + "px"; // and used "left" instead of "bottom"
            paragraph3.appendChild(img);
        }
    }
    paragraphOneImages();


    jQuery(document.body).on('click', 'img', function() {
        jQuery(this).remove();
    });

    // function showLetter() {
    //     var letter = imgsArray[generateRandomForArray()];
    //     jQuery(".page").append("<img src='popups/" + letter + ".png'>");
    //     var left = generateRandom();
    //     var top = generateRandom();
    //     jQuery(".page").last().css({"position":"absolute","top": top + "px", "left": left + "px"});
    // }




});