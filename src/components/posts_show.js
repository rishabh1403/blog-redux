import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions'
import { Link } from 'react-router-dom'
class PostsIndex extends Component {

	componentDidMount(){
        const id = this.props.match.params.id
        this.props.fetchPost(id);
    }
    handleClick(){
        const id = this.props.match.params.id
        this.props.deletePost(id,()=>{
            this.props.history.push('/');
        })
    }
	render() {
        if(!this.props.post) return <div>Loading...</div>
		return (
			<div>
                <Link to="/" className="btn btn-default">Back</Link>
                <button className="btn btn-danger" onClick={this.handleClick.bind(this)}>Delete</button>
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
export default connect(mapStateToProps, { fetchPost,deletePost })(PostsIndex);