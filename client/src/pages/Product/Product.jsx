import React, { useState, useEffect } from 'react';
import ProductImagines from "./components/ProductImagines";
import ProductDescription from "./components/ProductDescription";
import Container from '../../components/UI/container/Container';
import ProductService from '../../api/ProductService';
import CommentService from '../../api/CommentService';
import { useFetching } from '../../utilities/hooks/useFetching';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import CommentModalForm from './components/CommentModalForm';
import Comments from './components/Comments';
import { useSelector } from 'react-redux';


export default function ProductPage() {

    const [product, setProduct] = useState({});
    const [productRating, setProductRating] = useState(0)
    const [comments, setComments] = useState([]);
    const [commentModalForm, setCommentModalForm] = useState(false);
    const { user } = useSelector(store => store.user);
    const [fetchProductAndComments, load] = useFetching(async (id) => {
        let product = await ProductService.getProductById(id);
        setProduct(product);
        setComments(product.comments);
    });

    const [fetchAddComment, loadAddComment] = useFetching(async (commentData, productId, userId) => {
        let comment = await CommentService.addComment(commentData, productId, userId)
        setComments([...comments, comment]);

    })

    const { id } = useParams();

    useEffect(() => {
        fetchProductAndComments(id)
    }, [])

    useEffect(() => {

        let averageRating = comments.length ?
            comments.map(comment => comment.rating).reduce((prev, curr) => prev + curr) / comments.length : 0;

        setProductRating(averageRating);
    }, [comments])


    async function addComment(comment) {
        let result = await fetchAddComment(comment, id, user.id);

        return result;
    }

    return (
        <Container>
            {loadAddComment && <Loading />}
            {load ?
                <Loading />
                :
                <>
                    <CommentModalForm />
                    <div className="product-info">
                        <ProductImagines imgs={product.imagines} />
                        <ProductDescription product={product} rating={productRating} />
                    </div>
                    <CommentModalForm addComment={addComment} email={user?.email || ''} isVisible={commentModalForm} setCommentModalForm={setCommentModalForm} />

                    <Comments isAuth={user != null} comments={comments} setCommentModalForm={setCommentModalForm} />
                </>

            }
        </Container>
    )
}
