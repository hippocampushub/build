import Carousel from "react-material-ui-carousel";
import {getImageUrl} from "../../helpers/imageHelper";

import carouselStyle from './carousel.module.scss';

export interface CarouselImage {
    id: number,
    image: any,
    title: string,
    caption: string
}

interface IImagesCarouselProps {
    images: CarouselImage[]
}

export default function ImagesCarousel({images}: IImagesCarouselProps) {
    return (<div>
        <Carousel indicators={false}>
            {images.map((carouselImage, index) => (
                <div key={`carousel-image-${index}`}>
                    <img className={carouselStyle['carousel-image']}  src={getImageUrl(carouselImage)}/>
                </div>
            ))}
        </Carousel>
    </div>)
}
