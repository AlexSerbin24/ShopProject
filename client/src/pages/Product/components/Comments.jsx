import React from 'react'
import Comment from './Comment'
import Button from '../../../components/UI/button/Button'
import '../style.css'
export default function Comments({ isAuth, comments, setCommentModalForm }) {
    return (

        <div>
            <div className='product-comments-header'>
                <h2>Comments</h2>
                {isAuth && <Button onClick={(event) => { setCommentModalForm(true) }}>Add comment</Button>}
            </div>
            <div>
                {comments.length == 0 ?
                    <h3 style={{ textAlign: "center" }}>There are no comments.</h3> :
                    comments.map(comment => <Comment key={comment.id} comment={comment} />)
                }
            </div>
        </div>
    )
}
