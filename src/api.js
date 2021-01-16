const BASE = 'https://api.b7web.com.br/devsfood/api'

export default {
    getCategories: async () => {
        let res = await fetch(BASE+'/categories');
        let json = await res.json();
        return json;
    }
};