module.exports = {countWords}
function countWords(string){
    //if file is empty the return 0
    if(string=='') 
        return 0

    // remove all spaces before and after the content
    string = string.trim()
    let count = string.split(' ')
    return (count.length)
}

