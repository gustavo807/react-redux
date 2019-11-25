import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addTodo, newTodo } from "../actions/todosActions";

function TodoList({todos, addTodo, newTodo}){
    const [data, setData] = useState("")
    return(
        <div>
            TodoList
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)} />
            <button onClick={()=>addTodo({title: data})} >AddTodo</button>
            <button onClick={()=>newTodo("hello")} >New Todo</button>
            <hr />
            <p>{JSON.stringify(todos, 2)}</p>
        </div>
    )
}

const mapStateToProps = state => {
    //let todos = state.todos
    return state
}

export default connect(mapStateToProps, {addTodo, newTodo})(TodoList)