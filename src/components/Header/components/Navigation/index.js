import React, {Component} from 'react';

import styles from  './styles.css';

function throttle (func, wait) {
    wait = wait || 4; // for 60FPS animations
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export default class Navigation extends Component {

    constructor () {
        super();

        this.state = {
            sticky: false
        };

        this.onScroll = throttle(
            () => {
                const node = React.findDOMNode(this);
                const pageOffset = window.pageYOffset;
                const navOffset = node.parentElement.offsetHeight - node.offsetHeight;

                console.log(`Page offset: ${pageOffset}`);

                console.log(`Nav offset: ${navOffset}`);

                const shouldStick = pageOffset > navOffset;
                console.log(`Should stick: ${shouldStick}`);
                this.setState({
                    sticky: shouldStick
                });
                this.forceUpdate();

            }
        )
    }

    componentDidMount () {

        window.addEventListener('scroll', this.onScroll);

    }

    componentWillUnmount () {

        window.removeEventListener('scroll', this.onScroll);

    }

    render () {
        if (typeof console !== 'undefined') {
            console.log('rendering navigation');
        }

        let navClass = styles.Navigation;

        if (this.state.sticky) {
            navClass += ` ${styles.Sticky}`;
        }

        return (
            <nav id="navigation" className={navClass}>
                <ul className={styles.NavigationItems}>
                    <li className={styles.Logo}>Posli</li>
                    <li className={styles.NavigationItem}><a href="#about">About</a></li>
                    <li className={styles.NavigationItem}><a href="#features">Features</a></li>
                    <li className={styles.NavigationItem}><a href="#sign_up">Sign Up</a></li>
                </ul>
            </nav>
        );
    }
}
