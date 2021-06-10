let stralucire = 0
let nota = 0
let cp = 0
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    cp = pins.analogReadPin(AnalogPin.P1)
    nota = Math.map(cp, 3, 1023, 131, 988)
    music.ringTone(nota)
    stralucire = pins.analogReadPin(AnalogPin.P1)
    led.setBrightness(stralucire)
})
