led.setBrightness(190)
basic.forever(function () {
    led.plot(randint(0, 4), randint(0, 4))
    led.unplot(randint(0, 4), randint(0, 4))
})
