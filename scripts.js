document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = 'yellow';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = 'cyan';
    });
});

<script>
function toggleJobDetails(element) {
    const details = element.nextElementSibling;
    if(details.style.display === 'none' || details.style.display === '') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}
</script>
