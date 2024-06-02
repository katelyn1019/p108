function modelloaded() {
    console.log("model is loaded");
    model.classify(gotResult);
}

function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EEEk1x-6x/model.json", modelloaded);
}

function gotResult(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("sound").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = (result[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("sound").style.color = "rgb(" + r + "," + g + "," + b + ")";
        document.getElementById("accuracy").style.color = "rgb(" + r + "," + g + "," + b + ")";

        var img = document.getElementById("img");
        if (result[0].label == "meowing") {
            img.src = "cat gif.gif"
        }
        else if (result[0].label == "mooing") {
            img.src = "cow gif.gif";
        }
        else if (result[0].label == "barking") {
            img.src = "dog gif.gif";
        }
        else {
            img.src = "ear.webp";
        }
    }

}

