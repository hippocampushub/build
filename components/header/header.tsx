import * as React from 'react';
import Menu from "../menu/menu";
import ImagesCarousel, {CarouselImage} from "../carousel/carousel";

interface IHeaderProps {
    config?: any;
    menuItems?: any[];
    carouselImages?: CarouselImage[];
    fixedHeader?: boolean;
    transparentHeader?: boolean;
    openImageCreditsDialog?: (content: string) => void;
}

export default function Header({config, menuItems=[], carouselImages, fixedHeader = false, transparentHeader = false, openImageCreditsDialog}: IHeaderProps) {
    const hasCarouselImages = !!carouselImages && carouselImages.length > 0;
    return (
        <div>
            <Menu projectHeader={config?.projectHeader ?? ''}
                  institutionHeader={config?.institutionHeader ?? ''}
                  institutionLogo={config?.institutionLogo ?? ''}
                  institutionUrl={config?.institutionUrl}
                  menuItems={menuItems} fixed={fixedHeader}
                  transparent={transparentHeader}/>
            {hasCarouselImages ?
                <ImagesCarousel images={carouselImages} showImageCredits={openImageCreditsDialog}/> : null
            }
        </div>
    );
}
