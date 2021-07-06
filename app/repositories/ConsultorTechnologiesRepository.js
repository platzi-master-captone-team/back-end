const ConsultorTechnologiesRepository = module.exports;

const { db } = require('../utils/Database');

ConsultorTechnologiesRepository.getByUserId = (userId) => db('consultor_technologies')
  .join('technologies', 'technologies.id', 'consultor_technologies.technologie_id')
  .select(
    'technologies.name',
  )
  .where({ user_id: userId });
