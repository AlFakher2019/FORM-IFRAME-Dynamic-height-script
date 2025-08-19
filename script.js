var iframe = document.getElementById('iframe');

        window.addEventListener('message', function (event) {
            if (event.origin === "https://alfakher2019.github.io") {
                var height = typeof event.data === "number" ? event.data : event.data.iframeHeight;
                if (height) iframe.style.height = height + 'px';
            }
        });
