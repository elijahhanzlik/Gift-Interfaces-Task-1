document.addEventListener('DOMContentLoaded', function() {
    const present = document.querySelector('.present');
    const clickHereText = document.getElementById('clickHereText');
    const presentImg = document.getElementById('presentImg');
    const presentOpen = document.querySelector('.presentOpen');
    const scrollClick = document.querySelector('.scrollClick');
    const samScroll = document.querySelector('.Sam-Scroll');

    // Disable pointer events for clickHereText
    clickHereText.style.pointerEvents = 'none'; // Make it unclickable

    presentImg.addEventListener('click', function(event) {
        event.stopPropagation();
        presentImg.style.display = 'none';
        clickHereText.style.display = 'none';
        presentOpen.style.display = 'block';
        
        // Show scroll click text after 3 seconds
        setTimeout(function() {
            scrollClick.style.display = 'block';
            scrollClick.style.pointerEvents = 'none'; // Make scroll click text unclickable
        }, 3000);
    });

    // Add click event to presentOpen (closed scroll)
    presentOpen.addEventListener('click', function(event) {
        console.log('Closed scroll clicked'); // Debug line
        event.stopPropagation();
        scrollClick.style.display = 'none';
        
        // Add rotation animation to presentOpen
        presentOpen.style.animation = 'rotateAndVanish 1.5s ease-in-out';
        
        // First, wait for closed scroll to finish its animation and disappear
        setTimeout(function() {
            presentOpen.style.display = 'none';
            
            // Then wait a brief moment before showing Sam's scroll
            setTimeout(function() {
                console.log('Showing Sam scroll'); // Debug line
                samScroll.style.display = 'block';
                samScroll.style.top = '200px';
            }, ); // Wait 0.5 seconds after closed scroll disappears
            
        }, 1500); // Wait for closed scroll animation to complete
    });
});

samScroll.addEventListener('click', function() {
    samScroll.style.display = 'block'; // Hide the closed-scroll element when it is clicked
}); 



