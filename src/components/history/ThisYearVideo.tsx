
export const ThisYearVideo = () => {
  const videoSrc = "src/assets/videos/Culturea_spot_render_7.mp4";

  return (
    <div className="w-full flex justify-center mt-10">
      <video 
        width="560" 
        height="315" 
        controls 
      >
        <source src={videoSrc} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
