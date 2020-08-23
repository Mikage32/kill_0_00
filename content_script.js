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
                let days = ["月", "火", "水", "木", "金", "土", "日"];
                for(let i = 0; i < 7; ++i){
                    if(limit_value.substr(limit_value.length-10, 1) === days[i]){
                        limit_value = limit_value.replace(days[i], days[(i+6)%7]);
                        break;
                    }
                }

                if(limit_value.substr(10, 1) === "0") {
                    if(limit_value.substr(11, 1) != 0) {
                        limit_value = limit_value.substr(0, 11) + (limit_value.substr(11, 1)-1) + limit_value.substr(12, limit_value.length-12);
                    }else{

                    }
                }
                else {
                    limit_value = limit_value.substr(0, 10) + (limit_value.substr(10, 2)-1) + limit_value.substr(12, limit_value.length-12);
                }

                limit.innerHTML = limit_value;
            }
        };
    }
}