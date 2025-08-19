document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('message', function(event) {
        const allowedOrigin = "https://alfakher2019.github.io";
        if (event.origin !== allowedOrigin) return;

        const height = typeof event.data === "number" ? event.data : event.data.iframeHeight;
        if (height) {
            const iframe = document.getElementById('iframe');
            if (iframe) iframe.style.height = height + 'px';
        }
    });
});
