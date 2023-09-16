document.addEventListener("DOMContentLoaded", function() {

    // Link color change
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = 'yellow';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = 'green';
        });
    });

    // Hover to toggle all school details
    const hoverElementSchool = document.querySelector('.show-school-details');
    if(hoverElementSchool) {
        hoverElementSchool.addEventListener('mouseover', function() {
            const schoolDetails = document.querySelectorAll('.school-header + *');
            schoolDetails.forEach(details => {
                details.style.display = 'block';
            });
        });
        hoverElementSchool.addEventListener('mouseout', function() {
            const schoolDetails = document.querySelectorAll('.school-header + *');
            schoolDetails.forEach(details => {
                details.style.display = 'none';
            });
        });
    }

    // Hover to toggle all job details
    const hoverElementJob = document.querySelector('.show-job-details');
    if(hoverElementJob) {
        hoverElementJob.addEventListener('mouseover', function() {
            const jobDetails = document.querySelectorAll('.job-header + *');
            jobDetails.forEach(details => {
                details.style.display = 'block';
            });
        });
        hoverElementJob.addEventListener('mouseout', function() {
            const jobDetails = document.querySelectorAll('.job-header + *');
            jobDetails.forEach(details => {
                details.style.display = 'none';
            });
        });
    }

});

   /* // Hide all details on page load
    document.querySelectorAll('.job-details, .school-details').forEach(detail => {
        detail.classList.add('hidden');
    });

    // School header toggling
    const schoolHeaders = document.querySelectorAll('.school-header');
    schoolHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const details = this.nextElementSibling;
            toggleDetails(details);
        });
    });

    // Job header toggling
    const jobHeaders = document.querySelectorAll('.job-header');
    jobHeaders.forEach(header => {
        console.log('Binding click event listener to job header.');  // Testing the binding
        header.addEventListener('click', function() {
            const details = this.nextElementSibling;
            toggleDetails(details);
        });
    });
});

function toggleDetails(detailsElement) {
    if (detailsElement.classList.contains('hidden')) {
        detailsElement.classList.remove('hidden');
    } else {
        detailsElement.classList.add('hidden');
    }
}*/
