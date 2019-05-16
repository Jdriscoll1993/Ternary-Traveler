import APIManager from "./dbCalls";

function interestPrinter(resource){
    const clearBefore = document.getElementById("interest_wrapper")
    while (clearBefore.firstChild) {
        clearBefore.removeChild(clearBefore.firstChild)
    }
    APIManager.getAllInterests(`${resource}`)
        .then(events => {
            console.log(events)
            console.log("log things placeBuilder")
            events.map(interestBuilder)
            document.querySelector("div")
        })
}
// ADD POINT OF INTEREST
const addFrag = document.createDocumentFragment()
const addDiv = document.createElement("div");
    const addPOIBtn = document.createElement("button")
    addPOIBtn.setAttribute("class", "btn_add_interest")
    addPOIBtn.textContent = "Add Point of Interest"
    addDiv.appendChild(addPOIBtn)
    addFrag.appendChild(addDiv)
    document.querySelector(".add_wrapper").appendChild(addFrag)


function interestBuilder(interestsData, index) {
    // APIManager.getAllReviews(interestsData.id)
    // .then (res => {
    //     if (res === undefined){
    //         // ?????
    //     }
    //   let reviewInput = res[0].review
    //   console.log(reviewInput)
    // })
    const docFrag = document.createDocumentFragment()

    const div = document.createElement("div");
    div.setAttribute("id", `interests_div_${index}`)

    const name = document.createElement("h2");
    const description = document.createElement("h2");
    const cost = document.createElement("h2");
    const review = document.createElement("h2");
    const country = document.createElement("h2");

// ADD AND EDIT REVIEW

    const addReviewBtn = document.createElement("button")
    addReviewBtn.textContent = "Write a Review"
    const editReviewBtn =  document.createElement("button")
    editReviewBtn.textContent = "Edit Review"

// EDIT AND DELETE POINTS OF INTEREST
    const editPOIBtn =  document.createElement("button")
    editPOIBtn.textContent = "Edit Point of Interest"
    const deletePOIBtn =  document.createElement("button")
    deletePOIBtn.textContent = "Delete Point of Interest"

// SET ATTRIBUTES TO FORM INPUTS
    name.setAttribute("class", "place-name")
    name.textContent = interestsData.name;
    name.style.textAlign="center"

    country.setAttribute("class", "place-country")
    country.textContent = "Location: " + interestsData.place.name;

    description.setAttribute("class", "place-description")
    description.textContent = "Description: "+  interestsData.description;

    cost.setAttribute("class", "place-cost")
    cost.textContent = "Cost: "+ "$"+ interestsData.cost;

    // review.setAttribute("class", "place-review")
    // review.textContent = "Review: " + reviewInput;


    //APPEND PLACE DATA

    div.appendChild(name)
    div.appendChild(country)
    div.appendChild(description)
    div.appendChild(cost)
    div.appendChild(review)
    div.appendChild(addReviewBtn)
    div.append(editReviewBtn)
    div.appendChild(editPOIBtn)
    div.appendChild(deletePOIBtn)

// LISTENERS
    deletePOIBtn.addEventListener("click", event => {
        APIManager.deleteInterest("interests", interestsData.id)
            .then(() => {
                interestPrinter("interests")
            })
    })

    addPOIBtn.addEventListener("click", event => {
        let interestForm = document.querySelector(".add_interest")
        interestForm.setAttribute("id", "unhide")
        console.log("working")
    })
    addPOIBtn.addEventListener("click", event => {
        const byeButton = document. querySelector(".btn_add_interest")
        byeButton.setAttribute("id", "hide")
    })

    // editPOIBtn.addEventListener("click", event => {
        // saveEditBtn.style.display="block"
        // editBtn.style.display="none"

    //     inputEventTitle.setAttribute("class", "unhidden")
    //     inputEventTitle.setAttribute("value", `${eventData.title}`);
    //     inputEventTitle.removeAttribute("class", "hidden");
    //     title.setAttribute("class", "hidden");

    //     inputEventSummary.setAttribute("class", "unhidden")
    //     inputEventSummary.setAttribute("value", `${eventData.summary}`);
    //     inputEventSummary.removeAttribute("class", "hidden")
    //     summary.setAttribute("class", "hidden")

    //     inputEventDate.setAttribute("class", "unhidden")
    //     inputEventDate.setAttribute("class", `${eventData.date}`)
    //     inputEventDate.removeAttribute("class", "hidden")
    //     date.setAttribute("class", "hidden")

    // })




    addReviewBtn.addEventListener("click", event => {
        const reviewForm = document.querySelector(".add_review")
        reviewForm.setAttribute("id", "unhide")
    })

    docFrag.appendChild(div)
    document.getElementById("interest_wrapper").appendChild(docFrag)

}


export default interestPrinter

