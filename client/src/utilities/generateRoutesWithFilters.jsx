export default function generateRoutesWithFilters(path, filters) {
    let result = [path];

    for (let index = 0; index < filters.length; index++) {

        for (let y = 0; y < filters.length; y++) {
            if (index - y == 1) {
                continue;
            }


            if (index == y) {
                result.push(`${path}/${filters[index]}=:${filters[y]}`);
                continue;
            }

            if (y > index) {

                let lastRoute = result[result.length - 1];

                result.push(`${lastRoute}/${filters[y]}=:${filters[y]}`);

                continue;
            }

            result.push(`${path}/${filters[y]}=:${filters[y]}/${filters[index]}=:${filters[index]}`);


        }

    }

    return result.map(route => route + "/page=:page");

}