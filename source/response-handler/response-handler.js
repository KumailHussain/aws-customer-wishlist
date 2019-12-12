const utilFunction = require('../utility-functions/util-customer')
const databaseManager = require('../customer-db-handler/customer-db-params');

module.exports.itemAddSuccess = data => {
        return { statusCode: '201', message: 'Item Added Succesfully'}
}


module.exports.getItemAndDelete = async data => {
        const dupHandlerRes = utilFunction.findDuplicate(data)
        if(dupHandlerRes['removeDuplicate']){
           var res  = await this.deleteDataHandle(dupHandlerRes['params'])
           return res
        } else {
           return { statusCode: '200', message: dupHandlerRes['message']}
        }
}

module.exports.deleteDataHandle = async params => {
      return await databaseManager.deleteDuplicateItems(params)
}

module.exports.deleteDuplicateSuccess =  params => {
       return { statusCode: '200', message: 'Item Deleted Succesfully'}
}

module.exports.errorHandle = error => {
          return { statusCode: '400', error: `Error Received:${error} `}

}