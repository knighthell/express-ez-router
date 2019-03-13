/**
 * Created by knighthell on 2019-03-13.
 * Express Easy Router Method Module Loader
 */
const fs = require('fs');
const path = require('path');
const router = require('express').Router();

const rootPath = path.dirname(require.main.filename || process.mainModule.filename);

module.exports = (apiPaths, routerFileFilter) => {

    console.log('API Module List Loading...', '\n');

    registApiModuleByPath(apiPaths, routerFileFilter);

    console.log('\nAPI Module Loaded', '\n');

    return router;
};

function registApiModuleByPath(apiPaths, filter) {

    const apiPathArray = Array.isArray(apiPaths) ? apiPaths : [apiPaths];

    apiPathArray.forEach(apiPath => {

        if (!fs.existsSync(apiPath)) {
            return;
        }

        const files = fs.readdirSync(apiPath);

        files
            .map(file => path.join(apiPath, file))
            .forEach(filename => {

                const stat = fs.lstatSync(filename);

                if (stat.isDirectory()) {
                    registApiModuleByPath(filename, filter);
                    return;
                }

                if (filename.indexOf(filter) >= 0) {
                    const apiDirPath = rootPath + '/' + filename;
                    console.log(filename);
                    const apiModule = require(apiDirPath);
                    const api = initApiModule(apiModule);
                    routerRegister(api);
                }
            });
    });
}


function routerRegister(api) {

    const method = api.method.toLowerCase();
    router[method](api.path, ...api.process);
}

function initApiModule(apiModule) {

    if (!apiModule.middleModule) {
        apiModule.middleModule = [emptyModule];
    }

    if (!apiModule.validator) {
        apiModule.validator = emptyModule;
    }

    if (!apiModule.errorHandler) {
        apiModule.errorHandler = () => {};
    }

    return apiModule;
}

function emptyModule(_request, _response, next) {
    next();
}