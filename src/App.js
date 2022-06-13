import React, { useState } from 'react';
import Counter from './components/Counter';
import Post from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
	const [YapPost, setYapPost] = useState([
		{ id: 1, title: 'Python', body: 'Самый крутой язык программирования' },
		{ id: 2, title: 'C#', body: 'Лучшйи в играх и формах' },
		{ id: 3, title: 'C++', body: ', _, тот самый сын мамаиной подруги' }
	]);

	const [hyperTextPost, setPosts] = useState([
		{ id: 1, title: 'HTML', body: 'Единственный язык гипертектовой разметки' },
		{ id: 2, title: 'CSS', body: 'Каскадные таблицы стилей ' },
		{ id: 3, title: 'JavaScript', body: 'Лучший в веб фронтенте...единетвенный в своём роде' },
	]);

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [selectYap, setSelectYap] = useState(0)

	const assNewPost = (e) => {
		e.preventDefault();
		console.log(selectYap);

	}

	const handler = (event) => {
        const value = event.value
        setSelectYap(value)
    }
	
	return (
		<div className="App">
			<div class="app_form">
				<form>
					<label>Введите название поста</label>
					<MyInput type="text" name="title" class="app_form_text" onChange={e=>setTitle(e.target.value)} />

					<label>Введите текст поста</label>
					<MyInput type="text" name="body" class="app_form_body" onChange={e=>setTitle(e.target.value)} />

					<label>Выберите категорию поста</label>
					<select name="user_profile_color_1" value={selectYap} onSelect={e=>setSelectYap(1)}>
						<option value="0">Выберите язык</option>
						<option onSelect={e=>setSelectYap(1)}>Языки программирования</option>
						<option value="2">WEB языки</option>
					</select>

					<MyButton onClick={assNewPost} type="submit" >Добавить пост</MyButton>
				</form>
			</div>


			<div class="app_content start_content">
				<strong class="app_content_title" >Приложение: Counter</strong>
				<Counter />
			</div>

			<div class="app_content">
				<strong class="app_content_title" >Приложение: PostList</strong>

				<PostList posts={YapPost} title="Языки программирования" />
				<PostList posts={hyperTextPost} title="WEB языки" />
			</div>


		</div>
	);
}

export default App;
