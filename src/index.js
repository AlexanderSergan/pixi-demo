import * as PIXI from 'pixi'

const app = new PIXI.Application(800, 600, { transparent: true })
document.body.appendChild(app.view)


let g = new PIXI.Graphics()

g.beginFill(0xe74c3c)
 .drawCircle(100, 100, 50)
 .drawCircle(120, 120, 50)
 .endFill()

app.stage.addChild(g)

const GravityFactor = 1

app.ticker.add( delta => g.position.y += GravityFactor)
