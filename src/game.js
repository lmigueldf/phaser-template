var game;

exports.load = function(width, height, canvas) {
    game = Phaser.Game(width, height, Phaser.CANVAS, '', { preload: preload, create: create, update: update });
    game.setCanvas(canvas);
    return game;
}

function preload() {

}

function create() {

}

function update() {

}

