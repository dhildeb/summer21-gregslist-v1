import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [
    new Car("Honda", "Accord", 10000, "rusty", 500, "//placehold.it/500x500")
  ]

  /** @type {House[]} */
  houses = [
    new House(1000000, 5, 4, 2500, "boise", "//placehold.it/500x500")
  ]

  jobs = [
    new Job("executioner", "nearby", "beheader inc.", 25, true, "if you can hold an axe and swing it you could change lives, into deaths.")
  ]

  viewPort = "cars"
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
