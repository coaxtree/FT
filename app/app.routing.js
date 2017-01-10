"use strict";
var router_1 = require('@angular/router');
var index_1 = require('./login/index');
var index_2 = require('./signup/index');
var index_3 = require('./createfamily/index');
var index_4 = require('./guards/index');
var appRoutes = [
    { path: '', component: index_1.LoginComponent, canActivate: [index_4.AuthGuard] },
    { path: 'login', component: index_1.LoginComponent },
    { path: 'signup', component: index_2.SignupComponent },
    { path: 'createfamily', component: index_3.CreatefamilyComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map