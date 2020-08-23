window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
        if (document.querySelectorAll('td.cell.c1.lastcol').length >= 3) {
            clearInterval(jsInitCheckTimer);
            var limit = document.querySelectorAll('td.cell.c1.lastcol')[2];
            var limit_value = limit.innerHTML;
            
            if(limit_value.substr(limit_value.length-5, 4) === "00:00"){
                limit_value = limit_value.substr(0, limit_value.length-4);
                limit_value += "23:59";
            }
        };
    }
}