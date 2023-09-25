const tabs = document.querySelectorAll('.tabs li a');
const tabContent = document.querySelector('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // You can load content dynamically for each tab here
        // For now, let's just update the content to indicate which tab is active
        tabContent.innerHTML = `<h2>${this.textContent} Content</h2>`;
    });
});

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
    
    /*/ Generic function to handle hover display for headers and details
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
    }*/

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
