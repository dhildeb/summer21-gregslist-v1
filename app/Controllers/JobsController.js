import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js"

export class JobsController {
  constructor() {
    ProxyState.on("jobs", this.drawJobs)
  }

  drawJobs() {
    let template = ''

    ProxyState.jobs.forEach(job => {
      template += `
      <div class="col-4 listing mt-3">
        <div class="card text-center">
          <h1>Job Title: ${job.jobPosition}</h1>
            <div class="card-body">
              <b>wage: $${job.wage}/hr - full-time: ${job.fullTime}</b>
              <p> ${job.location}</p>
              <p> ${job.company}</p>
              <p> ${job.description}</p>
            </div>
        </div>
      </div>
      `
    })
    document.getElementById("listings").innerHTML = template
    ProxyState.viewPort = "jobs"

  }

  addJob(event) {
    event.preventDefault()
    let form = event.target
    let formData = {
      jobPosition: form.jobPosition.value,
      wage: form.wage.value,
      fullTime: form.fullTime.value,
      location: form.location.value,
      company: form.company.value,
      description: form.description.value
    }
    jobsService.addJob(formData)
    form.reset()
  }
}