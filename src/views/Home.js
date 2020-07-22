import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useAxiosGet } from "../hooks/HttpRequests";

import { Link } from "react-router-dom";

import './home.css';

function Home() {
  let content = null;

  // TODO: Move this to a component
  content =
  <div className="container">
    <h1 className="flex justify-center font-bold text 2xl mb-3">Connecting you and the community to regive items to one another.</h1>
    <p className="flex justify-center mb-3">Regive is an opportunity for you to give any items, you have to others in the community who are in need for it.</p>

    <Link to="/donate">
      <button className="w-full bg-transparent text-black font-bold py-2 px-4 border border-black rounded" style={{ minWidth: 300}}>
        Let's start regiving
      </button>
    </Link>

    <div className="Image__container">
      <img className="Home__Image" src="/Humaan-Giving.png" alt="Stuff"/>
      <img className="Home__Image" src="/Humaan-Receiving.png" alt="Stuff"/>
    </div>

    <hr className="mb-4" width="300"></hr>

    <h3 className="flex justify-center mb-3">Do you have items to give away that still could be valuable for someone who may be in need for it?</h3>

    <div className="flex items-center justify-center">
      <Link to="/donate">
        <button className="mb-10 bg-transparent text-black font-bold py-2 px-4 border border-black rounded" style={{ minWidth: 300}}>
          I have items to donate
        </button>
      </Link>
    </div>

    <hr className="mb-4" width="300"></hr>

    <h3 className="mb-3">Have you recently moved to a new location and are in need of certain items at a low cost?</h3>

    <div className="flex items-center justify-center">
      <Link to="/about">
        <button className="mb-10 bg-transparent text-black font-bold py-2 px-4 border border-black rounded" style={{ minWidth: 300}}>
          I am seeking for donations
        </button>
      </Link>
    </div>

    <hr className="mb-4" width="300"></hr>

    <h1 className="font-bold text 2xl mb-3">It’s time to declutter items in our lives.</h1>
    <p className="mb-3">Beloved items at second-hand shops are scattered and we keep buying more things.</p>

    <h2 className="font-bold text 2xl mb-1 p-5 text-right" style={{paddingTop: 65 }}>Give unconditionally.</h2>
    <p className="mb-3 text-right" style={{ paddingBottom: 79}}>Regive understands that every one wants transparency to know where their donation is going towards.</p>

    <h1 className="font-bold text 2xl mb-3">Help us spread the world!</h1>
    <img className="" src="/Humaaans-Connect.png" alt="Bruhh no SEO"/>
    <p className="mb-3">We want to minimise the need for constant spending and connecting communities with donation charities.</p>

    <h2 className="font-bold text 2xl mb-3">In once sentence:</h2>
    <p className="mb-3 bg-yellow-200 OneSentence_Box">Regive is a site that allows you to give any items that you don’t need to others who may need it now. www.regive.nz</p>

  <div className="flex items-center justify-center">
    <Link to="/about">
      <button className="mb-10 bg-transparent text-black font-bold py-2 px-4 border border-black rounded" style={{ minWidth: 300}}>
        Let’s start regiving
      </button>
    </Link>
  </div>


  </div>


  return (
    <div>
      {content}
    </div>
  );
}

export default Home;
