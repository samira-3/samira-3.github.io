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

    function closeDetails(element) {
    element.closest('.school-details').style.display = 'none';
}

    /*function handleEventLogic(headersSelector, detailsSelector) {
    const headers = document.querySelectorAll(headersSelector);
    const details = document.querySelectorAll(detailsSelector);

    headers.forEach((header, index) => {
        header.addEventListener('click', function() {
            toggleDisplay(details[index]);
        });
    });
}
*/
    
    // Generic function to handle hover display for headers and details
    function handleEventLogic(headersSelector, detailsSelector) {
        const headers = document.querySelectorAll(headersSelector);
        const details = document.querySelectorAll(detailsSelector);

        headers.forEach((header, index) => {
            if (isMobile()) {
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

    handleEventLogic('.school-header', '.school-header + .school-details');
    handleEventLogic('.job-header', '.job-header + .job-details');
});

// Function to determine if we're on a mobile device
function isMobile() {
    return window.innerWidth <= 768;
}

function toggleDisplay(element) {
    element.style.display = element.style.display === 'block' ? 'none' : 'block';
}
