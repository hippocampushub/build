import * as React from "react";
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import {CustomButton} from "../buttons/buttons";

import * as sectionMenuStyle from './sectionMenu.module.scss';
import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";
import {Divider, Drawer, IconButton, SwipeableDrawer, Theme} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {ChevronLeft} from "@material-ui/icons";
import {allowSectionsMenuMinHeight, isHeightUp} from "../../helpers/uiHelper";

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    drawerPaper: {
        width: drawerWidth,
    }
}));

function _SectionMenu({drawerOpen, sections, width, toggleDrawer}: {
    drawerOpen: boolean;
    sections: any[];
    width: Breakpoint;
    toggleDrawer: (open: boolean) => void;
}) {

    const classes = useStyles();
    const container: HTMLElement|null = window !== undefined ? window.document.body : null;
    const containerHeight = container?.clientHeight ?? 0;
    return (isWidthUp('md', width) && isHeightUp(containerHeight, allowSectionsMenuMinHeight) ?
            <div className='col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center'>
                <div className={sectionMenuStyle['section-menu-container']}>
                    <div>
                        <div className='row'>
                            {sections?.map((item) => <div className='col-lg-12 col-md-6 col-sm-6 text-center'>
                                <CustomButton
                                    style={{fontSize: 11, margin: '5px auto'}}
                                    onClick={() => window.location.href = `#${item?.id}`}>
                                    {item?.header}
                                </CustomButton>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div> :
            <div>
                <Drawer
                    classes={{
                        paper: classes.drawerPaper
                    }}
                    container={container}
                    open={drawerOpen}
                    variant='persistent'>
                    <div className={classes.toolbar}>
                        <IconButton
                            style={{
                                outline: 'none'
                            }}
                            onClick={() => toggleDrawer(false)}>
                            <ChevronLeft/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <div className='row'>
                        {sections?.map((item) => <div className='col-12 text-center'>
                            <CustomButton
                                style={{fontSize: 11, margin: '5px auto'}}
                                onClick={() => window.location.href = `#${item?.id}`}>
                                {item?.header}
                            </CustomButton>
                        </div>)}
                    </div>
                </Drawer>
            </div>
    );
}

const SectionMenu = withWidth()(_SectionMenu);
export {
    SectionMenu
};