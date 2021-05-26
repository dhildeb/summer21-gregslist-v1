import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";

let url = 'https://bcw-sandbox.herokuapp.com/api/cars/'
class CarsService {

    async getCars() {
        let res = await axios.get(url)
        ProxyState.cars = res.data.map(c => new Car(c))
    }
    async addCar(formData) {
        let res = await axios.post(url, formData)
        let newCar = new Car(res.data)
        // ProxyState.cars.unshift(newCar)
        // TODO research the spread ... operator
        ProxyState.cars = [newCar, ...ProxyState.cars]
    }

    async updateCar(formData) {
        let res = await axios.put(url + formData.id, formData)
        let i = ProxyState.cars.indexOf(formData.id)
        ProxyState.cars.splice(i, 1, new Car(res.data))
        ProxyState.cars = ProxyState.cars
    }

    async deleteCar(id) {
        await axios.delete(url + id)
        ProxyState.cars = ProxyState.cars.filter(c => c.id != id)
    }


}

// NOTE singleton
export const carsService = new CarsService()