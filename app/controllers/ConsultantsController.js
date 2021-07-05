const ConsultantsController = module.exports;

const boom = require('@hapi/boom');

const ConsultantsService = require('../services/ConsultantsService');

ConsultantsController.getConsultants = async (req, res) => {
  const {
    body: {
      page = 1,
      limit = 15,
    },
  } = req;

  try {
    const data = await ConsultantsService.getConsultants(page, limit);
    if (!data) {
      return res.status(400).send({ message: 'Error in the response' });
    }

    return res.send(data);
  } catch (error) {
    return boom.internal(error);
  }
};
