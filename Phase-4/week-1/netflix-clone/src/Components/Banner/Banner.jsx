import React from 'react'
import NetflixBannerLogo from  '../../assets/image/logo.png'
import {Play, Info} from 'lucide-react'
import style from './Banner.module.css'

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.contents}>
        {/* Netflix image */}
        <img
          className={style.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix Logo"
        />
        {/* title */}
        <h1 className={style.title}>Bridgerton</h1>
        {/* discription */}
        <h1 className={style.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat id
          soluta, facere accusantium obcaecati minima consequatur ullam?
          Voluptatibus, perspiciatis vel, praesentium corrupti ea quis, et velit
          corporis suscipit voluptas eius!
        </h1>

        {/* buttonsu */}
        <div className={style.buttonContainer}>
          <button className={style.button}>
            <Play size={30} />
            Play
          </button>
          <button className={style.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>
      {/* fading */}
      <div className={style.fadeBottom}></div>
    </div>
  );
}

export default Banner
