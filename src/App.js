import "./styles.css";
import { useState } from "react";

export default function App() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "user_name") {
      setNameValue(value);
    } else if (name === "user_email") {
      setEmailValue(value);
    } else if (name === "user_message") {
      setMessageValue(value);
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <body>
        <p>This is my page</p>
        <form action="/my-handling-form-page" method="post">
          <form action="/my-handling-form-page" method="post">
            <ul>
              <li>
                <label for="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={nameValue}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label for="mail">Email:</label>
                <input
                  type="email"
                  id="mail"
                  name="user_email"
                  value={emailValue}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label for="msg">Message:</label>
                <textarea
                  id="msg"
                  name="user_message"
                  value={messageValue}
                  onChange={handleChange}
                ></textarea>
              </li>
              <li class="button">
                <button type="submit">Send your message</button>
              </li>
            </ul>
          </form>
        </form>
        <p>Name Value: {nameValue}</p>
        <p>Email Value: {emailValue}</p>
        <p>Message Value: {messageValue}</p>
      </body>
    </div>
  );
}
