export class JobItem {
    constructor(id, title, employer, jobType, jobBudget, creationDate, description, proposalCount, image) {
      this.id = id;
      this.title = title;
      this.employer = employer;
      this.jobType = jobType;
      this.jobBudget = jobBudget;
      this.creationDate = creationDate;
      this.description = description;
      this.proposalCount = proposalCount;
      this.image = image;
    }
  }
  
  export const data = [
    new JobItem(
      1,
      "Rheumatology ",
      "OneHealth",
      "Full-time",
      "400$",
      "April 1, 2024",
      "Full Description ",
      "OneHealth is a world-class healthcare provider present in Egypt, Nigeria & expanding in Africa; offering high-quality medical services alongside a unique customer journey. The goal is simple - to revolutionize the healthcare industry through a seamless customer experience, whether it is in physical branches via state of the art medical centers or virtually through 24/7 access to teleconsultation via digital channels. With a global mindset that aims at elevating the customer healthcare journey, OneHealth medical centers offer one-stop-shop healthcare services by providing access to over 30 medical specialties and sub-specialties, advanced diagnostics, laboratory services, and electronic medical records for all customers, which makes going to the medical center or consulting a doctor virtually, a medical experience like no other! OneHealth is owned by AXA Group and is on a mission to provide exceptional healthcare solutions in emerging markets serving both insured and non-insured customers; and to make healthcare an affordable, trusted and above all convenient experience that all clients deserve.",
      10,
    ),
    new JobItem(
      2,
      "Job Title 2",
      "Employer 2",
      "Part-time",
      "$20 per hour",
      "April 2, 2024",
      "Job description 2",
      5,
    ),
    new JobItem(
      3,
      "Job Title 3",
      "Employer 3",
      "Contract",
      "$3000",
      "April 3, 2024",
      "Job description 3",
      8,
    ),
    new JobItem(
      4,
      "Job Title 4",
      "Employer 4",
      "Full-time",
      "$4000",
      "April 4, 2024",
      "Job description 4",
      15,
    ),
    new JobItem(
      5,
      "Job Title 5",
      "Employer 5",
      "Part-time",
      "$15 per hour",
      "April 5, 2024",
      "Job description 5",
      3,
    ),
  ];
  