import React, {Component} from 'react';


import styles from  './styles.css';
import EasingFunction from './easing';

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
                const navOffset = node.parentElement.offsetHeight - node.offsetHeight - 10; //when navigating to about, it should already be sticky

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

    navigate (event) {
        event.preventDefault();
        const navHeight = document.getElementById('navigation').scrollHeight;
        const targetElement = document.querySelector(event.target.hash);

        const from = window.pageYOffset;
        const to = targetElement.offsetTop - navHeight;

        animate(from, to, 500, EasingFunction.easeOutCubic, (y) => {
            window.scrollTo(0, from + y);
        });
        setTimeout(() => {
            window.location.hash = event.target.hash;
        }, 500);
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
                    <li className={styles.NavigationItem}><a href="#about" onClick={this.navigate}>About</a></li>
                    <li className={styles.NavigationItem}><a href="#features" onClick={this.navigate}>Features</a></li>
                    <li className={styles.NavigationItem}><a href="#sign_up" onClick={this.navigate}>Sign Up</a></li>
                </ul>
            </nav>
        );
    }
}

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

function animate (from, to, duration, distributionFunc, apply) {

    const FRAME_TIME = 16; //ms for 60FPS animations
    const requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        ((f) => {
            setTimeout(f, FRAME_TIME)
        });

    const frames = Math.floor(duration / FRAME_TIME);
    const valRange = to - from;

    let frame = 0;

    function frameAnim () {
        if (frame > frames) {
            return;
        }
        frame += 1;

        const nextVal = Math.floor(distributionFunc(frame / frames) * valRange);
        apply(nextVal);

        requestAnimationFrame(frameAnim);
    }

    frameAnim();
}

