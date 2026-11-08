import React, { useEffect, useState } from 'react'
import style from "./Header.module.css"
import {Link} from 'react-router'
import logo from '../../assets/image/logo.png'
import {Search, Bell, User, ChevronDown } from "lucide-react"

const Header = () => {
    const [isSearchOpen, setIsSearchOpen]= useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // for blur
    const [isScrolled, setIsScrolled, ] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 50){
                setIsScrolled(true);
            }else{
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll',handleScroll);
        return()=> window.removeEventListener('scroll',handleScroll)
    },[])


  return (
    <>
        <header className={`${style.header} ${isScrolled? style.scrolled:""} `}>
            <div className={style.container}>
                {/* logo */}
                <img src={logo} alt="Netflix Logo" className={style.logo}/>
                {/* Navigation links */}
                <nav className={style.nav}>
                    
                    <Link className={style.navLink} to="">Home</Link>
                    <Link className={style.navLink} to="">TV Shows</Link>
                    <Link className={style.navLink} to="">Movies</Link>
                    <Link className={style.navLink} to="">New & Popular</Link>
                    <Link className={style.navLink} to="">My List</Link>
                    <Link className={style.navLink} to="">Browse by language</Link>
                </nav>
                <div className={style.rightSection}>
                    {/* Search */}
                    <div className={style.searchContainer}>
                    <button onClick={()=>setIsSearchOpen(!isSearchOpen)}  className={style.searchButton}>
                        <Search size={20}/>
                    </button>
                    {
                        isSearchOpen && (
                            <input type="text" placeholder='Movie title'  className={style.searchInput}/>
                        )
                    }
                    </div>
                    

                    {/* Notification */}
                    <button className={style.iconButton}>
                        {/* Notification icon */}
                        <Bell/>
                        <span className={style.notificationBadge}>4</span>
                    </button>
                    
                    {/* Profile */}
                    <div className={style.profileContainer}>
                        <button 
                        onClick={()=>setIsProfileOpen(!isProfileOpen)}

                        className={style.profileButton}>
                            {/* user icon */}
                            <div className={style.profileAvatar}>
                            <User size={20}/>     
                            </div>
                            {/* dropdoen icon */}
                                <ChevronDown size={20}/>
                        </button>

                        {
                            isProfileOpen&& (
                                <div className={style.profileMenu}>
                                    <Link className={style.profileMenuItem}>Account</Link>
                                    <Link className={style.profileMenuItem}>Help Center</Link>
                                    <hr className={style.profileMenuDivider}/>
                                    <button className={style.profileMenuItem}>Sign Out</button>

                                </div>
                            )
                        }
                    </div>
                </div>

                {/* right side secttion */}

            </div>
        </header>
    </>
  )
}

export default Header
