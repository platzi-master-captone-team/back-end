const CharacteristicsController = module.exports;

const boom = require('@hapi/boom');

const CharacteristicsService = require('../services/CharacteristicsService');

CharacteristicsController.getUserCharacteristics = async (_req, res) => {
  try {
    const data = await CharacteristicsService.getUserCharacteristics();

    return res.send(data);
  } catch (error) {
    return boom.internal(error);
  }
};
