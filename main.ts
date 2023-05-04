input.onButtonPressed(Button.A, function () {
    xTeclaActual = "" + xTeclaActual + "A"
    basic.showLeds(`
        . # # . .
        # . . # .
        # . . # .
        # # # # .
        # . . # .
        `)
    serial.writeLine(xTeclaActual)
})
input.onButtonPressed(Button.AB, function () {
    if (xTeclaActual == xSolució) {
        basic.showString("Clau correcta: " + xSolució)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    xTeclaActual = "" + xTeclaActual + "B"
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    serial.writeLine(xTeclaActual)
})
let xTeclaActual = ""
let xSolució = ""
let xSecret = 3791
xSolució = "BBABAA"
xTeclaActual = ""
basic.showIcon(IconNames.Yes)
