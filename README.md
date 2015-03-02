Devkit Phaser Template
======================

The purpose for this template is to provide a mechanism by which Phaser games
can integrate themselves with Devkit with relative ease. By instructing a Phaser
game to talk to a Devkit canvas, one can make use of the canvas backend that
Devkit uses for its native mobile builds on Android and iOS.

Instructions
------------

To integrate an existing Phaser game with Devkit through the use of this template,
you may follow these helpful instructions!

1. Install [devkit](https://github.com/gameclosure/devkit).

2. Clone this repository.

        git clone https://github.com/weebygames/phaser-template

4. Run `devkit install` in the directory you cloned to.

5. Place your game code into `src/game.js` file!

6. Build for a device using the devkit command, for example:

        devkit debug native-android

7. And of course, report issues you find!
