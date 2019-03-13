module.exports = {
    path: '/users',
    method: 'get',
    process: [validator, service, errorHandler]
};

function service(_request, _response, next) {

    const user = _request.body;

    try {

        _response.json({
            msg: "Created User",
            user: user
        });
    } catch (e) {

        next(e);
    }
}

function validator(_request, _response, next) {
    next();
}

function errorHandler(_error, _request, _response, next) {
    console.error(_error);
    _response.json({
        errorCode: _error.message
    });
}