class Vehicle {  
    constructor(name, hasWheels) {
        this.hasWheels = hasWheels;
        this.name = name;
    }

    move() {
        console.log(`${this.name} moving`);
    }

    stop() {
        console.log(`${this.name} stopped`);
    }

};

class Ship extends Vehicle {
    constructor (name, speed) {
        super(name, false)
        this.speed = speed;
    }
    startMachine() {
        console.log(`${this.name} 'lifting anchor down'`);
        this.move()
    }
    stopMachine() {
        console.log(`${this.name} 'lifting anchor up'`);
        this.stop();
    }
}

const ship1 = new Ship('Aurora', f17);

console.log(ship1);


// const ship = {
//     name: 'Aurora',
//     hasWheels: false,
    // liftAnchorDown() {
    //     console.log('lifting anchor down');
    // },
    // liftAnchorDown() {
    //     console.log('lifting anchor up');
    // },
// };

// Object.setPrototypeOf(ship, vehicle);