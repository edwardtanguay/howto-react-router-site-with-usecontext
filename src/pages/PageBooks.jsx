export const PageBooks = ({ books }) => {
	return (
		<div className="page_books">
			<h2>{books.length} Books</h2>

			<div className="books">
				{books.map((book, index) => {
					return (
						<div className="book">
							<img
								src={`https://edwardtanguay.netlify.app/share/images/books/${book.idcode}.png`}
								alt="book cover"
							/>
							<div className="info">
								<div className="title">{book.title}</div>
								<div className="description">
									{book.description}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
