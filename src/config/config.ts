const searchParam: any = {}

const searchs = window.location.search.slice(1).split('&');
searchs.forEach(item => {
    const items = item.split('=');
    if (items.length === 2) {
        searchParam[items[0]] = items[1];
    }
});

const debugType: string = searchParam['debug'];

const env = process.env.NODE_ENV || 'development';

const config = {
  customAPIURL: {
    production: 'https://Capup-l.com:8080',
    // dev: 'http://47.98.222.158:8080',
    dev: 'https://Capup-l.com:8080',
  },

}

export default {
    customAPIURL: window.location.href.indexOf('localhost') >= 0? config.customAPIURL.dev:config.customAPIURL.production,
    host: 'localhost'
};