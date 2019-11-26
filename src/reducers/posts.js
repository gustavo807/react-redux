import { FETCH_POSTS_SUCCESS, FETCH_POSTS_START, FETCH_POSTS_FAIL } from "../actions/types"

const initialState = {
    posts: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                posts: [...action.payload],
                loading: false
            }
        case FETCH_POSTS_FAIL:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}