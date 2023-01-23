export default function createProductLitPaginationUrl(text, category, isAdmin=false) {
    let url = 'products';

    if (text){
        url = `${url}/text=${text}`;
    }

    if(category){
        url = `${url}/category=${category}`;
    }

    if(isAdmin){
        url = `admin/${url}`;
    }
    return `/${url}`;
}