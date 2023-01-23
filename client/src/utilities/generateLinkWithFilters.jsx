export default function generateLinkWithFilters(path, filters){

    let result = path + "/page=1/?";
    for (const key in filters) {

        if(filters[key])
            
            result+=`${key}=${filters[key]}&`;
    }
    return result
}