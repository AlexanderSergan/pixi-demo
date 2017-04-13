import * as PIXI from 'pixi'
import Utils from '../utils/Utils'


/**
 * Shape class
 * @param { String } shapeType - type of the shape
 */
export default class Shape extends PIXI.Graphics {

  constructor(shapeType) {
    super()

    this.interactive = true
    this.shapeType = shapeType

  }

  shapeClickHandler(e) {
  }

}
