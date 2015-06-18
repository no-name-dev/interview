import React, {Component} from 'react';

import styles from  './styles.css';

export default class Features extends Component {
    render () {
        return (
            <section id="features" className={styles.Component}>
                <ul className={styles.FeatureList}>
                    <li className={styles.Feature}>
                        <div className={styles.SmartSearch}/>
                        <h2 className={styles.Heading}>Smart Search</h2>

                        <p className={styles.Description}>Search through all your messages, contacts and tasks. We have
                            the most powerful search.</p>
                    </li>
                    <li className={styles.Feature}>
                        <div className={styles.InstantMessaging}/>
                        <h2 className={styles.Heading}>Instant Messaging</h2>

                        <p className={styles.Description}>Don't jump from emails to sms and then to company messenger.
                            All in Posli.</p>
                    </li>
                    <li className={styles.Feature}>
                        <div className={styles.FileSharing}/>
                        <h2 className={styles.Heading}>File sharing</h2>

                        <p className={styles.Description}>Send files to your team mates. Images, videos, sound,
                            everthing you want.</p>
                    </li>
                </ul>
            </section>
        );
    }
}
