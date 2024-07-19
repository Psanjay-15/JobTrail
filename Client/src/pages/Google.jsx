import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
import axios from 'axios';
function Google() {
    const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

    const {token} = useParams()
    useEffect(() => {
        sessionStorage.setItem("accessToken", token);
        axios
      .get(
        BASE_URL + "/users/currentuser",
        
        {
            headers: {
                Authorization: "Bearer " + token,
              },
        }
      )
      .then((res) => {
          console.log(res)
        // sessionStorage.setItem("accessToken", res.data.data.accessToken);
        sessionStorage.setItem("email", res.data.data.email);
        sessionStorage.setItem("userName", res.data.data.fullname);
        // window.location.href = "/application";
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }).finally(()=>{
        window.location.href="/application"
      });
  }, [])

  return (
    <div></div>
  )
}

export default Google
