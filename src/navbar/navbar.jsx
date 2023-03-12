import '../navbar/navbar.scss';
import Nav from '../navbar/nav.png';
import { useState } from 'react';
function Navbar() {
    const [show, setShow] = useState(false);
    const [navClass, setNavClass] = useState(false)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            setNavClass(true)
        } else {
            setNavClass(false);
        }
    })
    return ( 
        <>
            <nav className={navClass ? 'active' : null}>
                <div className="logo">
                    <a href="/https">
                        <img src={Nav} alt="" />
                    </a>
                </div>
                <div className={!show ? 'link' : 'link active' }>
                    <a href="">Bo'lim</a>
                    <a href="">Blog</a>
                    <a href="">Kirish</a>
                    <a href=""><i class="fa-solid fa-phone"></i></a>
                    <a href="">UZ</a>
                </div>
                <button className={!show ? null : 'active'} onClick={() => setShow(!show)}>
                        <span />
                        <span />
                        <span />
                    </button>
            </nav>
        </>
     );
}

export default Navbar;