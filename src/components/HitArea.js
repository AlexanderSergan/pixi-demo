import * as PIXI from 'pixi'
import ShapeFactory from './ShapeFactory'
import { val } from './Constants.js'
import Utils from '../utils/Utils'



export default class HitArea {
  constructor() {
  }

  static initHitArea(app) {
    let hitArea = new PIXI.Graphics()
    hitArea.beginFill(Utils.getRandomColor())
    hitArea.drawRect(0, 0, val.APP_WIDTH, val.APP_HEIGHT)
    hitArea.endFill()

    hitArea.interactive = true
    hitArea.alpha = 0
    hitArea.on('click', e => this.clickHandler(e, app))

    app.stage.addChildAt(hitArea, 0)
    console.log('hitarea inited');
  }

  static clickHandler(e, app) {

    console.log('asdf');
     var point = e.data.getLocalPosition(app.stage)

     app.stage.addChild(ShapeFactory.generateSprite(ShapeFactory.getRandomShape(), point.x, point.y))
  }

}
