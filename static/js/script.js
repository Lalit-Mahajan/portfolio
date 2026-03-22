document.addEventListener("DOMContentLoaded", function () {

    const text = "Hello, my \nname’s Lalit.";
    let index = 0;
    let speed = 60;

    function typeEffect() {
        if (index < text.length) {

            let char = text.charAt(index);

            if (char === "\n") {
                document.getElementById("typing-text").innerHTML += "<br>";
            } else {
                document.getElementById("typing-text").innerHTML += char;
            }

            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();

});