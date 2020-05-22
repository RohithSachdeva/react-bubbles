import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utilities/axiosWithAuth";

const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property // so props? 

  useEffect(() => {
    axiosWithAuth().get('/api/colors')
    .then(res => {
      setColorList(res.data)
    })
    .catch(err => {
      console.log('error', err)
    })
  }, [props])

  return (
    <>
      <ColorList props={props} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;



//data is called colors; /api/colors

//username === "Lambda School" && password === "i<3Lambd4"

// Construct an AXIOS request to retrieve a token from the server. You'll use this token to interact with the API
// Save the token to localStorage
// Build a axiosWithAuth module to create an instance of axios with the authentication header
// Build a PrivateRoute component and use it to protect a route that renders the BubblesPage component

// When BubblePages renders, make a GET request to fetch the color data for your bubbles.
// In ColorList.js, complete the saveEdit and deleteColor functions to make AJAX requests to the API to edit/delete data
// Watch and enjoy as your app responds to updates in the data. Check out Bubbles.js to see how this is built.