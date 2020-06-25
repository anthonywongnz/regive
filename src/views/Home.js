import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useAxiosGet } from "../hooks/HttpRequests";

import { Link } from "react-router-dom";

function Home() {
  let content = null;

  content =
  <div className="container">
    <h1 className="flex justify-center font-bold text 2xl mb-3">Connecting you and the community to regive items to one another.</h1>
    <h2 className="flex justify-center mb-3">Regive is an opportunity for you to give any items, you have to others in the community who are in need for it.</h2>

    <Link to="/about">
      <button className="mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Let's start regiving
      </button>
    </Link>

    <hr className="mb-4" width="300"></hr>

    <h3 className="flex justify-center mb-3">Do you have items to give away that still could be valuable for someone who may be in need for it?</h3>

    <Link to="/about">
      <button className="mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        I have items to donate
      </button>
    </Link>

    <hr className="mb-4" width="300"></hr>

    <h3 className="mb-3">Have you recently moved to a new location and are in need of certain items at a low cost?</h3>

    <Link to="/about">
      <button className="mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        I am seeking for donations
      </button>
    </Link>

    <hr className="mb-4" width="300"></hr>

    <h3 className="mb-3">Are you volunteering or workingat a donating shop or centre that receives donations from your local community?</h3>

    <Link to="/about">
      <button className="mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        I am from a donation centre
      </button>
    </Link>


    <h1 className="font-bold text 2xl mb-3">It’s time to declutter items in our lives.</h1>
    <h2 className="mb-3">Beloved items at second-hand shops are scattered and we keep buying more things.</h2>

    <h1 className="font-bold text 2xl mb-3">Give unconditionally.</h1>
    <h2 className="mb-3">Regive understands that every one wants transparency to know where their donation is going towards.</h2>

    <h1 className="font-bold text 2xl mb-3">Help us spread the world!</h1>
    <h2 className="mb-3">We want to minimise the need for constant spending and connecting communities with donation charities.</h2>

    <h2 className="font-bold text 2xl mb-3">In once sentence:</h2>
    <h2 className="mb-3 bg-yellow-200">Regive is a site that allows you to give any items that you don’t need to others who may need it now.
www.regive.nz</h2>

    <Link to="/about">
      <button className="mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Let’s start regiving
      </button>
    </Link>


  </div>


  return (
    <div>
      {content}
    </div>
  );
}

export default Home;
