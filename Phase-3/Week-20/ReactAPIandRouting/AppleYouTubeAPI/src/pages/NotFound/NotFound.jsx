import React from 'react'
import { Link } from 'react-router';
import style from "./NotFound.module.css"

const NotFound = () => {
  return (
    <>
      <div className={style.cont}>
        <div className={style.error_code}>404</div>
        <h1 className={style.h}>Oops! Page Not Found</h1>
        <p className={style.p}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link to="/" className={style.btn_home}>
          Back to Homepage
        </Link>
      </div>
    </>
  );
}

export default NotFound
