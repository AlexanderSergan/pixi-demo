 /**
  * Ticker class with delay in frames
  * @extends PIXI.ticker.Ticker
  */
  export default class DelayTicker extends PIXI.ticker.Ticker {
    /**
    * @param {number} time - time in ticker calls.
    * @param {function} fn - function to invoke.
    */
    constructor(time, fn) {
      super()

      this.time = time.toFixed()
      this.fn = fn
      this.counter = 0

      this.add(d => this.updateCounter())

    }

    updateDelay(val) {
      this.counter = 0
      this.time = val.toFixed()
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
