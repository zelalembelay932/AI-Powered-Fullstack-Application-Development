
import { useEffect } from 'react';
import { useState } from 'react'

function Apple() {
    // state to keep the data
    const [youtubeVideo, setYoutubeVideo] = useState([]);
    // send a request
    useEffect(()=>{
        // fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxA7AzkI2Sndf8S1G5rSkwQ&maxResults=10&order=date&key=AIzaSyDmUTk6yTVSscfKCR2X7zP0NiOg9fZA_Ng',
        // )
        
        // .then((res)=> res.json())   //JSON.parse()

      
        // .then((data)=>{
        //     // console.log(data);
        //     // console.log(data.items);

        //     // Set the data to the state
        //     setYoutubeVideo(data.items);
        // })
        // .catch((error) =>{
        //     console.log("Error Video", error);
        // });

        const fetchVideo = async ()=> {
            try{
        const res = await  fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCxA7AzkI2Sndf8S1G5rSkwQ&maxResults=10&order=date&key=AIzaSyDmUTk6yTVSscfKCR2X7zP0NiOg9fZA_Ng',)
        const data = await  res.json()

        setYoutubeVideo(data.items)
            }
            catch(error){
                console.log(error);
                
            }
        }
fetchVideo()

    },[])

//  const group = '[{ "name":"group4"}]';
//  const obj = JSON.parse(group)

//  console.log(obj[0]);

//  const jsn = JSON.stringify(obj)
//  console.log(jsn);
 
 

    // console.log(youtubeVideo);
  return (
    <>
        <h1>Apple Latest Video </h1>
        <section>
            {youtubeVideo.map((singleVideo) => {
                return(
                    <div>
                  <img src={singleVideo.snippet.thumbnails.high.url} alt="" />
                  <h1>{singleVideo.snippet.title}</h1>
                  <p>{singleVideo.snippet.description}</p>
                </div>
                // console.log(singleVideo.snippet.thumbnails.high.url);
                );
            })}
        </section>
    </>
  )
}

export default Apple
