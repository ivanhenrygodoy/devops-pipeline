module.exports = (req, res, next) => {
  const { user, message } = req.body;
  if (!user || !message) {
    return res.status(400).json({ error: 'Missing user or message' });
  }

  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  next();
};


