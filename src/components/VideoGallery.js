import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 🔽🔽🔽 আপনার ভিডিওগুলো এখানে যোগ করুন 🔽🔽🔽
  const videos = [
    {
      id: 1,
      title: "বাংলাদেশের সুন্দর প্রাকৃতিক দৃশ্য",
      videoUrl: "https://example.com/video1.mp4", // আপনার ভিডিও URL দিন
      thumbnail: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=500", // থাম্বনেইল URL
      duration: "10:30",
      description: "বাংলাদেশের মনোরম প্রাকৃতিক সৌন্দর্যের একটি ভিডিও"
    },
    {
      id: 2, 
      title: "ঢাকা শহরের জীবন",
      videoUrl: "https://example.com/video2.mp4", // আপনার ভিডিও URL দিন
      thumbnail: "https://images.unsplash.com/photo-1566647387313-9fda80664848?w=500", // থাম্বনেইল URL
      duration: "5:15",
      description: "রাজধানী ঢাকার ব্যস্ত জীবনের একটি ঝলক"
    },
    {
      id: 3,
      title: "সুন্দরবনের রহস্য",
      videoUrl: "https://example.com/video3.mp4", // আপনার ভিডিও URL দিন
      thumbnail: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500", // থাম্বনেইল URL
      duration: "15:45",
      description: "বিশ্বের বৃহত্তম ম্যানগ্রোভ বন সুন্দরবনের ভ্রমণ"
    },
    {
      id: 4,
      title: "বাংলাদেশের সংস্কৃতি",
      videoUrl: "https://example.com/video4.mp4", // আপনার ভিডিও URL দিন
      thumbnail: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=500", // থাম্বনেইল URL
      duration: "8:20",
      description: "বাংলাদেশের সমৃদ্ধ সাংস্কৃতিক heritage"
    }
    // আরো ভিডিও যোগ করতে এই ফরম্যাটে নতুন object যোগ করুন
  ];

  return (
    <div className="video-gallery">
      {selectedVideo ? (
        <VideoPlayer 
          video={selectedVideo} 
          onClose={() => setSelectedVideo(null)}
        />
      ) : (
        <div className="video-grid">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="video-card"
              onClick={() => setSelectedVideo(video)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="thumbnail-container">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="thumbnail"
                />
                <span className="duration">{video.duration}</span>
              </div>
              <div className="video-info">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
