import "./Login.scss";
import { useState } from "react";

// async function loginUser(credentials) {
//   return fetch("https://fakestoreapi.com/auth/login", {
//     method: "POST",
//     body: JSON.stringify(credentials),
//   })
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }

export default function Login(props) {
  const setToken = props.setToken;

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  function userToken() {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  }

  function handleUserName(event) {
    setUserName(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    userToken();
    // const token = await loginUser({
    //   username,
    //   password,
    // });
    // // setToken(token);
    // console.log(token);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={handleUserName} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={handlePassword} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
