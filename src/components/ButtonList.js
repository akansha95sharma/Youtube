import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list = ["All","Gaming","Songs","Live","Soccer","Cricket","Cooking","Valentines"]
    return (
        <div className='flex'>
           {list.map((e,index) => (<Button key={index} name={e}/>))}
        </div>
    )
}

export default ButtonList
