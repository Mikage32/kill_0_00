window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
        if (document.querySelector('main h1') != null) {
            clearInterval(jsInitCheckTimer);
            var title = document.querySelector('main h1');
            console.log(title);
        };
    }
}