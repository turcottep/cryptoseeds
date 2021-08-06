const colors = [
  [255, 255, 255],
  // [250, 242, 5],
  // [254, 100, 2],
  // [221, 9, 7],
  // [242, 9, 133],
  // [70, 0, 164],
  // [1, 0, 210],
  // [3, 170, 234],
  // [31, 182, 21],
  // [0, 100, 18],
];

var nbBalls = 1000;
var maxSpeed = 1;
var balls = [];
var height;
var width;
var ballGravity = 0.05; //0.5
const ballSpacing = 500;

const Sketch = (W, H) => (p) => {
  let PI = p.PI;
  let PI_2 = p.HALF_PI;
  let PI_4 = p.QUARTER_PI;
  let TWO_PI = p.TWO_PI;
  height = H;
  width = W;

  p.setup = () => {
    p.createCanvas(W, H);
    p.angleMode(p.RADIANS);
    p.FrameRate = 60;

    for (let i = 0; i < nbBalls; i++) {
      balls.push(new Ball(p, i));
    }

    // let p1 = new Character(p);
    // p1.color = 1;

    Restart(p);
    var force = p.createVector(0, 0);
    p.background(0);
  };

  p.draw = () => {
    p.background(0, 0, 0, 2);
    p.stroke(255, 255, 255);
    //   line(width / 2, 0, width / 2, 25);
    p.noStroke();

    p.textSize(20);
    p.fill(0);

    balls.forEach((ball) => {
      ball.update();
    });

    balls.forEach((ball) => {
      ball.show();
    });
  };
};
export default Sketch;

const deez = 0.9999999;
const scale = 1000;
const ro = 28;
const sigma = 10;
const beta = 8 / 3;

function Ball(p, index) {
  this.pos = p.createVector();
  this.velocity = p.createVector();
  this.velocity.x = 0;
  this.velocity.y = 0;
  this.acc = p.createVector(0, 0);
  this.collided = false;
  this.size = 1;
  this.index = index;
  this.initSpeed = 0;
  this.pos.x = 0 + this.size;
  this.pos.y = height - this.size;
  this.z = 0;
  this.update = function () {
    //Rebound
    // Contact(this);

    // Gravity
    // if (this.pos.y < height - this.size) {
    //   this.acc.y += ballGravity;
    // }
    // //else this.velocity.y=0;
    // this.velocity.add(this.acc);
    // this.pos.add(this.velocity);
    // if (this.pos.x >= width - this.size || this.pos.x <= this.size) {
    //   this.velocity.x *= -1;
    // }
    // if (this.pos.y >= height - this.size || this.pos.y <= this.size) {
    //   this.velocity.y *= -1;
    // }
    // if (this.velocity.x ** 2 + this.velocity.y ** 2 < 1) {
    //   this.collided = false;
    // }
    // this.acc.mult(0);

    // this.velocity.mult(ballFriciton);

    // Lorenz;
    const x = this.pos.x / scale;
    const y = this.pos.y / scale;
    const z = this.z / scale;

    const dx = sigma * (y - x);
    const dy = x * (ro - z) - y;
    const dz = x * y - beta * z;

    // if (this.index == 0) {
    //   console.log(dx);
    // }

    this.pos.x += dx;
    this.pos.y += dy;
    this.z += dz;

    // this.pos.x = p.constrain(this.pos.x, this.size, width - this.size);
    // this.pos.y = p.constrain(this.pos.y, 0, height - this.size);
  };

  this.show = function () {
    const x = Math.floor((this.initSpeed / maxSpeed) * colors.length);
    p.fill(...colors[x]);
    p.stroke(...colors[x]);
    const posScale = 0.005;
    // console.log("length", length);
    p.ellipse(
      this.pos.x * posScale + width / 2,
      this.pos.y * posScale + height / 2,
      2 * this.size,
      2 * this.size
    );
  };
}

function Restart(p) {
  balls.forEach((ball) => {
    ball.initSpeed = (ball.index * maxSpeed) / balls.length;
    ball.velocity = p.createVector(0 + ball.initSpeed, 0);
    ball.pos.x = width / 2 + ballSpacing * ball.index;
    ball.pos.y = height / 2 + ballSpacing * ball.index; //ball.size + ball.index * 1;
  });
}
