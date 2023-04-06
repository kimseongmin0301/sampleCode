const url = new URL(window.location.href);

const urlParams = url.searchParams;

if(urlParams.get('m') == 1){
    const two = document.getElementById('two');
    document.addEventListener("DOMContentLoaded", () => {
        two.classList.add("hide");
    })
} else if(urlParams.get('m') == 2){
    const one = document.getElementById('one');
    document.addEventListener("DOMContentLoaded", () => {
        one.classList.add("hide");
    })
}