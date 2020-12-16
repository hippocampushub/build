import * as React from 'react';
import Menu from "../menu/menu";
import ImagesCarousel, {CarouselImage} from "../carousel/carousel";

interface IHeaderProps {
    menuItems?: any[],
    carouselImages?: CarouselImage[]
}

export default function Header({menuItems, carouselImages}: IHeaderProps) {
    const hasCarouselImages = !!carouselImages && carouselImages.length > 0;
    return (
        <div>
            <Menu menuItems={menuItems}/>
            {hasCarouselImages ?
                <ImagesCarousel images={carouselImages}/> : null
            }
        </div>
    );
}
