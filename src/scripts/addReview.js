import APIManager from "./dbCalls"


function addReview() {
    const postReview = document.getElementById("review-area")
    console.log("postReview", postReview)
    const postedData = {
        review: postReview.value
    }
    APIManager.postPlace("reviews", postedData)
}

export default addReview;