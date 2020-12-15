export default {
    BASE_URL: process.env.BASE_URL ?? 'http://localhost:1337',
    ENDPOINTS: {
        menuItems: 'menuItems',
        homePage: 'home-page',
        posts: 'posts'
    },
    REQUEST_METHODS: {
        get: 'get',
        post: 'post'
    }
}
