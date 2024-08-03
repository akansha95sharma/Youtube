import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
    const [searchQuery,setSearchQuery] = useState("");
    const [suggestions,setSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestion] = useState(false);
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log(searchQuery);
        //make an api call after every key press
        // but if the difference between 2 API call is <200ms
        // decline the api call
    const timer =  setTimeout(()=> {
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery]);
        } else {
            getSearchSuggestions();
        }
       },200);

    return () => {
        clearTimeout(timer);
    }
    },[searchQuery]);

    /**
     * key - i
     * - render the component
     * - useEffect();
     * - start timer => make api call after 200ms
     * key - ip
     * - destroy the component(useEffect return method)
     * - render the component
     * - useEffect();
     * - start timer => make api call after 200ms
     */
    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        console.log(json);
        setSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery]:json[1]
        }));
    }
    
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
            <div className='flex col-span-1'>
                <img className='h-8 cursor-pointer' onClick={() => toggleMenuHandler()} alt='menu' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256' />
                <a href='/'>
                <img className='h-10 w-20 mx-2' alt='logo' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg'/>
                </a>
            </div>
            <div className='col-span-10 px-10'>
            <div>
                <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(false)} />
                <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>Search</button>
            </div>
            {showSuggestions &&
            (<div className='fixed bg-white py-2 px-2 w-[33rem] shadow-lg rounded-lg border border-gray-100'>
                <ul>
                {suggestions.map(s => <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>{s}</li>)}
                                       
                </ul>
            </div>)}
            </div>
            <div className='col-span-1'>
                <img className='h-8' alt='user' src='https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png'/>
            </div>
        </div>
    )
}

export default Head
