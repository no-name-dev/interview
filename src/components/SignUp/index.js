import React, {Component} from 'react';

import styles from  './styles.css';

import SignUpForm from '../common/SignUpForm';

class SignUp extends Component {
    render () {
        return (
            <section id="sign_up" className={styles.Component}>
                <h2 className={styles.Heading}>Sign up for beta</h2>

                <div className={styles.Description}>
                    Sign Up for beta right now and be one of the firsts. With Posli you fix your
                    workflow and become more efficient.
                </div>
                <div className={styles.Form}>
                    <SignUpForm
                        registerEmail={this.props.registerEmail}
                        registered={this.props.registered}
                        />
                </div>
                {
                    this.props.registered ? null:
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
                }


            </section>
        );
    }
}

SignUp.propTypes = {
    registered: React.PropTypes.bool.isRequired,
    registerEmail: React.PropTypes.func.isRequired
};

export default SignUp;
