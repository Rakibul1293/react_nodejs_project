import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../store/actions/postsAction';

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        let { posts } = this.props

        if (posts.loading) {
            return <h1>Loading.....</h1>
        }

        return (
            <ul>
                {posts.posts.map(post => (
                    <li key={post.id}> {post.title} </li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.post
})

export default connect(mapStateToProps, { fetchPosts })(Posts);