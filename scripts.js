document.addEventListener("DOMContentLoaded", function() {
    // Link color change
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = 'yellow';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = 'brown';
        });
    });

    function closeDetails(element) {
        element.parentElement.style.display = 'none';
    }

const jobs = document.querySelectorAll(".job");

jobs.forEach((job) => {
    job.addEventListener("click", () => {
        job.classList.toggle("flipped");
    });
});

window.addEventListener("scroll", () => {
    const timeline = document.querySelector(".timeline");
    const timelineTop = timeline.getBoundingClientRect().top;
    if (timelineTop < window.innerHeight) {
        jobs.forEach((job) => {
            job.style.opacity = 1;
        });
    } else {
        jobs.forEach((job) => {
            job.style.opacity = 0;
        });
    }
});

// Function to determine if we're on a mobile device
function isMobile() {
    return window.innerWidth <= 768;
}

function toggleDisplay(element) {
    element.style.display = element.style.display === 'block' ? 'none' : 'block';
}

function toggleDisplayWithPopout(element) {
    if (element.style.display === 'none' || !element.style.display) {
        element.style.display = 'block';
        setTimeout(() => {
            element.classList.add('active');
        }, 10); // Delay for display: block to take effect before applying transition
    } else {
        element.classList.remove('active');
        setTimeout(() => {
            element.style.display = 'none';
        }, 500); // Delay for transition to finish before hiding
    }
}
