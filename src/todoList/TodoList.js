import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: "",
            list: []
        }
        this.pushItem = this.pushItem.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

    }
    render() {
        return (
            <Fragment>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} /> <button onClick={this.pushItem}>添加</button>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <Fragment key={index} >
                    <TodoItem content={item} dele={this.deleteItem} index={index}></TodoItem>
                </Fragment>
            )
        })
    }
    pushItem() {
        this.setState(() => {
            return {
                list: [...this.state.list, this.state.inputValue],
                inputValue: ''
            }
        })
    }
    handleInputChange(e) {
        const value = e.target.value
        this.setState(() => {
            return {
                inputValue: value
            }
        })
    }
    deleteItem(index) {
        let array = [...this.state.list]
        array.splice(index, 1)
        this.setState(() => {
            return {
                list: array
            }
        })
    }
}

export default TodoList;