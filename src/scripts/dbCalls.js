const baseURL = "http://0.0.0.0:8088";

const APIManager = {
    getSignedIn: (resource) => {
        return fetch(`${baseURL}/${resource}`)
            .then(result => result.json())
    },
    getAllInterests: function() {
        return fetch(`${baseURL}/interests?_expand=place`)
                .then(response => response.json())
    },
    getAllReviews: function(interestId) {
        return fetch(`${baseURL}/reviews?interestId=${interestId}`)
                .then(response => response.json())
    },
    deleteInterest: (resource, id) => {
        return fetch(`${baseURL}/${resource}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    },
    postPlace: (resource, data) => {
        return fetch(`${baseURL}/${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    },
    putPlace: (resource, id, data) => {
        return fetch(`${baseURL}/${resource}/${id}`, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
}

export default APIManager;
