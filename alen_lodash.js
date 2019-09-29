const _ = module.exports = {}
_.chunk = function chunk(a,b){
    var nlist=[];
    var exc;
    if(b>a.length || 0>b){
        return -1
    }
    else{
        for(var i=0;i<b;i++){
            exc=a.shift();
            nlist.push(exc);        
        }   
    }
    return [nlist,a]    
}

_.sortedIndex = function sortedIndex(a,b){
    a.push(b)
    a.sort()
    if(typeof(a[0]) != typeof(b)){
        return -1
    }
    return a.indexOf(b)
}

_.isString = function isString(a){
    if(typeof(a) === typeof('sdarbaast')){
        return true
    }
    else{
        return false
    }
}