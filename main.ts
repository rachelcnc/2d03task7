input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    led.setBrightness(input.lightLevel())
})
basic.forever(function () {
    led.setBrightness(255 - input.lightLevel())
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
