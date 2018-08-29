function checkStatus(response) {
    if (response.ok) {
        return response.json();
    }
};

export const getResponseJson = (url, options) => {
    return window.fetch(url, options).then(checkStatus);
};