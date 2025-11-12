document.addEventListener('visibilitychange', function() {
    let iframe = document.getElementById('videoPlayer');
    
    // Check if the iframe element exists
    if (!iframe) {
        return; 
    }

    let command;
    
    if (document.visibilityState === 'visible') {
        command = 'playVideo';
    } else {
        command = 'pauseVideo';
    }
    
    // Send the command via the YouTube iframe API
    iframe.contentWindow.postMessage(
        '{"event":"command","func":"' + command + '","args":""}', 
        '*'
    );
});