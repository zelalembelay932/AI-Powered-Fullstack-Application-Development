import React from 'react'
import style from "./Header.module.css"
import {Link} from 'react-router'
import logo from '../../assets/image/logo.png'
import {Search, Bell, User, ChevronDown } from "lucide-react"

const Header = () => {
  return (
    <>
        <header className={style.header}>
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
                    <button className={style.searchButton}>
                        <Search size={20}/>
                    </button>
                    </div>
                    
                    <div>
                        <button type="button"> 
                            {/* search button */}
                        </button>
                    </div>
                    {/* Notification */}
                    <button className={style.iconButton}>
                        {/* Notification icon */}
                        <Bell/>
                        <span className={style.notificationBadge}>4</span>
                    </button>
                    {/* Profile */}
                    <div>
                        <button>
                            {/* user icon */}
                            <div>
                            <User/>     
                            </div>
                            {/* dropdoen icon */}
                                <ChevronDown/>
                        </button>
                    </div>
                </div>

                {/* right side secttion */}

            </div>
        </header>
    </>
  )
}

export default Header
