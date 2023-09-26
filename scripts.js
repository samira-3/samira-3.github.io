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

    function handleEventLogic(headersSelector, detailsSelector) {
        const headers = document.querySelectorAll(headersSelector);
        const details = document.querySelectorAll(detailsSelector);

        headers.forEach((header, index) => {
            header.addEventListener('click', function() {
                toggleDisplay(details[index]);
            });
        });
    }

    function handleEventLogicWithPopout(headersSelector, detailsSelector) {
        const headers = document.querySelectorAll(headersSelector);
        const details = document.querySelectorAll(detailsSelector);

        headers.forEach((header, index) => {
            if (isMobile()) {
                header.addEventListener('click', function() {
                    toggleDisplayWithPopout(details[index]);
                });
            } else {
                header.addEventListener('mouseover', function() {
                    details[index].style.display = 'block';
                    setTimeout(() => {
                        details[index].classList.add('active');
                    }, 10);
                });
                header.addEventListener('mouseout', function() {
                    details[index].classList.remove('active');
                    setTimeout(() => {
                        details[index].style.display = 'none';
                    }, 500); // Delay for transition to finish before hiding
                });
            }
        });
    }

    handleEventLogic('.school-header', '.school-header + .school-details');
    handleEventLogicWithPopout('.job-header', '.job-header + .job-details');
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
