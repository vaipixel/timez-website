// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Timez App',
    tagline: '让时间记录变得轻松',
    url: 'https://timezapp.top',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Vaipixel', // Usually your GitHub org/user name.
    projectName: 'timez-website', // Usually your repo name.
    i18n: {
        defaultLocale: 'zh',
        locales: ['en', 'zh'],
        localeConfigs: {
            en: {
                label: 'English',
                direction: 'ltr',
            },
            zh: {
                label: '简体中文',
                direction: 'ltr',
            },
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/vaipixel/timez-website/edit/main/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/facebook/docusaurus/edit/main/blog/',
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
            navbar: {
                title: 'Timez App',
                logo: {
                    alt: 'Timez Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Docs',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/vaipixel/timez-website',
                        label: 'GitHub',
                        position: 'right',
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Support',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Github Discussions',
                                href: 'https://github.com/vaipixel/timez-website/discussions',
                            },
                            {
                                label: 'Notion',
                                href: 'https://emrys.notion.site/Timez-b0eb505a033b45d4bd9093557e54767b',
                            }
                        ],
                    },
                    {
                        title: 'Law',
                        items: [
                            {
                                label: 'Privacy Policy',
                                to: '/privacy',
                            },
                            {
                                label: 'Terms of Use',
                                href: '/terms',
                            },
                            {
                                label: 'Terms of Subscription',
                                href: '/subscription-terms',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/vaipixel',
                            },
                        ],
                    },
                ],
                copyright: `© 2021 西安市莲湖区路漫漫漫网络工作部 ｜ <a href="https://beian.miit.gov.cn">陕ICP备2021014667号</a> ｜ Built with Docusaurus`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            algolia: {
                // If Algolia did not provide you any appId, use 'BH4D9OD16A'
                appId: 'BH4D9OD16A',

                // Public API key: it is safe to commit it
                apiKey: 'YOUR_SEARCH_API_KEY',

                indexName: 'YOUR_INDEX_NAME',

                // Optional: see doc section below
                contextualSearch: true,

                // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
                externalUrlRegex: 'external\\.com|domain\\.com',

                // Optional: Algolia search parameters
                searchParameters: {},

                //... other Algolia params
            }
        }),
};

module.exports = config;
