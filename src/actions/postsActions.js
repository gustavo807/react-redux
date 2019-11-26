import { FETCH_POSTS_START, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL } from './types'

const sleep = (ms = 3000) => new Promise((resolve, reject) => setTimeout(resolve, ms))

export const fetchPosts = () => async (dispatch, getState) => {
    let {todos} = getState()
    console.log('todos.', todos)
    console.log('fetchPosts...')

    dispatch({type: FETCH_POSTS_START})

    await sleep(5000)

    let post = {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }

    dispatch({type: FETCH_POSTS_SUCCESS, payload: [post]})

}