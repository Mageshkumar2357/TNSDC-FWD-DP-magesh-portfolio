const jobs = [

  {

    title: "Frontend Developer",

    company: "Tech Solutions",

    location: "New York",

    type: "Full-time",

    description: "Build responsive and user-friendly web interfaces."

  },

  {

    title: "Backend Developer",

    company: "CodeWorks",

    location: "Remote",

    type: "Full-time",

    description: "Work on server-side applications and APIs."

  },

  {

    title: "UI/UX Designer",

    company: "DesignHub",

    location: "London",

    type: "Part-time",

    description: "Create intuitive and engaging user experiences."

  },

  {

    title: "Intern Software Engineer",

    company: "StartUp Inc",

    location: "New York",

    type: "Internship",

    description: "Assist in developing and testing web applications."

  }

];

const jobListings = document.getElementById("job-listings");

const searchInput = document.getElementById("search");

const locationFilter = document.getElementById("location-filter");

const typeFilter = document.getElementById("type-filter");

// Display jobs

function displayJobs(filteredJobs) {

  jobListings.innerHTML = "";

  if (filteredJobs.length === 0) {

    jobListings.innerHTML = "<p>No jobs found 🚫</p>";

    return;

  }

  filteredJobs.forEach(job => {

    const jobCard = document.createElement("div");

    jobCard.classList.add("job-card");

    jobCard.innerHTML = `

      <div class="job-title">${job.title}</div>

      <div class="job-details">${job.company} | ${job.location}</div>

      <span class="job-type">${job.type}</span>

      <p>${job.description}</p>

    `;

    jobListings.appendChild(jobCard);

  });

}

// Filter jobs

function filterJobs() {

  const keyword = searchInput.value.toLowerCase();

  const locationValue = locationFilter.value.toLowerCase();

  const typeValue = typeFilter.value.toLowerCase();

  const filtered = jobs.filter(job => {

    const matchesKeyword = job.title.toLowerCase().includes(keyword) || job.description.toLowerCase().includes(keyword);

    const matchesLocation = locationValue === "all" || job.location.toLowerCase() === locationValue;

    const matchesType = typeValue === "all" || job.type.toLowerCase() === typeValue;

    return matchesKeyword && matchesLocation && matchesType;

  });

  displayJobs(filtered);

}

// Event listeners

searchInput.addEventListener("input", filterJobs);

locationFilter.addEventListener("change", filterJobs);

typeFilter.addEventListener("change", filterJobs);

// Initial load

displayJobs(jobs);