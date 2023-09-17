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

    function toggleDisplay(element) {
        element.style.display = element.style.display === 'block' ? 'none' : 'block';
    }

    // Add the new toggleJobDetails function here
    function toggleJobDetails(element) {
        const jobDetails = element.nextElementSibling;
        toggleDisplay(jobDetails);
    }

    function isTouchDevice() {
        return 'ontouchstart' in window || navigator.maxTouchPoints;
    }

    function handleEventLogic(headers, details) {
        headers.forEach((header, index) => {
            if (isTouchDevice()) {
                header.addEventListener('click', function() {
                    toggleDisplay(details[index]);
                });
            } else {
                header.addEventListener('mouseover', function() {
                    details[index].style.display = 'block';
                });
                header.addEventListener('mouseout', function() {
                    details[index].style.display = 'none';
                });
            }
        });
    }

    handleEventLogic(document.querySelectorAll('.school-header'), document.querySelectorAll('.school-header + .school-details'));
    handleEventLogic(document.querySelectorAll('.job-header'), document.querySelectorAll('.job-header + .job-details'));
});


