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

ConsultantsRepository.getConsultantById = (consultantId) => db.raw(
  `
  SELECT 
    users.id,
    contries.name as country_name,
    users.name,
    users.email,
    professional_info.linkedin,
    professional_info.repositorie,
    professional_info.hourly_rate,
    area_technologies.id as area_technology_id,
    area_technologies.name as area_technology_name,
    professional_info.bio as description,
    professional_experiences.job_title
  FROM users
  JOIN contries ON contries.id = users.country_id
  JOIN professional_info ON users.id = professional_info.user_id
  JOIN area_technologies ON area_technologies.id = professional_info.area_technologie_id
  JOIN professional_experiences on professional_experiences.user_id = users.id
  WHERE users.id = ${consultantId}
  `,
);
