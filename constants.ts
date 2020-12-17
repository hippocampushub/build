export default {
    BASE_URL: process.env.BASE_URL ?? 'http://localhost:1337',
    ENDPOINTS: {
        config: 'config',
        menuItems: 'menuItems',
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
