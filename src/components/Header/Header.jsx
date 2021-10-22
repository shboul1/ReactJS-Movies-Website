import React, {useRef, useEffect} from 'react'
import logo from '../../assets/tmovie.png'
import {Link} from 'react-router-dom'
import './header.scss'
const Header = () => {
    const headerNav = [
        { display: 'Home', link: '/'},
        { display: 'Movies', link: '/movies'},
        { display: 'Tv Series', link: '/tvseries'},
    ]
    const headerRef = useRef(null)
    const scrollTopRef = useRef(null)
    const addShrinkClass = () => {
        window.scrollY > 100 ? headerRef.current.classList.add('shrink') : headerRef.current.classList.remove('shrink')

    }
    const scrollTopHeight = () => {
        if(window.scrollY > 150) {
            scrollTopRef.current.classList.add('active')
        } else {
            scrollTopRef.current.classList.remove('active')
        }
    }
    const scrollTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        })
    }
    useEffect(() => {
        window.addEventListener('scroll', addShrinkClass)
        window.addEventListener('scroll', scrollTopHeight)
    })
    return (
        <>
        <div className="scroll-to-top" ref={scrollTopRef} onClick={scrollTop}>
        <i className="fas fa-chevron-up"></i>
        </div>
        <div className='header' ref={headerRef}>
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to='/'>tMovies</Link>
                </div>
                <ul className="header__nav"> 
                    {
                        headerNav.map((n, i) => (
                            <li key={i}>
                                <Link to={n.link}>
                                    {n.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header
