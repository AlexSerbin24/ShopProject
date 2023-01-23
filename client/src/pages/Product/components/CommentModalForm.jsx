import React, { useState, useRef } from 'react'
import Modal from "../../../components/UI/modal/Modal";
import Label from "../../../components/UI/label/Label";
import Input from "../../../components/UI/input/Input";
import Rating from '../../../components/Rating/Rating';
import Textarea from '../../../components/UI/textarea/Textarea';
import ErrorSpan from '../../../components/UI/ErrorSpan/ErrorSpan';
import Button from '../../../components/UI/button/Button';
import "../style.css"

export default function CommentModalForm({ addComment, email, setCommentModalForm, isVisible }) {

    const [comment, setComment] = useState({ text: '', userName: '', userLastName: '', rating: 0 });
    const [commentFormSelectedRating, setCommentFormSelectedRating] = useState(0)
    const [errors, setErrors] = useState({});
    const ratingContainer = useRef(null)

    function selectRating(event) {
        if (event.target.tagName == "path" || event.target.tagName == "svg") {
            const ratingStar = event.target.tagName == "svg" ? event.target : event.target.parentElement;

            const rating = ratingStar.id.split("-")[1];
            setCommentFormSelectedRating(rating);
            return;

        }

        if(event.target.className != 'back-stars'){
            setCommentFormSelectedRating(comment.rating);
        }

    }

    function confirmRating(event){
        setComment({...comment, rating: commentFormSelectedRating});
    }


    function validateCommentForm() {

        let commentErrors = {};
        if (!comment.text) {
            commentErrors["text"] = "Your comment is empty";
        }

        if (!comment.userName) {
            commentErrors["userName"] = "Your name is empty";
        }

        if (!comment.userLastName) {
            commentErrors["userLastName"] = "Your last name is empty";
        }
        if (!comment.rating) {
            commentErrors["rating"] = "You didn't choose product rating";
        }

        setErrors(commentErrors)

        return Object.keys(commentErrors).length == 0;
    }

    async function submitCommentForm(event) {
        event.preventDefault();

        if (validateCommentForm()) {
            let result = await addComment(comment);
            
            if (result.isSucceed) {
                resetCommentForm()
            }
        }
    }

    function resetCommentForm(){
        setCommentModalForm(false);
        setComment({ text: '', userName: '', userLastName: '', rating: 0 });
        setCommentFormSelectedRating(0);
    }
    return (
        <Modal title={"Add comment"} setModal={setCommentModalForm} isVisible={isVisible} className="product-comment-form-modal">
            <form onSubmit={submitCommentForm}>
                <Label >
                    <div ref={ratingContainer} onMouseMove={selectRating} onClick={confirmRating} className='product-comment-form-rating'>
                        <Rating rating={commentFormSelectedRating} />
                    </div>
                    <Input type="number" hidden />
                    <ErrorSpan>{errors['rating']}</ErrorSpan>
                </Label>

                <Label className="product-comment-form-label" title={"Comment"}>
                    <Textarea value={comment.text} onChange={(event) => { setComment({ ...comment, text: event.target.value }) }} />
                    <ErrorSpan>{errors['text']}</ErrorSpan>
                </Label>

                <Label className="product-comment-form-label" title={"Name"}>
                    <Input className="product-comment-form-input" type="text" value={comment.userName} onChange={(event) => { setComment({ ...comment, userName: event.target.value }) }} />
                    <ErrorSpan>{errors['userName']}</ErrorSpan>
                </Label>

                <Label className="product-comment-form-label" title={"Last name"}>
                    <Input className="product-comment-form-input" type="text" value={comment.userLastName} onChange={(event) => { setComment({ ...comment, userLastName: event.target.value }) }} />
                    <ErrorSpan>{errors['userLastName']}</ErrorSpan>
                </Label>

                <Label className="product-comment-form-label" title={"Email"}>
                    <Input className="product-comment-form-input" type="email" value={email} disabled />
                </Label>

                <div className='product-comment-form-btns'>
                    <Button type="submit">Add comment</Button>
                    <Button onClick={resetCommentForm} type="button">Reset comment</Button>
                </div>

            </form>
        </Modal>
    )
}
