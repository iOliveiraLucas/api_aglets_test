const executeQuery = exports
const db = require('../database.json')

executeQuery.salesDataGet = (query) => {
    if ((Object.keys(query)).length === 0){
        return (db)
    }
    else {
        if ((Object.keys(db)).includes(query.id)) {
            return db[query.id]
        }
        else {
            return {"message":"ID not found"}
        }
    }
}

executeQuery.salesDataPost = (body) => {
    let id = ((Math.max(...Object.keys(db)))+1).toString()
    body.creationDate = new Date()
    body.lastChange = new Date()
    body.totalValue = (body.item.price*body.item.quantity)+body.shippingData.shippingValue
    db[id]= body
    return {"message":"created successfully",
        "id":id
    }
}

executeQuery.salesDataPatch = (body) => {
    if ((Object.keys(db)).includes(body.id)) {
        let id = db[body.id]
        Object.keys(body).forEach(key => {
            if (key !== "id") {
                id[key] = body[key]
            }
        });
        id.lastChange = new Date()
        id.totalValue = (id.item.price*id.item.quantity)+id.shippingData.shippingValue
        return {"message":"Update successfully",
            "id":body.id
        }
    }
    else {
        return {"message":"ID not found"
        }
    }
}

executeQuery.salesDataDelete = (query) => {
    if ((Object.keys(db)).includes(query.id)) {
        delete db[query.id];
        return {"message":"Deleted successfully",
            "id":query.id
        }
    }
    else {
        return {"message":"ID not found"}
    }
}