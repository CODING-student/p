song="";
leftwristX=0;
rightwristX=0;
leftwristY=0;
rightwristY=0;
scoreleftwrist=0;
function setup(){
green=createCanvas(600,500);
    green.center();
eggs=createCapture(VIDEO);
    eggs.hide();
    posenet=ml5.poseNet(eggs,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('posenet is started');
}
function draw(){
    image(eggs,0,0,600,500);
    fill("white");
    stroke("black");
    if(scoreleftwrist > 0.02){
        circle(leftwristX,leftwristY,20);
        var half=Number(leftwristY);
        var school=floor(half);
        var yay=school/500;
        document.getElementById("volume").innerHTML="volume" + yay;
        song.setVolume(yay);

    }

}
function preload(){
    song=loadSound("music.mp3");
}
function rick(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results){
if(results.length > 0){
console.log(results);
scoreleftwrist=results[0].pose.keypoints[9].score;
console.log("scoreleftwrist=" + scoreleftwrist);
leftwristX=results[0].pose.leftWrist.x;
leftwristY=results[0].pose.leftWrist.y;
console.log("leftwristX" + leftwristX + "leftwristY" + leftwristY);
rightwristX=results[0].pose.rightWrist.x;
rightwristY=results[0].pose.rightWrist.y;
console.log("rightwristX" + rightwristX + "rightwristY" + rightwristY);
}
}