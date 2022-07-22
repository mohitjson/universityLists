//Api calling
import React, {useState, useEffect} from 'react';
import axios from 'axios';

async function apiData() {

  const BASE_URL = 'https://machinetest.encureit.com/country.php';
  var formdata = new FormData();
  formdata.append('country', 'India');

  return await axios
    .post(BASE_URL, formdata)
    .then(response => {
      response.data;
    })
    .then(result => result);
}
export default apiData;
