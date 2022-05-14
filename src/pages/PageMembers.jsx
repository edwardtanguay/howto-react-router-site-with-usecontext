export const PageMembers = ({ members }) => {
	return (
		<div className="page_members">
			<h2>Members</h2>
			<p>We have {members.length} members.</p>
			<div className="members">
				{members.map((member, index) => {
					return (
						<div className="member">
							<img
								src={`https://edwardtanguay.netlify.app/share/images/employees/employee_${member.employeeID}.jpg`}
								alt=""
							/>
							<div className="info">
								<div className="name">
									{member.firstName} {member.lastName}
								</div>
								<div className="notes">{member.notes}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
