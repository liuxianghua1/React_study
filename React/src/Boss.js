import React, { Component } from 'react';
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            flag: true
         };
         this.to = this.to.bind(this)
    }
    render() {
        return (
            <div>
                <div className={this.state.flag ? 'show' : 'hide'}>Boss级任务-两开花</div>
                <div><button onClick={this.to}>召唤</button></div>
            </div>
        );
    }

    to() {
        this.setState({
            flag: !this.state.flag
        })
    }

    
}

export default Boss;