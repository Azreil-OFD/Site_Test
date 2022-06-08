import React, { useState } from 'react';
import Counter from './components/Counter';
import Post from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
	  const [posts, setPosts] = useState([
		{ id : 1 , title : 'JavaScript' , body: 'Лучший в веб фронтенте...единетвенный в своём роде'},
		{ id : 2 , title : 'Python' , body: 'Самый крутой язык программирования'},
		{ id : 3 , title : 'C#' , body: 'Лучшйи в играх и формах'},
		{ id : 4 , title : 'C++' , body: ', _, тот самый сын мамаиной подруги'}
	  ]);


	return (
		<div className="App">

			<div class="app_content start_content">
				<strong class="app_content_title" >Counter</strong>
				<Counter />
			</div>

			<div class="app_content">
				<strong class="app_content_title" >Список постов</strong>
				
				<PostList posts={posts} />
				
			</div>

		</div>
	);
}

export default App;
