const includes = (list: Array<String>, query: String) => {
    for (var i = 0; i < list.length; i++) {
        if (list[i].toLowerCase() === query.toLowerCase()) {
            return true;
        }
    }
    return false;
};

const isDocPresent = (list: Array<any>, query: String) => {
    for (var i = 0; i < list.length; i++) {
        if (String(list[i]._id) === String(query)) {
            return true;
        }
    }
    return false;
}

const SearchResource = (list: any, query: any) => {
    const resources = []

    for (var i = 0; i < list.length; i++) {
        if (list[i].title.search(RegExp(String(query), "i")) !== -1 || list[i].description.search(RegExp(String(query), "i")) !== -1) {
            resources.push(list[i]);
        }
    }
    for (let i = 0; i < list.length; i++) {
        if (includes(list[i].tags, String(query))) {
            if (!isDocPresent(resources, String(list[i]._id)))
                resources.push(list[i]);
        }
    }

    return resources;
}

export default SearchResource;