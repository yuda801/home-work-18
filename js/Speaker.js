class Speaker {
    constructor(clr, vlme, id) {
        this._color = clr;
        this._volume = vlme;
        this.id = Math.floor(Math.random() * 58741);
    }
    turnOn() {
        console.log('speaker #' + this.id + ' turned on');
    }
    turnedOff() {
        console.log('speaker #' + this.id + ' turned off');
    }
    makeNoise() {
        console.log('Noise was generated on speaker #' + this.id);
    }
    displayInfo() {
        console.log(this._color);
        console.log(this._volume);
        console.log(this.id);
    }
    set volume(volume) {
        if (volume < 0 || volume > 10) {
            throw new Error("price is out of range");
        }
        this._volume = volume;
    }
    get volume() {
        return this._volume;
    }
    set color(color) {
        if (color === "black" || color === "white" || color === "gray") {
            this._color = color;
        }
        else {
            throw new Error("color is not valid");
        }
    }
    get color() {
        return this._color;
    }
}
