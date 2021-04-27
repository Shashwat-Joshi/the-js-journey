export default class MiddleWare {
  static log(req, res, next) {
    console.log("Logging....");
    next();
  }

  static auth(req, res, next) {
    console.log("Authenticating....");
    next();
  }
}
