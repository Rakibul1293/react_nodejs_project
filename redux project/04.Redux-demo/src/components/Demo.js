import React, { Component } from 'react';
import { connect } from 'react-redux';

class Demo extends Component {
    render() {
        return <ul>
            {this.props.posts.map(post => {
                return <li key={post.id}> {post.title} </li>
            })}
        </ul>
    }
}

const mapStateToProps = state => {
    return {
        posts: state
    }
}

export default connect(mapStateToProps)(Demo);