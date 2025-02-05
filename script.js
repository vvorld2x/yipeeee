function changeText() {
    let nbutton = document.getElementById("nbutton");
    nbutton.innerText = nbutton.innerText === "no" ? "nubayan sabrina" : 
                        nbutton.innerText === "nubayan sabrina" ? "ok lg alam ko naman wala akong kwentang tao" :
                        nbutton.innerText === "ok lg alam ko naman wala akong kwentang tao" ? "kung ayaw mo skin sbihin mo hindi ganyan" : 
                        nbutton.innerText === "kung ayaw mo skin sbihin mo hindi ganyan" ? "wla nman akong mgandang ginwa pangit nanga maitim pa edi sana namatay nalang ako" :
                        nbutton.innerText === "wla nman akong mgandang ginwa pangit nanga maitim pa edi sana namatay nalang ako" ? "hello nanay po ito ni chris patay npo sha" :
                        "no";
}


function changeTextY() {
    let ybutton = document.getElementById("ybutton");
    ybutton.innerText = ybutton.innerText === "yes" ? "yayyyy" : 
    ybutton.innerText === "yayyyy" ? "yayyyyyyyy" :
    ybutton.innerText === "yayyyyyyyy" ? "okayyy slow downn":
    ybutton.innerText === "okayyy slow downn" ? "tama na regina" :
    ybutton.innerText === "tama na regina" ? "luh papancin" :
    ybutton.innerText === "luh papancin" ? "wag na nga" :
"yes";
}
function showNewPage() {
    let newPage = document.getElementById("newPage");
    newPage.style.display = "block";	
}
