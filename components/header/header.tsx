import * as React from 'react';
import Menu from "../menu/menu";
import ImagesCarousel, {CarouselImage} from "../carousel/carousel";

interface IHeaderProps {
    config?: any;
    menuItems?: any[];
    carouselImages?: CarouselImage[];
    fixedHeader?: boolean;
    transparentHeader?: boolean;
}

export default function Header({config, menuItems=[], carouselImages, fixedHeader = false, transparentHeader = false}: IHeaderProps) {
    const hasCarouselImages = !!carouselImages && carouselImages.length > 0;
    return (
        <div>
            <Menu logo={config?.logo ?? null} menuItems={menuItems} fixed={fixedHeader} transparent={transparentHeader}/>
            {hasCarouselImages ?
                <ImagesCarousel images={carouselImages}/> : null
            }
        </div>
    );
}
