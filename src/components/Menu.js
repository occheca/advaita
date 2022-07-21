import './Menu.css';


function menu() {

    return (

            <nav class="main-nav">
                <div class="toogle-menu">
                    <img src="img/right_menu_icon.png" alt=""></img>

                </div>
                <ul class="main-menu">
                    <li class="main-menu__item">
                        <a href="index.html" class="main-menu__link">El Autor</a>
                    </li>

                    <li class="main-menu__item">
                        <a href="index.html" class="main-menu__link">MEI</a>
                    </li>

                    <li class="main-menu__item">
                        <a href="index.html" class="main-menu__link">Colabora</a>
                    </li>

                    <li class="main-menu__item">
                        <a href="index.html" class="main-menu__link">Contacto</a>
                    </li>
                </ul>
            </nav>
    )

}

export default menu