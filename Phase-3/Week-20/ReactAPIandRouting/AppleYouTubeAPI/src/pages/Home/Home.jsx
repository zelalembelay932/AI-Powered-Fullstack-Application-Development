import React from 'react'
import Alert from '../../components/Alert/Alert'
import IpadPro from '../../components/IpadPro/IpadPro'
import MacBookAir from "../../components/MacBookAir/MacBookAir";
import Iphone11Pro from '../../components/IPhone11Pro/IPhone11Pro'
import Iphone11 from "../../components/IPhone11/IPhone11";

import AppleTvWatch from "../../components/AppleTvWatch/AppleTvWatch";
import ArcadeAppleCard from "../../components/ArcadeAppleCard/ArcadeAppleCard";

import Apple from "../../components/Apple/Apple";


const Home = () => {
  return (
    <>
        <Alert/>
        <IpadPro/>
        <MacBookAir />
        <Iphone11Pro/>
        <Iphone11/>
        <AppleTvWatch />
        <ArcadeAppleCard/>
        {/* <Apple/> */}
    </>
  )
}

export default Home
