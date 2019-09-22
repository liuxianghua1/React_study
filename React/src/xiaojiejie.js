import React, { Component, Fragment } from 'react'
import axios from 'axios';
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
/* {/* 
                                <li key={i + item} onClick={this.deleteItem.bind(this, i)} dangerouslySetInnerHTML={{ __html: item }}>
                                    dangerouslySetInnerHTML={{__html: item}}
                                    这个意思是增加html解析 等于vue 中的 v-html 但是不推这样使用 防止xss注入攻击
                                </li>
                            * */
class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背', '盲人按摩'],
            demo: '11'
        }
    }

    componentDidMount() {
        axios.get('http://rap2api.taobao.org/app/mock/231871/list')
            .then(res => {
                console.log(res)
                this.setState({
                    demo: res.data.book
                })
            }
            ).catch(err => console.log('获取失败' + err)
            )

    }

    render() {
        return (

            <Fragment>
                {/*第一次写注释 */}
                {/* 11 */}

                <div>
                    <label htmlFor="demo">{this.state.demo}</label><br />
                    <input id="demo" className="input" type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)}
                        ref={input => this.input = input}
                    />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul ref={ul => this.ul = ul}>
                    {
                        this.state.list.map((item, i) => {
                            return (
                                <XiaojiejieItem i={i} content={item} key={i + item}
                                    dels={this.deleteItem.bind(this)}
                                // avname = '很开心'
                                // list={this.state.list}
                                // 单项数据流只可以发送数据 不可以更改
                                />
                            )
                        })
                    }
                </ul>
                <Boss></Boss>
            </Fragment>
        )
    }
    inputChange(e) {
        // console.log(e.target.value);
        // this.state.inputValue +=e.target.value 这样是不行的 会报错 this的指向是undefined
        // console.log(this); 我们使用了bind改变了指向的this
        this.setState({
            // inputValue: e.target.value
            inputValue: this.input.value
        })
    }
    //添加方法
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    // 删除方法
    deleteItem(i) {
        // console.log(i);
        let list = this.state.list
        list.splice(i, 1)
        // this.state.list.splice(i,1) //最好不要这样操作
        this.setState({
            // list: this.state.list
            list: list
        })
    }
}

export default Xiaojiejie

