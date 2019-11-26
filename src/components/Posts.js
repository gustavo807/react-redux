import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions/postsActions'

function Posts({posts, loading, fetchPosts}){
    return(
        <div>
            Posts...
            <button onClick={fetchPosts} >Fetch Posts</button>
            <p>{loading ? 'loading...' : ''}</p>
            <p>{JSON.stringify(posts, 2)}</p>
        </div>        
    )
}
const mapStateToProps = state => {
    let st = state.posts
    return {
        posts: st.posts,
        loading: st.loading
    }
}
export default connect(mapStateToProps, {fetchPosts})(Posts)