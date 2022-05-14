export const PageBooks = ({ books, setBooks }) => {

	const handleDeleteBook = (book) => {
		const _books = books.filter((m) => m.id !== book.id);
		setBooks(_books);
	};

	const handleEditBook = (book) => {
		const _books = books.map((m) => {
			if (m.id === book.id) {
				m.title = m.title + ' - FINISHED';
			}
			return m;
		});
		setBooks(_books);
	};

	return (
		<div className="page_books">
			<h2>{books.length} Books</h2>

			<div className="books">
				{books.map((book, index) => {
					return (
						<div key={index} className="book">
							<img
								src={`https://edwardtanguay.netlify.app/share/images/books/${book.idcode}.png`}
								alt="book cover"
							/>
							<div className="info">
								<div className="title">{book.title}</div>
								<div className="description">
									{book.description}
								</div>

								<div className="buttons">
									<button
										onClick={() => handleDeleteBook(book)}
									>
										Delete
									</button>
									<button
										onClick={() => handleEditBook(book)}
									>
										Edit
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
