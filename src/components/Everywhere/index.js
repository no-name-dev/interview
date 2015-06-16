import React, {Component} from 'react';

import styles from  './styles.css';

export default class Everywhere extends Component {
    render () {
        return (
            <section id="everywhere" className={styles.Component}>
                <div className={styles.Text}>
                    <h2 className={styles.Heading}>
                        Everywhere
                    </h2>
                    <div className={styles.Description}>
                        Android, iOS, Mac, PC, Web... work everywhere you want to. You'll be always ready with our responsive web app and iOS and Android app.
                    </div>
                </div>
                <div className={styles.Targets}>
                    <ul className={styles.TargetList}>
                        <li className={styles.Target}>
                            <div className={styles.Mobile} />
                            <h3 className={styles.Heading}>
                                Mobile Apps
                            </h3>
                            <p className={styles.Description}>
                                iOS, Android
                            </p>
                        </li>
                        <li className={styles.Target}>
                            <div className={styles.Desktop} />
                            <h3 className={styles.Heading}>
                                Desktop App
                            </h3>
                            <p className={styles.Description}>
                                Mac, PC
                            </p>
                        </li>
                        <li className={styles.Target}>
                            <div className={styles.Web} />
                            <h3 className={styles.Heading}>
                                Web App
                            </h3>
                            <p className={styles.Description}>
                                Responsive website
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}
