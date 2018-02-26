const Item = (function(){
    return Item;
} );
// Factory functions are functions which return an object
function createName(name) {
    const name = name;
    const id = cuid();
    const checked = false;
    return name, id, checked;
}