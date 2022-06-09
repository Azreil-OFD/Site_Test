import React, { useState } from 'react';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import './styles/App.css';
function App() {
	  const [posts, setPosts] = useState([
		{
			id: 1,
			title: 'JavaScript',
			body: 'JavaScript - язык программирования :)'
		},
		{
			id: 2,
			title: 'JavaScript 1',
			body: 'JavaScript - язык программирования :)'
		},
		{
			id: 3,
			title: 'JavaScript 2',
			body: 'JavaScript - язык программирования :)'
		},
		{
			id: 4,
			title: 'JavaScript 3',
			body: 'JavaScript - язык программирования :)'
		},
	  ])
	return (
		<div className="App">
			{ posts.map(post => <PostItem key={post.id} post={post} />) }

			
		</div>
	);
}

export default App;
