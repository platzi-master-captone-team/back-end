const MetaDataService = module.exports;
const MetaData = require('../utils/models');

MetaDataService.getMetaData = () => MetaData.find();

MetaDataService.createNewMetaData = async (data) => {
  try {
    const userMetaDataCreated = new MetaData(data);
    await userMetaDataCreated.save();
    return userMetaDataCreated;
  } catch (error) {
    console.error(error); // eslint-disable-line
    return false;
  }
};
