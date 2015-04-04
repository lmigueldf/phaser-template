import device;

var width = device.screen.width;
var height = device.screen.height;

var state = {
  preload: preload,
  create: create,
  update: update
};

var game = Phaser.Game(width, height, Phaser.CANVAS, '', state);

function preload() {
  // ...
}

function create() {
  // ...
}

function update() {
  // ...
}

