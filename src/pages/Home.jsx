import React from "react";
import Background from "../Components/Background/Background";
import Hero from "../Components/Hero/Hero";
import { useEffect, useState } from "react"

const Home = () => {
  let heroData = [
    {text1: "Dive into",text2:"what you love"},
    {text1: "Indulge",text2:"your passions"},
    {text1: "Give in to",text2:"your passions"},
  ]
  const [herocount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);
  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 3000);
  },[])
  return (
    <div>
      {/*
      <h1>Welcome to the Home Page</h1>
      <p>This is the homepage of the app.</p>*/}
      <Background playStatus={playStatus} heroCount={herocount}/>
      
      <Hero 
      setPlayStatus={setPlayStatus}
      heroData={heroData[herocount]}
      heroCount={herocount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
      
    </div>
    
  );
};

export default Home;
