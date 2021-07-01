const CharacteristicsService = module.exports;

const TechnologyAreaRepository = require('../repositories/TechnologyAreaRepository');
const TechnologyRepository = require('../repositories/TechnologyRepository');

CharacteristicsService.getUserCharacteristics = async () => {
  const masteries = await TechnologyAreaRepository.getTechnologiesArea();

  const technologies = await TechnologyRepository.getTechnologies();

  return { masteries, technologies };
};
