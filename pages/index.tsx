import Head from "next/head";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import yousef from "../public/yousef.png";
import photogrphy from "../public/photopng.png";
import filmmaker from "../public/film.jpg";
import interior from "../public/interior.jpg";
import exterior from "../public/exterior.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";
import { Footer } from "./Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("cv.png").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "cv.png";
        alink.click();
      });
    });
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio Yousef</title>
        <meta
          name="description"
          content="yousef karzoun portfolio Generated by create next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logobalck.png" />
      </Head>
      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            {/* <Image src={logo} alt="logo" /> */}
            <h1 className="text-xl font-burtons">portfolio</h1>

            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <button
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  onClick={onButtonClick}
                >
                  Resume
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              Yousef Karzoun
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Photographer & Architecture Engineer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              I’m Phtographer & Filmmaker. Join me down below!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={yousef} layout="fill" objectFit="cover" alt="photo" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              i offer beautiful{" "}
              <span className="text-teal-500">Photography</span> shoot for
              Building or portrait or graduation & wedding party and i do
              creative <span className="text-teal-500">promo video </span>
              and i make professional{" "}
              <span className="text-teal-500">INTERIOR</span> &{" "}
              <span className="text-teal-500">EXTERIOR</span> Design.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image
                src={photogrphy}
                width={135}
                height={135}
                alt="img"
                className="ml-auto mr-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2">Photographer</h3>
              <p className="py-2">
                make beautiful shoots for Building , Portrait , Graduation ,
                Wedding , Photojournalism , Sports Events.
              </p>
              <h4 className="py-4 text-teal-600">Photogrpher Tools I Use</h4>
              <p className="text-gray-800 py-1">DSLR Camera</p>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Lightroom</p>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image
                src={filmmaker}
                width={100}
                height={100}
                alt="img"
                className="ml-auto mr-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Promo Maker</h3>
              <p className="py-2">
                making promotional videos for your product , industry , brand
                ,events.
              </p>
              <h4 className="py-4 text-teal-600">Promo Tools I Use</h4>
              <p className="text-gray-800 py-1">premiere pro</p>
              <p className="text-gray-800 py-1">DSLR camera</p>
              <p className="text-gray-800 py-1">Film Camera</p>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image
                src={interior}
                width={100}
                height={100}
                alt="img"
                className="ml-auto mr-auto rounded-3xl shadow-md"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Interior Design
              </h3>
              <p className="py-2">
                make indoor spaces functional, safe, and beautiful by
                determining space requirements and selecting essential and
                decorative items, such as colors, lighting, and materials.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">3ds Max</p>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10 flex-1 dark:bg-white">
              <Image
                src={exterior}
                width={100}
                height={100}
                alt="img"
                className="ml-auto mr-auto rounded-3xl shadow-md"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Exterior Design
              </h3>
              <p className="py-2">
                do both physical structures as well as personal and artistic
                designs such as paint color, roof shape and material, decks,
                patios, gardens, and more.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">3ds Max</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am Yousef Karzoun,{" "}
              <span className="text-teal-500">Architecture Engineer</span> from
              aleppo, Syria. I have rich experience in Photographer and Promo
              Making, also I am good at and Enterior and Exterior Design.
            </p>
          </div>
          <h3 className="text-3xl py-1 dark:text-white mt-5">Photography:</h3>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover w-full h-full"
                layout="responsive"
                src={web1}
                alt="img"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover w-full h-full "
                layout="responsive"
                src={web2}
                alt="img"
              />
            </div>
          </div>
          <h3 className="text-3xl py-1 dark:text-white mt-5">
            Promotional Video:
          </h3>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover w-full h-full"
                layout="responsive"
                src={web1}
                alt="img"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover w-full h-full "
                layout="responsive"
                src={web2}
                alt="img"
              />
            </div>
          </div>
          <h3 className="text-3xl py-1 dark:text-white mt-5">
            Interior Design:
          </h3>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover w-full h-full"
                layout="responsive"
                src={web1}
                alt="img"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover w-full h-full "
                layout="responsive"
                src={web2}
                alt="img"
              />
            </div>
          </div>
          <h3 className="text-3xl py-1 dark:text-white mt-5">
            Exterior Design:
          </h3>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover w-full h-full"
                layout="responsive"
                src={web1}
                alt="img"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover w-full h-full "
                layout="responsive"
                src={web2}
                alt="img"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}