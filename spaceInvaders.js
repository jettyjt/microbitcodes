let baseX = 2;
let asteroidX = Math.randomRange(0, 4);
let asteroidY = 0;
let missileY = 3;
let success = false;
let state = true;

basic.forever(asteroids);

function asteroids() {
    if (state == true) {
        basic.clearScreen();
        led.plot(baseX, 4);
        led.plot(asteroidX, asteroidY);
        asteroidY++;
        basic.pause(1000);

        if (success == true) {
            basic.showIcon(IconNames.Happy);
            basic.pause(300);
            asteroidX = Math.randomRange(0, 4);
            asteroidY = 0;
            success = false;
        }

        if (asteroidY > 4) {
            basic.showIcon(IconNames.Sad);
            basic.pause(300);
            state = false;
        }
    } else {
        basic.showString("Game Over!");
    }
}

input.onButtonPressed(Button.A, function () {
    baseX--;
    if (baseX < 0) {
        baseX = 4;
    }
})

input.onButtonPressed(Button.B, function () {
    baseX++;
    if (baseX > 4) {
        baseX = 0;
    }
})

input.onButtonPressed(Button.AB, function () {
    for (let missileY = 4; missileY > 0; missileY--) {
        led.plotBrightness(baseX, missileY, 10);

        if (missileY == asteroidY && baseX == asteroidX) {
            basic.pause(200);
            success = true;
        }
    }
})
