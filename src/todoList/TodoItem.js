import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.delete = this.delete.bind(this)
    }
    render() {
        let { dele, index } = this.props
        return React.createElement('li', {}, this.props.content)
    }
    delete() {
        this.props.deleteItem(this.props.index)
    }
}

export default TodoItem