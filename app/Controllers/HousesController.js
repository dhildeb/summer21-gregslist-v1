import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";

export class HousesController {
    constructor() {
        ProxyState.on('houses', this.drawHouses)
    }

    drawHouses() {
        let template = ''

        ProxyState.houses.forEach(house => {
            template += `
            <div class="col-4 listing mt-3">
                <div class="card">
                    <img src="${house.img}" />
                        <div class="card-body">
                            <h1>$${house.price}</h1>
                            <b>bds: ${house.bedrooms} - bths: ${house.bathrooms}</b>
                            <p> sqft: ${house.sqft}</p>
                            <em>address: ${house.address}</em>
                        </div>
                </div>
            
            </div>
            `
        })
        document.getElementById("listings").innerHTML = template
        ProxyState.viewPort = "houses"
    }

    addHouse(event) {
        event.preventDefault()
        let form = event.target
        let formData = {
            img: form.img.value,
            price: form.price.value,
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            sqft: form.sqft.value,
            address: form.address.value
        }
        housesService.addHouse(formData)
        form.reset()
    }

}