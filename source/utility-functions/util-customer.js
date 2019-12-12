module.exports.findDuplicate = res => {
    var data = res['Items']
    var seen = Object.create(null),
    itemsArray = []

    var result = data.filter(item => {
        var key = ['uid', 'pid'].map(k => item[k]).join('|');
        if (!seen[key]) {
            seen[key] = true;
            return true;
        } else {
            itemsArray.push( {
                 DeleteRequest : {    Key : {'id' : item['id']}}
             })
        }
    })
    var results = itemsArray.length > 0 ? true : false
    if(results){
            var params = {
                RequestItems : {"customers_addList" : itemsArray}
            }
            return { message : 'Duplicate Item(s) Found', params: params, removeDuplicate: true }
    } else {
            return { message : 'There is no Duplicate Item', params: {},  removeDuplicate: false }

    }
}