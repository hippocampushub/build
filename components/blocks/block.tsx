import {Block} from "../../data/data";
import {Icon} from '@material-ui/core';
import {Card, CardContent} from '@material-ui/core';
import {NavigateNext as ArrowRight} from "@material-ui/icons";

import blockStyle from './block.module.scss';

import {ThemeVariant} from "../../interfaces/ThemeVariant";

interface IBlockContainerProps<T extends Block> {
    block: T,
    variant?: ThemeVariant;
}

export function BlockContainer<T extends Block>({block, variant = 'light'}: IBlockContainerProps<T>) {
    console.log('@@@@@blockStyle');
    console.log(blockStyle);
    return (<div className={blockStyle['block']}>
        <Card>
            <div>
                <CardContent>
                    <div className='row'>
                        <div className='col-10'>
                            <div className={blockStyle['block-title']}>
                                {block.title}
                            </div>
                        </div>
                        <div className={`col-2 text-right ${blockStyle['block-arrow-container']}`}>
                            <Icon>
                                <ArrowRight className='fontSizeLarge'/>
                            </Icon>
                        </div>
                    </div>
                </CardContent>
            </div>
        </Card>
    </div>);
}
