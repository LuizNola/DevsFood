const BASE = 'https://api.b7web.com.br/devsfood/api'

export default {
    getCategories: async () => {
        let res = await fetch(BASE+'/categories');
        let json = await res.json();
        return json;
    },
    getProducts: async (category, page, search) =>{
        // /products ([search, page, category])
        let fields = {}
        if(category !== 0) {
            fields.category = category;
        }
        if(page > 0){
            fields.page = page;
        }
        if(search !== ''){
            fields.search = search;
        }

        let queryString = new URLSearchParams(fields).toString();

        let res = await fetch(BASE+'/products?' + queryString);
        let json = await res.json();
        return json;
    }
};