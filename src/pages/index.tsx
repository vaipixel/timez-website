import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">Timez - time easy</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className={'button button--secondary button--lg ' + styles.button + ' ' + styles.marginRight}
                        to="/docs/download">
                        <Translate id="homePage.downloadNow" description="homePage.downloadNow"/>
                    </Link>
                    <Link
                        className={'button button--secondary button--lg '  + styles.button}
                        to="/blog">
                        <Translate id="homePage.viewMore" description="homePage.viewMore"/>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            // title={`Hello from ${siteConfig.title}`}
            description={translate({message: 'homePage.makeTimeRecordEasy'})}>
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
