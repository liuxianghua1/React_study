import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <div>
                <li onClick={this.handleClick}> {this.props.avname} ---{this.props.content}</li>
            </div>
        )
    }
    handleClick() {
        this.props.dels(this.props.i);
    }
}
XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    i: PropTypes.number,
    dels: PropTypes.func,
    avname: PropTypes.string.isRequired
}
XiaojiejieItem.defaultProps = {
    avname: '666'
}