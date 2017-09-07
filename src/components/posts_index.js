import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index'
import _ from 'lodash'
class PostsIndex extends Component {

	componentDidMount(){
		this.props.fetchPosts();
	}
	renderList(){
		return _.map(this.props.posts,item => {
			return (
				<li key={item.id} className="list-group-item">
					{item.title}
				</li>
			)
		})
	}
	render() {
		console.log(this.props.posts);
		return (
			<div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderList()}
				</ul>
			</div>
		);
	}
}
function mapStateToProps({posts}){
	return {posts};
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);