import React from 'react'
import Comment from './Comment';


const commentsData = [{
    name:"Akansha Sharma",
    text:"dbhhebhfberbhcdscbdhncbdjehrb",
    replies:[

    ]
}];
const CommentsList = ({comments}) => {
    // Disclaimer: don't you use indexes as keys
    return comments.map((comment,index) => (
        <div key={index}><Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
            <CommentsList comments={comment.replies}/>
            </div>
        </div>));
};
const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
           <h1 className='text-2xl font-bold'>Comments:</h1> 
           <CommentsList comments={commentsData}/>
        </div>
    )
}

export default CommentsContainer
