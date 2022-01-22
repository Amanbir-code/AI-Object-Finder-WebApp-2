Status = "";

function setup() 
{
    canvas = createCapture(480, 380);
    canvas.center();
}

function start()
{
    objectDetector = ml5.objectDetector('cocosdd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    Status = true;
}

function draw() 
{
    image(video, 0, 0, 480, 380);
}