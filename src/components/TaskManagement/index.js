import React, {Component} from 'react';

import styles from  './styles.css';

export default class TaskManagement extends Component {
    render () {
        return (
            <section id="task_management" className={styles.Component}>
                <div className={styles.Text}>
                    <h2 className={styles.Heading}>Task Management</h2>
                    <p className={styles.Description}>
                        Give tasks directly through instant messaging and solve them in one time. Don't jump between messengeres and task manageres, stay productive in Posli.
                    </p>
                </div>
                <div className={styles.Iphone}>
                </div>
            </section>
        );
    }
}
