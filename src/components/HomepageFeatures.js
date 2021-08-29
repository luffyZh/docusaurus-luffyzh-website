import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'next-antd-scaffold',
    repo: 'https://github.com/luffyZh/next-antd-scaffold',
    src: require('../../static/img/next-antd-scaffold.jpg').default,
    description: (
      <>
        A simple scaffold based on Next.js for quick use with ant-design, redux, redux-saga, fetch and pm2.
      </>
    ),
  },
  {
    title: 'dynamic-antd-theme',
    repo: 'https://github.com/luffyZh/dynamic-antd-theme',
    src: require('../../static/img/dynamic-antd-theme.png').default,
    description: (
      <>
        A simple plugin to dynamic change ant-design theme whether less or css.
      </>
    ),
  },
  {
    title: 'mini-dynamic-antd-theme',
    repo: 'https://github.com/luffyZh/mini-dynamic-antd-theme',
    src: require('../../static/img/mini-dynamic-antd-theme.png').default,
    description: (
      <>
        A simple plugin to dynamic change ant-design || ant-design-vue theme whether less or css.
      </>
    ),
  },
];

function Feature({src, title, description, repo}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={repo} target="_blank">{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
