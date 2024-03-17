import { Link } from "react-router-dom";

const NavMenu = () => {

    const navItems = [
        {id: 1, text: 'Home', link: '/'},
        {id: 2, text: 'Contact', link: '/contact'},
    ];

    return (
        <div className="flex items-center justify-center gap-2">
            {navItems.map(item => (
                <Link 
                    to={item.link}
                    className="py-2 cursor-pointer rounded-xl text-blue-600 hover:text-red-500 mx-2"
                >{item.text}</Link>
            ))}
        </div>
    );
}

export default NavMenu;