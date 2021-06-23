const MetaDataController = module.exports;
const boom = require('@hapi/boom');
const MetaDataService = require('../services/MetaDataService');

MetaDataController.getAllMetaData = async (_req, res) => {
  try {
    const data = await MetaDataService.getMetaData();
    return res.send(data);
  } catch (error) {
    return boom.internal(error);
  }
};

MetaDataController.createMetaData = async (req, res) => {
  const dataToSave = req.body;
  try {
    await MetaDataService.createNewMetaData(dataToSave);
    return res.status(201).send('OK');
  } catch (error) {
    return boom.internal(error);
  }
};
