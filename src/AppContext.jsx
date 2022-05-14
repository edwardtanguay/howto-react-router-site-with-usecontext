import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const booksUrl = 'https://edwardtanguay.netlify.app/share/books.json';
const membersUrl = 'https://edwardtanguay.netlify.app/share/employees.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const siteTitle = 'The Online Book Club';
	const [books, setBooks] = useState([]);
	const [members, setMembers] = useState([]);

	useEffect(() => {
		(async () => {
			const _books = (await axios.get(booksUrl)).data;
			setBooks(_books);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			setMembers((await axios.get(membersUrl)).data);
		})();
	}, []);
	return (
		<AppContext.Provider
			value={{
				siteTitle,
				books,
				setBooks,
				members
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
