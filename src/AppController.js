/**
* @constructor AppController class
* @param {class} model - AppModel class.
*/
export default class AppController {
  constructor(AppModel, AppView) {
    this.AppModel = AppModel
    this.AppView = AppView

    this.AppView.gravityButtonClicked.sub((sender, args) => this.increaseGravityCtrl())

  }

  increaseGravityCtrl() {
    /**
     *     validation and logic
     */


    this.AppModel.increaseGravity()
  }
}
