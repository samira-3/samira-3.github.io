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
    
/*const schoolHeaders = document.querySelectorAll('.school-header');
const schoolDetails = document.querySelectorAll('.school-header + .school-details');

schoolHeaders.forEach((header, index) => {
    header.addEventListener('mouseover', function() {
        schoolDetails[index].style.display = 'block';
    });
    header.addEventListener('mouseout', function() {
        schoolDetails[index].style.display = 'none';
    });
});

const jobHeaders = document.querySelectorAll('.job-header');
const jobDetails = document.querySelectorAll('.job-header + .job-details');

schoolHeaders.forEach((header, index) => {
    header.addEventListener('mouseover', function() {
        jobDetails[index].style.display = 'block';
    });
    header.addEventListener('mouseout', function() {
        jobDetails[index].style.display = 'none';
    });
});*/

    /*// Hover to toggle all job details
    document.querySelectorAll('.job-box').forEach(jobBox => {
        const jobDetail = jobBox.querySelector('.job-details');
        
        jobBox.addEventListener('mouseover', function() {
            jobDetail.style.display = 'block';
        });
        
        jobBox.addEventListener('mouseout', function() {
            jobDetail.style.display = 'none';
        });
    });

});*/

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

/*// Function to determine if we're on a mobile device
function isMobile() {
    return window.innerWidth <= 768;
}

const schoolHeaders = document.querySelectorAll('.school-header');
const schoolDetails = document.querySelectorAll('.school-header + .school-details');

schoolHeaders.forEach((header, index) => {
    if (isMobile()) {
        header.addEventListener('click', function() {
            if (schoolDetails[index].style.display === 'block') {
                schoolDetails[index].style.display = 'none';
            } else {
                schoolDetails[index].style.display = 'block';
            }
        });
    } else {
        header.addEventListener('mouseover', function() {
            schoolDetails[index].style.display = 'block';
        });
        header.addEventListener('mouseout', function() {
            schoolDetails[index].style.display = 'none';
        });
    }
});

const jobHeaders = document.querySelectorAll('.job-header');
const jobDetails = document.querySelectorAll('.job-header + .job-details');

jobHeaders.forEach((header, index) => {
    if (isMobile()) {
        header.addEventListener('click', function() {
            if (jobDetails[index].style.display === 'block') {
                jobDetails[index].style.display = 'none';
            } else {
                jobDetails[index].style.display = 'block';
            }
        });
    } else {
        header.addEventListener('mouseover', function() {
            jobDetails[index].style.display = 'block';
        });
        header.addEventListener('mouseout', function() {
            jobDetails[index].style.display = 'none';
        });
    }
});*/
