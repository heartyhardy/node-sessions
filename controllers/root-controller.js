exports.getRoot = (req, res, next) => {
    req.session.isLogged = true;
    res.send("<h1>Welcome!</h1>");
}