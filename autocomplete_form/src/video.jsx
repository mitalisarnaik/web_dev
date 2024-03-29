import React, { useRef, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import videofile from './newvideo.mp4';

function VideoCanvas() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let animationFrameId;

        const renderFrame = () => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            animationFrameId = requestAnimationFrame(renderFrame);
        };

        const handleVideoCanPlay = () => {
            renderFrame();
        };

        video.addEventListener('canplay', handleVideoCanPlay);

        return () => {
            video.removeEventListener('canplay', handleVideoCanPlay);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    useLayoutEffect(() => {
        const handlePopstate = () => {
            // Reload the same page
            navigate(window.location.pathname);
        };

        // Attach event listener for popstate
        window.addEventListener('popstate', handlePopstate);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, [navigate]);

    return (
        <div>
            <video ref={videoRef} width="400" height="300" controls>
                <source src={videofile} type="video/mp4" />
                 browser does not support the video tag.
            </video>
            <canvas ref={canvasRef} width="400" height="300" style={{ display: 'none' }} />
        </div>
    );
}

export default VideoCanvas;
