import { useRef } from 'react';
import video1 from '../../../resources/videos/video-1.mp4';

export default function UseImperativeHandle() {
    const videoRef = useRef();

    return (
        <>
            <video
                ref={videoRef}
                src={video1}
                width={400}
                style={{ padding: '50px' }}
                controls
            />
            <button>Play</button>
            <button>Pause</button>
        </>
    );
}
