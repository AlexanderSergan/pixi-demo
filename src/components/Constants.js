class Values {
  constructor() {
    this.APP_WIDTH = 800
    this.APP_HEIGHT = 600

    this.GRAVITY_VALUE_DEFAULT = 2
    this.GRAVITY_VALUE_STEP = 1
    this.GRAVITY_VALUE_MAX = 40
    this.GRAVITY_VALUE_MIN = 1

    this.SHAPES_PER_SEC_DEFAULT = 2
    this.SHAPES_PER_SEC_STEP = 1
    this.SHAPES_PER_SEC_MAX = 50
    this.SHAPES_PER_SEC_MIN = 0

  }

}

class UI {
  constructor() {

      this.btn = {
        gravityValue: {
          incr: 'gravity-incr',
          decr: 'gravity-decr'
        },
        shapesPerSec: {
          incr: 'shapes-incr',
          decr: 'shapes-decr'
        }
      }

      this.labels = {
        gravityValue: 'gravity-label',
        shapesArea: 'shapes-area',
        shapesCount: 'shapes-count',
        shapesPerSec: 'shapes-persec'
      }

    }
  }


export const val = new Values()
export const ui = new UI()
