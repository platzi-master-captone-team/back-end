const ConsultantsService = module.exports;

const ConsultantsRepository = require('../repositories/ConsultantsRepository');
const ConsultorTechnologiesRepository = require('../repositories/ConsultorTechnologiesRepository');

ConsultantsService.getConsultants = async (page, limit) => {
  try {
    const data = await ConsultantsRepository.getConsultants(page, limit);
    return data;
  } catch (error) {
    return null;
  }
};

ConsultantsService.getConsultantById = async (consultantId) => {
  try {
    const data = await ConsultantsRepository.getConsultantById(consultantId);
    const consultantInfo = data.rows[0];

    if (!consultantInfo) {
      return null;
    }

    const consultorTechnologies = await ConsultorTechnologiesRepository
      .getByUserId(consultantInfo.id);

    return {
      id: consultantInfo.id,
      country: consultantInfo.country_name,
      name: consultantInfo.name,
      email: consultantInfo.email,
      linkedin: consultantInfo.linkedin,
      github: consultantInfo.repositorie,
      fee: consultantInfo.hourly_rate,
      mastery: consultantInfo.area_technology_name,
      description: consultantInfo.description,
      profession: consultantInfo.job_title,
      technologies: consultorTechnologies,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
