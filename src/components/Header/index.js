import React, {Component} from 'react';

import styles from  './styles.css';

import SignUpForm from '../common/SignUpForm';
import Navigation from './components/Navigation';

class Header extends Component {
    render () {
        return (
            <header id="header" className={styles.Component}>
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
                <Navigation />
            </header>
        );
    }
}

Header.propTypes = {
    registered: React.PropTypes.bool.isRequired,
        registerEmail: React.PropTypes.func.isRequired
};

export default Header;
