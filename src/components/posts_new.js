import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
class PostsNew extends Component {

	// componentDidMount(){
	// 	this.props.fetchPosts();
	// }
	// renderList(){
	// 	return _.map(this.props.posts,item => {
	// 		return (
	// 			<li key={item.id} className="list-group-item">
	// 				{item.title}
	// 			</li>
	// 		)
	// 	})
	// }
	render() {
		return (
			<div>
				<h3>Posts</h3>
				
			</div>
		);
	}
}
// function mapStateToProps({posts}){
// 	return {posts};
// }
export default connect()(PostsNew);