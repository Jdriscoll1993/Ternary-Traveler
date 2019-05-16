import APIManager from "./dbCalls"


function addInterest() {
    const postInterest = document.getElementById("interest_name")
    const postDescription= document.getElementById("interest_desc")
    const postCost= document.getElementById("interest_cost")
    const postSelect = document.getElementById("interest_location")
    console.log(postSelect)
    const postedData = {
        name: postInterest.value,
        description: postDescription.value,
        cost: postCost.value,
        placeId:  Number(postSelect.value)
    }
    APIManager.postPlace("interests", postedData)
}

export default addInterest;