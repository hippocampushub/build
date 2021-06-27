import {AppBar, Toolbar, Link, List, ListItem, makeStyles, Typography, IconButton} from "@material-ui/core";
import {Menu as IconMenu} from '@material-ui/icons';
import {getPageUrl} from "../../helpers/postHelper";
import {useRouter} from "next/router";

import menuStyle from './menu.module.scss';
import {useEffect, useState} from "react";
import {MenuItemType} from "../../data";
import {getImageUrl} from "../../helpers/imageHelper";
import {sortedArray} from "../../helpers/arrayHelper";
import constants from "../../constants";

const getBackgroundColor = () => {
    return window?.pageYOffset > 60 ? '#393745' : 'transparent';
}

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        background: 'transparent'
    }
}));

const useFixedToolbarStyles = makeStyles((theme) => ({
    root: {
        background: '#393745'
    }
}));

const useNavStyles = makeStyles((theme) => ({
    root: {
        padding: '0 1rem'
    }
}));

const useListStyles = makeStyles((theme) => ({
    root: {
        padding: 0
    }
}));

const MenuItem = ({item, isSubMenuItem = false}) => {
    const router = useRouter();


    const [expanded, setExpanded] = useState(false);


    const buildSubMenu = (item, expanded) => (
        <div className={`dropdown-menu ${menuStyle['custom-dropdown-menu']} ${expanded ? 'show' : ''}`}
             aria-labelledby="navbarDropdownMenuLink" key={`sub-menu-dropdown-${item.id}`}>
            <ul className={menuStyle['custom-dropdown-menu-list']}>
                {sortedArray(item.menuitems, 'title')?.map((subItem) => <MenuItem key={`sub-menu-item-${subItem.id}`}
                                                                                  item={subItem}
                                                                                  isSubMenuItem={true}/>)}
            </ul>
        </div>);

    const showDropDown = () => {
        setExpanded(true);
    }

    const hideDropDown = () => {
        setExpanded(false);
    }

    const toggleDropDown = () => {
        setExpanded(!expanded);
    }

    const linkUrl = getPageUrl(item);
    const isActiveLink = linkUrl === `${constants.BASE_URL}${router?.asPath}`;
    const isDropDown = item.type === MenuItemType.section || (item.menuitems?.length ?? 0) > 0;
    return (<ListItem onMouseEnter={isDropDown ? () => showDropDown() : null}
                      onMouseLeave={isDropDown ? () => hideDropDown() : null}
                      className={`${isSubMenuItem ? menuStyle['sub-list-item'] : menuStyle['list-item']} ${isActiveLink ? menuStyle['active'] : ''} ${isDropDown ? 'dropdown' : ''}`}>
        <Link className={menuStyle['link']} href={linkUrl}>
            {item.title}
        </Link>
        {isDropDown ?
            buildSubMenu(item, expanded) : null
        }
    </ListItem>);
}


const Menu = ({
    logo,
    projectHeader,
    institutionHeader,
    institutionLogo,
    institutionUrl,
    menuItems,
    isSubMenuItem = false,
    fixed = false,
    transparent = false,
    showDrawerToggleButton = false,
    handleOpenDrawer = () => null
}: {
    logo?: any;
    projectHeader?: string;
    institutionHeader?: string;
    institutionLogo?: any;
    institutionUrl?: string;
    menuItems: any[];
    isSubMenuItem?: boolean;
    fixed?: boolean;
    transparent?: boolean;
    showDrawerToggleButton?: boolean,
    handleOpenDrawer?: () => void;
}) => {
    const router = useRouter();

    const [scrolled, setScrolled] = useState(false);
    const [menuExpanded, setMenuExpanded] = useState(false);

    const toolbarClasses = !fixed || scrolled ? useFixedToolbarStyles() : useToolbarStyles();
    const navClasses = useNavStyles();
    const listClasses = useListStyles();

    const buildMenuItem = (item) => (<MenuItem item={item} key={`menu-item-${item.id}`}/>)

    const toggleMenu = () => {
        setMenuExpanded(!menuExpanded);
    }

    const _listenForScroll = () => {
        if (!!window) {
            window.addEventListener('scroll', _onScrollTrigger);
        }
    }

    const _onScrollTrigger = () => {
        setScrolled((window?.pageYOffset ?? 0) > 60);
    }

    useEffect(() => {
        _listenForScroll();
        return () => {
            window.removeEventListener('scroll', _onScrollTrigger);
        }
    }, []);

    const appBarClasses = `${fixed ? menuStyle['fixed-header'] : menuStyle['default-header']} ${fixed && transparent && !scrolled ? menuStyle['transparent'] : ''}`;
    const hasInstitutionLogo = !!institutionLogo;
    const hasInstitutionUrl = !!institutionUrl;

    return (
        <AppBar position="relative" className={appBarClasses}>
            <Toolbar>
                <nav className={`navbar navbar-dark navbar-expand-lg ${menuStyle['menu-navbar']}`}>
                    <div className='container-fluid'>
                        {showDrawerToggleButton ?
                            <IconButton
                                style={{
                                    marginRight: 10,
                                    outline: 'none',
                                    '&:hover': {
                                        outline: 'none'
                                    }
                                }}
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleOpenDrawer}
                                edge="start"
                            >
                                <IconMenu />
                            </IconButton> : null
                        }
                        {hasInstitutionLogo && hasInstitutionUrl ?
                            <a className={`navbar-brand ${menuStyle['custom-navbar-brand']}`} href={institutionUrl}
                               target='_blank'>
                                <div className={menuStyle['custom-navbar-logo-container']}>
                                    <img src={getImageUrl(institutionLogo)}
                                         className={menuStyle['custom-navbar-logo']}/>
                                </div>
                            </a> :
                            <div>
                                {
                                    hasInstitutionLogo ?
                                        <div className={menuStyle['custom-navbar-logo-container']}>
                                            <img src={getImageUrl(institutionLogo)}/>
                                        </div> : null
                                }
                            </div>
                        }
                        {projectHeader ?
                            <a className={`navbar-brand ${menuStyle['custom-navbar-brand']}`} href={getPageUrl('/')}
                               style={{marginRight: 20}}>
                                <Typography variant='h1' className={menuStyle['header-project-label']}>
                                    {projectHeader}
                                </Typography>
                            </a> : null
                        }
                        <button className={`navbar-toggler ${menuStyle['custom-navbar-toggler']}`} type="button"
                                data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" onClick={() => toggleMenu()}/>
                        </button>
                        <div className={`collapse navbar-collapse ${menuExpanded ? 'show' : ''}`} id="navbarNav">
                            <List className="navbar-nav ml-auto" classes={listClasses}>
                                {sortedArray(menuItems, 'order')?.map((item) => buildMenuItem(item))}
                            </List>
                        </div>
                    </div>
                </nav>
            </Toolbar>
        </AppBar>
    );
};

export default Menu;
