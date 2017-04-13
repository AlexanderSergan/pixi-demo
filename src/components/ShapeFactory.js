import * as PIXI from 'pixi'
import Utils from '../utils/Utils'
import { val } from './Constants.js'
import Shape from './Shape'


/**
 * @constructor Shape factory class
 */
export default class ShapeFactory {
  static  getRandomShape(x, y) {
    let methods = [
      this.getCircle,
      this.getEllipse,
      this.getPoly,
      this.getCurve
    ]
    return methods[Utils.getRandomInt(0,methods.length-1)](x, y)
  }

  static getCircle(x, y) {
    let graphics = new Shape(val.SHAPE_TYPES[0])
    let radius = Utils.getRandomInt(20 , 100)

    graphics.beginFill(Utils.getRandomColor())
    graphics.drawCircle( x || Utils.getRandomX(), y || -radius, radius)
    graphics.endFill()

    return graphics

  }

  static getEllipse(x, y) {
    let graphics = new Shape(val.SHAPE_TYPES[1])
    let halfWidth = Utils.getRandomInt(20, 50)
    let halfHeight = Utils.getRandomInt(10, 40)

    graphics.beginFill(Utils.getRandomColor())
    graphics.drawEllipse( x || Utils.getRandomX(), y || -halfHeight*2, halfWidth, halfHeight) //x, y, w, h
    graphics.endFill()

    return graphics
  }

  static getPoly(x = 0, y = 0) {
    let sidesCount = Utils.getRandomInt(3, 6),
        size = Utils.getRandomInt(30, 70),
        Xcenter = x ,
        Ycenter = y ;

    let graphics = new Shape(val.SHAPE_TYPES[2])
    graphics.shapeType +='.'+sidesCount
    graphics.beginFill(Utils.getRandomColor())

    let coords = []

    for (let i = 1; i<= sidesCount; i+=1) {
      coords.push(Xcenter + size * Math.cos(i * 2 * Math.PI / sidesCount))
      coords.push(Ycenter + size * Math.sin(i * 2 * Math.PI / sidesCount))
    }

    graphics.drawPolygon(coords)
    graphics.endFill()

    return graphics
  }

  static getCurve(x = 0, y = 0) {
    let graphics = new Shape(val.SHAPE_TYPES[3])
    let circlesCount = Utils.getRandomInt(3, 5)
    let coords = []

    for (let i = 0; i<= circlesCount; i++) {
        coords.push(x += Utils.getRandomInt(-30, 30))
        coords.push(y += Utils.getRandomInt(-30, 30))
        coords.push(Utils.getRandomInt(30, 50))
    }

    graphics.beginFill(Utils.getRandomColor())
    for (let i = 0; i < coords.length; i+=3) {
      graphics.drawCircle(coords[i], coords[i+1], coords[i+2])
    }
    graphics.endFill()

    return graphics
  }

   static generateSprite(graphics, x=0, y=0) {
    let sprite = new PIXI.Sprite(new PIXI.Texture(graphics.generateCanvasTexture(1, 1)))
    sprite.shapeType = graphics.shapeType

    sprite.anchor = {x: 0.5, y: 0.5}
    if (sprite.shapeType !== 'CIRCLE'){
        sprite.rotation = Utils.getRandomInt(0, 10)/10
        sprite.skew.x = Utils.getRandomInt(0, 4)/10
        sprite.skew.y = Utils.getRandomInt(0, 4)/10
    }

    sprite.position.x = x==0 ? Utils.getRandomX() : x
    sprite.position.y = y || -sprite.height/2

    sprite.interactive = true

    return sprite

  }


}
