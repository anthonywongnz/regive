import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useAxiosGet } from "../hooks/HttpRequests";

const url = `https://a18001cb.us-south.apigw.appdomain.cloud/inventory-management/items`;  
function Listing() {
  let product = useAxiosGet(url);

  let content = null;

  if (product.error) {
    console.error(product.error);
    content = <p>There was a problem with retrieving this product. Are you logged in? </p>;
  }

  if (product.loading) {
    content = <Loader />;
  }

  if (product.data) {
    console.log(product)
    return (content = product.data.entries.map((p) => (
      <div>
        <div key={p.id}>Category: {p.category} Items: {JSON.stringify(p.items)} Message: {p.message}</div>
      </div>
      )));
  }


// category: "Kitchen"
// createdAt: "2020-07-25T02:47:06.923Z"
// delivery_option: "PICKUP"
// items
// location
// message
// name
// photos
// pickup_loc

  return <div>{content}</div>;
}

export default Listing;
