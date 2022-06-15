// own props

const vehicle = {
    move() {
        console.log(`${this.name} moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    }
};

const ship = {
    name: 'Aurora',
    hasWheels: false,
    liftAnchorDown() {
        console.log('lifting anchor down');
    },
    liftAnchorDown() {
        console.log('lifting anchor up');
    },
};

Object.setPrototypeOf(ship, vehicle);

ship.move();