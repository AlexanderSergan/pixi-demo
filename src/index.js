import * as PIXI from 'pixi'

import AppModel from './AppModel'
import AppView from './AppView'
import AppController from './AppController'

import DelayTicker from './components/DelayTicker'
import { val } from './components/Constants'

const app = new PIXI.Application(val.APP_WIDTH, val.APP_HEIGHT, { transparent: true })
document.body.appendChild(app.view)

const model = new AppModel(),
      view = new AppView(model),
      ctrl = new AppController(model, view)


let g1 = new PIXI.Graphics()
let g2 = new PIXI.Graphics()

g1.beginFill(0xe74c3c)
 .drawCircle(100, 100, 50)
 .drawCircle(120, 120, 50)
 .endFill()

g2.beginFill(0xe74c3c)
 .drawCircle(300, 100, 50)
 .drawCircle(320, 120, 50)
 .endFill()

app.stage.addChild(g1, g2)



app.ticker.add( delta => view.update(app.stage))
//
// const newShapeTicker = new DelayTicker(10, () => {
//   g2.position.y +=10
// })

// newShapeTicker.start()
