module.exports = (req, res, next) => {
  const { user, message } = req.body;
  if (!user || !message) {
    return res.status(400).json({ error: 'Missing user or message' });
  }
  next();
};


