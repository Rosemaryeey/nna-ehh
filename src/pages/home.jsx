import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./home.css";
import Wo from "../assets/wo.jpeg";
import Isi from "../assets/isi.svg"
import Isi2 from "../assets/isi2.svg";
import Band from "../assets/band.jpeg"
const Home = () => {
  return (
    <>
      <div className="w-[100%] h-[500vh] flex flex-col items-center  ">
        <div className="w-[100%] h-[140vh] flex items-center justify-center bg-[url('./assets/bg.jpeg')] border-2">
          <div className="w-[90vw] h-[140vh] flex items-center border-2  ">
            <div className=" flex flex-col items-start justify-around h-[65vh] w-[60vw] ">
              <h1 className=" head  font-bold ">
                NEXT-GENERATION ESPORTS TEAM
              </h1>
              <p className=" md:text-2xl text-sm text-white/50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quis
                odio vestibulum nunc, neque integer purus.
              </p>

              <div className=" flex items-start justify-between w-[40vw] h-[20vh] ">
                <Link className=" hm border-2  border-[#f32c46] bg-[#f32c46]">
                  {" "}
                  BUY MERCH
                </Link>
                <Link className=" btn border-2   "> MEET THE TEAM</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[150vh] w-[90vw] flex border-2 items-center  wrapper">
          <div className=" content flex flex-col items-start justify-around h-[50vh] w-[50vw] border-2">
            <h2 className="head2 font-bold">ABOUT THE DRAGO ESPORTS TEAM</h2>
            <p className="md:text-xl text-sm text-white/50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              convallis tortor, malesuada vitae tortor. Dignissim ac aliquam ut
              sed eu. Eget nulla elit, ac habitant.
            </p>
            <Link className=" hm border-2  border-[#f32c46] bg-[#f32c46]">
              {" "}
              MEET THE TEAM
            </Link>
          </div>
          <div className=" video-wrapper">
            <img className="w-[100%] h-[100%]" src={Wo} alt="" />
          </div>
          <div className="bg-about" />
        </div>

        <div className=" flex flex-col items-center justify-around h-[200vh] w-[100%]">
          <div>
            <h1>UPCOMING MATCHES</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              convallis tortor, malesuada vitae tortor. Dignissim ac aliquam ut
              sed eu.
            </p>
          </div>

          <div className="band  ">
            <div className="band1  flex items-center justify-around">
              <img src={Band} alt="" className="f" />
              <div className=" flex items-center justify-between w-[80vw]">
                <div className=" text-justify">
                  <p>TERRA</p>
                  <h1 className="text-4xl font-bold">
                    INTERNARIONAL TOURNAMENT 2022
                  </h1>
                  <div className="flex w-[30vw] items-center justify-between">
                    <div>December 10 ,2022 ,12:00PM</div>
                    <div>Watch Stream</div>
                  </div>
                </div>
                <div className=" flex items-center  justify-between font-bold text-4xl w-[23vw] border-2">
                  <img src={Isi} alt="" width={100} />
                  <h2 className=""> VS</h2>
                  <img src={Isi2} alt="" width={100} />
                </div>
              </div>
            </div>
            <div className="band2"></div>
            <div className="band3"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
