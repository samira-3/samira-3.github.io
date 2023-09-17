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
const schools = document.querySelectorAll('.school');

schools.forEach(school => {
    const schoolDetails = school.querySelector('.school-details');

    school.addEventListener('mouseover', function() {
        schoolDetails.style.display = 'block';
    });

    school.addEventListener('mouseout', function() {
        schoolDetails.style.display = 'none';
    });
});
    
    /*document.querySelectorAll('.school-header').forEach(header => {
    header.addEventListener('click', function() {
        let details = this.nextElementSibling; // .school-details
        if (details.style.display === 'block') {
            details.style.display = 'none';
        } else {
            details.style.display = 'block';
        }
    });
});*/


    /*// Hover to toggle all school details
    const hoverElementSchool = document.querySelector('.school');
    const schoolDetails = document.querySelectorAll('.school-header + *');

    if(hoverElementSchool) {
        hoverElementSchool.addEventListener('mouseover', function() {
            schoolDetails.forEach(details => {
                details.style.display = 'block';
            });
        });
        hoverElementSchool.addEventListener('mouseout', function() {
            schoolDetails.forEach(details => {
                details.style.display = 'none';
            });
        });
    }*/

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
