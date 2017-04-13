import Observable from './components/Observable'
import { val, ui } from './components/Constants'
import DelayTicker from './components/DelayTicker'
import HitArea from './components/HitArea'

/**
* AppView class
* @param {class} model - AppModel class.
*/
export default class AppViewClass {
  constructor(AppModel) {
    this.AppModel = AppModel

    HitArea.initHitArea(this.AppModel.app)

    //Observer Events
    this.gravityButtonIncrClicked = new Observable(this)
    this.gravityButtonDecrClicked = new Observable(this)
    this.shapesButtonIncrClicked = new Observable(this)
    this.shapesButtonDecrClicked = new Observable(this)
    this.addRandomShapeEvent = new Observable(this)
    this.updateLabelsEvent = new Observable(this)

    // Subscriptions
    this.gravityButtonIncrClicked.sub((sender, args) => this.updateGravityLabel() )
    this.gravityButtonDecrClicked.sub((sender, args) => this.updateGravityLabel() )
    this.shapesButtonIncrClicked.sub((sender, args) => this.updateShapesPerSecLabel() )
    this.shapesButtonDecrClicked.sub((sender, args) => this.updateShapesPerSecLabel() )
    this.updateLabelsEvent.sub((sender, args) => this.updateShapesArea())
    this.updateLabelsEvent.sub((sender, args) => this.updateShapesCount())


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

    this.labelsUpdateTicker = new DelayTicker(30, ()=> {
      this.updateLabelsEvent.fire()
    })
    this.labelsUpdateTicker.start()

    this.initLabels()
  }

  initLabels() {
    this.updateGravityLabel()
    this.updateShapesPerSecLabel()
    this.updateShapesArea()
    this.updateShapesCount()
  }

  updateGravityLabel() {
    this.gravityLabel.textContent = `Gravity value: ${this.AppModel.gravityValue}`
  }

  updateShapesPerSecLabel() {
    this.shapesPerSecLabel.textContent = `Shapes per second: ${this.AppModel.shapesPerSec}`
    this.newShapeTicker.updateDelay(60/this.AppModel.shapesPerSec)
  }

  updateShapesArea() {
    this.shapesAreaLabel.textContent = `Shapes area: ${this.AppModel.shapesArea}px`
  }

  updateShapesCount() {
    this.shapesCountLabel.textContent = `Shapes count: ${this.AppModel.shapesCount}`
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
    stage.children.map((child, i) => {
      if (i !== 0)
       child.position.y > val.APP_HEIGHT+child.height/2 ? child.destroy() : child.position.y += this.AppModel.gravityValue
    })

  }
}
