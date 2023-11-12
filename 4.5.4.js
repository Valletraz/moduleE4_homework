// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
//     Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
//     У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от
//     родительских методов.
//     Создать экземпляры каждого прибора.
//     Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.


// Переписать консольное приложение из предыдущего юнита на классы.

const devicesOn = new Map();
let powerConsumptionTotal = 0

function powerCheck() {
    for (let value of devicesOn.values()) {
        powerConsumptionTotal += value
    }
    return console.log(powerConsumptionTotal)
}


class Device {
    constructor(name) {
        this.name = name;
    }

    turn(isOn, powerC) {
        if (isOn === 'on') {
            isOn = 'On'
            devicesOn.set(this.name, powerC)
        }
        if (isOn === 'off') {
            isOn = 'Off'
            devicesOn.set(this.name, 0)
        }
    }
}

//
// function Device(name) {
//     this.name = name
// }
//
// Device.prototype.turn = function (isOn, name, powerC) {
//     if (isOn === 'on') {
//         this.isOn = 'On'
//         devicesOn.set(name, powerC)
//     }
//     if (isOn === 'off') {
//         this.isOn = 'Off'
//         devicesOn.set(name, 0)
//     }
// }

class Lamp extends Device {
    constructor(name, type, powerConsumption, color) {
        super(name);
        this.type = type;
        this.powerConsumption = powerConsumption;
        this.color = color
    }
}

class Desktop extends Device {
    constructor(name, type, powerConsumption, screenSize) {
        super(name);
        this.type = type;
        this.powerConsumption = powerConsumption;
        this.screenSize = screenSize
    }
}

// function Lamp(name, type, powerConsumption, color) {
//     this.name = name,
//         this.type = type,
//         this.powerConsumption = powerConsumption,
//         this.color = color
// }
//
// Lamp.prototype = new Device()

// function Desktop(name, type, powerConsumption, screenSize) {
//     this.name = name,
//         this.type = type,
//         this.powerConsumption = powerConsumption,
//         this.screenSize = screenSize
// }
//
// Desktop.prototype = new Device()

const lampDesk = new Lamp('Lamp at living room', 'wall lamp', 300, 'red');
const huawei = new Desktop('My working laptop', 'laptop', 500, '17 inches')


lampDesk.turn('on', lampDesk.powerConsumption)
// lampDesk.turn('off', lampDesk.powerConsumption)
huawei.turn('on', huawei.powerConsumption)
// console.log(lampDesk)
powerCheck()










