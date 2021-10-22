import React, {useState, useEffect, useRef} from 'react'
import tmdbApi from '../api/tmdbAPI';

const VideoList = props => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        const getVideos = async () => {
            const response = await tmdbApi.getVideos(props.category, props.id)
            setVideos(response.results.slice(0,5))
        }
        getVideos();
    },[props.id])
    return (
        <>
        {
            videos.map((video, i) => (
                <Video key={i} video={video} />
            ))
        }
        </>
    )
}

const Video = props => {
    const video = props.video;
    const iframeRef = useRef(null);
    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    },[])

    return (
        <div className="video">
            <div className="video__title">
                <h2>{video.name}</h2>
            </div>
            <iframe
            src={`https://www.youtube.com/embed/${video.key}`} 
            title='video'
            width='100%'
            ref={iframeRef}
            ></iframe>
        </div>
    )
}




export default VideoList
