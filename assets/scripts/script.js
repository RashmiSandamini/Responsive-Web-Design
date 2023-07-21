const buttonReco = document.getElementById("moreRecommendation");
const animeReco =document.getElementById("anime-reco")

function showMoreAnime(){
    console.log("hello");
    // buttonReco.innerHTML="hi";
    animeReco.classList.toggle("toggle-visibility");

    if (animeReco.classList.contains("toggle-visibility")) {
        buttonReco.textContent = "Show More Recommendations";
    } else {
        buttonReco.textContent = "Close Recommendation";
    }

    animeReco.scrollIntoView({ behavior: "smooth" });
}

buttonReco.addEventListener("click",showMoreAnime);