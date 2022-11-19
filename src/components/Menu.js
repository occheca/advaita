import './Menu.css';

function menu() {

    return (

            <nav className="main-nav">
                <div className="toogle-menu">
                    <img src="img/right_menu_icon.png" alt=""></img>

                </div>
                <ul className="main-menu">
                    <li className="main-menu__item">
                        <a href="index.html" className="main-menu__link">El Autor</a>
                    </li>

                    <li className="main-menu__item">
                        <a href="index.html" className="main-menu__link">MEI</a>
                    </li>

                    <li className="main-menu__item">
                        <a href="index.html" className="main-menu__link">Colabora</a>
                    </li>

                    <li className="main-menu__item">
                        <a href="index.html" className="main-menu__link">Contacto</a>
                    </li>
                </ul>
            </nav>
    )

}

export default menu