import { ADD_TODO } from "../actions/types"

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: new Date().getTime(),
        title: content.title
    }
})


export const newTodo = () => dispatch => {
    console.log('new todo')
    let content = {
        title: "newTodo"
    }
    //dispatch(addTodo(content))
}