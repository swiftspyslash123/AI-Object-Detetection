statuss = "";
object_name = "";

function setup(){
    canvas = createCanvas(500, 450);
    canvas.center();
    video = createVideo();
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

    document.getElementById("object_name").innerHTML = "object_name"
}

function modelLoaded(){
    console.log("Model Loaded!");
    statuss = true;
}

function draw(){
    image(video, 0, 0, 480, 380);
}