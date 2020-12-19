export default {
    BASE_DATA_URL: process.env.BASE_URL ?? '/data',
    ENDPOINTS: {
        config: 'config',
        menuItems: 'menu-items',
        homePage: 'home-page',
        pages: 'pages',
        posts: 'posts',
        contacts: 'contacts'
    },
    REQUEST_METHODS: {
        get: 'get',
        post: 'post'
    }
}
