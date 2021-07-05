const ConsultantsRepository = module.exports;

const { db } = require('../utils/Database');

ConsultantsRepository.getConsultants = (page, size) => {
  const offset = (page - 1) * size;

  const query = db('users')
    .join('professional_info', 'professional_info.user_id', 'users.id')
    .join('area_technologies', 'area_technologies.id', 'professional_info.area_technologie_id')
    .select(
      'users.id',
      'users.name',
      'professional_info.hourly_rate',
      'professional_info.bio',
      'area_technologies.name',
    );

  return query.offset(offset).limit(size).orderBy('id', 'desc');
};
