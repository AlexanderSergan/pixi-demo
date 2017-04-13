import Observable from './components/Observable'
import { val, ui } from './components/Constants'
import DelayTicker from './components/DelayTicker'

/**
* AppView class
* @param {class} model - AppModel class.
*/
export default class AppViewClass {
  constructor(AppModel) {
    this.AppModel = AppModel

    //Observer Events
    this.gravityButtonIncrClicked = new Observable(this)
    this.gravityButtonDecrClicked = new Observable(this)
    this.shapesButtonIncrClicked = new Observable(this)
    this.shapesButtonDecrClicked = new Observable(this)
    this.addRandomShapeEvent = new Observable(this)

    // Subscriptions
    this.gravityButtonIncrClicked.sub((sender, args) => this.updateGravityLabel() )
    this.gravityButtonDecrClicked.sub((sender, args) => this.updateGravityLabel() )
    this.shapesButtonIncrClicked.sub((sender, args) => this.updateShapesPerSecLabel() )
    this.shapesButtonDecrClicked.sub((sender, args) => this.updateShapesPerSecLabel() )


    //Html elements & events
    this.btnGravityIncrEl = document.getElementById(ui.btn.gravityValue.incr)
    this.btnGravityDecrEl = document.getElementById(ui.btn.gravityValue.decr)
    this.btnShapesIncrEl = document.getElementById(ui.btn.shapesPerSec.incr)
    this.btnShapesDecrEl = document.getElementById(ui.btn.shapesPerSec.decr)

    this.shapesAreaLabel = document.getElementById(ui.labels.shapesArea)
    this.shapesCountLabel = document.getElementById(ui.labels.shapesCount)


    this.btnGravityIncrEl.addEventListener('click',
    e => this.gravityButtonIncrClicked.fire() )
    this.btnGravityDecrEl.addEventListener('click',
    e => this.gravityButtonDecrClicked.fire() )

    this.btnShapesIncrEl.addEventListener('click',
    e => this.shapesButtonIncrClicked.fire() )
    this.btnShapesDecrEl.addEventListener('click',
    e => this.shapesButtonDecrClicked.fire() )


    this.gravityLabel = document.getElementById(ui.labels.gravityValue)
    this.shapesPerSecLabel = document.getElementById(ui.labels.shapesPerSec)
    this.shapesCountLabel = document.getElementById(ui.labels.shapesCount)
    this.shapesAreaLabel = document.getElementById(ui.labels.shapesArea)

    this.newShapeTicker = new DelayTicker(60, ()=>{
      this.addRandomShape()
    })
    this.newShapeTicker.start()

    this.initLabels()
  }

  initLabels() {
    this.updateGravityLabel()
    this.updateShapesPerSecLabel()
    this.updateShapesArea()
    this.updateShapesCount()
  }

  updateGravityLabel() {
    this.gravityLabel.textContent = `gravity value is: ${this.AppModel.gravityValue}`
  }

  updateShapesPerSecLabel() {
    this.shapesPerSecLabel.textContent = `shapes per second: ${this.AppModel.shapesPerSec}`
    this.newShapeTicker.updateDelay(60/this.AppModel.shapesPerSec)
  }

  updateShapesArea() {
    this.shapesAreaLabel.textContent = `shapes area: ${this.AppModel.shapesArea}px`
  }

  updateShapesCount() {
    this.shapesCountLabel.textContent = `shapes count: ${this.AppModel.shapesCount}`
  }


  addRandomShape() {
    this.addRandomShapeEvent.fire()

  }




  /**
   * update - Main AppView loop
   *
   * @param  {Object} stage to update
   */
  update(stage) {
    stage.children.map(child => child.position.y > val.APP_HEIGHT+child.height/2 ? child.destroy() : child.position.y += this.AppModel.gravityValue)
  }
}
