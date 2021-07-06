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

ConsultantsController.getConsultantById = async (req, res) => {
  const {
    params: {
      consultant_id: consultantId,
    },
  } = req;

  try {
    const data = await ConsultantsService.getConsultantById(consultantId);
    if (!data) {
      return res.status(404).send({ message: `User ${consultantId} does not exists` });
    }
    return res.send(data);
  } catch (error) {
    return boom.internal(error);
  }
};
