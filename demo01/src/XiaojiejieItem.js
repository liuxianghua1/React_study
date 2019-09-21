import React, { Component } from 'react'

export default class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <div>
                <li onClick={this.handleClick}>{this.props.content}</li>
            </div>
        )
    }
    handleClick() {
        this.props.dels(this.props.i);
    }
}
