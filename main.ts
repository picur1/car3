radio.onReceivedValue(function (name, value) {
    if (name == "N") {
        RingbitCar.running_distance(RingbitCar.Direction_run.backward, value)
    }
    if (name == "R") {
        RingbitCar.steering_angle(RingbitCar.Direction_turn.left, value)
    }
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
radio.setGroup(1)
basic.forever(function () {
	
})
