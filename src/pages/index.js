import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { TwitterButton, GitHubFollowButton } from '../components/SocialButtons';

class Button extends React.Component {
  render() {
    return (
      <Link
        className="anarchy-button"
        to={this.props.href}
        target={this.props.target}
      >
        {this.props.children}
      </Link>
    );
  }
}


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.socialLinks}>
          <TwitterButton />
          <GitHubFollowButton />
        </div>
        <div className="anarchy-button-container">
          <Button
            className="button button--secondary button--lg"
            href="/docs/documentation/Mission">
            Mission
          </Button>
          <Button
            className="button button--secondary button--lg"
            href="https://discord.gg/qaFf7S373c">
            👾 Discord
          </Button>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
