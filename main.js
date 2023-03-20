function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ztUq9aAKK/model.json", modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotResult);
}

var Lion = 0;
var Cat = 0;
var Dog = 0;
var Cow = 0;

function gotResult() {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        random_color_r = Math.floor(Math.random() * 255) + 1;
        random_color_g = Math.floor(Math.random() * 255) + 1;
        random_color_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("animal_sound").innerHTML = "I can hear: Dog - " + Dog + " Cat - " + Cat + " Cow - " + Cow + " Lion - " + Lion;
        document.getElementById("results").innerHTML = "Sound - " + results[0].label;


        document.getElementById("animal_sound").style.color = "rgb(" + random_color_r + "," + random_color_g + "," + random_color_b + ")";
        document.getElementById("results").style.color = "rgb(" + random_color_r + "," + random_color_g + "," + random_color_b + ")";

        images = document.getElementById("animal_image");

        if (result[0] == "Barking") {
            images.src = "download(1).jpg";
            Dog = Dog + 1;
        } else if (results[0] == "Meowing") {
            images.src = "download.jpg";
            Cat = Cat + 1;
        } else if (results[0] == "Mooing") {
            images.src = "cow.png.jpg";
            Cow = Cow + 1
        } else {
            images.src = "Lion.jpg";
            Lion = Lion + 1;
        }
    }
}