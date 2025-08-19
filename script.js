(function attachIframeHeightListener() {
  let iframe = document.getElementById("iframe");

  if (!iframe) {
    console.log("⏳ iframe not ready yet, retrying...");
    setTimeout(attachIframeHeightListener, 500);
    return;
  }

  console.log("✅ Found iframe, attaching message listener...");

  window.addEventListener("message", function (event) {
    console.log("📩 Got message:", event.data, "from:", event.origin);

    if (event.origin !== "https://alfakher2019.github.io") return;

    let height = typeof event.data === "number"
      ? event.data
      : event.data.iframeHeight;

    if (height) {
      iframe.style.height = height + "px";
      console.log("✅ Applied height:", height);
    }
  });
})();
