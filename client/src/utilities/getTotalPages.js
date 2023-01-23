export default function getTotalPages(productsCount, productsPerPage){
    return Math.ceil(productsCount/productsPerPage);
}