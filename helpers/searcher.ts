const includes = (list: Array<String>, query: String) => {
    for (var i = 0; i < list.length; i++) {
        if (list[i].toLowerCase() === query.toLowerCase()) {
            return true;
        }
    }
    return false;
};

const SearchResource = (list: any, query: any) => {
    console.log(list)
    const resourcesWithTitle = []

    for (var i = 0; i < list.length; i++) {
        if (list[i].title.search(RegExp(String(query), "i")) !== -1 || list[i].description.search(RegExp(String(query), "i")) !== -1) {
            resourcesWithTitle.push(list[i]);
        }
    }
    console.log(resourcesWithTitle);
    const resourcesWithTag = [];
    for (let i = 0; i < list.length; i++) {
        if (includes(list[i].tags, String(query))) {
            resourcesWithTag.push(list[i]);
        }
    }
    const resources = [];
    for (
        let i = 0;
        i < Math.min(resourcesWithTag.length, resourcesWithTitle.length);
        i++
    ) {
        if (
            String(resourcesWithTag[i]._id) === String(resourcesWithTitle[i]._id)
        ) {
            resources.push(resourcesWithTag[i]);
        } else {
            resources.push(resourcesWithTag[i]);
            resources.push(resourcesWithTitle[i]);
        }
    }
    if (resourcesWithTag.length > resourcesWithTitle.length) {
        for (
            let i = resourcesWithTitle.length;
            i < resourcesWithTag.length;
            i++
        ) {
            resources.push(resourcesWithTag[i]);
        }
    } else {
        for (
            let i = resourcesWithTag.length;
            i < resourcesWithTitle.length;
            i++
        ) {
            resources.push(resourcesWithTitle[i]);
        }
    }
    return resources;
}

export default SearchResource;