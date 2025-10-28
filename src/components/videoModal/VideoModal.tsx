import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './VideoModal.css';

const VideoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.keyCode === 27) closeModal();
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const ModalContent = () => (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal} aria-label="Close modal">
          ×
        </button>
        <video controls autoPlay className="video-player">
          <source src={'/reel.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );

  return (
    <div className="video-modal-container">
      <button className=" w-full px-8 py-4 bg-white text-black text-xl lg:text-2xl 2xl:text-2xl font-sans mt-8 md:w-auto uppercase" onClick={openModal}>
        Смотреть шоурил
      </button>

      {mounted && isModalOpen && ReactDOM.createPortal(
        <ModalContent />,
        document.body
      )}
    </div>
  );
};

export default VideoModal;