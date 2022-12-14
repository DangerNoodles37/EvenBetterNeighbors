const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  const userID = `${res.locals.loggedIn._id}`;
  res.cookie('ssid', userID);
  return next();
};

module.exports = cookieController;
