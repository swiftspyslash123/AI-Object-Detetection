statuss = "";
object_name = "";
results = [];
object = [];

function setup() {
    canvas = createCanvas(500, 450);
    canvas.center();
    video = createVideo();
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

    document.getElementById("object_name").innerHTML = "object_name"
    
}


function modelLoaded() {
    console.log("Model Loaded!");
    statuss = true;
}

function draw() {
    image(video, 0, 0, 480, 380);
    if (objects[i].label == object_name) {
        objectDetector.detect(video, gotResults);

        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("object_status").innerHTML = object_name + "Found";

            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x , objects[i].y + 15);
            rect(objects[i].x, objects[i].y, objects[i].width);
        }
    }
}

function gotResult() {
    if (error) {
        console.log(error);
    }
    console.log(results);
    results = object;
}