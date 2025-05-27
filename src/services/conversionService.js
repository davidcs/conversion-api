const sequelize = require('../config/db');

async function getConversionRate(startDate, endDate, channel) {
  const replacements = { startDate, endDate };
  let channelFilter = '';

  if (channel) {
    channelFilter = 'AND origin = :channel';
    replacements.channel = channel;
  }

  const [results] = await sequelize.query(`
    SELECT
      DATE_TRUNC('day', created_at) AS date,
      origin AS channel,
      COUNT(*) FILTER (WHERE response_status_id = 4) * 1.0 / COUNT(*) AS conversion_rate
    FROM inside.users_surveys_responses_aux
    WHERE created_at BETWEEN :startDate AND :endDate
    ${channelFilter}
    GROUP BY date, origin
    ORDER BY date;
  `, { replacements });

  return results;
}

module.exports = { getConversionRate };
