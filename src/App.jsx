import { useState, useEffect } from 'react';
import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageBooks } from './pages/PageBooks';
import { PageMembers } from './pages/PageMembers';
import { PageAbout } from './pages/PageAbout';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

const booksUrl = 'https://edwardtanguay.netlify.app/share/books.json';
const membersUrl = 'https://edwardtanguay.netlify.app/share/employees.json';
const siteTitle = "The Online Book Club";

function App() {
	const [books, setBooks] = useState([]);
	const [members, setMembers] = useState([]);

	useEffect(() => {
		(async () => {
			setBooks((await axios.get(booksUrl)).data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			setMembers((await axios.get(membersUrl)).data);
		})();
	}, []);

	return (
		<div className="App">
			<h1>{siteTitle}</h1>
			<hr />
			<NavLink to="/welcome">Welcome</NavLink> |{' '}
			<NavLink to="/books">Books</NavLink> |{' '}
			<NavLink to="/members">Members</NavLink> |{' '}
			<NavLink to="/about">About</NavLink>
			<hr />
			<Routes>
				<Route
					path="/welcome"
					element={<PageWelcome books={books} members={members} />}
				/>
				<Route path="/books" element={<PageBooks books={books} setBooks={setBooks} />} />
				<Route path="/members" element={<PageMembers members={members} />} />
				<Route path="/about" element={<PageAbout books={books} members={members} siteTitle={siteTitle} />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
