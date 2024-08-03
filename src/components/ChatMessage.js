import React from 'react'

const ChatMessage = ({name,message}) => {
    return (
        <div className='flex items-center shadow-sm p-2'>
        <img className='h-8' alt='user' src='https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png'/>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
        </div>
    )
}

export default ChatMessage
