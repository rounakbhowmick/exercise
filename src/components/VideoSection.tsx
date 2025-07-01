const VideoSection = ({ videoLink }: { videoLink: string }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe
        width="100%"
        height="200"
        src={videoLink}
        title="Exercise Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoSection;
