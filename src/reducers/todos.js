import { ADD_TODO } from "../actions/types";

const initialState = {
    todos: [
        {id: 1, title: 'angular'},
        {id: 2, title: 'react'},
        {id: 3, title: 'vue'},
    ]
}

export default function(state = initialState, action){
    console.log('reducer', action.type,  action.payload)
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        default:
            return state
    }
}