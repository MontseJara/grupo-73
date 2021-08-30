input.onButtonPressed(Button.A, function () {
    basic.showNumber(5)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(28)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
})
basic.showString("HELLO")
basic.forever(function () {
    basic.pause(500)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.showIcon(IconNames.Diamond)
})
