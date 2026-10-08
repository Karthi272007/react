import React, { useState } from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, Provider } from "react-redux";


// Q1. Counter Slice-----------------------------------------------------------------------------------

const numberSlice = createSlice({
  name: "number",

  initialState: {
    value: 0,
  },

  reducers: {
    increase: (state) => {
      state.value += 1;
    },

    decrease: (state) => {
      state.value -= 1;
    },
  },
});

export const { increase, decrease } = numberSlice.actions;


// Q4. Todo Slice---------------------------------------------------------------------------------------

const taskSlice = createSlice({
  name: "task",

  initialState: {
    todos: [],
  },

  reducers: {
    addTask: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    toggleTask: (state, action) => {
      const todo = state.todos.find(
        (todo) => todo.id === action.payload
      );

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTask, toggleTask } = taskSlice.actions;


// Q5. Combine Slices------------------------------------------------------------------------------------

const store = configureStore({
  reducer: {
    number: numberSlice.reducer,
    task: taskSlice.reducer,
  },
});


// Q2 & Q3. Counter Component-------------------------------------------------------------------------------------

const NumberCounter = () => {
  const count = useSelector((state) => state.number.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => dispatch(increase())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrease())}>
        Decrement
      </button>
    </div>
  );
};


// Q4. Todo Component-----------------------------------------------------------------------------------

const TaskList = () => {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.task.todos);

  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (text.trim() === "") return;

    dispatch(addTask(text));
    setText("");
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={handleAddTask}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTask(todo.id))}
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};


// Main App----------------------------------------------------------------------------------------------

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NumberCounter />

        <br></br>
        <br></br>

        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
