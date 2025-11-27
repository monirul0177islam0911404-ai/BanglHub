import React from 'react';

const VideoPlayer = ({ video, onClose }) => {
  return (
    <div className="video-player-overlay">
      <div className="video-player-container">
        <button className="close-btn" onClick={onClose} title="বন্ধ করুন">
          ✕
        </button>
        <video 
          controls 
          autoPlay 
          className="video-player"
          poster={video.thumbnail}
        >
          <source src={video.videoUrl} type="video/mp4" />
          আপনার ব্রাউজার ভিডিও সাপোর্ট করে না। দয়া করে আধুনিক ব্রাউজার ব্যবহার করুন।
        </video>
        <h3 className="player-title">{video.title}</h3>
      </div>
    </div>
  );
};

export default VideoPlayer;
