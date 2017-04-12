import Observable from './components/Observable'

/**
* AppView class
* @param {class} model - AppModel class.
*/
export default class AppViewClass {
  constructor(AppModel, ui) {
    this.AppModel = AppModel

    //Observer Events
    this.gravityButtonClicked = new Observable(this)

    // Subscriptions
    this.gravityButtonClicked.sub((sender, args) => this.updateGravityLabel() )


    //Html elements & events
    this.gravityButtonAddEl = document.getElementById('gravity-increase')
    this.gravityLabel = document.getElementById('gravity-label')

    this.gravityButtonAddEl.addEventListener('click',
      e => this.gravityButtonClicked.fire() )

    this.initLabels()
  }

  initLabels() {
    this.updateGravityLabel()
  }

  updateGravityLabel() {
    this.gravityLabel.textContent = `gravity value is: ${this.AppModel.gravityValue}`
  }




  /**
   * update - Main AppView loop
   *
   * @param  {Object} stage to update
   */
  update(stage) {
    stage.children.map(child => child.position.y > 600 ? child.destroy() : child.position.y += this.AppModel.gravityValue)
  }
}
