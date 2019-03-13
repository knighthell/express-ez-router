module.exports = {
    path: '/todos/:todoId',
    method: 'get',
    process: [validator, service, errorHandler]
};

function service(_request, _response, next) {

    const todoId = _request.params.todoId;

    try {

        _response.json({
            msg: "Update Todo",
            id: todoId
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