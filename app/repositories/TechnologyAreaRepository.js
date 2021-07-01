const TechnologyAreaRepository = module.exports;

const { db } = require('../utils/Database');

TechnologyAreaRepository.getTechnologiesArea = async () => db('area_technologies').select('id', 'name');
