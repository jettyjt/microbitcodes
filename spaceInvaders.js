let baseX = 2;
let invaderX = Math.randomRange(0, 4);
let invaderY = 0;
let missileY = 3;
let fired = false;
let state = true;

basic.forever(play);

function play() {
    if (state == true) {
        basic.clearScreen();
        led.plot(baseX, 4);
        led.plot(invaderX, invaderY);
        invaderY++;
        basic.pause(1000);

        if (invaderY > 4) {
            state = false;
        }

        if (missileY == invaderY && baseX == invaderX && fired == true) {
            basic.showIcon(IconNames.Happy);
            basic.pause(1000);
            invaderX = Math.randomRange(0, 4);
            invaderY = 0;
            fired = false;
        }
    } else {
        basic.showString("Game Over!");
    }
}

input.onButtonPressed(Button.A, function () {
    if (baseX > 0) {
        baseX--;
    }
})

input.onButtonPressed(Button.B, function () {
    if (baseX < 4) {
        baseX++;
    }
})

input.onButtonPressed(Button.AB, function () {
    fired = true;
    for (let i = 0; i < 4; i++) {
        led.plotBrightness(baseX, missileY, 10);
        missileY--;
    }
    missileY = 3;
})
