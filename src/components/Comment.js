import React from 'react'

const Comment = ({data}) => {
    const {name,text,replies} = data;
    return (<div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
            <img className='w-10 h-8' alt='user' src='https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png'/>
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>);
}

export default Comment;
