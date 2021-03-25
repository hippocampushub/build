import Carousel from "react-material-ui-carousel";
import {getImageUrl} from "../../helpers/imageHelper";

import carouselStyle from './carousel.module.scss';
import {Typography} from "@material-ui/core";

export interface CarouselImage {
    id: number;
    image: any;
    title: string;
    caption?: any;
    imageCreditsLabel?: string;
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
                    {carouselImage?.caption ?
                        <div className={`carousel-caption ${carouselStyle['custom-carousel-caption']}`}>
                            {carouselImage?.caption?.header ?
                                <Typography variant='h4' className={carouselStyle['carousel-caption-header']}>
                                    {carouselImage?.caption?.header ?? ''}
                                </Typography> : null
                            }
                        </div> : null
                    }
                    {carouselImage?.imageCreditsLabel ?
                        <div className={carouselStyle['carousel-image-credits-label']}>
                            <span>{carouselImage?.imageCreditsLabel}</span>
                        </div>: null
                    }
                </div>
            ))}
        </Carousel>
    </div>)
}
