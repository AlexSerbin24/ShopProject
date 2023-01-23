import React, { useState, useRef, useEffect } from "react"
import Label from "../../../../components/UI/label/Label"
import Input from "../../../../components/UI/input/Input";
import ContainerImg from "../../../../components/UI/ContainerImg/ContainerImg";
import ThumbList from "../../../../components/UI/Thumb/ThumbList";
import Button from "../../../../components/UI/button/Button";
import "../style.css"
import Select from "../../../../components/UI/Select/Select";
import CategoryOptions from "../../../../components/Category/CategoryOptions";
import ErrorSpan from "../../../../components/UI/ErrorSpan/ErrorSpan"
import Loading from "../../../../components/Loading/Loading";
import Textarea from "../../../../components/UI/textarea/Textarea";

export default function ProductForm({ editProduct, productAction, loading }) {
    const [product, setProduct] = useState({ title: '', category: '', price: 0, description: '', currentImages: [], newImages: [] });
    const [formErrors, setErrors] = useState({})
    const [currentImagine, setCurrentImagine] = useState(0);
    const imagineInput = useRef(null);

    function addImg(img) {
        let fileReader = new FileReader();

        fileReader.addEventListener("load", (event) => {
            setProduct({...product, newImages: [...product.newImages, {file:img, image: event.target.result}]});
        })
        fileReader.readAsDataURL(img);
    }

    function selectImg(event) {
        event.preventDefault();
        imagineInput.current.click();

    }

    function removeImg(event) {
        event.preventDefault();
        let currentImages = [...product.currentImages];
        let newImages = [...product.newImages];
        let currentImagesCount = currentImages.length;
        currentImagine > currentImagesCount - 1 ? newImages.splice(currentImagine- currentImagesCount, 1) : currentImages.splice(currentImagine, 1);
        if (currentImagine)
            setCurrentImagine(currentImagine - 1);
        setProduct({...product, newImages, currentImages});

    }

    function validateForm() {
        let formErrors = {};
        if (!product.title) {
            formErrors["title"] = "Title is not entered"
        }

        if (!product.category) {
            formErrors["category"] = "Category is not selected"
        }

        if (!product.price) {
            formErrors["price"] = "Price is not entered"
        }

        if (!product.description) {
            formErrors["description"] = "Description is not entered"
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length == 0;
    }

    async function submitForm(event) {
        event.preventDefault();

        let formdata = new FormData();
        let { newImages: images, currentImages, ...productData } = product;
        (productData.description)
        images.forEach(img => formdata.append("images", img.file));
        formdata.append("product", JSON.stringify(productData));
        formdata.append("currentImages", JSON.stringify(currentImages));
        if (validateForm()) {

            let isSucceed = await productAction(formdata);

            if (isSucceed) {
                setProduct({ title: '', category: '', price: 0, description: '', currentImages: [], newImages: [] })
                return;
            }

            setErrors({other:"Unknown error"})
        }
    }

    useEffect(() => {
        setCurrentImagine(0);
        if (editProduct) {
            let { imagines, ...otherProductProps } = editProduct;
            setProduct({ currentImages: [...imagines], newImages: [], ...otherProductProps });
        }
    }, [editProduct])



    return (
        <form className="product-create-form" onSubmit={submitForm}>
            {loading && <Loading />}
            {[...product.currentImages, ...product.newImages].length ?
                <div className="product-create-imgs">
                    <div className="product-create-current-img">
                        <ContainerImg img={[...product.currentImages, ...product.newImages][currentImagine].image} />
                    </div>
                    <ThumbList thumbClassName="product-create-thumb" setThumb={setCurrentImagine} currentThumbNumber={currentImagine} thumbs={[...product.currentImages, ...product.newImages].map(img => img.image)} />
                </div>
                :
                <h2>There are no imagines</h2>
            }
            <Input ref={imagineInput} hidden onChange={(event) => { addImg(event.target.files[0]); event.target.value = '' }} type="file" accept="image/x-png, image/jpeg" />
            <div className="product-form-img-btns">
                <Button type="button" onClick={selectImg}>Add image</Button>
                {
                    [...product.currentImages, ...product.newImages].length != 0 &&
                    <Button type="button" onClick={removeImg}>Remove image</Button>
                }
            </div>
            <Label title="Title">
                <Input value={product.title} onChange={(event) => setProduct({ ...product, title: event.target.value })} width={100} type="text" />
                {formErrors && <ErrorSpan>{formErrors["title"]}</ErrorSpan>}
            </Label>

            <Label title="Category">
                <Select value={product.category} onChange={(event) => setProduct({ ...product, category: event.target.value })}>
                    <option value={''} disabled>Select category</option>
                    <CategoryOptions />
                </Select>
                {formErrors && <ErrorSpan>{formErrors["category"]}</ErrorSpan>}
            </Label>
            <Label title="Price">
                <Input value={product.price} onChange={(event) => setProduct({ ...product, price: event.target.value })} width={100} type="number" />
                {formErrors && <ErrorSpan>{formErrors["price"]}</ErrorSpan>}
            </Label>
            <Label title="Description">

                <Textarea value={product.description} onChange={(event) => setProduct({ ...product, description: event.target.value })} />
                {formErrors && <ErrorSpan>{formErrors["description"]}</ErrorSpan>}
            </Label>
            <Button type="submit">Submit</Button>
        </form>

    )
}