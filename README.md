# express-ez-router
=====================
> Easy Handling Restful API for Express Router

##Installation
    
    $ npm install express-ez-router --save
    
##Example
app.js (Main Script File)

    const express = require('express');
    const ezRouter = require('express-ez-router');
    const PORT = process.env.PORT || 8080;
    
    const app = express();
    app.use(ezRouter('./api', '.api.js')); // or (['./api', './api2'], '.api.js')
    
    app.listen(PORT, () => {
        console.log(`API Server Started. PORT: ${PORT}`);
        console.log('If you wanna EXIT, Press Ctrl+C.');
    });
    
###Example Project Structure
    .
    ├── ...
    ├── api                                 # API Router Moudule Directory
    │   ├──memo
    │   │   ├── create-todo.api.js          # POST Method return Created Todo JSON Object API
    │   │   ├── read-todos.api.js           # GET Method return Todo JSON Array API
    │   │   ├── update-todo-by-id.api.js    # GET Method return Todo JSON Object API
    │   │   ├── delete-todo-by-id.api.js    # DELETE Method return Deleted Todo Json Object API
    │   │   └── dummy-memo-data.js          # !! NOT API FILE(NOT .api.js). DUMMY Memo data 
    │   ├── create-user.api.js              # POST Method return Created User JSON Object API
    │   ├── read-users.api.js               # GET Method return Users JSON Array API 
    │   ├── read-user-by-id.api.js          # GET Method return User JSON Object API
    │   ├── delete-user-by-id.api.js        # DELETE Method return Deleted Json Object API
    │   └── dummy-user-data.js              # !! NOT API FILE(NOT .api.js). DUMMY User data 
    ├── package.json
    └── app.js
    
### API Script File (ex. read-user-by-id.api.js)
    
    module.exports = {
        path: '/users/:userId',
        method: 'get',
        process: [validator, service, errorHandler]
    };
    
    function service(_request, _response, next) {
        console.log('service');
        
        try {
        
            _response.json({
                id: 1,
                username: 'David Im'
             });
        } catch (e) {
        
            next(e);
        }
    }
    
    function validator(_request, _response, next) {
        console.log('validator');
        next();
    }
    
    function errorHandler(_error, _request, _response, next) {
        console.log('error');
        console.error(_error);
    }
    

If you excute index.js, You can see console like this.

    API Module List Load... 
    
    api\create-user.api.js
    api\delete-user-by-id.api.js
    api\read-user-by-id.api.js
    api\read-users.api.js
    api\todo\create-todo.api.js
    api\todo\delete-todo-by-id.api.js
    api\todo\read-todo-by-id.api.js
    api\todo\read-todos.api.js
    api\todo\update-todo-by-id.api.js
    api\update-user-by-id.api.js
    
    API Module Loaded 
    
    API Server Started. PORT: 8080
    If you wanna EXIT, Press Ctrl+C.
    
