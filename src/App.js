import React from 'react';
import './App.css';
import VideoGallery from './components/VideoGallery';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>🎬 আমার ভিডিও সংগ্রহ</h1>
          <p>লগইন ছাড়াই উপভোগ করুন আপনার প্রিয় ভিডিওগুলো</p>
        </div>
      </header>
      <main className="main-content">
        <VideoGallery />
      </main>
      <footer className="app-footer">
        <p>© 2024 আমার ভিডিও সাইট | তৈরি বাংলাদেশ থেকে</p>
      </footer>
    </div>
  );
}

export default App;
