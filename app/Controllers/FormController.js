import { ProxyState } from "../AppState.js"

function hideForm() {
    document.getElementById("car-form").classList.add("d-none")
    document.getElementById("house-form").classList.add("d-none")
    document.getElementById('listings').classList.remove('d-none')
}

export class FormController {

    constructor() {
        ProxyState.on("viewPort", hideForm)
    }
    toggleForm() {
        if (ProxyState.viewPort == "cars") {

            document.getElementById('car-form').classList.remove('d-none')
            document.getElementById('house-form').classList.add('d-none')
            document.getElementById('job-form').classList.add('d-none')
            document.getElementById('listings').classList.add('d-none')
        }
        if (ProxyState.viewPort == "houses") {

            document.getElementById('house-form').classList.remove('d-none')
            document.getElementById('car-form').classList.add('d-none')
            document.getElementById('job-form').classList.add('d-none')
            document.getElementById('listings').classList.add('d-none')
        }
        if (ProxyState.viewPort == "jobs") {
            document.getElementById('job-form').classList.remove('d-none')
            document.getElementById('car-form').classList.add('d-none')
            document.getElementById('house-form').classList.add('d-none')
            document.getElementById('listings').classList.add('d-none')

        }
    }

}