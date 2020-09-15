import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import "./App.css";
import db from "./firebase.js";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  // console.log(input);
  // when the app load we need to get from db and on change
  useEffect(() => {
    //this code run on app.js load
    db.collection("todos").orderBy('timestamp','desc').onSnapshot((snapshot) => {
      // console.log(snapshot.docs.map((doc) => doc.data())); 
      setTodos(snapshot.docs.map((doc) => ({id:doc.id,todo: doc.data().todo})));
    });
  }, []);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); // will stop refresh
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log("boooo");
    // setTodos([...todos, input]); 
    setInput(""); //clear the input
  };
  return (
    <div className="App">
      <h1>Hello world </h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>

        <ul>
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
