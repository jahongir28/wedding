function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const mainUrl = "https://jahongir28.github.io/wedding?id=ccfc1369-3769-4db9-b325-ab950d677e60"

$(document).ready(function () {
    //const guests = JSON.parse(guests)
    let queryId = getParameterByName('id').replace(/"/g, '');
    console.log("queryId:" + queryId)
    $.getJSON("guests.json", function (result) {
        console.log("success " + result);
        var names = []
        $.each(result, function(i, field){
            if (queryId === field.id){
                names = field.names
                if (names.length === 2){
                    let name1 = names[0] + " и"
                    $("#guest-name-1").text(name1)
                    $("#guest-name-2").text(names[1])
                }else {
                    $("#guest-name-1").text(names)
                }
                console.log("FOUND")
            }
            console.log(field.id)
            console.log(field.names)
            console.log("############################################")
        });
        console.log("names:" + names)
        /*var names = []
        for (let i = 0; i < result.length; i++) {
            let fileId = result[i].id
            if (fileId === queryId){
                names = result[i].names
                break
            }
            console.log(fileId)
        }*/

    })
});

