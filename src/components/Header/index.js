import React, {Component} from 'react';

import styles from  './styles.css';

import SignUpForm from '../common/SignUpForm';

class Header extends Component {
    render () {
        return (
            <section id="header" className={styles.Component}>
                <div className={styles.Content}>
                    <div className={styles.Logo}>
                        <a href="/" title="Return to home page.">
                            Posli Logo
                        </a>
                    </div>
                    <div className={styles.Text}>
                        <h1 className={styles.Heading}>
                            Posli, advanced team messaging with to-do functionality.
                        </h1>
                    </div>
                    <SignUpForm
                        registerEmail={this.props.registerEmail}
                        registered={this.props.registered}
                        />
                </div>
                <nav className={styles.Navigation}>
                    <ul className={styles.NavigationItems}>
                        <li className={styles.NavigationItem}><a href="#about">About</a></li>
                        <li className={styles.NavigationItem}><a href="#features">Features</a></li>
                        <li className={styles.NavigationItem}><a href="#sign_up">Sign Up</a></li>
                    </ul>
                </nav>
            </section>
        );
    }
}

Header.propTypes = {
    registered: React.PropTypes.bool.isRequired,
        registerEmail: React.PropTypes.func.isRequired
};

export default Header;
