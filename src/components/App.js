import React, {Component} from 'react';

import styles from './styles.css';

import About from './About';
import Everywhere from './Everywhere';
import Features from './Features';
import Header from './Header';
import SignUp from './SignUp';
import TaskManagement from './TaskManagement';

export default class App extends Component {
	render () {
		return (
			<div className={styles.App}>
				<Header />
				<About />
				<Everywhere />
				<TaskManagement />
				<Features />
				<SignUp />
			</div>
		);
	}
}
