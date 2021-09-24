bitbot.select_model(BBModel.XL)
bitbot.setLedColor(0x00FF00)
let hinder = false
basic.forever(function () {
    if (hinder == false) {
        bitbot.setLedColor(0x00FF00)
        bitbot.goms(BBDirection.Forward, 100, 20)
        while (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.rotatems(BBRobotDirection.Left, 60, 9)
        }
        while (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.rotatems(BBRobotDirection.Right, 60, 9)
        }
        if (bitbot.sonar(BBPingUnit.Centimeters) < 5) {
            bitbot.stop(BBStopMode.Coast)
            bitbot.setLedColor(0xFF0000)
            basic.pause(2000)
            hinder = true
        }
    } else if (hinder == true) {
        bitbot.rotatems(BBRobotDirection.Right, 40, 700)
        bitbot.goms(BBDirection.Forward, 40, 700)
        bitbot.rotatems(BBRobotDirection.Left, 40, 700)
        bitbot.goms(BBDirection.Forward, 100, 20)
        hinder = false
        bitbot.rotatems(BBRobotDirection.Left, 40, 700)
    }
})
