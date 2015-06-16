import React, {Component} from 'react';

import styles from  './styles.css';

export default class SignUpForm extends Component {
    render () {
        return (
            <div className="Form">
                <form action="/">
                    <input type="email" placeholder="Input Email for Beta" className="Input -email"/>
                    <input type="submit" defaultValue="Request" className="Button"/>
                </form>
            </div>
        );
    }
}
