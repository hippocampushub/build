import * as React from 'react';
import Menu from "../menu/menu";
import ImagesCarousel, {CarouselImage} from "../carousel/carousel";

interface IHeaderProps {
    config?: any,
    menuItems?: any[],
    carouselImages?: CarouselImage[]
}

export default function Header({config, menuItems=[], carouselImages}: IHeaderProps) {
    const hasCarouselImages = !!carouselImages && carouselImages.length > 0;
    return (
        <div>
            <Menu logo={config?.logo ?? null}
                menuItems={menuItems}/>
            {hasCarouselImages ?
                <ImagesCarousel images={carouselImages}/> : null
            }
        </div>
    );
}
