import React,{Component} from 'react';

class App extends Component {
    render() {
        return (
            <ul className="my-list">
                <li>{false? '1' : '2'}</li>
                <li> I Love React </li>
            </ul>
            );
            // let child1 = React.createElement('li', null, 'neiron')
            // let child2 = React.createElement('li', null, 'I Love React')
            // let root = React.cloneElement('ul', {className: 'demo'}, child1, child2)
    }
}

export default App;