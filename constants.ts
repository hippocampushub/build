export default {
    BACKEND_URL: process.env.BACKEND_URL ?? 'http://localhost:5000',
    BASE_URL: `${process.env.BASE_URL ?? ''}`,
    BASE_DATA_URL: `${process.env.BASE_URL ?? ''}/json_data`,
    EXTERNAL_API_URLS: {
        EBRAINS_KNOWLEDGE_GRAPH: "https://search.kg.ebrains.eu/api/groups/public/search",
        NEUROMORPHO: "http://neuromorpho.org/",
        HIPPOCAMPOME: "http://hippocampome.org/php/index.php",
        ALLEN_INSTITUTE: "https://celltypes.brain-map.org/experiment/electrophysiology/623308514 "
    },
    HHF_COMM: 'HHF-Comm',
    HFH_TOS: 'HFH_TOS',
    HODGKIN_HUXLEY_BASE_URL: process.env.HODGKIN_HUXLEY_BASE_URL ?? "http://localhost/",
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
    DEFAULT_HITS_PER_PAGE: 20,
    MORPHOLOGY_VIEWER_BASE_URL: 'https://morph-view.apps.hbp.eu/?model=',
    SUGGESTION_MIN_LENGTH: process.env.SUGGESTION_MIN_LENGTH ?? 1,
    AUTH_COOKIE_KEY: 'hbp_auth_cookie',
    DATA_TYPE_LABELS: {
        connection: 'connections',
        electrophysiology: 'electrophysiology',
        morphology: 'morphologies',
    },
    SECTIONS: {
        mainContentTextStyle: {
            fontSize: 26,
            textAlign: 'justify'
        },
        rowContentTextStyle: {
            fontSize: 20,
            textAlign: 'justify'
        }
    }
}
