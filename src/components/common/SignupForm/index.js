import React, {Component} from 'react';

import styles from  './styles.css';

const SingUpForm = React.createClass({

    propTypes: {
        registered: React.PropTypes.bool.isRequired,
        registerEmail: React.PropTypes.func.isRequired
    },

    getInitialState () {
        return {
            email: ''
        }
    },

    submitForm (e) {
        e.preventDefault();

        this.props.registerEmail(this.state.email);
    },

    handleEmailChange (e) {
        this.setState({
            email: e.target.value
        });
    },

    render () {
        const email = this.state.email;
        if (!this.props.registered) {
            return (
                <div className={styles.Form}>
                    <form action="/" onSubmit={this.submitForm}>
                        <input type="email"
                               placeholder="Input Email for Beta"
                               required
                               value={email}
                               onChange={this.handleEmailChange}
                               className={styles.Input}
                            />
                        <input type="submit" defaultValue="Request" className={styles.Button}/>
                    </form>
                </div>
            );
        } else {
            return (
                <div className={styles.Success}>
                    <div className={styles.Share}>
                        <button className={styles.Facebook}>Share on Facebook</button>
                        <button className={styles.Twitter}>Share on Twitter</button>
                    </div>
                    <div className={styles.Text}>
                            You've signed up, we love you for that! Tell your friends about it.
                    </div>
                </div>
            );
        }

    }

});


export default SingUpForm;
