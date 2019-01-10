System.register(["./user/user.js"], function (exports_1, context_1) {
    "use strict";
    var user_js_1, u, sayHello, users, products;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (user_js_1_1) {
                user_js_1 = user_js_1_1;
            }
        ],
        execute: function () {
            u = new user_js_1.User('Tu es sérieux ?');
            console.log('Name: ', u.setName('Wilfrid'));
            console.info("Hello " + u.getName());
            // Template string
            // Arrow Function
            sayHello = function (username) { return "hello " + username; };
            console.log(sayHello('Trivette'));
            users = ['Chuck', 'Steven', 'Hurkle', 'Roger'];
            for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                var user = users_1[_i];
                console.log(user);
            }
            products = [
                { title: 'Titre de mon produit' },
            ];
            console.log(products[0].title);
        }
    };
});
