module.exports = {
    path: '/users/:userId',
    method: 'get',
    process: [validator, service, errorHandler]
};

function service(_request, _response, next) {

    const userId = _request.params.userId;

    try {

        _response.json({
            msg: "Updated User",
            id: userId
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