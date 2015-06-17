import React, {Component} from 'react';

import styles from  './styles.css';

export default class About extends Component {
    render () {
        return (
            <div className={styles.ComponentWrapper}>
                <section id="about" className={styles.Component}>
                    <div className={styles.Text}>
                        <h2 className={styles.Heading}>What is Posli</h2>

                        <p className={styles.Description}>
                            Posli is platform that combines the best of instant messaging and task-list management and
                            improves your everyday workflow with simple but efficient user interface.
                        </p>
                        <button className={styles.Button}>Get in line</button>
                    </div>
                    <div className={styles.Image}/>
                </section>
            </div>
        );
    }
}
