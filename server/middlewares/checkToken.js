const jwt = require('jsonwebtoken');
const checkToken = roleArr => {
  return (req, res, next) => {
    try {
      const bToken = req.headers.authorization;
      if (!bToken) {
        return res.status(403).json({ message: 'You are authorized' });
      }

      const token = bToken.split(' ')[1];
      console.log(token);
      const isValid = jwt.verify(token, process.env.SECRET_KEY);
      console.log(isValid);
      // if (isValid.role !== role) {
      //   return res.status(403).json({ message: 'You are not authorized' });
      // }

      if (!roleArr.includes(isValid.role)) {
        return res.status(403).json({ message: 'You are not authorized' });
      }
      next();
    } catch (e) {
      return res.status(403).json({ message: 'You are not authorized' });
    }
  };
};
module.exports = checkToken;
