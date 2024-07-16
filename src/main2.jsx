import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimatedBox from "./components/scrollanimation";
import Logo2 from "./assets/logo2.svg";
import Logo3 from "./assets/logo3.svg";
import Side from "./assets/side.jpg";
import Side2 from "./assets/side2.png";
import Box1 from "./assets/box1.png";
import Box2 from "./assets/box2.png";
import Box3 from "./assets/box3.jpg";
import Home from "./assets/home.jpg";
import About from "./assets/about.png";
import Contact from "./assets/contact.png";
import Team from "./assets/team.png";
import Product from "./assets/product.png";
import Blog from "./assets/blog.png";
import Post from "./assets/post.png";
import Single from "./assets/single.png";
import Shop from "./assets/shop.png";
import Sponsors from "./assets/sponsors.png";
import P404 from "./assets/404.png";
import Protected from "./assets/protected.png";
import Aside from "./assets/aside.png";
import Aside2 from "./assets/aside2.png";
import Aside3 from "./assets/aside3.png";
import Aside4 from "./assets/aside4.png";
import Aside5 from "./assets/aside5.png";
import Pics from "./assets/pics.png"
import Logo4 from "./assets/logo4.svg"
function Main2() {
  return (
    <main className=" flex items-center flex-col w-[100%]">
      {/* slide one  --------- */}
      <div className="flex items-center md:justify-evenly justify-end flex-col md:w-[100%] w-[100%] md:h-[95vh] h-[90vh]   ">
        <div className="flex items-center justify-end   flex-col md:w-[60vw] w-[99vw] md:h-[55vh] h-[60vh]  ">
          <div className=" flex flex-col items-center justify-around    ">
            <h1 className="h1  font-bold text-white/95 ">
              ESPORTS X WEBFLOW TEMPLATE
            </h1>
            <p className="   p font-medium text-white/60  ">
              Presenting eSports X, the ultimate eSports & Gaming Webflow
              Template
            </p>
          </div>

          <div className=" but    ">
            <Link
              to=""
              className=" hm border-2   border-[#f32c46] bg-[#f32c46] font-bold"
            >
              {" "}
              BUY TEMPLATE
            </Link>
            <Link to="" className="btn border-2 font-bold ">
              EXPLORE PAGES
            </Link>
          </div>
        </div>
      </div>

      {/* ------------slide two */}
      <div className="flex items-center justify-evenly  w-[100%] h-[75vh] ">
        <ScrollAnimatedBox />
      </div>

      {/* ------------slide three */}
      <div className=" isi  ">
        <div className=" h2 flex  items-center justify-end  py-3">
          <div className=" h-[20vh] flex flex-col items-center justify-around">
            <h1 className="h font-bold ">WHAT IS INCLUDED IN ESPORTS X</h1>
            <p className="p font-medium ">
              eSports X Webflow Template includes over 15 pages in total,and
              with more than 35 sections.
            </p>
          </div>
        </div>
        <div className=" con">
          <div>
            <img className="box" src={Box1} alt="" />
            <div className="box2 num">
              {" "}
              <span className="tw ">15+ </span>PAGES
            </div>
          </div>
          <div>
            <img className="box" src={Box2} alt="" />
            <div className="box2 num">
              {" "}
              <span className="tw">35+ </span>SECTIONS
            </div>
          </div>
          <div>
            <div>
              <img className="box" src={Box3} alt="" />
            </div>
            <div className=" box2   num ">
              {" "}
              <div>
                {" "}
                <span className="tw ">25+ </span>STYLE &{" "}
              </div>
              <div>SYMBOLS</div>
            </div>
          </div>
        </div>

        <div className=" sec ">
          <div className=" in bg-[#11161e]  py-5 px-14  flex items-center justify-center">
            <div className="h-[60vh] flex flex-col items-start justify-around">
              <img src={Logo2} alt="" />
              <h1 className="  num ">FIGMA FILE INCLUDED</h1>
              <p>
                Send us an email to <a href="">esports@brixtemplates</a>.com
                with your <br /> purchase receipt, and we will send you the
                editable Figma file for the ESports X template.
              </p>
              <Link className="button border-2 ">REQUEST FIGMA FILE</Link>
            </div>
          </div>

          <img className=" ig" src={Side} alt="" />
        </div>

        <div className=" sec1 ">
          <img className="ig " src={Side2} alt="" />
          <div className="in   pd flex items-center justify-center">
            <div className="h-[60vh] flex flex-col items-start justify-around ">
              <img src={Logo3} alt="" />
              <h1 className=" nu ">
                LOOKING FOR MORE AMAZING WEBFLOW TEMPLATES?
              </h1>
              <p>
                Take a look at our collection of 100+ premium Webflow Templates
                at BRIX Templates.
              </p>
              <Link className="button border-2 ">BROWSER TEMPLATE</Link>
            </div>
          </div>
        </div>

        <div className=" h-[30vh] items-start flex justify-center  w-[95vw]">
          <Link className="hm border-2  border-[#f32c46] bg-[#f32c46]">
            BUY TEMPLATE
          </Link>
        </div>
      </div>
      {/* --------------------slide four */}
      <div className=" is  three">
        <div className=" h2">
          <div className="  flex flex-col items-center justify-around h-[20vh]   py-3">
            <h1 className="h font-bold ">MAIN PAGE</h1>
            <p className="p font-medium ">
              Take a look at the main pages included in the eSports X Template.
            </p>
          </div>
        </div>
        <div className=" ">
          <div className="bo">
            <Link className="bo1">
              <img className="h-[50vh]  i" src={Home} alt="" />
              <div className="box3 nm  o"> HOME</div>
            </Link>
            <Link className="bo2">
              <img className="h-[50vh] i " src={About} alt="" />
              <div className="box3 nm "> ABOUT</div>
            </Link>{" "}
            <Link className="bo3">
              {" "}
              <img className="md:h-[50vh] i  " src={Contact} alt="" />
              <div className=" nm box3 "> CONTACT</div>
            </Link>
            <Link className="bo4">
              <img className="h-[50vh] i" src={Team} alt="" />
              <div className="box3 nm ">Team </div>
            </Link>
            <Link className="bo5">
              <img className="h-[50vh] i" src={Product} alt="" />
              <div className="box3 nm ">SINGLE PRODUCT </div>
            </Link>
            <Link className="bo6">
              <img className="h-[50vh] i" src={Blog} alt="" />
              <div className="box3 nm "> BLOG</div>
            </Link>
            <Link className="bo7">
              <img className="h-[50vh] i" src={Post} alt="" />
              <div className="box3 nm "> BLOG POST</div>
            </Link>
            <Link className="bo8">
              <img className="h-[50vh] i" src={Single} alt="" />
              <div className="box3 nm ">TEAM SINGLE </div>
            </Link>
            <Link className="bo9">
              <img className="h-[50vh] i" src={Shop} alt="" />
              <div className="box3 nm ">SHOP </div>
            </Link>
            <Link className="bo10">
              <img className="h-[50vh] i" src={Sponsors} alt="" />
              <div className="box3 nm ">SPONSORS </div>
            </Link>
          </div>
        </div>
        <div className=" hi">
          <Link className=" hm md:border-2 border-0   border-[#f32c46] bg-[#f32c46]">
            {" "}
            BUY TEMPLATE
          </Link>
        </div>
      </div>

      {/* -------------------SLIDE FIVE */}
      <div className="   la">
        <div className=" l flex flex-col items-center justify-around  ">
          <div className="h2   ">
            <h1 className=" h    font-bold px-10 ">UTILITY PAGES</h1>
            <p className="p font-medium ">
              Take a look at the utility pages included in the eSports X
              Template.
            </p>
          </div>

          <div className="con pi   ">
            <div className="ia">
              <img className="box" src={P404} alt="" />
              <p className=" num box2 ">404 NOT FOUND</p>
            </div>
            <div className="ia">
              <img className=" box" src={Protected} alt="" />
              <p className=" num box2">PROTECTED PAGE</p>
            </div>
          </div>
          <div className=" hi">
            <Link className=" hm border-2  border-[#f32c46] bg-[#f32c46]">
              {" "}
              BUY TEMPLATE
            </Link>
          </div>
        </div>
      </div>
      <div className="three w-[100%]  flex flex-col items-center justify-around">
        <div className="h2  h-[50vh]   ">
          <h1 className=" h   text-5xl font-bold  pb-10 ">
            THE ESPORTS X WEBFLOW TEMPLATE ALSO COMES WITH MORE SURPRISES...
          </h1>
        </div>

        <div className=" sec   ">
          <div className=" ini  flex items-center justify-center">
            <div className=" ohi  b py-5  ">
              <h1 className="num ">3 HEADERS AND FOOTERS</h1>
              <p>
                With a total of 3 different headers and footers, you can easily{" "}
                customize the eSports X Webflow Template to fit your company
                needs and requirements.
              </p>
              <Link className=" hm border-2  border-[#f32c46] bg-[#f32c46]">
                {" "}
                BUY TEMPLATE
              </Link>
            </div>
          </div>

          <img className="ig0" src={Aside} alt="" />
        </div>

        <div className="sec1 ">
          <img className="ig0" src={Aside2} alt="" />
          <div className=" ini  flex items-center justify-center ">
            <div className=" ohi  py-5 pl-12  ">
              <h1 className="num ">3 NOTIFICATION BARS</h1>
              <p>
                If you are looking to get more sales, use one of our 3
                notification bars included in the eSports X Webflow Template,
                and start promoting your products or services.
              </p>
              <Link className=" hm border-2  border-[#f32c46] bg-[#f32c46]">
                {" "}
                BUY TEMPLATE
              </Link>
            </div>
          </div>
        </div>

        <div className="sec   ">
          <div className=" ini  flex items-center justify-center ">
            <div className=" ohi  py-5  ">
              <h1 className="num ">CUSTOM ICON SET</h1>
              <p>
                The eSports X Webflow Template includes 3 sets of custom icons
                (rounded, square and filled), so you can easily use more icon
                fonts in your template. No matter if you are looking to add
                another social media icon in the footer, or change the cart icon
                in the header, we got you covered.
              </p>
              <Link className=" hm border-2  border-[#f32c46] bg-[#f32c46]">
                {" "}
                BUY TEMPLATE
              </Link>
            </div>
          </div>

          <img className="ig0" src={Aside3} alt="" />
        </div>
        <div className="sec1 ">
          <img className="ig0" src={Aside4} alt="" />
          <div className=" ini  flex items-center justify-center ">
            <div className=" ohi  py-5 pl-12  ">
              <h1 className="num ">3 NOTIFICATION BARS</h1>
              <p>
                If you are looking to get more sales, use one of our 3
                notification bars included in the eSports X Webflow Template,
                and start promoting your products or services.
              </p>
              <Link className=" hm border-2  border-[#f32c46] bg-[#f32c46]">
                {" "}
                BUY TEMPLATE
              </Link>
            </div>
          </div>
        </div>

        <div className="sec ">
          <div className=" ini  flex items-center justify-center ">
            <div className=" ohi  py-5  ">
              <h1 className="num ">3 HEADERS AND FOOTERS</h1>
              <p>
                With a total of 3 different headers and footers, you can easily{" "}
                customize the eSports X Webflow Template to fit your company
                needs and requirements.
              </p>
              <Link className=" hm border-2  border-[#f32c46] bg-[#f32c46]">
                {" "}
                BUY TEMPLATE
              </Link>
            </div>
          </div>

          <img className="ig0" src={Aside5} alt="" />
        </div>

        <div className=" md:flex-row flex-col flex items-center justify-center w-[95vw] border-2 md:h-auto h-[300vh]">
          <div className="md:w-[45vw] w-[90vw] h-auto flex flex-col justify-center items-center bg-blue-600 text-white ia mb-20">
            <div className=" flex flex-col items-start justify-around md:w-[40vw] w-[80vw] py-20">
              <img src={Logo4} alt="" />
              <h2 className=" xl:text-6xl md:text-5xl text-xl font-bold py-6">
                BUY NOW ON WEBFLOW
              </h2>
              <p className="pb-10 ">
                Get the ESport X Webflow Template Today, and take your Website
                design to next level.
              </p>

              <div className="py-5 px-40 text-center bg-white text-blue-500">
                <Link>BUY TEMPLATE</Link>
              </div>
            </div>
            <div>
              <img src={Pics} alt="" className="w-[100vw]" />
            </div>
          </div>
          <div className="md:w-[45vw] w-[90vw] h-auto flex flex-col justify-center items-center bg-slate-50 text-black ia">
            <div className=" flex flex-col items-start justify-around md:w-[40vw] w-[80vw] py-20">
              <img
                src={Logo3}
                alt=""
                className="p-3 shadow-2xl shadow-black/20"
              />
              <h2 className=" xl:text-6xl md:text-5xl text-xl font-bold py-6">
                BROWSE ALL TEMPLATES
              </h2>
              <p className=" xl:text-6xl md:text-5xl text-xl font-bold pb-10 text-black/50">
                Looking for more template? Browse our collection of 100+ Webflow
                Templates on BRIXTemplate.com
              </p>
              <div>
                <Link className="py-5 px-40 text-center bg-blue-700 text-white">
                  EXPLORE MORE TEMPLATES
                </Link>
              </div>
            </div>
            <div>
              <img src={Side2} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main2;

// w-[60vw] h-[89vh]  items-center
