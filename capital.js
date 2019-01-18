
// const capitalizeMe = (word) => {
//     let 
//         caps = word.slice(0, 1).toUpperCase(),
//         right = word.slice(1).toLowerCase()

//     console.log(caps + right) //Foreverjavascript
// }
// capitalizeMe('forEverJavaScript')




function capitalizeMe(x) {
    var word = x,
        length = word.length,
        firstChar = word.charAt(0).toUpperCase(),
        restChar = '';
        
    for (var i = 1; i <= length - 1; i++) {
        restChar += word[i].toLowerCase();
    }

    console.log(firstChar + restChar) //Foreverjavascript
}

capitalizeMe('forEverJavaScript')
