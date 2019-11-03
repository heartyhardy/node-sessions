exports.getRoot = (req, res, next) => {
    req.session.isLogged = true;
    res.send("Hello world");
}