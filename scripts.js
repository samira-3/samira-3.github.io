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

// Function to load content from experience.html
    function loadExperience() {
        var container = document.getElementById("experience-container");
        var xhr = new XMLHttpRequest();

        // Replace 'experience.html' with the correct URL if it's in a different location
        xhr.open("GET", "experience.html", true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                container.innerHTML = xhr.responseText;
            }
        };

        xhr.send();
    }

    // Add an event listener to the "Experience" link
    document.querySelector(".tabs a").addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior
        loadExperience();
    });

// Get the select element
  const roleSelect = document.getElementById('role-select');

  // Add an event listener to the select element
  roleSelect.addEventListener('change', function() {
    // Get the selected option's value
    const selectedOption = roleSelect.value;

    // Check if the selected option has a valid URL (not "#")
    if (selectedOption !== '#') {
      // Redirect to the selected URL
      window.location.href = selectedOption;
    }
  });

var isGraduated = true; // Change this based on your condition

var badge = document.querySelector('.badge');

if (isGraduated) {
    badge.classList.add('graduated-badge');
    badge.querySelector('.badge-text').textContent = 'Graduated';
} else {
    badge.classList.add('achieved-badge');
    badge.querySelector('.badge-text').textContent = 'Achieved';
}

window.addEventListener('scroll', function () {
    const cards = document.querySelectorAll('.card'); // Select all cards

    cards.forEach(function (card) {
        // Calculate the distance between the card and the top of the viewport
        const distanceToTop = card.getBoundingClientRect().top;

        // Set the card's opacity based on its position
        card.style.opacity = 1 - distanceToTop / window.innerHeight;

        // Clamp the opacity between 0 and 1 to prevent negative values or values greater than 1
        card.style.opacity = Math.max(0, card.style.opacity);
        card.style.opacity = Math.min(1, card.style.opacity);
    });
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
