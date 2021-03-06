import { val } from './components/Constants'
import ShapeFactory from './components/ShapeFactory'
import Utils from './utils/Utils'
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

    this.AppView.updateLabelsEvent.sub((sender, args) => this.updateShapesArea())
    this.AppView.updateLabelsEvent.sub((sender, args) => this.updateShapesCount())

  }


  addGeneratedShape() {
    this.AppModel.app.stage.addChild(
      this.addClickListener(
        ShapeFactory.generateSprite(ShapeFactory.getRandomShape())
      )
    )
  }

  updateShapesCount() {
    this.AppModel.shapesCount = this.AppModel.app.stage.children.length -1
  }

  updateShapesArea() {
    this.AppModel.shapesArea = Utils.getAlphaArea(this.AppModel.app.renderer, this.AppModel.app.stage)
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

  addClickListener(sprite) {
    sprite.on('click', e=> {

      let colorMatrix = new PIXI.filters.ColorMatrixFilter();

      this.AppModel.app.stage.children.map(child => {
        if (child.shapeType == sprite.shapeType) {

            if (!child.filters){
              child.filters = [colorMatrix]
              colorMatrix.kodachrome(true)
            } else {
              child.filters = []
            }
        }

      })

      sprite.destroy()
      })
      return sprite

  }
}
