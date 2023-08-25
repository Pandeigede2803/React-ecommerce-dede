import React from "react";
import { PageHero } from "../components";
import toko from "../assets/toko.png";
import "./aboutpage.css";

const AboutPage = () => {
  return (
    <>
      <PageHero title="about" />
      <section className="about">
        <div className="grid grid-cols-2 gap-1 my-10 mx-10">
          <div className="mx-auto my-12 w-3/5">
            <img src={toko} alt="nice desk" className="w-full" />
          </div>
          <div className="w-full">
            <article className="">
              <div className="title">
                <h2 className="text-2xl font-extrabold text-left">Tentang Kami</h2>
                <div className=" w-16 mt-2 border-yellow-700 border-b-4 "></div>
              </div>
              <p className="mt-4">
                Berawal dari kebiasaan bandingin harga antar toko, lahirlah Cek
                Toko Sebelah di 1998. Hingga sekarang telah berkembang melayani
                300 Kota di Indonesia.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
