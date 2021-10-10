input.onButtonPressed(Button.A, function () {
    if (Clock > 59) {
        Clock = 0
        Minutes += 1
    } else if (Minutes == 60) {
        Hours += 1
        Minutes = 0
    } else if (Hours == 24) {
        Day += 1
        Hours = 0
    } else if (Day < 31) {
        Month += 1
        Day = 0
    } else if (Month <= 13) {
        Month = 0
        Year += 1
    }
    basic.showString("" + Hours + ":" + Minutes + ":" + Clock)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + Year + "/" + Month + "/" + Day)
})
let Hours = 0
let Day = 0
let Month = 0
let Year = 0
let Minutes = 0
let Clock = 0
Clock = 0
Minutes = 59
Year = 2021
Month = 12
Hours=23
Day = 30
basic.forever(function () {
    Clock += 1
})
