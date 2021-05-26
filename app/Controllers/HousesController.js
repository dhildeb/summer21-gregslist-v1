import { ProxyState } from "../AppState.js";
import { carsService } from "../Services/CarsService.js";
import { housesService } from "../Services/HousesService.js";

export class HousesController {

    constructor() {
        ProxyState.on("houses", this.drawHouses)
    }
    drawHouses() {
        let template = ''

        ProxyState.houses.forEach(h => {
            template += h.template
        })
        document.getElementById("listings").innerHTML = template
        ProxyState.viewPort = "houses"
    }

    addHouse(event) {
        try {
            event.preventDefault()
            let form = event.target
            let formData = {
                imgUrl: form.imgUrl.value,
                price: form.price.value,
                bedrooms: form.bedrooms.value,
                bathrooms: form.bathrooms.value,
                year: form.year.value,
                description: form.description.value,
                levels: form.levels.value
            }
            console.log(formData)
            if (form.houseId.value) {
                formData.id = form.houseId.value
                housesService.updateHouse(formData)
            } else {
                housesService.addHouse(formData)
            }
            form.reset()
        } catch (e) {
            console.log(e.message)
        }
    }
    editHouse(id) {
        let house = ProxyState.houses.find(h => h.id == id)
        let form = document.getElementById("house-form")
        form.imgUrl.value = house.imgUrl
        form.price.value = house.price
        form.bedrooms.value = house.bedrooms
        form.bathrooms.value = house.bathrooms
        form.year.value = house.year
        form.description.value = house.description
        form.levels.value = 1
        form.houseId.value = house.id

        document.getElementById('house-form').classList.toggle('d-none')
        document.getElementById('listings').classList.toggle('d-none')
    }
    deleteHouse(id) {
        try {
            if (confirm("are you sure you want to do this, it cannot be undone?")) {

                housesService.deleteHouse(id)
            }
        } catch (e) {
            console.error(e.message)
        }
    }

}