
/**
 * Class Observable - fires subscribed listeners 
 */
export default class Observable {
  constructor(sender) {

    this.sender = sender
    this.listeners = []
  }

  sub(listener) {
      this.listeners.push(listener)
  }

  fire(args) {
      this.listeners.map( l => l(this.sender, args) )
  }

}
