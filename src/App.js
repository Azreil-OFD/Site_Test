import React, { useState } from 'react';
import Counter from './components/Counter';
import Post from './components/post';
import './styles/App.css';

function App() {
	
	return (
		<div className="App">
			<div class="app_content start_content">
				<strong>Counter</strong>
				<Counter />
			</div>
			<div class="app_content">
				<strong>Post</strong>
				<Post post={ { id : 1 , title : 'JavaScript' , body: 'Description'} } />

			</div>
			

		</div>
	);
}

export default App;
