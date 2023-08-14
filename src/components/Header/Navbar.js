import { Link } from 'react-router-dom';
import { Search, Bag } from 'react-bootstrap-icons';
import logo from './img/thegioididong-logo.png';
import './Navbar.scss';

function Item() {
    const navBar = [
        {
            label: <img src={logo} alt="logo" className="icon-logo" />,
            href: '/',
        },
        { label: 'Cửa hàng', href: '/store' },
        { label: 'Điện thoại', href: '/smartphone' },
        { label: 'Laptop', href: '/laptop' },
        { label: 'Tablet', href: '/tablet' },
        { label: 'SmartWatch', href: '/smartwatch' },
        { label: 'Phụ kiện', href: '/accessories' },
        { label: 'Dịch vụ tiện ích', href: '/services' },
        { label: 'Hỗ trợ', href: '/support' },
        { label: <Search className="icon-navbar search-icon" />, href: '/#' },
        { label: <Bag className="icon-navbar bag-icon" />, href: '/#' },
    ];

    const listItemNavBar = navBar.map((x, i) => (
        <li className="nav-bar__item" key={i}>
            <Link to={x.href}>{x.label}</Link>
        </li>
    ));

    return listItemNavBar;
}

export default function Navbar() {
    return (
        <>
            <nav className="nav-bar">
                <div className="nav-bar__center">
                    <ul>
                        <Item />
                    </ul>
                </div>
            </nav>
        </>
    );
}
