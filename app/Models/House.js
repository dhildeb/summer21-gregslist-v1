export class House {
  constructor({ price, bedrooms, bathrooms, imgUrl, year, houseId, description, id, levels }) {
    this.price = price
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.year = year
    this.imgUrl = imgUrl
    this.houseId = houseId
    this.description = description
    this.id = id
    this.levels = levels || 1
  }

  get template() {
    return `
            <div class="col-4 listing mt-3">
                <div class="card">
                    <img src="${this.imgUrl}" />
                        <div class="card-body">
                            <h1>$${this.price}</h1>
                            <b>bds: ${this.bedrooms} - bths: ${this.bathrooms}</b>
                            <em> year: ${this.year}</em>
                            <p>description: ${this.description}</p>
                        </div>
                        <button class="btn btn-warning mx-3" onclick="app.housesController.editHouse('${this.id}')")>edit house</button>
                        <button class="btn btn-danger m-3" onclick="app.housesController.deleteHouse('${this.id}')">delete house</button>
                </div>
            
            </div>
            `
  }
}