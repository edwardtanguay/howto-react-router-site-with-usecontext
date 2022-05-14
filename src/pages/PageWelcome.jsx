export const PageWelcome = ({books, members}) => {
	return (
		<div className="page_welcome">
			<h2>Welcome</h2>
			<p>We have {members.length} members reading {books.length} books.</p>
		</div>
	)
}