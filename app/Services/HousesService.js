import { ProxyState } from "../AppState.js"
import { House } from "../Models/House.js"
class HousesService {
  addHouse(formData) {
    let newHouse = new House(formData.price, formData.bedrooms, formData.bathrooms, formData.sqft, formData.address, formData.img)

    ProxyState.houses = [newHouse, ...ProxyState.houses]
  }
}

export const housesService = new HousesService()