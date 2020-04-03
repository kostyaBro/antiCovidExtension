console.log("AntiCovidExtention was run.");

let covidWords = [
    "covid", "Covid", "COVID", "COVID-19",
    "coronavirus", "Coronavirus", "CORONAVIRUS",
    "коронавирус", "Коронавирус", "КОРОНАВИРУС",
    "коровавирус",
    "Карантин", "карантин", "КАРАНТИН"];

function covidCleaner() {
    if (window.location.href.includes("youtube")) {
        var videoCells = document.querySelectorAll(
            ".ytd-rich-grid-video-renderer, " +
            ".ytd-rich-item-renderer,  " +
            ".ytd-video-renderer, " +
            ".ytd-playlist-video-list-renderer"
        );
        for (var i = 0; i < videoCells.length; i++) {
            for (var j = 0; j < covidWords.length; j++) {
                if (videoCells[i].textContent.includes(covidWords[j])) {
                    videoCells[i].hidden = true;
                    break;
                }
            }
        }
    }

    if (window.location.href.includes("google")) {
        var foundedPageCells = document.querySelectorAll(
            ".rc, " +
            ".So9e7d" // hidden not work
        );
        for (var i = 0; i < foundedPageCells.length; i++) {
            for (var j = 0; j < covidWords.length; j++) {
                if (foundedPageCells[i].textContent.includes(covidWords[j])) {
                    foundedPageCells[i].hidden = true;
                    break;
                }
            }
        }
    }

    if (window.location.href.includes("vk.com")) {
        var foundedPageCells = document.querySelectorAll(
            "._post_content"
        );
        for (var i = 0; i < foundedPageCells.length; i++) {
            for (var j = 0; j < covidWords.length; j++) {
                if (foundedPageCells[i].textContent.includes(covidWords[j])) {
                    foundedPageCells[i].hidden = true;
                    break;
                }
            }
        }
    }
}

window.setInterval(function() {
    covidCleaner()
}, 1000);

// IF I use mutationObserver i lock page and even can't close it.

// var mutationObserver = new MutationObserver(function(mutations) {
//     // mutations.forEach(function(mutation) {
//         covidCleaner();
//     // });
// });
//
// mutationObserver.observe(
//     document.documentElement,
//     {
//         childList: true,
//         attributes: true,
//         subtree: true,
//         characterData: true,
//         attributeOldValue: true,
//         characterDataOldValue: true
//     }
// );
