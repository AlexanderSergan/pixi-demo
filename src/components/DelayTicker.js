
 /**
  * @constructor Ticker class with delay in frames
  * @param {number} time - time in ticker calls.
  * @param {string} author - function to invoke.
  */
  export default class DelayTicker extends PIXI.ticker.Ticker {
    constructor(time, fn) {
      super()

      this.time = time
      this.fn = fn
      this.counter = 0

      this.add(d => this.updateCounter())

    }

    updateCounter(val = 1) {
      this.counter +=val
      this.tickHandler()
    }

    resetAndInvoke() {
      this.counter = 0
      this.fn()
    }

    tickHandler() {
      this.time == this.counter && this.resetAndInvoke();
    }
  }
