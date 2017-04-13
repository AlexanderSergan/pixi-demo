import * as PIXI from 'pixi'

import AppModel from './AppModel'
import AppView from './AppView'
import AppController from './AppController'

import { val } from './components/Constants'

const app = new PIXI.Application(val.APP_WIDTH, val.APP_HEIGHT, { transparent: true })
document.body.appendChild(app.view)

const model = new AppModel(app),
      view = new AppView(model),
      ctrl = new AppController(model, view)


/**
 * Main update loop
 */
app.ticker.add( delta => view.update(app.stage))
