import React from 'react'
import Rating from '../../../components/Rating/Rating'
import '../style.css'
export default function Comment({ comment }) {

    return (
        <div className='product-comment'>
            <div className='product-comment-user'>
                <h4>{comment.user}</h4>
                <p>{new Date(comment.date).toLocaleDateString()}</p> 
            </div>

            <div className='product-comment-body'>
                <div className='product-comment-rating'>
                    <Rating rating={comment.rating} />
                </div>
                <div className='product-comment-text'>
                    {comment.text.split("\n").map((text, index)=><p key={`${text}${index}`}>{text}</p>)}

                </div> 
            </div>
        </div>
    )
}
