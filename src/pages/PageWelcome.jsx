import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = () => {
	const { books, members } = useContext(AppContext);
	
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>We have {members.length} members reading {books.length} books.</p>
		</div>
	)
}