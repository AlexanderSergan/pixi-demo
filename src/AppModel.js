/**
* @constructor AppModel class
* @param {Object} data - data to initialize
*/
export default class AppModel {
  constructor(gravityValue = 2) {

    this.gravityValue = gravityValue

  }

  increaseGravity() {
    this.gravityValue += 5
  }

}
