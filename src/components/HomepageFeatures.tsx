/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
    title: string;
    image: string;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: '任务管理',
        image: '/img/features/powerful_tasks.svg',
        description: (
            <>
                Timez 拥有强大的任务管理功能<br/>让你有条不紊的规划每一天
            </>
        ),
    },
    {
        title: '简单易用',
        image: '/img/features/easy_to_use.svg',
        description: (
            <>
                归功于 Todo 的形式和优秀的交互设计<br/>使用 Timez 记录时间变得异常轻松
            </>
        ),
    },

    {
        title: '统计清晰',
        image: '/img/features/clear_report.svg',
        description: (
            <>
                优秀的报表设计<br/>让你的时间一目了然
            </>
        ),
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
