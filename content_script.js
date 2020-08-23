window.addEventListener("load", main, false);

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 1000);
    function jsLoaded() {
        if (document.querySelectorAll('td.cell.c1.lastcol').length >= 3) {
            clearInterval(jsInitCheckTimer);
            var limit = document.querySelectorAll('td.cell.c1.lastcol')[2];
            var limit_value = limit.innerHTML;
            
            if(limit_value.substr(limit_value.length-5, 5) === "00:00"){
                limit_value = limit_value.substr(0, limit_value.length-5);
                limit_value += "23:59";
                let day = ["月", "火", "水", "木", "金", "土", "日"];
                for(let i = 0; i < 7; ++i){
                    console.log(limit_value.substr(14, 1));
                    if(limit_value.substr(14, 1) === day[i]){
                        limit_value.replace(day[i], day[(i+6)%7]);
                        break;
                    }
                }

                limit.innerHTML = limit_value;
            }
        };
    }
}