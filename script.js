document.addEventListener("DOMContentLoaded", async () => {
  const stream = await SignalWire.WebRTC.getUserMedia({
    audio: true,
    video: true,
  });
  const video = document.getElementById("video");
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
});
