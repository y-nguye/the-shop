import { Search, Bag } from 'react-bootstrap-icons';
import logo from './img/thegioididong-logo.png';
import './Navbar.scss';

function Item() {
    const navBar = [
        {
            label: <img src={logo} alt="logo" className="icon-logo" />,
            href: '#',
        },
        { label: 'Cửa hàng', href: '#' },
        { label: 'Điện thoại', href: '#' },
        { label: 'Laptop', href: '#' },
        { label: 'Tablet', href: '#' },
        { label: 'SmartWatch', href: '#' },
        { label: 'Phụ kiện', href: '#' },
        { label: 'Dịch vụ tiện ích', href: '#' },
        { label: 'Hỗ trợ', href: '#' },
        { label: <Search className="icon-navbar search-icon" />, href: '#' },
        { label: <Bag className="icon-navbar bag-icon" />, href: '#' },
    ];

    const listItemNavBar = navBar.map((x) => (
        <li className="nav-bar__item">
            <span>{x.label}</span>
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
