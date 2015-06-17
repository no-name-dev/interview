import React, {Component} from 'react';

import styles from  './styles.css';

import SignUpForm from '../common/SignUpForm';

export default class SignUp extends Component {
    render () {
        return (
            <section id="sign_up" className={styles.Component}>
                <div className={styles.Text}>
                    <h2 className={styles.Heading}>Sign up for beta</h2>

                    <div className={styles.Description}>
                        Sign Up for beta right now and be one of the firsts. With Posli you fix your
                        workflow and become more efficient.
                    </div>
                </div>
                <div className={styles.Form}>
                    <SignUpForm />
                </div>
                <div className={styles.Share}>
                    <span className={styles.Text}>Share on</span>
                    <ul className={styles.SocialServices}>
                        <li className={styles.Service}>
                            <button className={styles.Facebook}>Facebook</button>
                        </li>
                        <li className={styles.Service}>
                            <button className={styles.Twitter}>Twitter</button>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
