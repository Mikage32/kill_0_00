window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
        if (document.querySelector('td.cell.c1.lastcol') != null) {
            clearInterval(jsInitCheckTimer);
            document.querySelector('td.cell.c1.lastcol').innerHTML = "test";
        };
    }
}