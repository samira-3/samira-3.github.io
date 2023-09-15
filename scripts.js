document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = 'yellow';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = 'cyan';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll(".job-header");
    
    headers.forEach(header => {
        header.addEventListener("click", function() {
            const details = this.nextElementSibling;
            if (details.style.display === "none" || !details.style.display) {
                details.style.display = "block";
            } else {
                details.style.display = "none";
            }
        });
    });
});
