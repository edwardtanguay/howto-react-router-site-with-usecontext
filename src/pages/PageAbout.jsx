import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageAbout = ({ books, members }) => {
	const { siteTitle } = useContext(AppContext);

	return (
		<div className="page_about">
			<h2>About</h2>
			<p>{siteTitle} has existed for 5 years.</p>
			<p>
				We would love to have you as member #{members.length + 1} and
				hear your suggestion for book #{books.length + 1}, please write
				to us if interested.
			</p>
		</div>
	);
};
