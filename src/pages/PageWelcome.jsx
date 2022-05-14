import { useContext } from 'react';
import { AppContext } from '../AppContext';

export const PageWelcome = ({members}) => {
	const { books } = useContext(AppContext);
	
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>We have {members.length} members reading {books.length} books.</p>
		</div>
	)
}