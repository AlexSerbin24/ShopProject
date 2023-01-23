export default function paginateItems(items, itemsPerPage, currentPage) {
    const indexOfFirstProduct = (currentPage - 1) * itemsPerPage;
    const indexOfLastProduct = currentPage * itemsPerPage;

    return items.slice(indexOfFirstProduct, indexOfLastProduct);
}