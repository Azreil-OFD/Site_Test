import React, { useState } from 'react';

function App() {

	const [state, setCount] = useState(5);
	const [value, setValue] = useState("текст в инпуте");
	function increment() {
		setCount(state + 1);
	}

	function decrement() {
		setCount(state - 1);
	}

	return (
		<div className="App">
			<h1>{state}</h1>

			<button onClick={increment} >Increment</button>
			<button onClick={decrement} >Decrement</button>

		</div>
	);
}

export default App;

//hello
