const endpoint = exports
const executeQuery = require('../Model/sale')

endpoint.salesDataGet = (req, res) => {
    res.status(200).send(executeQuery.salesDataGet(req.query));
};

endpoint.salesDataPost = (req, res) => {
    res.status(201).send(executeQuery.salesDataPost(req.body));
};
  
endpoint.salesDataPatch = (req, res) => {
   res.status(201).send(executeQuery.salesDataPatch(req.body));
};
  
endpoint.salesDataDelete = (req, res) => {
   res.status(200).send(executeQuery.salesDataDelete(req.query));
};