var font;
var vehicles = [];

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(480, 420);
  background("#FFB06F");
  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();
  // text('train', 100, 200);

  var points = font.textToPoints('IMPULSO', 93, 240, 63, {
    sampleFactor: 4
  });
  

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(13);
    // point(pt.x, pt.y);
  }
}
 
function draw() {
  background("#FFB06F");
 
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
//}
// Savar como SVG quando clicamos sobre o canvas
// function mouseClicked(){
  //save("mySVG.svg"); // give file name
  //print("saved svg");
  // noLoop(); // we just want to export once
}