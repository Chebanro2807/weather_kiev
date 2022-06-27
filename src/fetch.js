function fetch(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open("GET", url);
        xhr.send();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4 || xhr.status !== 200) {
                return
            }
            const response = JSON.parse(xhr.response)
            resolve(response)
        }
    })
}

export {fetch}
