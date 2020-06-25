import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useAxiosGet } from "../hooks/HttpRequests";

function Home() {
  let content = null;

  content =
  <div>
    <h1 className="font-bold text 2xl mb-3">Connecting you and the community to regive items to one another.</h1>
    <h2 className="">Regive is an opportunity for you to give any items, you have to others in the community who are in need for it.</h2>
    
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Let's start regiving
    </button>
  </div>
  // const url = `https://5ec46426628c160016e7107d.mockapi.io/products?page=1&limit=10`;

  // let products = useAxiosGet(url);

  // if (products.error) {
  //   content = <p>There was a problem with retrieving the products.</p>;
  // }

  // if (products.loading) {
  //   content = <Loader />;
  // }

  // if (products.data) {
  //   content = products.data.map((product) => (
  //     <div key={product.id}>
  //       <ProductCard product={product} />
  //     </div>
  //   ));
  // }

  return (
    <div>
      {/* <h1 className="font-bold text 2xl mb-3">Best Sellers</h1> */}
      {content}
    </div>
  );
}

export default Home;
