import videoSrc from '../../assets/videos/Culturea-Aftermovie-2024.mp4';

export const ThisYearVideo = () => {
  return (
    <div className="w-full flex justify-center mt-10">
      <video width="560" height="315" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
