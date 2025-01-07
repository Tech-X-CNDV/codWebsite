window.addEventListener('DOMContentLoaded', function () {
    const waves = document.querySelector('.waves');
    const blueContainer = document.querySelector('.blue-container');
    const windowHeight = window.innerHeight * 0.9; // Get the viewport height

    // Set initial position to be ABOVE the screen (using viewport height)
    waves.style.transform = `translateY(-${windowHeight}px)`;

    waves.animate([
        { transform: `translateY(-${windowHeight}px)` }, // Start ABOVE the screen
        { transform: 'translateY(0)' }                // End at the bottom
    ], {
        duration: 1500,
        easing: 'linear',
        fill: 'forwards'
    });

    // --- Blue Container Animation ---

    // Get the initial height of the blueContainer
    const initialContainerHeight = blueContainer.offsetHeight;

    // Calculate initialContainerY based on the container's height
    const initialContainerY = initialContainerHeight - (windowHeight * 1.05); // 80% of viewport + container height
    blueContainer.style.transform = `translateY(${initialContainerY}px)`;

    blueContainer.animate([
        { transform: `translateY(${initialContainerY}px)` },
        // Calculate the final translateY to keep the container's height consistent
        { transform: `translateY(${initialContainerHeight}px)` }
    ], {
        duration: 1550,
        easing: 'linear',
        fill: 'forwards'
    }).onfinish = function() {
        // Remove the blueContainer from the DOM after the animation finishes
        blueContainer.remove(); 
    };
});