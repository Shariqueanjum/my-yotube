import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/navSlice'
import { YOUTUBE_SUGGESTION_API } from '../utils/constant'
import WathPage from './WathPage'
import { Link } from 'react-router-dom'

const Head = () => {

const dispatch = useDispatch()
const [searchQuery ,setSearchQuery] = useState("");
const [suggestions , setSuggestions] = useState([]);
const [showSuggestions , setShowSuggestions] = useState(false);




useEffect(()=>{
  
 const timer= setTimeout(()=>{
    getSearchSuggestion();
  },200);

return ()=>{
  clearTimeout(timer);
};

} ,[searchQuery]);








const getSearchSuggestion = async ()=>{
  const data = await fetch(YOUTUBE_SUGGESTION_API+searchQuery);
  const json =await data.json();
  console.log(json);
  setSuggestions(json[1]);
  //console.log("Api call -" +searchQuery);
}


const toggleMenuHandler =() =>{

  dispatch(toggleMenu());
}


  return (
    <div className="grid grid-flow-col m-2 p-5 shadow-lg">
    
    <div className="flex col-span-1">

        <img onClick={()=>toggleMenuHandler()}
         className="h-7 cursor-pointer" alt='menu' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp'/>

       <a href='/'>  <img className="h-8 mx-2" alt='youtube-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'/></a>

    </div>

    <div className="col-span-10 " >
        <div>
        <input 
        className="w-1/2 p-2  border border-gray-400 bg-gray-50 rounded-l-full" 
        type='text' 
        value={searchQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>setShowSuggestions(false)}
        />
        <button className="border border-gray-400 bg-gray-100 p-2 rounded-r-full">Search</button>

        </div>

       {
         suggestions.length>0 && showSuggestions && <div className="fixed  bg-white  px-2 py-2 w-[34rem] rounded-lg my-1 border border-gray-200 ">
          <ul>
            
          {suggestions.map((s)=><li key={s} className="py-2 shadow-sm hover:bg-gray-100" >🔍 {s}</li>)}
          
          </ul>
        </div>
}

    </div>

    <div className="col-span-1">

        <img  className="h-9" alt='user' src='https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg'/>
        
    </div>



    </div>
    
  )
}

export default Head;