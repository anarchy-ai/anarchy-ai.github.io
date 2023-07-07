import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import AnarchyLogoGithub from '@site/static/img/AnarchyLogoGithub.png';
import AnarchyLogoTwitter from '@site/static/img/AnarchyLogoTwitter.jpeg';

const FeatureList = [
  {
    title: 'Open Source',
    imageLocation: AnarchyLogoTwitter,
    description: (
      <>
        We will move towards open-source, not away from it. Check our github for bounties 🤑
      </>
    ),
  },
  {
    title: 'Build for Builders',
    imageLocation: AnarchyLogoGithub,
    description: (
      <>
        Hackers need freedom, hackers need information. We build for you.
      </>
    ),
  },
  {
    title: 'Judgement Free',
    imageLocation: AnarchyLogoTwitter,
    description: (
      <>
        Tools should not have rules, we will not judge your use-cases (provided they are legal)
      </>
    ),
  },
];

function Feature({imageLocation, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={imageLocation} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
