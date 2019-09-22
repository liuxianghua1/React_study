import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class XiaojiejieItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }

    }

    render() {
        console.log('1111');
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