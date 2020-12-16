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
        <Carousel>
            {images.map((carouselImage) => (
                <div key={`carousel-image-${carouselImage.id}`}>
                    <img className={carouselStyle['carousel-image']}  src={getImageUrl(carouselImage.image)}/>
                </div>
            ))}
        </Carousel>
    </div>)
}
