module.exports = {
    path: '/todos',
    method: 'get',
    process: [validator, service, errorHandler]
};

function service(_request, _response, next) {

    const todo = _request.body;

    try {

        _response.json({
            msg: "Created Todo",
            todo: todo
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