
function DoctorItem(props) {
	return (
		<tr>
			<th>{props.id}</th>
			<td>{props.lastName} {props.firstName} {props.middleName}</td>
			<td>{props.birthDate}</td>
		</tr>
	)
}

export default DoctorItem;