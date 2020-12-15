import {Link, List, ListItem} from "@material-ui/core";
import {MenuItemType} from "../../data";

const Menu = ({menuItems}) => {

    const buildMenuItem = (item) => {
        const linkUrl = item.type === MenuItemType.post ? `/post/${item.post}` : '#';
        console.log('@@@@@linkUrl');
        console.log(linkUrl);
        return (<ListItem key={`menu-item-${item.id}`}>
            <Link className='nav-item' href={linkUrl}>
                {item.title}
            </Link>
        </ListItem>);
    };

    return (<nav className='navbar navbar-expand-lg'>
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <List className="navbar-nav">
                {menuItems.map((item) => buildMenuItem(item))}
            </List>
        </div>
    </nav>);
};

export default Menu;
