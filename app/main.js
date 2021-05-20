import { CarsController } from "./Controllers/CarsController.js"
import { FormController } from "./Controllers/FormController.js";
import { HousesController } from "./Controllers/HousesController.js";
import { JobsController } from "./Controllers/JobsController.js";
class App {

  carsController = new CarsController()
  housesController = new HousesController()
  jobsController = new JobsController()

  formController = new FormController()
}

window["app"] = new App();