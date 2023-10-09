class MyDevice {
    constructor(name) {
        this.name = name;
    }
}

class ElectricDevice extends MyDevice {
    constructor(name, power, electric, poweron) {
        super(name);
        this.power = power;
        this.electric = electric;
        this.poweron = poweron;
        this.showPower = function () {
            console.log(power)
        }
    }
    DeviceWork() {
        // some code
    }
    deviceSwitching() {
        // some code
    }
}

class AccumCharger extends ElectricDevice {
    constructor(name, power, electric, poweron, voltage, amperage ) {
        super(name, power, electric, poweron);
        this.voltage = voltage;
        this.amperage = amperage;
        this.showPower = function () {
            console.log(power)
        }
    }
}