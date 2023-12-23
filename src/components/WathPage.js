import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/navSlice';
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';

const WathPage = () => {
  const [searchParam]=useSearchParams();
  //console.log(searchParam.get("v"));

  const dispatch =useDispatch();

  useEffect(()=>{
  dispatch(closeMenu());
  } ,[])


  return (

    <div className="px-5 flex w-full ">
      <div>
      <iframe 
      width="1000" 
      height="500" 
      src={"https://www.youtube.com/embed/"+searchParam.get("v")}
      title="YouTube video player" 
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullscreen>
      </iframe>
      </div>
      
      <div className="w-full ">
        <LiveChat/>
      </div>

      </div>

  )
}

export default WathPage ;