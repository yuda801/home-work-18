
class Speaker {
    private _color: string
    private _volume: number
    id?: number

    constructor(
        clr: string,
        vlme: number,
        id?: number
    ) {
        this._color = clr;
        this._volume = vlme
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


    public set volume(volume: number) {
        if (volume < 0 || volume > 10) {
            throw new Error("price is out of range");
        }
        this._volume = volume;
    }

    public get volume(): number {
        return this._volume;
    }


    public set color(color: string) {
        if (color === "black" || color === "white" || color === "gray") {
            this._color = color;
        }
        else {
            throw new Error("color is not valid");
        }
    }

    public get color(): string {
        return this._color;
    }

}
