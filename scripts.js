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

    // Hide all details on page load
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
}

// Hover to toggle all job details
const hoverElement = document.querySelector('.show-job-details');
if(hoverElement) {  // Make sure the element exists before adding event listeners
    hoverElement.addEventListener('mouseover', function() {
        const jobDetails = document.querySelectorAll('.job-header + *');
        jobDetails.forEach(details => {
            details.style.display = 'block';
        });
    });
    hoverElement.addEventListener('mouseout', function() {
        const jobDetails = document.querySelectorAll('.job-header + *');
        jobDetails.forEach(details => {
            details.style.display = 'none';
        });
     });
   }
});
