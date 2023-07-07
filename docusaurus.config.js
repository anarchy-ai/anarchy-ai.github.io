 // @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Anarchy',
  tagline: 'Developer-first LLM Infra',
  favicon: 'img/AnarchyLogoGithub.png',

  // Set the production url of your site here
  url: 'https://anarchy-ai.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'anarchy-ai', // Usually your GitHub org/user name.
  projectName: 'anarchy-ai.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages', 


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/anarchy-ai/anarchy-ai.github.io',
        },
        blog: {
          showReadingTime: true,
          blogDescription: "Anarchy News",
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/AnarchyLogoGithub.png',
      navbar: {
        title: 'Anarchy',
        logo: {
          alt: 'AnarchyLogoGithub',
          src: 'img/AnarchyLogoGithub.png',
        },
        items: [
          {to: '/docs/category/home', label: 'Documentation', position: 'right'},
          {to: '/blog', label: 'News', position: 'right'},
          {
            href: 'https://github.com/anarchy-ai',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'YCombinator',
                href: 'https://www.ycombinator.com/companies/anarchy',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/qaFf7S373c',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/anarchy_ai_inc',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/anarchy-ai',
              },
              {
                label: 'Enterprise Solutions',
                href: 'https://anarchy.ai/'
              }
            ],
          },
          {
            items: [
              {
                label: 'News',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Documentation',
                to: '/docs/category/home',
              },
              {
                label: 'Careers',
                to: '/docs/documentation/Careers',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anarchy.ai, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
