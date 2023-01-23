import React, {useState} from 'react'
import ContainerImg from '../../../components/UI/ContainerImg/ContainerImg';
import ThumbList from '../../../components/UI/Thumb/ThumbList';
import logo from "../../../components/img/unknownProduct.png"
import "../style.css"

export default function ProductImagines({ imgs }) {
    const [currentImage, setCurrentImage] = useState(0)
    return (
        <div className="product-imgs">

            <div className="product-current-img-container">

                <ContainerImg img={ imgs && imgs.length?imgs[currentImage].image: logo} />
            </div>

        {imgs && imgs.length !=0 &&
            <ThumbList setThumb={setCurrentImage} thumbClassName="product-thumb" currentThumbNumber={currentImage} thumbs={imgs.map(img=>img.image)}/>
        }
        </div>
    )
}
