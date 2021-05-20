import { ProxyState } from "../AppState.js";
import { Job } from "../Models/Job.js";



class JobsService {
  addJob(jobData) {
    let newJob = new Job(jobData.position, jobData.location, jobData.company, jobData.wage, jobData.fullTime, jobData.description)

    ProxyState.jobs = [newJob, ...ProxyState.jobs]
  }
}

export const jobsService = new JobsService()