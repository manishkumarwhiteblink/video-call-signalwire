document.addEventListener("DOMContentLoaded", () => {
  const allowBtn = document.getElementById("allowBtn");
  allowBtn.addEventListener("click", async () => {
    const stream = await SignalWire.WebRTC.getUserMedia({
      audio: true,
      video: true,
    });
    const video = document.getElementById("video");
    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });
    console.table(stream.getVideoTracks());
  });
});
