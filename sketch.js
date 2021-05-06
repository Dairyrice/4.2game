let video;
let poseNet;
let pose;
let b;


function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  // video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

  b = loadImage('assets/pic1.png');
}


function gotPoses(poses){
  if (poses.length > 0){

    pose = poses[0].pose;
  }

}
function modelLoaded(){


}

function draw() {
image(video, 0, 0);

  if (pose) {
  image(b, pose.nose.x, pose.nose.y);
  image(b, pose.rightWrist.x, pose.rightWrist.y);
  image(b, pose.leftWrist.x, pose.leftWrist.y);

  for (let i = 0; i < pose.keypoints.length; i++){
    let x = pose.keypoints[i].position.x;
    let y = pose.keypoints[i].position.y;
    image(b, x, y);
  }

  // for (let i = 0; i < skeleton.length; i++){
  //
  //   let a = skeleton[i][0];
  //   let b = skeleton[i][1];
  //   strokeWeight(2);
  //   stroke(255);
  //   line(a.position.x, a.position.y, b.position.x, b.position.y);
  // }

  }
}
