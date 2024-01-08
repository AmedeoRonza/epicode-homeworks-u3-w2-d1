import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
	const deleteComment = async (asin) => {
		try {
			let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
				method: "DELETE",
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmQ3ZmUwZGQxZDAwMTgyZDE3NjciLCJpYXQiOjE3MDQ3MjE3OTEsImV4cCI6MTcwNTkzMTM5MX0.yqFlKo15F3SM8776ItE9ylCEAiIJElo0GOYiAghFTWo",
				},
			});
			if (response.ok) {
				alert("La recensione è stata elimata!");
			} else {
				throw new Error("La recensione non è stata eliminata!");
			}
		} catch (error) {
			alert(error);
		}
	};

	return (
		<ListGroup.Item>
			{comment.comment}
			<Button variant="danger" className="ms-2" onClick={() => deleteComment(comment._id)}>
				Elimina
			</Button>
		</ListGroup.Item>
	);
};

export default SingleComment;
