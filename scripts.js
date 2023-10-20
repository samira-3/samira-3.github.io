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

    // This function redirects to the selected page based on role
    function redirectToPage() {
        // Getting the dropdown element
        var selector = document.getElementById('option-select');
        // Getting the selected value
        var url = selector.value;
        
        // Checking if a valid URL is selected
        if(url) {
          // Redirecting to the selected page
          window.location = url;
        } else {
          alert("Please select an option.");
        }
      }
    
    //function navigateToPage(selectElement) {
    //    const selectedURL = selectElement.value;
    //    if (selectedURL) {
    //        window.location.href = selectedURL;
    //    }
    //}

    //document.getElementById("roles").addEventListener("change", function() {
    //    const selectedURL = this.value;
    //    if (selectedURL) {
    //        window.location.href = selectedURL;
    //    }
    //});
    
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
