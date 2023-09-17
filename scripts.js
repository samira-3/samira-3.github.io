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

    function toggleJobDetails(element) {
        var details = element.nextElementSibling;
        if(details.style.display === "none" || details.style.display === "") {
            details.style.display = "block";
        } else {
            details.style.display = "none";
        }
    }

// Generic function to handle hover display for headers and details
    function handleHoverDisplay(headersSelector, detailsSelector) {
        const headers = document.querySelectorAll(headersSelector);
        const details = document.querySelectorAll(detailsSelector);

        headers.forEach((header, index) => {
            header.addEventListener('mouseover', () => details[index].style.display = 'block');
            header.addEventListener('mouseout', () => details[index].style.display = 'none');
        });
    }

    handleHoverDisplay('.school-header', '.school-header + .school-details');
    handleHoverDisplay('.job-header', '.job-header + .job-details');
});


/*function toggleDetails(headersSelector, detailsSelector) {
    const headers = document.querySelectorAll(headersSelector);
    const details = document.querySelectorAll(detailsSelector);

    headers.forEach((header, index) => {
        header.addEventListener('mouseover', function() {
            details[index].style.display = 'block';
        });
        header.addEventListener('mouseout', function() {
            details[index].style.display = 'none';
        });
    });
}

toggleDetails('.school-header', '.school-header + .school-details');
toggleDetails('.job-header', '.job-header + .job-details');*/

// Function to determine if we're on a mobile device
function isMobile() {
    return window.innerWidth <= 768;
}

function toggleDisplay(element) {
    element.style.display = element.style.display === 'block' ? 'none' : 'block';
}

function handleEventLogic(headers, details) {
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

handleEventLogic(document.querySelectorAll('.school-header'), document.querySelectorAll('.school-header + .school-details'));
handleEventLogic(document.querySelectorAll('.job-header'), document.querySelectorAll('.job-header + .job-details'));
