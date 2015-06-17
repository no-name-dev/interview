import React, {Component} from 'react';

import styles from  './styles.css';

export default class SignUpForm extends Component {
    render () {
        return (
            <div className={styles.Form}>
                <form action="/">
                    <input type="email"
                           placeholder="Input Email for Beta"
                           required
                           className={styles.Input}
                        />
                    <input type="submit" defaultValue="Request" className={styles.Button}/>
                </form>
            </div>
        );
    }
}
