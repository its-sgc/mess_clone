import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
function App() {
  // usestate=variable in react
  // useeffect=run code on a condition in recat
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([
    // { username: "sheela", text: "hello" },
    // { username: "sarina", text: "hi what's up" },
  ]);
  const [username, setUsername] = useState("");
  console.log(input);
  console.log(message);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessage(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        )
      );
  }, []);
  useEffect(() => {
    //  run code here
    setUsername(prompt("Please enter your name"));
  }, []);
  const sendMessage = (event) => {
    // send messages goes here
    console.log("hello");
    event.preventDefault();
    // hard code
    // setMessage([...message, { username: username, message: input }]);
    // setInput("");

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img src="https://www.freeiconspng.com/thumbs/facebook-messenger-logo-png/facebook-messenger-28.png" />
      <h1>Welcome {username}</h1>
      <form className="app_form">
        <FormControl className="app_formControl">
          <InputLabel>type............</InputLabel>
          <Input
            className="app_input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            disable={!input}
            onClick={sendMessage}
            color="primary"
            variant="contained"
            className="app_icon"
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {message.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
