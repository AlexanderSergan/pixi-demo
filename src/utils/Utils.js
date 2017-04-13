import { val } from '../components/Constants.js'


/**
 * Utils class
 */
export default class Utils {

  /**
   * @static getRandomX
   *
   * @return {number} returns random integer from 0 to width of the app
   */
  static getRandomX() {
    return this.getRandomInt(0, val.APP_WIDTH)
  }


  /**
   * @static getRandomInt - returns random integer from range
   *
   * @param  {number} min
   * @param  {number} max
   * @return {number} random integer from min to max
   */
  static getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * @static getRandomColor - returns random hex color
   *
   * @return {type}  description
   */
  static getRandomColor() {
    let arr = []
    for (let i = 0; i < 3; i++) {
      arr.push(this.getRandomInt(0, 255))
    }
    return this.rgb2hex(arr)
  }

  /**
   * @static rgb2hex - rgb to hex converter
   *
   * @param  {Array} rgb - array with rgb values
   * @return {type} hex code
   */
  static rgb2hex(rgb) {
    return ((rgb[0]*255 << 16) + (rgb[1]*255 << 8) + rgb[2]*255);
  }


  /**
   * @static getAlphaArea - counts alpha pixels of PIXI app
   *
   * @param  {Object} renderer - pixi.js renderer instance
   * @param  {Object} stage - pixi.js container instance
   * @return {number} - alpha pixels count
   */
  static getAlphaArea(renderer, stage) {
      var alphaPixels = 0;
      let data = renderer.extract.pixels(stage)
      for(var i=0; i<data.length; i++) {
        if(data[i] > 0) alphaPixels++;
      }
      data = null
      return  alphaPixels;
    }

}
