module.exports = {
    title: 'UI 框架',
    description: '基于 Vue 的 UI 框架',
    base: '/vue-wheels/',
    themeConfig: {
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '文档',
                link: '/guide/'
            },
            {
                text: '交流',
                link: 'https://google.com'
            },
        ],
        sidebar: [{
                title: '入门',
                collapsable: false, // false 让一个组永远都是展开状态
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                collapsable: false, 
                children: [
                    '/button/',
                    '/input/',
                    '/grid/',
                    '/layout/',
                    '/toast/',
                    '/tabs/',
                    '/popover/',
                    '/collapse/',
                ]
            }
        ]
    }
}