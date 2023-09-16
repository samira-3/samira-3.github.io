document.addEventListener("DOMContentLoaded", function() {
    // Link color change
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = 'yellow';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = 'cyan';
        });
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

// A function to toggle the display of details
function toggleDetails(detailsElement) {
    if (detailsElement.style.display === 'none' || detailsElement.style.display === '') {
        detailsElement.style.display = 'block';
    } else {
        detailsElement.style.display = 'none';
    }
}
