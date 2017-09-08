import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { addPost } from '../actions';
class PostsNew extends Component {

    renderField(field){
        let {meta} = field;
        const className = `form-group ${meta.touched && meta.error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help">
                    {meta.touched ? meta.error : ''}
                </div>
            </div>
        )
    }
    onSubmit(values){
        this.props.addPost(values, () => {
            this.props.history.push('/');
        });
    }
	render() {
        const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field 
                    label="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
		);
	}
}
function validate(values){
    const errors = {};
    if(!values.title){
        errors.title = "Enter a title";
    }
    if(!values.categories){
        errors.categories = "Enter a category";
    }
    if(!values.content){
        errors.content = "Enter some content";
    }
    return errors;
}
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null,{ addPost })(PostsNew)
);