import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const booksUrl = 'https://edwardtanguay.netlify.app/share/books.json';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [books, setBooks] = useState([]);
	const siteTitle = 'The Online Book Club';

	useEffect(() => {
		(async () => {
			const _books = (await axios.get(booksUrl)).data;
			console.log(_books);
			setBooks(_books);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				siteTitle,
				books,
				setBooks
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
