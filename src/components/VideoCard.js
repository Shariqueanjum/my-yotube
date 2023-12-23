import React from 'react'

const VideoCard = ({info}) => {

    const {snippet , statistics}=info;
    const {channelTitle ,title , thumbnails}=snippet;
    
  return (
    <div className="p-2 m-2 w-72 h-auto shadow-lg rounded-lg">
        <img alt='thumbnail' src={thumbnails.medium.url}/>
         <ul>
            <li className="font-bold">{title}</li>
            <li className="text-gray-500">{channelTitle}</li>
            <li className="text-gray-500">{statistics.viewCount} views</li>
         </ul>
    </div>
  )
}

export default VideoCard ;