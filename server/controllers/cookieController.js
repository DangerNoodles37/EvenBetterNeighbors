const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  console.log('ENTERING CREATE COOKIE METHOD');
  const userID = `${res.locals.loggedIn._id}`;
  res.cookie('ssid', userID);
  console.log('LEAVING CREATE COOKIE METHOD');
  return next();
};

module.exports = cookieController;
