import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions'
import { Link } from 'react-router-dom'
import _ from 'lodash'
class PostsIndex extends Component {

	componentDidMount(){
        const id = this.props.match.params.id
        this.props.fetchPost(id);
    }
	render() {
		return (
			<div>
				<h3>{this.props.post.title}</h3>
                <h6>{this.props.post.categories}</h6>
                <h6>{this.props.post.content}</h6>
			</div>
		);
	}
}
function mapStateToProps({posts}, ownProps){
	return {post : posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps, { fetchPost })(PostsIndex);