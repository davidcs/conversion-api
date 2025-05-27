exports.fetchConversionRate = async (req, res) => {
  const { start_date, end_date, channel } = req.query;
  const { getConversionRate } = require('../services/conversionService');


  try {
    if (!start_date || !end_date) {
      return res.status(400).json({ error: 'start_date and end_date are required' });
    }

    const data = await getConversionRate(start_date, end_date, channel);
    res.json(data);
  } catch (error) {
    console.error('🔥 ERRO NO CONTROLLER:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
};
