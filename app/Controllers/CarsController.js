import { ProxyState } from "../AppState.js";
import { carsService } from "../Services/CarsService.js";
import { FormController } from "./FormController.js";

export class CarsController {
    constructor() {
        ProxyState.on('cars', this.drawCars)
        carsService.getCars()
    }
    drawCars() {
        let template = ''
        ProxyState.cars.forEach(car => template += car.template)
        document.getElementById('listings').innerHTML = template
        ProxyState.viewPort = "cars"
    }

    addCar(event) {
        try {
            event.preventDefault()
            let form = event.target
            let formData = {
                make: form.make.value,
                model: form.model.value,
                year: form.year.value,
                price: form.price.value,
                imgUrl: form.imgUrl.value,
                description: form.description.value,
            }
            console.log(event)
            if (form.carId.value) {
                formData.id = form.carId.value
                carsService.updateCar(formData)
            } else {
                carsService.addCar(formData)
            }
            form.reset()
            this.toggleForm()
        } catch (e) {
            console.log(e.message)
        }
    }

    editCar(id) {
        let car = ProxyState.cars.find(c => c.id == id)
        let form = document.getElementById('car-form')
        form.make.value = car.make
        form.model.value = car.model
        form.year.value = car.year
        form.price.value = car.price
        form.imgUrl.value = car.imgUrl
        form.description.value = car.description
        form.carId.value = id

        document.getElementById('car-form').classList.toggle('d-none')
        document.getElementById('listings').classList.toggle('d-none')
    }

    deleteCar(id) {
        try {
            if (window.confirm("are you sure you want to do this, it cannot be undone?")) {
                carsService.deleteCar(id)
            }
        } catch (e) {
            console.error(e.message)
        }
    }
    toggleForm() {

        document.getElementById('fab-form').classList.toggle('d-none')
    }

}