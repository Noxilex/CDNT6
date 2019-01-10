System.register([], function (exports_1, context_1) {
    "use strict";
    var User;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            User = /** @class */ (function () {
                function User(name) {
                    this.name = name;
                }
                User.prototype.setName = function (value) {
                    this.name = value;
                    return this;
                };
                User.prototype.getName = function () {
                    return this.name;
                };
                return User;
            }());
            exports_1("User", User);
        }
    };
});
