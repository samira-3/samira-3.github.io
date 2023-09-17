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

const schoolHeaders = document.querySelectorAll('.school-header');
const schoolDetails = document.querySelectorAll('.school-header + .school-details');

schoolHeaders.forEach((header, index) => {
    header.addEventListener('mouseover', function() {
        schoolDetails[index].style.display = 'block';
    });
    header.addEventListener('mouseout', function() {
        schoolDetails[index].style.display = 'none';
    });
});

    // Hover to toggle all job details
    document.querySelectorAll('.job-box').forEach(jobBox => {
        const jobDetail = jobBox.querySelector('.job-details');
        
        jobBox.addEventListener('mouseover', function() {
            jobDetail.style.display = 'block';
        });
        
        jobBox.addEventListener('mouseout', function() {
            jobDetail.style.display = 'none';
        });
    });

});

// Function to determine if we're on a mobile device
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

/*const schoolHeaders = document.querySelectorAll('.school-header');
const schoolDetails = document.querySelectorAll('.school-header + .school-details');

schoolHeaders.forEach((header, index) => {
    header.addEventListener('mouseover', function() {
        if (window.innerWidth > 400) {  // only apply hover behavior on larger screens
            schoolDetails[index].style.display = 'block';
        }
    });
    header.addEventListener('mouseout', function() {
        if (window.innerWidth > 400) {  // only apply hover behavior on larger screens
            schoolDetails[index].style.display = 'none';
        }
    });
    
    header.addEventListener('click', function() {
        if (schoolDetails[index].style.display === 'block') {
            schoolDetails[index].style.display = 'none';
        } else {
            schoolDetails[index].style.display = 'block';
        }
    });
});*/
