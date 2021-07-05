const ConsultantsService = module.exports;

const ConsultantsRepository = require('../repositories/ConsultantsRepository');

ConsultantsService.getConsultants = async (page, limit) => {
  try {
    const data = await ConsultantsRepository.getConsultants(page, limit);
    return data;
  } catch (error) {
    return null;
  }
};
