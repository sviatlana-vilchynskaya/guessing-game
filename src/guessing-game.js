class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.curentMin = min;
    this.currentMax = max;
  }

  guess() {
    this.estimatedNumber = Math.ceil(
      (this.currentMax - this.curentMin) / 2 + this.curentMin
    );
    return this.estimatedNumber;
  }

  lower() {
    this.currentMax = this.estimatedNumber;
  }

  greater() {
    this.curentMin = this.estimatedNumber;
  }
}

module.exports = GuessingGame;
