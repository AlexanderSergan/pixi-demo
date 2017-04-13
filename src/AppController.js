import { val } from './components/Constants'
import ShapeFactory from './components/ShapeFactory'
/**
* @constructor AppController class
* @param {class} model - AppModel class.
* @param {class} view - AppView class.
*/
export default class AppController {
  constructor(AppModel, AppView) {
    this.AppModel = AppModel
    this.AppView = AppView

    //subscribes
    this.AppView.gravityButtonIncrClicked.sub((sender, args) => this.increaseGravity())
    this.AppView.gravityButtonDecrClicked.sub((sender, args) => this.decreaseGravity())
    this.AppView.shapesButtonIncrClicked.sub((sender, args) => this.addShapePerSec())
    this.AppView.shapesButtonDecrClicked.sub((sender, args) => this.removeShapePerSec())

    this.AppView.addRandomShapeEvent.sub((sender, args) => this.addGeneratedShape())

  }


  addGeneratedShape() {
    this.AppModel.app.stage.addChild(
      ShapeFactory.generateSprite(
        ShapeFactory.getRandomShape()
    )
  )
  }


  increaseGravity() {
    if (this.AppModel.gravityValue + val.GRAVITY_VALUE_STEP <= val.GRAVITY_VALUE_MAX)
      this.AppModel.increaseGravity()
  }

  decreaseGravity() {
    if (this.AppModel.gravityValue - val.GRAVITY_VALUE_STEP >= val.GRAVITY_VALUE_MIN )
      this.AppModel.decreaseGravity()
  }

  addShapePerSec() {
    if (this.AppModel.shapesPerSec + val.SHAPES_PER_SEC_STEP <= val.SHAPES_PER_SEC_MAX)
      this.AppModel.addShapePerSec()
  }
  removeShapePerSec() {
    if (this.AppModel.shapesPerSec - val.SHAPES_PER_SEC_STEP >= val.SHAPES_PER_SEC_MIN)
      this.AppModel.removeShapePerSec()
  }
}
