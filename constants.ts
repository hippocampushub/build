export default {
    BASE_DATA_URL: process.env.BASE_URL ?? '/json_data',
    EXTERNAL_API_URLS: {
        EBRAINS_KNOWLEDGE_GRAPH: "https://search.kg.ebrains.eu/api/groups/public/search",
        NEUROMORPHO: "http://neuromorpho.org/",
        HIPPOCAMPONE: "http://hippocampome.org/php/index.php",
        ALLEN_INSTITUTE: "https://celltypes.brain-map.org/experiment/electrophysiology/623308514 "
    },
    ENDPOINTS: {
        config: 'config',
        menuItems: 'menu-items',
        homePage: 'home-page',
        pages: 'pages',
        posts: 'posts',
        news: 'news',
        contacts: 'contacts',
        datasets: 'datasets',
        models: 'models'
    },
    REQUEST_METHODS: {
        get: 'get',
        post: 'post'
    },
}
