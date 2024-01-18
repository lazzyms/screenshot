export const paintVideoFrameOnCanvas = (
  video: HTMLVideoElement,
  x?: number,
  y?: number,
  height?: number,
  width?: number
) => {
  try {
    // Get the video settings
    // @ts-ignore because getTracks is very much valid in modern browsers
    const videoTrackSettings = video.srcObject?.getTracks()[0].getSettings();
    // Create a canvas with the video's size and draw the video frame on it
    const canvas = document.createElement("canvas");
    canvas.width = width ?? videoTrackSettings?.width ?? 0;
    canvas.height = height ?? videoTrackSettings?.height ?? 0;
    const ctx = canvas.getContext("2d");
    x = x ?? 0;
    y = y ?? 0;
    ctx?.drawImage(video, x, y);
    return canvas;
  } catch (err) {
    throw err;
  }
};
