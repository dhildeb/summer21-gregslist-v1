export class Car {
    constructor({ make, model, year, price, description, imgUrl, id }) {
        this.make = make
        this.model = model
        this.year = year
        this.price = price
        this.description = description
        this.imgUrl = imgUrl
        this.id = id
    }

    get template() {
        return `
        <div class="col-lg-4 col-6 listing my-3">
            <div class="card">
                <div> 
                    <img class="img-fluid" src="${this.imgUrl}" /> 
                </div>
                    <div class="card-body">
                    <p>
                        <b>${this.make} ${this.model}</b>
                        <span>${this.year}</span>
                    </p>
                    <p>
                        <em>$${this.price.toFixed(2)}</em>
                    </p>
                    <p>${this.description}</p>
                </div>
                    <button class="btn btn-warning mx-3" onclick="app.carsController.editCar('${this.id}')")>edit car</button>
                    <button class="btn btn-danger m-3" onclick="app.carsController.deleteCar('${this.id}')">delete car</button>
            </div>
        </div>
        `
    }
}