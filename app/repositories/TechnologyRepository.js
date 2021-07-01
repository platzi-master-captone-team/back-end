const TechnologyRepository = module.exports;

const { db } = require('../utils/Database');

TechnologyRepository.getTechnologies = async () => db('technologies').select('id', 'name');
