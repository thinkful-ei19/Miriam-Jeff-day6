const Item = (function(){

    function vname(name){
        if(!name){
            throw new Error('Name does not exist' )
        }
    }

    function create(name) {
        const validTypes = ['name', 'id', 'checked']
        if (!name) { 
            throw new TypeError('Missing required attribute');
        }
        return {
            id: cuid(),
            name: name,
            checked: false
        }
    }
    
    return {
        
    } 
})();

