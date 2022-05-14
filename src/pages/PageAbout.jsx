export const PageAbout = ({ books, members }) => {
	return (
		<div className="page_about">
			<h2>About</h2>
			<p>We have been a club for 5 years now.</p>
			<p>
				We would love to have you as member #{members.length + 1} and
				hear your suggestion for book #{books.length + 1}, please write
				to us if interested.
			</p>
		</div>
	);
};
