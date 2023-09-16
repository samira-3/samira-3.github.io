document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = 'yellow';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = 'cyan';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const schoolHeaders = document.querySelectorAll('.school-header');

    schoolHeaders.forEach(header => {
        header.addEventListener('click', function() {
            console.log('Header clicked');  // Test if this is being logged
            const details = this.nextElementSibling;
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const jobHeaders = document.querySelectorAll('.job-header');

    jobHeaders.forEach(header => {
        header.addEventListener('click', function() {
            console.log('Header clicked');  // Test if this is being logged
            const details = this.nextElementSibling;
            if (details.style.display === 'none' || details.style.display === '') {
                details.style.display = 'block';
            } else {
                details.style.display = 'none';
            }
        });
    });
});

