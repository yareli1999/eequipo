document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', function() {
        const videos = document.querySelectorAll('video');
        videos.forEach(v => {
            if (v !== this) v.pause();
        });
    });
});