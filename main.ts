radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
    	
    } else if (receivedNumber == 2) {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    strip.clear()
    vermell = vermell + 1
    strip.setPixelColor(vermell, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    if (vermell == 100) {
        vermell = 0
        strip.show()
    }
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    blau = blau + 1
    if (blau == vermell) {
        for (let index = 0; index <= 100; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
            strip.show()
        }
    }
    strip.setPixelColor(blau, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(vermell, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    if (blau == 100) {
        blau = 0
        strip.show()
    }
})
let blau = 0
let vermell = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 100, NeoPixelMode.RGB)
strip.clear()
vermell = 0
blau = 50
strip.setPixelColor(blau, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(vermell, neopixel.colors(NeoPixelColors.Red))
strip.show()
