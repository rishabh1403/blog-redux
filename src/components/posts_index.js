import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router-dom'
import _ from 'lodash'
class PostsIndex extends Component {

	componentDidMount(){
		this.props.fetchPosts();
	}
	renderList(){
		return _.map(this.props.posts,item => {
			return (
				<li key={item.id} className="list-group-item">
					<Link to={`/posts/${item.id}`}>{item.title}</Link>
				</li>
			)
		})
	}
	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">Add Post</Link>
				</div>
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