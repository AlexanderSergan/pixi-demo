import * as PIXI from 'pixi'
import DelayTicker from './DelayTicker'

const app = new PIXI.Application(800, 600, { transparent: true })
document.body.appendChild(app.view)

// Delay ticker test 

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



const GravityFactor = 1


app.ticker.add( delta => g1.position.y += GravityFactor )

const newShapeTicker = new DelayTicker(10, () => {
  g2.position.y +=10
})

newShapeTicker.start()
