bitbot.select_model(BBModel.Auto)
bitbot.setLedColor(0x00FF00)
let hinder = false
basic.forever(function () {
    if (hinder == false) {
        bitbot.goms(BBDirection.Forward, 80, 12)
        while (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.rotatems(BBRobotDirection.Left, 40, 9)
        }
        while (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.rotatems(BBRobotDirection.Right, 40, 9)
        }
        if (bitbot.sonar(BBPingUnit.Centimeters) < 5) {
            bitbot.stop(BBStopMode.Coast)
            bitbot.setLedColor(0xFF0000)
            hinder = true
        }
    } else if (hinder == true) {
        bitbot.rotatems(BBRobotDirection.Right, 30, 12)
        bitbot.goms(BBDirection.Forward, 30, 12)
        bitbot.rotatems(BBRobotDirection.Left, 30, 12)
        bitbot.goms(BBDirection.Forward, 80, 12)
        while (bitbot.readLine(BBLineSensor.Left) == 1 && bitbot.readLine(BBLineSensor.Right) == 0) {
            bitbot.rotatems(BBRobotDirection.Left, 40, 9)
        }
        while (bitbot.readLine(BBLineSensor.Left) == 0 && bitbot.readLine(BBLineSensor.Right) == 1) {
            bitbot.rotatems(BBRobotDirection.Right, 40, 9)
        }
    }
})
