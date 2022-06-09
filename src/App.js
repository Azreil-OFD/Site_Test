import React, { useState } from 'react';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {

	const [posts, setPosts] = useState([
		{id: 1, title: 'ФУНКЦИЯ', body: 'текст'},
		{id: 2, title: 'ФУНКЦИЯ 2', body: 'текст'},
		{id: 3, title: 'ФУНКЦИЯ 3', body: 'текст'}

	])


	return (
		<div className="App">
			<h1 style={{textAlign: 'center'}}>
				Список постов
				</h1>
		 { posts.map(post =>
			<PostItem key={post.id} post={post}>

			</PostItem>
			)}
		</div>
	);
}

export default App;

//hello
