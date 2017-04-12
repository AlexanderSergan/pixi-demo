import { val } from './components/Constants'
/**
* @constructor AppModel class
* @param {Object} data - data to initialize
*/
export default class AppModel {
  constructor(gravityValue = 2, shapesPerSec = 2) {

    this.gravityValue = gravityValue
    this.shapesPerSec = shapesPerSec
    this.shapesArea = 0
    this.shapesCount = 0

  }




  increaseGravity() {
    this.gravityValue += val.GRAVITY_VALUE_STEP
  }

  decreaseGravity() {
    this.gravityValue -= val.GRAVITY_VALUE_STEP
  }


  addShapePerSec() {
    this.shapesPerSec += val.SHAPES_PER_SEC_STEP
  }

  removeShapePerSec() {
    this.shapesPerSec -= val.SHAPES_PER_SEC_STEP
  }

}
