// Only change code below this line
/**
 * 
 * @param {string} title 
 */
function urlSlug(title) {

    return title.trim().toLowerCase()
        .split(/ /)
        .filter(s=>s!='')
        .join('-');
}
// Only change code above this line

const val = urlSlug(" Winter Is  Coming");

console.log();