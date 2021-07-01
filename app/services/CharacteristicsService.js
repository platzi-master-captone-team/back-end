const CharacteristicsService = module.exports;

const TechnologyAreaRepository = require('../repositories/TechnologyAreaRepository');
const TechnologyRepository = require('../repositories/TechnologyRepository');

CharacteristicsService.getUserCharacteristics = async () => {
  const speciality = await TechnologyAreaRepository.getTechnologiesArea();

  const technology = await TechnologyRepository.getTechnologies();

  return { speciality, technology };
};
