import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"


function Login() {
    const navigate = useNavigate()
    const [authentication, setAuthentication] = useState({
      name: "",
      password: "",
    });
    // console.log(authentication);
    async function validation() {
        if (!authentication) {
          return;
        }
        const auth = await axios.post(
          "http://localhost:3008/api/admin",
          authentication
        )
        // console.log(auth.data.auth)
        if (auth.data.auth === true) {
          navigate("/orders");
        }
    }
    return (
      <div>
        <div className="max-w-[600px] rounded-md border-black mx-auto mt-24 border-2 p-28 flex flex-col gap-4">
          <input
            className="border-2 px-4 py-2 text-black"
            type="text"
            name="name"
            value={authentication?.name}
            placeholder="name"
            onChange={(e) => {
              setAuthentication({
                ...authentication,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <input
            className="border-2 px-4 py-2"
            type="text"
            name="password"
            value={authentication?.password}
            placeholder="passwords"
            onChange={(e) => {
              setAuthentication({
                ...authentication,
                [e.target.name]: e.target.value,
              });
            }}
          />
          <button
            onClick={validation}
            className="border-2 border-black px-4 py-1"
          >
            LogIn
          </button>
        </div>
      </div>
    );
}

export default Login