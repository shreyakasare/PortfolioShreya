import React, { useEffect } from 'react'
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/current.json',
  params: {q: '53.1,-0.13'},
  headers: {
    'X-RapidAPI-Key': 'c9a708dcbcmshcf0764443654c5bp1e2a64jsn956c719dff77',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

export const Layout = () => {
  useEffect(async () =>{
    try {
      const response = await axios.request(options);
      console.log(response.data ,"Response");
    } catch (error) {
      console.error(error);
    }
  })

  return (
    <div>Layout</div>
  )
}

