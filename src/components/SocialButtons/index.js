import React from 'react';

import styles from './styles.module.css';
import GitHubButton from 'react-github-btn'

export default function GitHubIssuesButton() {
    return (
      <GitHubButton 
        href="https://github.com/anarchy-ai/LLM-VM/issues" 
        data-color-scheme="no-preference: light; light: light; dark: dark;" 
        data-icon="octicon-issue-opened" 
        data-size="large" 
        data-show-count="true" 
        aria-label="Issue anarchy-ai/LLM-VM on GitHub">
        Issues
      </GitHubButton>
    );
  }
  
export function TwitterButton() {
    return (
        <a
        href="https://twitter.com/anarchy_ai_inc?s=20"
        target="_blank"
        className={styles['twitter-follow-button']}
        >
        <div className={styles['twitter-follow-button--icon']} />
        Follow @anarchy_ai_inc
        </a>
    );
}

export function GitHubFollowButton() {
    return (
        <GitHubButton 
        href="https://github.com/anarchy-ai" 
        data-color-scheme="no-preference: light; light: light; dark: dark;" 
        data-size="large" 
        data-show-count="true" 
        aria-label="Follow @anarchy-ai on GitHub">
        Follow @anarchy-ai
        </GitHubButton>
    );
}