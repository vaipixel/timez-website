/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
    title: string;
    image: string;
    description: JSX.Element;
};

function description(key: string) {
    return (
        <>
            {translate({message: key}).split('|').map((line) => <div
                key={line}>{line}</div>)}
        </>
    );
}

const FeatureList: FeatureItem[] = [
    {
        title: translate({message: 'feature.title.powerfulTask'}),
        image: '/img/features/powerful_tasks.svg',
        description: description('feature.description.powerfulTask'),
    },
    {
        title: translate({message: 'feature.title.easyToUse'}),
        image: '/img/features/easy_to_use.svg',
        description: description('feature.description.easyToUse'),
    },

    {
        title: translate({message: 'feature.title.clearReport'}),
        image: '/img/features/clear_report.svg',
        description: description('feature.description.clearReport'),
    },
];

function Feature({title, image, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img className={styles.featureSvg} alt={title} src={image}/>
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
