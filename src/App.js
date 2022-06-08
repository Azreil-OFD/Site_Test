import React, { useState } from 'react';
import Counter from './components/Counter';
import Post from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
	  const [YapPost, setYapPost] = useState([
		{ id : 1 , title : 'Python' , body: 'Самый крутой язык программирования'},
		{ id : 2 , title : 'C#' , body: 'Лучшйи в играх и формах'},
		{ id : 3 , title : 'C++' , body: ', _, тот самый сын мамаиной подруги'}
	  ]);

	  const [hyperTextPost, setPosts] = useState([
		{ id : 1 , title : 'HTML' , body: 'Единственный язык гипертектовой разметки'},
		{ id : 2 , title : 'CSS' , body: 'Каскадные таблицы стилей '},
		{ id : 3 , title : 'JavaScript' , body: 'Лучший в веб фронтенте...единетвенный в своём роде'},
	  ]);


	return (
		<div className="App">

			<div class="app_content start_content">
				<strong class="app_content_title" >Приложение: Counter</strong>
				<Counter />
			</div>

			<div class="app_content">
				<strong class="app_content_title" >Приложение: PostList</strong>
				
				<PostList posts={YapPost} title="Языки программирования"/>
				<PostList posts={hyperTextPost} title="WEB языки"/>
			</div>

		</div>
	);
}

export default App;
