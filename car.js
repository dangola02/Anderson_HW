
class Car {

    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;


    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume,
        fuelConsumption, currentFuelVolume = 0, isStarted = false, mileage = 0
    ) {
        this.#brand = brand;
        this.#model = model;
        this.#yearOfManufacturing = yearOfManufacturing;
        this.#maxSpeed = maxSpeed;
        this.#maxFuelVolume = maxFuelVolume;
        this.#fuelConsumption = fuelConsumption;
        this.#currentFuelVolume = currentFuelVolume;
        this.#isStarted = isStarted;
        this.#mileage = mileage;
    }


    get brand() {
        return this.#brand;
    }

    get model() {
        return this.#model;
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    set brand(name) {

        if (typeof (name) !== typeof ("Hello")) {

            throw new Error("Brand name not a String");
        }

        if (name.length <= 50 && 1 <= name.length) {

            this.#brand = name;

        } else {
            throw new Error("Brand name is > 50 or 1>");
        }
    }

    set model(name) {

        if (typeof (name) !== typeof ("Hello")) {

            throw new Error("model name not a String");
        }

        if (name.length <= 50 && 1 <= name.length) {  // 1<

            this.#model = name;

        } else {
            throw new Error("model name is > 50 or 1>");
        }
    }

    set yearOfManufacturing(year) {

        if (typeof (year) !== typeof (6) || year === Infinity ||
            year === -Infinity || year === 0 || isNaN(year) === isNaN(NaN)) {

            throw new Error("Your year is invalid");
        }

        if (year <= 2022 && 1900 <= year) {

            this.#yearOfManufacturing = year;
        } else {
            throw new Error("Year is <1900 or >2022")
        }

    }

    set maxSpeed(speed) {
        if (typeof (speed) !== typeof (6) || speed === Infinity ||
            speed === -Infinity || speed === 0 || isNaN(speed) === isNaN(NaN)) {

            throw new Error("Your Speed is invalid");
        }

        if (speed <= 300 && 100 <= speed) {

            this.#maxSpeed = speed;

        } else {
            throw new Error("Speed is <100 or >300")
        }
    }

    set maxFuelVolume(volume) {

        if (typeof (volume) !== typeof (6) || volume === Infinity ||
            volume === -Infinity || volume === 0 || isNaN(volume) === isNaN(NaN)) {

            throw new Error("Your volume is invalid");
        }

        if (volume <= 20 && 5 <= volume) {
            this.#maxFuelVolume = volume;

        } else {
            throw new Error("volume is <5 or >20")
        }
    }

    set fuelConsumption(fuel) {

        if (typeof (fuel) !== typeof (6) || fuel === Infinity ||
            fuel === -Infinity || fuel === 0 || isNaN(fuel) === isNaN(NaN)) {

            throw new Error("Your fuel is invalid");
        }

        this.#fuelConsumption = fuel / 100;
    }


    start() {

        if (this.#isStarted) {
            throw new Error('Машина уже заведена')
        }

        this.#isStarted = true;
    }

    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error('Машина ещё не заведена')
        }

        this.#isStarted = false;
    }


    fillUpGasTank(liters) {

        if (typeof (liters) !== typeof (6) || liters === Infinity ||
            liters === -Infinity || isNaN(liters) === isNaN(NaN)) {

            throw new Error('Неверное количество топлива для заправки');
        }

        if (liters <= 0) {

            throw new Error('Неверное количество топлива для заправки');
        }

        if (liters + this.#currentFuelVolume > this.#maxFuelVolume) {

            throw new Error('Топливный бак переполнен');
        }

        this.#currentFuelVolume += liters;
    }


    drive(speed, hours) {

        let consume = ((speed * hours) / 100) * this.#fuelConsumption

        if (typeof (speed) !== typeof (6) || speed === Infinity ||
            speed === -Infinity || isNaN(speed) === isNaN(NaN)) {

            throw new Error('Неверная скорость');
        }

        if (speed <= 0) {

            throw new Error('Неверная скорость');

        } else if (speed > this.#maxSpeed) {

            throw new Error('Машина не может ехать так быстро');

        }

        if (typeof (hours) !== typeof (6) || hours === Infinity ||
            hours === -Infinity || isNaN(hours) === isNaN(NaN)) {

            throw new Error('Неверное количество часов');
        }

        if (hours <= 0) {
            throw new Error('Неверное количество часов');
        }

        if (!this.#isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        }

        if (this.#currentFuelVolume <= 0 || this.#currentFuelVolume - consume <= 0) {
            throw new Error('Недостаточно топлива');
        }

        this.#mileage = this.#mileage + (speed * hours);

        this.#currentFuelVolume = this.#currentFuelVolume - consume;

    }
}
module.exports = { Car };
