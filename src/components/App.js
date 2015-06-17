import React, {Component} from 'react';

import styles from './styles.css';

import About from './About';
import Everywhere from './Everywhere';
import Features from './Features';
import Header from './Header';
import SignUp from './SignUp';
import TaskManagement from './TaskManagement';

export default class App extends Component {

    constructor () {
        super();
        this.state = {
            registered: false
        }
    }

    registerEmail () {
        this.setState({
            registered: true
        });
    }

    render () {
        return (
            <div className={styles.App}>
                <Header
                    registerEmail={this.registerEmail.bind(this)}
                    registered={this.state.registered}
                    />
                <About />
                <Everywhere />
                <TaskManagement />
                <Features />
                <SignUp
                    registerEmail={this.registerEmail.bind(this)}
                    registered={this.state.registered}
                    />
            </div>
        );
    }
}
