import { Book } from '../components/Book';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageBooks = () => {
	const { books } = useContext(AppContext);

	return (
		<div className="page_books">
			{books.length > 0 && (
				<>
					<h2>{books.length} Books</h2>

					<div className="books">
						{books.map((book, index) => {
							return <Book key={index} book={book} />;
						})}
					</div>
				</>
			)}
		</div>
	);
};
