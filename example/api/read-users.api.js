module.exports = {
    path: '/users',
    method: 'get',
    process: [validator, service, errorHandler]
};

function service(_request, _response, next) {



    try {

        _response.json([
            {
                msg: "Read User List 0",
            },
            {
                msg: "Read User List 1",
            }
        ]);
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