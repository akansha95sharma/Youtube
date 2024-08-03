import React,{useEffect, useState} from 'react';
import { YOUTUBE_MOST_POPULAR } from '../utils/constants';
import VideoCard,{AdVideoCard} from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    useEffect(()=>{
        getVideos();
    },[]);
    const [videos,setVideos] = useState([]);
    const getVideos = async () => {
        const data = await fetch(YOUTUBE_MOST_POPULAR);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
    }
    return (
        <div className='flex flex-wrap'>
        {videos[0] && <AdVideoCard info={videos[0]}/>}
        {videos.map((video) => (<Link key={video.id} to={"/watch?v="+video.id} ><VideoCard info={video}/></Link>))}
        </div>
    )
}

export default VideoContainer
