img = "";
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
function preload() {
    img = loadImage('dog_cat.jpg');
}
function draw(){
    image(img,0, 0, 640, 420);
    fill('black');
    text("Dog", 135, 75);
    noFill();
    stroke('black' );
    rect(130, 60, 240, 350);
}