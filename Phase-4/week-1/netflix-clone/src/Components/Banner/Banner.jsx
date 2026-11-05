import React, { useEffect, useState } from "react";
import NetflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import style from "./Banner.module.css";
import { movieInstance } from "../../Utility/MovieInstance";
// movieInstance => Provides Axios configuration.

import requests from "../../Utility/requestUrls";
// requests => Provides the TMDB request endpoint.

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [bannerImage, setBannerImage] = useState({});
    // Creates state for the selected featured TV show.
    // Initially:
        // bannerImage = {}
            // Later, after the API request succeeds, this object will contain the selected show.

  useEffect(() => {
      // This effect performs an operation after the component renders.
    async function fetchBannerImage() {
      // Defines an asynchronous function.
          // Why asynchronous?
            // Because requesting data from a remote server takes time.
      const request = await movieInstance.get(requests.fetchNetflixOriginals);
          // This is the actual API request.
          // It means:
                // Use the Axios instance.
                // Request the Netflix Original endpoint.
                // Wait for TMDB to respond.
                // Save the response in request.

          // console.log(request);

      setBannerImage(
        // Stores the selected show in React state.
        // When this state changes, React renders the component again.
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
          
        ],
      );
    }
    fetchBannerImage();
      // Actually executes the function.
       // Defining the function alone would not send an API request.
  }, []);
  // The empty dependency array tells React to run this effect after the initial render rather than after every render.
        
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  // This function limits the description length.
      // str?.length => checks the length safely if str is not null or undefined.
      // > => checks whether the description exceeds the limit.
      // ? => executes the first expression when the condition is true.
      // : => executes the second expression when the condition is false.
      // substr(0, n - 1)=> takes the first part of the description.
      // "..." =>adds three dots.
  return (
    <div
      className={style.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}")`,
      }}
    >
      <div className={style.contents}>
        {/* Netflix image */}
        <img
          className={style.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix Logo"
        />
        {/* title */}
        <h1 className={style.title}>{bannerImage?.original_name}</h1>
        {/* discription */}
        <h1 className={style.description}>
          {truncate(bannerImage?.overview, 120)}
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
};

export default Banner;
