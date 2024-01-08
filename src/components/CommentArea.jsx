import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
	state = {
		comments: [],
		isLoading: true,
		isError: false,
	};

	componentDidMount = async () => {
		try {
			let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
				headers: {
					Authorization:
						"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmQ3ZmUwZGQxZDAwMTgyZDE3NjciLCJpYXQiOjE3MDQ3MjE3OTEsImV4cCI6MTcwNTkzMTM5MX0.yqFlKo15F3SM8776ItE9ylCEAiIJElo0GOYiAghFTWo",
				},
			});
			console.log(response);
			if (response.ok) {
				let comments = await response.json();
				this.setState({ comments: comments, isLoading: false, isError: false });
			} else {
				this.setState({ isLoading: false, isError: true });
			}
		} catch (error) {
			console.log(error);
			this.setState({ isLoading: false, isError: true });
		}
	};

	render() {
		return (
			<div className="text-center">
				{this.state.isLoading && <Loading />}
				{this.state.isError && <Error />}
				<AddComment asin={this.props.asin} />
				<CommentList commentsToShow={this.state.comments} />
			</div>
		);
	}
}

export default CommentArea;
