/**
 * @license Angular v7.1.0-beta.2-da59206995
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/platform-browser')) :
	typeof define === 'function' && define.amd ? define('@angular/router', ['exports', '@angular/common', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/platform-browser'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.router = {}),global.ng.common,global.ng.core,global.rxjs,global.rxjs.operators,global.ng.platformBrowser));
}(this, (function (exports,_angular_common,_angular_core,rxjs,rxjs_operators,_angular_platformBrowser) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * @license Angular v7.1.0-beta.2-da59206995
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@description
 *
 * Base for events the Router goes through, as opposed to events tied to a specific
 * Route. `RouterEvent`s will only be fired one time for any given navigation.
 *
 * Example:
 *
 * ```
 * class MyService {
 *   constructor(public router: Router, logger: Logger) {
 *     router.events.filter(e => e instanceof RouterEvent).subscribe(e => {
 *       logger.log(e.id, e.url);
 *     });
 *   }
 * }
 * ```
 *
 * \@publicApi
 */
var RouterEvent = /** @class */ (function () {
    function RouterEvent(id, url) {
        this.id = id;
        this.url = url;
    }
    return RouterEvent;
}());
/**
 * \@description
 *
 * Represents an event triggered when a navigation starts.
 *
 * \@publicApi
 */
var NavigationStart = /** @class */ (function (_super) {
    __extends(NavigationStart, _super);
    function NavigationStart(/** @docsNotRequired */
    id, /** @docsNotRequired */
    url, /** @docsNotRequired */
    navigationTrigger, /** @docsNotRequired */
    restoredState) {
        if (navigationTrigger === void 0) { navigationTrigger = 'imperative'; }
        if (restoredState === void 0) { restoredState = null; }
        var _this = _super.call(this, id, url) || this;
        _this.navigationTrigger = navigationTrigger;
        _this.restoredState = restoredState;
        return _this;
    }
    /** @docsNotRequired */
    /**
     * \@docsNotRequired
     * @return {?}
     */
    NavigationStart.prototype.toString = /**
     * \@docsNotRequired
     * @return {?}
     */
    function () { return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"; };
    return NavigationStart;
}(RouterEvent));
/**
 * \@description
 *
 * Represents an event triggered when a navigation ends successfully.
 *
 * \@publicApi
 */
var NavigationEnd = /** @class */ (function (_super) {
    __extends(NavigationEnd, _super);
    function NavigationEnd(/** @docsNotRequired */
    id, /** @docsNotRequired */
    url, urlAfterRedirects) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        return _this;
    }
    /** @docsNotRequired */
    /**
     * \@docsNotRequired
     * @return {?}
     */
    NavigationEnd.prototype.toString = /**
     * \@docsNotRequired
     * @return {?}
     */
    function () {
        return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')";
    };
    return NavigationEnd;
}(RouterEvent));
/**
 * \@description
 *
 * Represents an event triggered when a navigation is canceled.
 *
 * \@publicApi
 */
var NavigationCancel = /** @class */ (function (_super) {
    __extends(NavigationCancel, _super);
    function NavigationCancel(/** @docsNotRequired */
    id, /** @docsNotRequired */
    url, reason) {
        var _this = _super.call(this, id, url) || this;
        _this.reason = reason;
        return _this;
    }
    /** @docsNotRequired */
    /**
     * \@docsNotRequired
     * @return {?}
     */
    NavigationCancel.prototype.toString = /**
     * \@docsNotRequired
     * @return {?}
     */
    function () { return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"; };
    return NavigationCancel;
}(RouterEvent));
/**
 * \@description
 *
 * Represents an event triggered when a navigation fails due to an unexpected error.
 *
 * \@publicApi
 */
var NavigationError = /** @class */ (function (_super) {
    __extends(NavigationError, _super);
    function NavigationError(/** @docsNotRequired */
    id, /** @docsNotRequired */
    url, error) {
        var _this = _super.call(this, id, url) || this;
        _this.error = error;
        return _this;
    }
    /** @docsNotRequired */
    /**
     * \@docsNotRequired
     * @return {?}
     */
    NavigationError.prototype.toString = /**
     * \@docsNotRequired
     * @return {?}
     */
    function () {
        return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")";
    };
    return NavigationError;
}(RouterEvent));
/**
 * \@description
 *
 * Represents an event triggered when routes are recognized.
 *
 * \@publicApi
 */
var RoutesRecognized = /** @class */ (function (_super) {
    __extends(RoutesRecognized, _super);
    function RoutesRecognized(/** @docsNotRequired */
    id, /** @docsNotRequired */
    url, urlAfterRedirects, state) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        return _this;
    }
    /** @docsNotRequired */
    /**
     * \@docsNotRequired
     * @return {?}
     */
    RoutesRecognized.prototype.toString = /**
     * \@docsNotRequired
     * @return {?}
     */
    function () {
        return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return RoutesRecognized;
}(RouterEvent));
/**
 * \@description
 *
 * Represents the start of the Guard phase of routing.
 *
 * \@publicApi
 */
var GuardsCheckStart = /** @class */ (function (_super) {
    __extends(GuardsCheckStart, _super);
    function GuardsCheckStart(/** @docsNotRequired */
    id, /** @docsNotRequired */
    url, urlAfterRedirects, state) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        return _this;
    }
    /**
     * @return {?}
     */
    GuardsCheckStart.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return GuardsCheckStart;
}(RouterEvent));
/**
 * \@description
 *
 * Represents the end of the Guard phase of routing.
 *
 * \@publicApi
 */
var GuardsCheckEnd = /** @class */ (function (_super) {
    __extends(GuardsCheckEnd, _super);
    function GuardsCheckEnd(/** @docsNotRequired */
    id, /** @docsNotRequired */
    url, urlAfterRedirects, state, shouldActivate) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        _this.shouldActivate = shouldActivate;
        return _this;
    }
    /**
     * @return {?}
     */
    GuardsCheckEnd.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")";
    };
    return GuardsCheckEnd;
}(RouterEvent));
/**
 * \@description
 *
 * Represents the start of the Resolve phase of routing. The timing of this
 * event may change, thus it's experimental. In the current iteration it will run
 * in the "resolve" phase whether there's things to resolve or not. In the future this
 * behavior may change to only run when there are things to be resolved.
 *
 * \@publicApi
 */
var ResolveStart = /** @class */ (function (_super) {
    __extends(ResolveStart, _super);
    function ResolveStart(/** @docsNotRequired */
    id, /** @docsNotRequired */
    url, urlAfterRedirects, state) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        return _this;
    }
    /**
     * @return {?}
     */
    ResolveStart.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return ResolveStart;
}(RouterEvent));
/**
 * \@description
 *
 * Represents the end of the Resolve phase of routing. See note on
 * `ResolveStart` for use of this experimental API.
 *
 * \@publicApi
 */
var ResolveEnd = /** @class */ (function (_super) {
    __extends(ResolveEnd, _super);
    function ResolveEnd(/** @docsNotRequired */
    id, /** @docsNotRequired */
    url, urlAfterRedirects, state) {
        var _this = _super.call(this, id, url) || this;
        _this.urlAfterRedirects = urlAfterRedirects;
        _this.state = state;
        return _this;
    }
    /**
     * @return {?}
     */
    ResolveEnd.prototype.toString = /**
     * @return {?}
     */
    function () {
        return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")";
    };
    return ResolveEnd;
}(RouterEvent));
/**
 * \@description
 *
 * Represents an event triggered before lazy loading a route config.
 *
 * \@publicApi
 */
var RouteConfigLoadStart = /** @class */ (function () {
    function RouteConfigLoadStart(route) {
        this.route = route;
    }
    /**
     * @return {?}
     */
    RouteConfigLoadStart.prototype.toString = /**
     * @return {?}
     */
    function () { return "RouteConfigLoadStart(path: " + this.route.path + ")"; };
    return RouteConfigLoadStart;
}());
/**
 * \@description
 *
 * Represents an event triggered when a route has been lazy loaded.
 *
 * \@publicApi
 */
var RouteConfigLoadEnd = /** @class */ (function () {
    function RouteConfigLoadEnd(route) {
        this.route = route;
    }
    /**
     * @return {?}
     */
    RouteConfigLoadEnd.prototype.toString = /**
     * @return {?}
     */
    function () { return "RouteConfigLoadEnd(path: " + this.route.path + ")"; };
    return RouteConfigLoadEnd;
}());
/**
 * \@description
 *
 * Represents the start of end of the Resolve phase of routing. See note on
 * `ChildActivationEnd` for use of this experimental API.
 *
 * \@publicApi
 */
var ChildActivationStart = /** @class */ (function () {
    function ChildActivationStart(snapshot) {
        this.snapshot = snapshot;
    }
    /**
     * @return {?}
     */
    ChildActivationStart.prototype.toString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
        return "ChildActivationStart(path: '" + path + "')";
    };
    return ChildActivationStart;
}());
/**
 * \@description
 *
 * Represents the start of end of the Resolve phase of routing. See note on
 * `ChildActivationStart` for use of this experimental API.
 *
 * \@publicApi
 */
var ChildActivationEnd = /** @class */ (function () {
    function ChildActivationEnd(snapshot) {
        this.snapshot = snapshot;
    }
    /**
     * @return {?}
     */
    ChildActivationEnd.prototype.toString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
        return "ChildActivationEnd(path: '" + path + "')";
    };
    return ChildActivationEnd;
}());
/**
 * \@description
 *
 * Represents the start of end of the Resolve phase of routing. See note on
 * `ActivationEnd` for use of this experimental API.
 *
 * \@publicApi
 */
var ActivationStart = /** @class */ (function () {
    function ActivationStart(snapshot) {
        this.snapshot = snapshot;
    }
    /**
     * @return {?}
     */
    ActivationStart.prototype.toString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
        return "ActivationStart(path: '" + path + "')";
    };
    return ActivationStart;
}());
/**
 * \@description
 *
 * Represents the start of end of the Resolve phase of routing. See note on
 * `ActivationStart` for use of this experimental API.
 *
 * \@publicApi
 */
var ActivationEnd = /** @class */ (function () {
    function ActivationEnd(snapshot) {
        this.snapshot = snapshot;
    }
    /**
     * @return {?}
     */
    ActivationEnd.prototype.toString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var path = this.snapshot.routeConfig && this.snapshot.routeConfig.path || '';
        return "ActivationEnd(path: '" + path + "')";
    };
    return ActivationEnd;
}());
/**
 * \@description
 *
 * Represents a scrolling event.
 *
 * \@publicApi
 */
var Scroll = /** @class */ (function () {
    function Scroll(/** @docsNotRequired */
    routerEvent, /** @docsNotRequired */
    position, /** @docsNotRequired */
    anchor) {
        this.routerEvent = routerEvent;
        this.position = position;
        this.anchor = anchor;
    }
    /**
     * @return {?}
     */
    Scroll.prototype.toString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pos = this.position ? this.position[0] + ", " + this.position[1] : null;
        return "Scroll(anchor: '" + this.anchor + "', position: '" + pos + "')";
    };
    return Scroll;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * This component is used internally within the router to be a placeholder when an empty
 * router-outlet is needed. For example, with a config such as:
 *
 * `{path: 'parent', outlet: 'nav', children: [...]}`
 *
 * In order to render, there needs to be a component on this config, which will default
 * to this `EmptyOutletComponent`.
 */
var EmptyOutletComponent = /** @class */ (function () {
    function EmptyOutletComponent() {
    }
    EmptyOutletComponent.decorators = [
        { type: _angular_core.Component, args: [{ template: "<router-outlet></router-outlet>" },] },
    ];
    return EmptyOutletComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** *
 * \@description
 *
 * Name of the primary outlet.
 *
 * \@publicApi
  @type {?} */
var PRIMARY_OUTLET = 'primary';
/**
 * Matrix and Query parameters.
 *
 * `ParamMap` makes it easier to work with parameters as they could have either a single value or
 * multiple value. Because this should be known by the user, calling `get` or `getAll` returns the
 * correct type (either `string` or `string[]`).
 *
 * The API is inspired by the URLSearchParams interface.
 * see https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 *
 * \@publicApi
 * @record
 */

var ParamsAsMap = /** @class */ (function () {
    function ParamsAsMap(params) {
        this.params = params || {};
    }
    /**
     * @param {?} name
     * @return {?}
     */
    ParamsAsMap.prototype.has = /**
     * @param {?} name
     * @return {?}
     */
    function (name) { return this.params.hasOwnProperty(name); };
    /**
     * @param {?} name
     * @return {?}
     */
    ParamsAsMap.prototype.get = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this.has(name)) {
            /** @type {?} */
            var v = this.params[name];
            return Array.isArray(v) ? v[0] : v;
        }
        return null;
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ParamsAsMap.prototype.getAll = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (this.has(name)) {
            /** @type {?} */
            var v = this.params[name];
            return Array.isArray(v) ? v : [v];
        }
        return [];
    };
    Object.defineProperty(ParamsAsMap.prototype, "keys", {
        get: /**
         * @return {?}
         */
        function () { return Object.keys(this.params); },
        enumerable: true,
        configurable: true
    });
    return ParamsAsMap;
}());
/**
 * Convert a `Params` instance to a `ParamMap`.
 *
 * \@publicApi
 * @param {?} params
 * @return {?}
 */
function convertToParamMap(params) {
    return new ParamsAsMap(params);
}
/** @type {?} */
var NAVIGATION_CANCELING_ERROR = 'ngNavigationCancelingError';
/**
 * @param {?} message
 * @return {?}
 */
function navigationCancelingError(message) {
    /** @type {?} */
    var error = Error('NavigationCancelingError: ' + message);
    (/** @type {?} */ (error))[NAVIGATION_CANCELING_ERROR] = true;
    return error;
}
/**
 * @param {?} error
 * @return {?}
 */
function isNavigationCancelingError(error) {
    return error && (/** @type {?} */ (error))[NAVIGATION_CANCELING_ERROR];
}
/**
 * @param {?} segments
 * @param {?} segmentGroup
 * @param {?} route
 * @return {?}
 */
function defaultUrlMatcher(segments, segmentGroup, route) {
    /** @type {?} */
    var parts = /** @type {?} */ ((route.path)).split('/');
    if (parts.length > segments.length) {
        // The actual URL is shorter than the config, no match
        return null;
    }
    if (route.pathMatch === 'full' &&
        (segmentGroup.hasChildren() || parts.length < segments.length)) {
        // The config is longer than the actual URL but we are looking for a full match, return null
        return null;
    }
    /** @type {?} */
    var posParams = {};
    // Check each config part against the actual URL
    for (var index = 0; index < parts.length; index++) {
        /** @type {?} */
        var part = parts[index];
        /** @type {?} */
        var segment = segments[index];
        /** @type {?} */
        var isParameter = part.startsWith(':');
        if (isParameter) {
            posParams[part.substring(1)] = segment;
        }
        else if (part !== segment.path) {
            // The actual URL part does not match the config, no match
            return null;
        }
    }
    return { consumed: segments.slice(0, parts.length), posParams: posParams };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * See `Routes` for more details.
 *
 * \@publicApi
 * @record
 */

var LoadedRouterConfig = /** @class */ (function () {
    function LoadedRouterConfig(routes, module) {
        this.routes = routes;
        this.module = module;
    }
    return LoadedRouterConfig;
}());
/**
 * @param {?} config
 * @param {?=} parentPath
 * @return {?}
 */
function validateConfig(config, parentPath) {
    if (parentPath === void 0) { parentPath = ''; }
    // forEach doesn't iterate undefined values
    for (var i = 0; i < config.length; i++) {
        /** @type {?} */
        var route = config[i];
        /** @type {?} */
        var fullPath = getFullPath(parentPath, route);
        validateNode(route, fullPath);
    }
}
/**
 * @param {?} route
 * @param {?} fullPath
 * @return {?}
 */
function validateNode(route, fullPath) {
    if (!route) {
        throw new Error("\n      Invalid configuration of route '" + fullPath + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
    }
    if (Array.isArray(route)) {
        throw new Error("Invalid configuration of route '" + fullPath + "': Array cannot be specified");
    }
    if (!route.component && !route.children && !route.loadChildren &&
        (route.outlet && route.outlet !== PRIMARY_OUTLET)) {
        throw new Error("Invalid configuration of route '" + fullPath + "': a componentless route without children or loadChildren cannot have a named outlet set");
    }
    if (route.redirectTo && route.children) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and children cannot be used together");
    }
    if (route.redirectTo && route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and loadChildren cannot be used together");
    }
    if (route.children && route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "': children and loadChildren cannot be used together");
    }
    if (route.redirectTo && route.component) {
        throw new Error("Invalid configuration of route '" + fullPath + "': redirectTo and component cannot be used together");
    }
    if (route.path && route.matcher) {
        throw new Error("Invalid configuration of route '" + fullPath + "': path and matcher cannot be used together");
    }
    if (route.redirectTo === void 0 && !route.component && !route.children && !route.loadChildren) {
        throw new Error("Invalid configuration of route '" + fullPath + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
    }
    if (route.path === void 0 && route.matcher === void 0) {
        throw new Error("Invalid configuration of route '" + fullPath + "': routes must have either a path or a matcher specified");
    }
    if (typeof route.path === 'string' && route.path.charAt(0) === '/') {
        throw new Error("Invalid configuration of route '" + fullPath + "': path cannot start with a slash");
    }
    if (route.path === '' && route.redirectTo !== void 0 && route.pathMatch === void 0) {
        /** @type {?} */
        var exp = "The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.";
        throw new Error("Invalid configuration of route '{path: \"" + fullPath + "\", redirectTo: \"" + route.redirectTo + "\"}': please provide 'pathMatch'. " + exp);
    }
    if (route.pathMatch !== void 0 && route.pathMatch !== 'full' && route.pathMatch !== 'prefix') {
        throw new Error("Invalid configuration of route '" + fullPath + "': pathMatch can only be set to 'prefix' or 'full'");
    }
    if (route.children) {
        validateConfig(route.children, fullPath);
    }
}
/**
 * @param {?} parentPath
 * @param {?} currentRoute
 * @return {?}
 */
function getFullPath(parentPath, currentRoute) {
    if (!currentRoute) {
        return parentPath;
    }
    if (!parentPath && !currentRoute.path) {
        return '';
    }
    else if (parentPath && !currentRoute.path) {
        return parentPath + "/";
    }
    else if (!parentPath && currentRoute.path) {
        return currentRoute.path;
    }
    else {
        return parentPath + "/" + currentRoute.path;
    }
}
/**
 * Makes a copy of the config and adds any default required properties.
 * @param {?} r
 * @return {?}
 */
function standardizeConfig(r) {
    /** @type {?} */
    var children = r.children && r.children.map(standardizeConfig);
    /** @type {?} */
    var c = children ? __assign({}, r, { children: children }) : __assign({}, r);
    if (!c.component && (children || c.loadChildren) && (c.outlet && c.outlet !== PRIMARY_OUTLET)) {
        c.component = EmptyOutletComponent;
    }
    return c;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function shallowEqualArrays(a, b) {
    if (a.length !== b.length)
        return false;
    for (var i = 0; i < a.length; ++i) {
        if (!shallowEqual(a[i], b[i]))
            return false;
    }
    return true;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function shallowEqual(a, b) {
    /** @type {?} */
    var k1 = Object.keys(a);
    /** @type {?} */
    var k2 = Object.keys(b);
    if (k1.length != k2.length) {
        return false;
    }
    /** @type {?} */
    var key;
    for (var i = 0; i < k1.length; i++) {
        key = k1[i];
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
/**
 * Flattens single-level nested arrays.
 * @template T
 * @param {?} arr
 * @return {?}
 */
function flatten(arr) {
    return Array.prototype.concat.apply([], arr);
}
/**
 * Return the last element of an array.
 * @template T
 * @param {?} a
 * @return {?}
 */
function last$1(a) {
    return a.length > 0 ? a[a.length - 1] : null;
}
/**
 * Verifys all booleans in an array are `true`.
 * @param {?} bools
 * @return {?}
 */

/**
 * @template K, V
 * @param {?} map
 * @param {?} callback
 * @return {?}
 */
function forEach(map$$1, callback) {
    for (var prop in map$$1) {
        if (map$$1.hasOwnProperty(prop)) {
            callback(map$$1[prop], prop);
        }
    }
}
/**
 * @template A, B
 * @param {?} obj
 * @param {?} fn
 * @return {?}
 */
function waitForMap(obj, fn) {
    if (Object.keys(obj).length === 0) {
        return rxjs.of({});
    }
    /** @type {?} */
    var waitHead = [];
    /** @type {?} */
    var waitTail = [];
    /** @type {?} */
    var res = {};
    forEach(obj, function (a, k) {
        /** @type {?} */
        var mapped = fn(k, a).pipe(rxjs_operators.map(function (r) { return res[k] = r; }));
        if (k === PRIMARY_OUTLET) {
            waitHead.push(mapped);
        }
        else {
            waitTail.push(mapped);
        }
    });
    // Closure compiler has problem with using spread operator here. So just using Array.concat.
    return rxjs.of.apply(null, waitHead.concat(waitTail)).pipe(rxjs_operators.concatAll(), rxjs_operators.last(), rxjs_operators.map(function () { return res; }));
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function wrapIntoObservable(value) {
    if (_angular_core.ɵisObservable(value)) {
        return value;
    }
    if (_angular_core.ɵisPromise(value)) {
        // Use `Promise.resolve()` to wrap promise-like instances.
        // Required ie when a Resolver returns a AngularJS `$q` promise to correctly trigger the
        // change detection.
        return rxjs.from(Promise.resolve(value));
    }
    return rxjs.of(value);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @return {?}
 */
function createEmptyUrlTree() {
    return new UrlTree(new UrlSegmentGroup([], {}), {}, null);
}
/**
 * @param {?} container
 * @param {?} containee
 * @param {?} exact
 * @return {?}
 */
function containsTree(container, containee, exact) {
    if (exact) {
        return equalQueryParams(container.queryParams, containee.queryParams) &&
            equalSegmentGroups(container.root, containee.root);
    }
    return containsQueryParams(container.queryParams, containee.queryParams) &&
        containsSegmentGroup(container.root, containee.root);
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function equalQueryParams(container, containee) {
    // TODO: This does not handle array params correctly.
    return shallowEqual(container, containee);
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function equalSegmentGroups(container, containee) {
    if (!equalPath(container.segments, containee.segments))
        return false;
    if (container.numberOfChildren !== containee.numberOfChildren)
        return false;
    for (var c in containee.children) {
        if (!container.children[c])
            return false;
        if (!equalSegmentGroups(container.children[c], containee.children[c]))
            return false;
    }
    return true;
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function containsQueryParams(container, containee) {
    // TODO: This does not handle array params correctly.
    return Object.keys(containee).length <= Object.keys(container).length &&
        Object.keys(containee).every(function (key) { return containee[key] === container[key]; });
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */
function containsSegmentGroup(container, containee) {
    return containsSegmentGroupHelper(container, containee, containee.segments);
}
/**
 * @param {?} container
 * @param {?} containee
 * @param {?} containeePaths
 * @return {?}
 */
function containsSegmentGroupHelper(container, containee, containeePaths) {
    if (container.segments.length > containeePaths.length) {
        /** @type {?} */
        var current = container.segments.slice(0, containeePaths.length);
        if (!equalPath(current, containeePaths))
            return false;
        if (containee.hasChildren())
            return false;
        return true;
    }
    else if (container.segments.length === containeePaths.length) {
        if (!equalPath(container.segments, containeePaths))
            return false;
        for (var c in containee.children) {
            if (!container.children[c])
                return false;
            if (!containsSegmentGroup(container.children[c], containee.children[c]))
                return false;
        }
        return true;
    }
    else {
        /** @type {?} */
        var current = containeePaths.slice(0, container.segments.length);
        /** @type {?} */
        var next = containeePaths.slice(container.segments.length);
        if (!equalPath(container.segments, current))
            return false;
        if (!container.children[PRIMARY_OUTLET])
            return false;
        return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next);
    }
}
/**
 * \@description
 *
 * Represents the parsed URL.
 *
 * Since a router state is a tree, and the URL is nothing but a serialized state, the URL is a
 * serialized tree.
 * UrlTree is a data structure that provides a lot of affordances in dealing with URLs
 *
 * \@usageNotes
 * ### Example
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree =
 *       router.parseUrl('/team/33/(user/victor//support:help)?debug=true#fragment');
 *     const f = tree.fragment; // return 'fragment'
 *     const q = tree.queryParams; // returns {debug: 'true'}
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments; // returns 2 segments 'team' and '33'
 *     g.children[PRIMARY_OUTLET].segments; // returns 2 segments 'user' and 'victor'
 *     g.children['support'].segments; // return 1 segment 'help'
 *   }
 * }
 * ```
 *
 * \@publicApi
 */
var UrlTree = /** @class */ (function () {
    /** @internal */
    function UrlTree(root, queryParams, fragment) {
        this.root = root;
        this.queryParams = queryParams;
        this.fragment = fragment;
    }
    Object.defineProperty(UrlTree.prototype, "queryParamMap", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._queryParamMap) {
                this._queryParamMap = convertToParamMap(this.queryParams);
            }
            return this._queryParamMap;
        },
        enumerable: true,
        configurable: true
    });
    /** @docsNotRequired */
    /**
     * \@docsNotRequired
     * @return {?}
     */
    UrlTree.prototype.toString = /**
     * \@docsNotRequired
     * @return {?}
     */
    function () { return DEFAULT_SERIALIZER.serialize(this); };
    return UrlTree;
}());
/**
 * \@description
 *
 * Represents the parsed URL segment group.
 *
 * See `UrlTree` for more information.
 *
 * \@publicApi
 */
var UrlSegmentGroup = /** @class */ (function () {
    function UrlSegmentGroup(segments, children) {
        var _this = this;
        this.segments = segments;
        this.children = children;
        /**
         * The parent node in the url tree
         */
        this.parent = null;
        forEach(children, function (v, k) { return v.parent = _this; });
    }
    /** Whether the segment has child segments */
    /**
     * Whether the segment has child segments
     * @return {?}
     */
    UrlSegmentGroup.prototype.hasChildren = /**
     * Whether the segment has child segments
     * @return {?}
     */
    function () { return this.numberOfChildren > 0; };
    Object.defineProperty(UrlSegmentGroup.prototype, "numberOfChildren", {
        /** Number of child segments */
        get: /**
         * Number of child segments
         * @return {?}
         */
        function () { return Object.keys(this.children).length; },
        enumerable: true,
        configurable: true
    });
    /** @docsNotRequired */
    /**
     * \@docsNotRequired
     * @return {?}
     */
    UrlSegmentGroup.prototype.toString = /**
     * \@docsNotRequired
     * @return {?}
     */
    function () { return serializePaths(this); };
    return UrlSegmentGroup;
}());
/**
 * \@description
 *
 * Represents a single URL segment.
 *
 * A UrlSegment is a part of a URL between the two slashes. It contains a path and the matrix
 * parameters associated with the segment.
 *
 * \@usageNotes
 *  ### Example
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const tree: UrlTree = router.parseUrl('/team;id=33');
 *     const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
 *     const s: UrlSegment[] = g.segments;
 *     s[0].path; // returns 'team'
 *     s[0].parameters; // returns {id: 33}
 *   }
 * }
 * ```
 *
 * \@publicApi
 */
var UrlSegment = /** @class */ (function () {
    function UrlSegment(path, parameters) {
        this.path = path;
        this.parameters = parameters;
    }
    Object.defineProperty(UrlSegment.prototype, "parameterMap", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._parameterMap) {
                this._parameterMap = convertToParamMap(this.parameters);
            }
            return this._parameterMap;
        },
        enumerable: true,
        configurable: true
    });
    /** @docsNotRequired */
    /**
     * \@docsNotRequired
     * @return {?}
     */
    UrlSegment.prototype.toString = /**
     * \@docsNotRequired
     * @return {?}
     */
    function () { return serializePath(this); };
    return UrlSegment;
}());
/**
 * @param {?} as
 * @param {?} bs
 * @return {?}
 */
function equalSegments(as, bs) {
    return equalPath(as, bs) && as.every(function (a, i) { return shallowEqual(a.parameters, bs[i].parameters); });
}
/**
 * @param {?} as
 * @param {?} bs
 * @return {?}
 */
function equalPath(as, bs) {
    if (as.length !== bs.length)
        return false;
    return as.every(function (a, i) { return a.path === bs[i].path; });
}
/**
 * @template T
 * @param {?} segment
 * @param {?} fn
 * @return {?}
 */
function mapChildrenIntoArray(segment, fn) {
    /** @type {?} */
    var res = [];
    forEach(segment.children, function (child, childOutlet) {
        if (childOutlet === PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    forEach(segment.children, function (child, childOutlet) {
        if (childOutlet !== PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    return res;
}
/**
 * \@description
 *
 * Serializes and deserializes a URL string into a URL tree.
 *
 * The url serialization strategy is customizable. You can
 * make all URLs case insensitive by providing a custom UrlSerializer.
 *
 * See `DefaultUrlSerializer` for an example of a URL serializer.
 *
 * \@publicApi
 * @abstract
 */
var UrlSerializer = /** @class */ (function () {
    function UrlSerializer() {
    }
    return UrlSerializer;
}());
/**
 * \@description
 *
 * A default implementation of the `UrlSerializer`.
 *
 * Example URLs:
 *
 * ```
 * /inbox/33(popup:compose)
 * /inbox/33;open=true/messages/44
 * ```
 *
 * DefaultUrlSerializer uses parentheses to serialize secondary segments (e.g., popup:compose), the
 * colon syntax to specify the outlet, and the ';parameter=value' syntax (e.g., open=true) to
 * specify route specific parameters.
 *
 * \@publicApi
 */
var DefaultUrlSerializer = /** @class */ (function () {
    function DefaultUrlSerializer() {
    }
    /** Parses a url into a `UrlTree` */
    /**
     * Parses a url into a `UrlTree`
     * @param {?} url
     * @return {?}
     */
    DefaultUrlSerializer.prototype.parse = /**
     * Parses a url into a `UrlTree`
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var p = new UrlParser(url);
        return new UrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
    };
    /** Converts a `UrlTree` into a url */
    /**
     * Converts a `UrlTree` into a url
     * @param {?} tree
     * @return {?}
     */
    DefaultUrlSerializer.prototype.serialize = /**
     * Converts a `UrlTree` into a url
     * @param {?} tree
     * @return {?}
     */
    function (tree) {
        /** @type {?} */
        var segment = "/" + serializeSegment(tree.root, true);
        /** @type {?} */
        var query = serializeQueryParams(tree.queryParams);
        /** @type {?} */
        var fragment = typeof tree.fragment === "string" ? "#" + encodeUriFragment((/** @type {?} */ ((tree.fragment)))) : '';
        return "" + segment + query + fragment;
    };
    return DefaultUrlSerializer;
}());
/** @type {?} */
var DEFAULT_SERIALIZER = new DefaultUrlSerializer();
/**
 * @param {?} segment
 * @return {?}
 */
function serializePaths(segment) {
    return segment.segments.map(function (p) { return serializePath(p); }).join('/');
}
/**
 * @param {?} segment
 * @param {?} root
 * @return {?}
 */
function serializeSegment(segment, root) {
    if (!segment.hasChildren()) {
        return serializePaths(segment);
    }
    if (root) {
        /** @type {?} */
        var primary = segment.children[PRIMARY_OUTLET] ?
            serializeSegment(segment.children[PRIMARY_OUTLET], false) :
            '';
        /** @type {?} */
        var children_1 = [];
        forEach(segment.children, function (v, k) {
            if (k !== PRIMARY_OUTLET) {
                children_1.push(k + ":" + serializeSegment(v, false));
            }
        });
        return children_1.length > 0 ? primary + "(" + children_1.join('//') + ")" : primary;
    }
    else {
        /** @type {?} */
        var children = mapChildrenIntoArray(segment, function (v, k) {
            if (k === PRIMARY_OUTLET) {
                return [serializeSegment(segment.children[PRIMARY_OUTLET], false)];
            }
            return [k + ":" + serializeSegment(v, false)];
        });
        return serializePaths(segment) + "/(" + children.join('//') + ")";
    }
}
/**
 * Encodes a URI string with the default encoding. This function will only ever be called from
 * `encodeUriQuery` or `encodeUriSegment` as it's the base set of encodings to be used. We need
 * a custom encoding because encodeURIComponent is too aggressive and encodes stuff that doesn't
 * have to be encoded per https://url.spec.whatwg.org.
 * @param {?} s
 * @return {?}
 */
function encodeUriString(s) {
    return encodeURIComponent(s)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',');
}
/**
 * This function should be used to encode both keys and values in a query string key/value. In
 * the following URL, you need to call encodeUriQuery on "k" and "v":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 * @param {?} s
 * @return {?}
 */
function encodeUriQuery(s) {
    return encodeUriString(s).replace(/%3B/gi, ';');
}
/**
 * This function should be used to encode a URL fragment. In the following URL, you need to call
 * encodeUriFragment on "f":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 * @param {?} s
 * @return {?}
 */
function encodeUriFragment(s) {
    return encodeURI(s);
}
/**
 * This function should be run on any URI segment as well as the key and value in a key/value
 * pair for matrix params. In the following URL, you need to call encodeUriSegment on "html",
 * "mk", and "mv":
 *
 * http://www.site.org/html;mk=mv?k=v#f
 * @param {?} s
 * @return {?}
 */
function encodeUriSegment(s) {
    return encodeUriString(s).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
}
/**
 * @param {?} s
 * @return {?}
 */
function decode(s) {
    return decodeURIComponent(s);
}
/**
 * @param {?} s
 * @return {?}
 */
function decodeQuery(s) {
    return decode(s.replace(/\+/g, '%20'));
}
/**
 * @param {?} path
 * @return {?}
 */
function serializePath(path) {
    return "" + encodeUriSegment(path.path) + serializeMatrixParams(path.parameters);
}
/**
 * @param {?} params
 * @return {?}
 */
function serializeMatrixParams(params) {
    return Object.keys(params)
        .map(function (key) { return ";" + encodeUriSegment(key) + "=" + encodeUriSegment(params[key]); })
        .join('');
}
/**
 * @param {?} params
 * @return {?}
 */
function serializeQueryParams(params) {
    /** @type {?} */
    var strParams = Object.keys(params).map(function (name) {
        /** @type {?} */
        var value = params[name];
        return Array.isArray(value) ?
            value.map(function (v) { return encodeUriQuery(name) + "=" + encodeUriQuery(v); }).join('&') :
            encodeUriQuery(name) + "=" + encodeUriQuery(value);
    });
    return strParams.length ? "?" + strParams.join("&") : '';
}
/** @type {?} */
var SEGMENT_RE = /^[^\/()?;=#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchSegments(str) {
    /** @type {?} */
    var match = str.match(SEGMENT_RE);
    return match ? match[0] : '';
}
/** @type {?} */
var QUERY_PARAM_RE = /^[^=?&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchQueryParams(str) {
    /** @type {?} */
    var match = str.match(QUERY_PARAM_RE);
    return match ? match[0] : '';
}
/** @type {?} */
var QUERY_PARAM_VALUE_RE = /^[^?&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchUrlQueryParamValue(str) {
    /** @type {?} */
    var match = str.match(QUERY_PARAM_VALUE_RE);
    return match ? match[0] : '';
}
var UrlParser = /** @class */ (function () {
    function UrlParser(url) {
        this.url = url;
        this.remaining = url;
    }
    /**
     * @return {?}
     */
    UrlParser.prototype.parseRootSegment = /**
     * @return {?}
     */
    function () {
        this.consumeOptional('/');
        if (this.remaining === '' || this.peekStartsWith('?') || this.peekStartsWith('#')) {
            return new UrlSegmentGroup([], {});
        }
        // The root segment group never has segments
        return new UrlSegmentGroup([], this.parseChildren());
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseQueryParams = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var params = {};
        if (this.consumeOptional('?')) {
            do {
                this.parseQueryParam(params);
            } while (this.consumeOptional('&'));
        }
        return params;
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseFragment = /**
     * @return {?}
     */
    function () {
        return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseChildren = /**
     * @return {?}
     */
    function () {
        if (this.remaining === '') {
            return {};
        }
        this.consumeOptional('/');
        /** @type {?} */
        var segments = [];
        if (!this.peekStartsWith('(')) {
            segments.push(this.parseSegment());
        }
        while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
            this.capture('/');
            segments.push(this.parseSegment());
        }
        /** @type {?} */
        var children = {};
        if (this.peekStartsWith('/(')) {
            this.capture('/');
            children = this.parseParens(true);
        }
        /** @type {?} */
        var res = {};
        if (this.peekStartsWith('(')) {
            res = this.parseParens(false);
        }
        if (segments.length > 0 || Object.keys(children).length > 0) {
            res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
        }
        return res;
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseSegment = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var path = matchSegments(this.remaining);
        if (path === '' && this.peekStartsWith(';')) {
            throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
        }
        this.capture(path);
        return new UrlSegment(decode(path), this.parseMatrixParams());
    };
    /**
     * @return {?}
     */
    UrlParser.prototype.parseMatrixParams = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var params = {};
        while (this.consumeOptional(';')) {
            this.parseParam(params);
        }
        return params;
    };
    /**
     * @param {?} params
     * @return {?}
     */
    UrlParser.prototype.parseParam = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var key = matchSegments(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        /** @type {?} */
        var value = '';
        if (this.consumeOptional('=')) {
            /** @type {?} */
            var valueMatch = matchSegments(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        params[decode(key)] = decode(value);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    UrlParser.prototype.parseQueryParam = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var key = matchQueryParams(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        /** @type {?} */
        var value = '';
        if (this.consumeOptional('=')) {
            /** @type {?} */
            var valueMatch = matchUrlQueryParamValue(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        /** @type {?} */
        var decodedKey = decodeQuery(key);
        /** @type {?} */
        var decodedVal = decodeQuery(value);
        if (params.hasOwnProperty(decodedKey)) {
            /** @type {?} */
            var currentVal = params[decodedKey];
            if (!Array.isArray(currentVal)) {
                currentVal = [currentVal];
                params[decodedKey] = currentVal;
            }
            currentVal.push(decodedVal);
        }
        else {
            // Create a new value
            params[decodedKey] = decodedVal;
        }
    };
    /**
     * @param {?} allowPrimary
     * @return {?}
     */
    UrlParser.prototype.parseParens = /**
     * @param {?} allowPrimary
     * @return {?}
     */
    function (allowPrimary) {
        /** @type {?} */
        var segments = {};
        this.capture('(');
        while (!this.consumeOptional(')') && this.remaining.length > 0) {
            /** @type {?} */
            var path = matchSegments(this.remaining);
            /** @type {?} */
            var next = this.remaining[path.length];
            // if is is not one of these characters, then the segment was unescaped
            // or the group was not closed
            if (next !== '/' && next !== ')' && next !== ';') {
                throw new Error("Cannot parse url '" + this.url + "'");
            }
            /** @type {?} */
            var outletName = /** @type {?} */ ((undefined));
            if (path.indexOf(':') > -1) {
                outletName = path.substr(0, path.indexOf(':'));
                this.capture(outletName);
                this.capture(':');
            }
            else if (allowPrimary) {
                outletName = PRIMARY_OUTLET;
            }
            /** @type {?} */
            var children = this.parseChildren();
            segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] :
                new UrlSegmentGroup([], children);
            this.consumeOptional('//');
        }
        return segments;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    UrlParser.prototype.peekStartsWith = /**
     * @param {?} str
     * @return {?}
     */
    function (str) { return this.remaining.startsWith(str); };
    /**
     * @param {?} str
     * @return {?}
     */
    UrlParser.prototype.consumeOptional = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (this.peekStartsWith(str)) {
            this.remaining = this.remaining.substring(str.length);
            return true;
        }
        return false;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    UrlParser.prototype.capture = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (!this.consumeOptional(str)) {
            throw new Error("Expected \"" + str + "\".");
        }
    };
    return UrlParser;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @template T
 */
var Tree = /** @class */ (function () {
    function Tree(root) {
        this._root = root;
    }
    Object.defineProperty(Tree.prototype, "root", {
        get: /**
         * @return {?}
         */
        function () { return this._root.value; },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.parent = /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    function (t) {
        /** @type {?} */
        var p = this.pathFromRoot(t);
        return p.length > 1 ? p[p.length - 2] : null;
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.children = /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    function (t) {
        /** @type {?} */
        var n = findNode(t, this._root);
        return n ? n.children.map(function (t) { return t.value; }) : [];
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.firstChild = /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    function (t) {
        /** @type {?} */
        var n = findNode(t, this._root);
        return n && n.children.length > 0 ? n.children[0].value : null;
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.siblings = /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    function (t) {
        /** @type {?} */
        var p = findPath(t, this._root);
        if (p.length < 2)
            return [];
        /** @type {?} */
        var c = p[p.length - 2].children.map(function (c) { return c.value; });
        return c.filter(function (cc) { return cc !== t; });
    };
    /**
     * @internal
     */
    /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    Tree.prototype.pathFromRoot = /**
     * \@internal
     * @param {?} t
     * @return {?}
     */
    function (t) { return findPath(t, this._root).map(function (s) { return s.value; }); };
    return Tree;
}());
/**
 * @template T
 * @param {?} value
 * @param {?} node
 * @return {?}
 */
function findNode(value, node) {
    if (value === node.value)
        return node;
    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
        var child = _a[_i];
        /** @type {?} */
        var node_1 = findNode(value, child);
        if (node_1)
            return node_1;
    }
    return null;
}
/**
 * @template T
 * @param {?} value
 * @param {?} node
 * @return {?}
 */
function findPath(value, node) {
    if (value === node.value)
        return [node];
    for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
        var child = _a[_i];
        /** @type {?} */
        var path = findPath(value, child);
        if (path.length) {
            path.unshift(node);
            return path;
        }
    }
    return [];
}
/**
 * @template T
 */
var TreeNode = /** @class */ (function () {
    function TreeNode(value, children) {
        this.value = value;
        this.children = children;
    }
    /**
     * @return {?}
     */
    TreeNode.prototype.toString = /**
     * @return {?}
     */
    function () { return "TreeNode(" + this.value + ")"; };
    return TreeNode;
}());
/**
 * @template T
 * @param {?} node
 * @return {?}
 */
function nodeChildrenAsMap(node) {
    /** @type {?} */
    var map$$1 = {};
    if (node) {
        node.children.forEach(function (child) { return map$$1[child.value.outlet] = child; });
    }
    return map$$1;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@description
 *
 * Represents the state of the router.
 *
 * RouterState is a tree of activated routes. Every node in this tree knows about the "consumed" URL
 * segments, the extracted parameters, and the resolved data.
 *
 * \@usageNotes
 * ### Example
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const root: ActivatedRoute = state.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * See `ActivatedRoute` for more information.
 *
 * \@publicApi
 */
var RouterState = /** @class */ (function (_super) {
    __extends(RouterState, _super);
    /** @internal */
    function RouterState(root, snapshot) {
        var _this = _super.call(this, root) || this;
        _this.snapshot = snapshot;
        setRouterState(/** @type {?} */ (_this), root);
        return _this;
    }
    /**
     * @return {?}
     */
    RouterState.prototype.toString = /**
     * @return {?}
     */
    function () { return this.snapshot.toString(); };
    return RouterState;
}(Tree));
/**
 * @param {?} urlTree
 * @param {?} rootComponent
 * @return {?}
 */
function createEmptyState(urlTree, rootComponent) {
    /** @type {?} */
    var snapshot = createEmptyStateSnapshot(urlTree, rootComponent);
    /** @type {?} */
    var emptyUrl = new rxjs.BehaviorSubject([new UrlSegment('', {})]);
    /** @type {?} */
    var emptyParams = new rxjs.BehaviorSubject({});
    /** @type {?} */
    var emptyData = new rxjs.BehaviorSubject({});
    /** @type {?} */
    var emptyQueryParams = new rxjs.BehaviorSubject({});
    /** @type {?} */
    var fragment = new rxjs.BehaviorSubject('');
    /** @type {?} */
    var activated = new ActivatedRoute(emptyUrl, emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, snapshot.root);
    activated.snapshot = snapshot.root;
    return new RouterState(new TreeNode(activated, []), snapshot);
}
/**
 * @param {?} urlTree
 * @param {?} rootComponent
 * @return {?}
 */
function createEmptyStateSnapshot(urlTree, rootComponent) {
    /** @type {?} */
    var emptyParams = {};
    /** @type {?} */
    var emptyData = {};
    /** @type {?} */
    var emptyQueryParams = {};
    /** @type {?} */
    var fragment = '';
    /** @type {?} */
    var activated = new ActivatedRouteSnapshot([], emptyParams, emptyQueryParams, fragment, emptyData, PRIMARY_OUTLET, rootComponent, null, urlTree.root, -1, {});
    return new RouterStateSnapshot('', new TreeNode(activated, []));
}
/**
 * \@description
 *
 * Contains the information about a route associated with a component loaded in an
 * outlet.  An `ActivatedRoute` can also be used to traverse the router state tree.
 *
 * ```
 * \@Component({...})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: Observable<string> = route.params.map(p => p.id);
 *     const url: Observable<string> = route.url.map(segments => segments.join(''));
 *     // route.data includes both `data` and `resolve`
 *     const user = route.data.map(d => d.user);
 *   }
 * }
 * ```
 *
 * \@publicApi
 */
var ActivatedRoute = /** @class */ (function () {
    /** @internal */
    function ActivatedRoute(url, params, queryParams, fragment, data, outlet, component, futureSnapshot) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this._futureSnapshot = futureSnapshot;
    }
    Object.defineProperty(ActivatedRoute.prototype, "routeConfig", {
        /** The configuration used to match this route */
        get: /**
         * The configuration used to match this route
         * @return {?}
         */
        function () { return this._futureSnapshot.routeConfig; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "root", {
        /** The root of the router state */
        get: /**
         * The root of the router state
         * @return {?}
         */
        function () { return this._routerState.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "parent", {
        /** The parent of this route in the router state tree */
        get: /**
         * The parent of this route in the router state tree
         * @return {?}
         */
        function () { return this._routerState.parent(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "firstChild", {
        /** The first child of this route in the router state tree */
        get: /**
         * The first child of this route in the router state tree
         * @return {?}
         */
        function () { return this._routerState.firstChild(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "children", {
        /** The children of this route in the router state tree */
        get: /**
         * The children of this route in the router state tree
         * @return {?}
         */
        function () { return this._routerState.children(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "pathFromRoot", {
        /** The path from the root of the router state tree to this route */
        get: /**
         * The path from the root of the router state tree to this route
         * @return {?}
         */
        function () { return this._routerState.pathFromRoot(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "paramMap", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._paramMap) {
                this._paramMap = this.params.pipe(rxjs_operators.map(function (p) { return convertToParamMap(p); }));
            }
            return this._paramMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRoute.prototype, "queryParamMap", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._queryParamMap) {
                this._queryParamMap =
                    this.queryParams.pipe(rxjs_operators.map(function (p) { return convertToParamMap(p); }));
            }
            return this._queryParamMap;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ActivatedRoute.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")";
    };
    return ActivatedRoute;
}());
/**
 * Returns the inherited params, data, and resolve for a given route.
 * By default, this only inherits values up to the nearest path-less or component-less route.
 * \@internal
 * @param {?} route
 * @param {?=} paramsInheritanceStrategy
 * @return {?}
 */
function inheritedParamsDataResolve(route, paramsInheritanceStrategy) {
    if (paramsInheritanceStrategy === void 0) { paramsInheritanceStrategy = 'emptyOnly'; }
    /** @type {?} */
    var pathFromRoot = route.pathFromRoot;
    /** @type {?} */
    var inheritingStartingFrom = 0;
    if (paramsInheritanceStrategy !== 'always') {
        inheritingStartingFrom = pathFromRoot.length - 1;
        while (inheritingStartingFrom >= 1) {
            /** @type {?} */
            var current = pathFromRoot[inheritingStartingFrom];
            /** @type {?} */
            var parent_1 = pathFromRoot[inheritingStartingFrom - 1];
            // current route is an empty path => inherits its parent's params and data
            if (current.routeConfig && current.routeConfig.path === '') {
                inheritingStartingFrom--;
                // parent is componentless => current route should inherit its params and data
            }
            else if (!parent_1.component) {
                inheritingStartingFrom--;
            }
            else {
                break;
            }
        }
    }
    return flattenInherited(pathFromRoot.slice(inheritingStartingFrom));
}
/**
 * \@internal
 * @param {?} pathFromRoot
 * @return {?}
 */
function flattenInherited(pathFromRoot) {
    return pathFromRoot.reduce(function (res, curr) {
        /** @type {?} */
        var params = __assign({}, res.params, curr.params);
        /** @type {?} */
        var data = __assign({}, res.data, curr.data);
        /** @type {?} */
        var resolve = __assign({}, res.resolve, curr._resolvedData);
        return { params: params, data: data, resolve: resolve };
    }, /** @type {?} */ ({ params: {}, data: {}, resolve: {} }));
}
/**
 * \@description
 *
 * Contains the information about a route associated with a component loaded in an
 * outlet at a particular moment in time. ActivatedRouteSnapshot can also be used to
 * traverse the router state tree.
 *
 * ```
 * \@Component({templateUrl:'./my-component.html'})
 * class MyComponent {
 *   constructor(route: ActivatedRoute) {
 *     const id: string = route.snapshot.params.id;
 *     const url: string = route.snapshot.url.join('');
 *     const user = route.snapshot.data.user;
 *   }
 * }
 * ```
 *
 * \@publicApi
 */
var ActivatedRouteSnapshot = /** @class */ (function () {
    /** @internal */
    function ActivatedRouteSnapshot(url, params, queryParams, fragment, data, outlet, component, routeConfig, urlSegment, lastPathIndex, resolve) {
        this.url = url;
        this.params = params;
        this.queryParams = queryParams;
        this.fragment = fragment;
        this.data = data;
        this.outlet = outlet;
        this.component = component;
        this.routeConfig = routeConfig;
        this._urlSegment = urlSegment;
        this._lastPathIndex = lastPathIndex;
        this._resolve = resolve;
    }
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "root", {
        /** The root of the router state */
        get: /**
         * The root of the router state
         * @return {?}
         */
        function () { return this._routerState.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "parent", {
        /** The parent of this route in the router state tree */
        get: /**
         * The parent of this route in the router state tree
         * @return {?}
         */
        function () { return this._routerState.parent(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "firstChild", {
        /** The first child of this route in the router state tree */
        get: /**
         * The first child of this route in the router state tree
         * @return {?}
         */
        function () { return this._routerState.firstChild(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "children", {
        /** The children of this route in the router state tree */
        get: /**
         * The children of this route in the router state tree
         * @return {?}
         */
        function () { return this._routerState.children(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "pathFromRoot", {
        /** The path from the root of the router state tree to this route */
        get: /**
         * The path from the root of the router state tree to this route
         * @return {?}
         */
        function () { return this._routerState.pathFromRoot(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "paramMap", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._paramMap) {
                this._paramMap = convertToParamMap(this.params);
            }
            return this._paramMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActivatedRouteSnapshot.prototype, "queryParamMap", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this._queryParamMap) {
                this._queryParamMap = convertToParamMap(this.queryParams);
            }
            return this._queryParamMap;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ActivatedRouteSnapshot.prototype.toString = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var url = this.url.map(function (segment) { return segment.toString(); }).join('/');
        /** @type {?} */
        var matched = this.routeConfig ? this.routeConfig.path : '';
        return "Route(url:'" + url + "', path:'" + matched + "')";
    };
    return ActivatedRouteSnapshot;
}());
/**
 * \@description
 *
 * Represents the state of the router at a moment in time.
 *
 * This is a tree of activated route snapshots. Every node in this tree knows about
 * the "consumed" URL segments, the extracted parameters, and the resolved data.
 *
 * \@usageNotes
 * ### Example
 *
 * ```
 * \@Component({templateUrl:'template.html'})
 * class MyComponent {
 *   constructor(router: Router) {
 *     const state: RouterState = router.routerState;
 *     const snapshot: RouterStateSnapshot = state.snapshot;
 *     const root: ActivatedRouteSnapshot = snapshot.root;
 *     const child = root.firstChild;
 *     const id: Observable<string> = child.params.map(p => p.id);
 *     //...
 *   }
 * }
 * ```
 *
 * \@publicApi
 */
var RouterStateSnapshot = /** @class */ (function (_super) {
    __extends(RouterStateSnapshot, _super);
    /** @internal */
    function RouterStateSnapshot(url, root) {
        var _this = _super.call(this, root) || this;
        _this.url = url;
        setRouterState(/** @type {?} */ (_this), root);
        return _this;
    }
    /**
     * @return {?}
     */
    RouterStateSnapshot.prototype.toString = /**
     * @return {?}
     */
    function () { return serializeNode(this._root); };
    return RouterStateSnapshot;
}(Tree));
/**
 * @template U, T
 * @param {?} state
 * @param {?} node
 * @return {?}
 */
function setRouterState(state, node) {
    node.value._routerState = state;
    node.children.forEach(function (c) { return setRouterState(state, c); });
}
/**
 * @param {?} node
 * @return {?}
 */
function serializeNode(node) {
    /** @type {?} */
    var c = node.children.length > 0 ? " { " + node.children.map(serializeNode).join(', ') + " } " : '';
    return "" + node.value + c;
}
/**
 * The expectation is that the activate route is created with the right set of parameters.
 * So we push new values into the observables only when they are not the initial values.
 * And we detect that by checking if the snapshot field is set.
 * @param {?} route
 * @return {?}
 */
function advanceActivatedRoute(route) {
    if (route.snapshot) {
        /** @type {?} */
        var currentSnapshot = route.snapshot;
        /** @type {?} */
        var nextSnapshot = route._futureSnapshot;
        route.snapshot = nextSnapshot;
        if (!shallowEqual(currentSnapshot.queryParams, nextSnapshot.queryParams)) {
            (/** @type {?} */ (route.queryParams)).next(nextSnapshot.queryParams);
        }
        if (currentSnapshot.fragment !== nextSnapshot.fragment) {
            (/** @type {?} */ (route.fragment)).next(nextSnapshot.fragment);
        }
        if (!shallowEqual(currentSnapshot.params, nextSnapshot.params)) {
            (/** @type {?} */ (route.params)).next(nextSnapshot.params);
        }
        if (!shallowEqualArrays(currentSnapshot.url, nextSnapshot.url)) {
            (/** @type {?} */ (route.url)).next(nextSnapshot.url);
        }
        if (!shallowEqual(currentSnapshot.data, nextSnapshot.data)) {
            (/** @type {?} */ (route.data)).next(nextSnapshot.data);
        }
    }
    else {
        route.snapshot = route._futureSnapshot;
        // this is for resolved data
        (/** @type {?} */ (route.data)).next(route._futureSnapshot.data);
    }
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function equalParamsAndUrlSegments(a, b) {
    /** @type {?} */
    var equalUrlParams = shallowEqual(a.params, b.params) && equalSegments(a.url, b.url);
    /** @type {?} */
    var parentsMismatch = !a.parent !== !b.parent;
    return equalUrlParams && !parentsMismatch &&
        (!a.parent || equalParamsAndUrlSegments(a.parent, /** @type {?} */ ((b.parent))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?} prevState
 * @return {?}
 */
function createRouterState(routeReuseStrategy, curr, prevState) {
    /** @type {?} */
    var root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : undefined);
    return new RouterState(root, curr);
}
/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?=} prevState
 * @return {?}
 */
function createNode(routeReuseStrategy, curr, prevState) {
    // reuse an activated route that is currently displayed on the screen
    if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
        /** @type {?} */
        var value = prevState.value;
        value._futureSnapshot = curr.value;
        /** @type {?} */
        var children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
        return new TreeNode(value, children);
        // retrieve an activated route that is used to be displayed, but is not currently displayed
    }
    else {
        /** @type {?} */
        var detachedRouteHandle = /** @type {?} */ (routeReuseStrategy.retrieve(curr.value));
        if (detachedRouteHandle) {
            /** @type {?} */
            var tree = detachedRouteHandle.route;
            setFutureSnapshotsOfActivatedRoutes(curr, tree);
            return tree;
        }
        else {
            /** @type {?} */
            var value = createActivatedRoute(curr.value);
            /** @type {?} */
            var children = curr.children.map(function (c) { return createNode(routeReuseStrategy, c); });
            return new TreeNode(value, children);
        }
    }
}
/**
 * @param {?} curr
 * @param {?} result
 * @return {?}
 */
function setFutureSnapshotsOfActivatedRoutes(curr, result) {
    if (curr.value.routeConfig !== result.value.routeConfig) {
        throw new Error('Cannot reattach ActivatedRouteSnapshot created from a different route');
    }
    if (curr.children.length !== result.children.length) {
        throw new Error('Cannot reattach ActivatedRouteSnapshot with a different number of children');
    }
    result.value._futureSnapshot = curr.value;
    for (var i = 0; i < curr.children.length; ++i) {
        setFutureSnapshotsOfActivatedRoutes(curr.children[i], result.children[i]);
    }
}
/**
 * @param {?} routeReuseStrategy
 * @param {?} curr
 * @param {?} prevState
 * @return {?}
 */
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
    return curr.children.map(function (child) {
        for (var _i = 0, _a = prevState.children; _i < _a.length; _i++) {
            var p = _a[_i];
            if (routeReuseStrategy.shouldReuseRoute(p.value.snapshot, child.value)) {
                return createNode(routeReuseStrategy, child, p);
            }
        }
        return createNode(routeReuseStrategy, child);
    });
}
/**
 * @param {?} c
 * @return {?}
 */
function createActivatedRoute(c) {
    return new ActivatedRoute(new rxjs.BehaviorSubject(c.url), new rxjs.BehaviorSubject(c.params), new rxjs.BehaviorSubject(c.queryParams), new rxjs.BehaviorSubject(c.fragment), new rxjs.BehaviorSubject(c.data), c.outlet, c.component, c);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} route
 * @param {?} urlTree
 * @param {?} commands
 * @param {?} queryParams
 * @param {?} fragment
 * @return {?}
 */
function createUrlTree(route, urlTree, commands, queryParams, fragment) {
    if (commands.length === 0) {
        return tree(urlTree.root, urlTree.root, urlTree, queryParams, fragment);
    }
    /** @type {?} */
    var nav = computeNavigation(commands);
    if (nav.toRoot()) {
        return tree(urlTree.root, new UrlSegmentGroup([], {}), urlTree, queryParams, fragment);
    }
    /** @type {?} */
    var startingPosition = findStartingPosition(nav, urlTree, route);
    /** @type {?} */
    var segmentGroup = startingPosition.processChildren ?
        updateSegmentGroupChildren(startingPosition.segmentGroup, startingPosition.index, nav.commands) :
        updateSegmentGroup(startingPosition.segmentGroup, startingPosition.index, nav.commands);
    return tree(startingPosition.segmentGroup, segmentGroup, urlTree, queryParams, fragment);
}
/**
 * @param {?} command
 * @return {?}
 */
function isMatrixParams(command) {
    return typeof command === 'object' && command != null && !command.outlets && !command.segmentPath;
}
/**
 * @param {?} oldSegmentGroup
 * @param {?} newSegmentGroup
 * @param {?} urlTree
 * @param {?} queryParams
 * @param {?} fragment
 * @return {?}
 */
function tree(oldSegmentGroup, newSegmentGroup, urlTree, queryParams, fragment) {
    /** @type {?} */
    var qp = {};
    if (queryParams) {
        forEach(queryParams, function (value, name) {
            qp[name] = Array.isArray(value) ? value.map(function (v) { return "" + v; }) : "" + value;
        });
    }
    if (urlTree.root === oldSegmentGroup) {
        return new UrlTree(newSegmentGroup, qp, fragment);
    }
    return new UrlTree(replaceSegment(urlTree.root, oldSegmentGroup, newSegmentGroup), qp, fragment);
}
/**
 * @param {?} current
 * @param {?} oldSegment
 * @param {?} newSegment
 * @return {?}
 */
function replaceSegment(current, oldSegment, newSegment) {
    /** @type {?} */
    var children = {};
    forEach(current.children, function (c, outletName) {
        if (c === oldSegment) {
            children[outletName] = newSegment;
        }
        else {
            children[outletName] = replaceSegment(c, oldSegment, newSegment);
        }
    });
    return new UrlSegmentGroup(current.segments, children);
}
var Navigation = /** @class */ (function () {
    function Navigation(isAbsolute, numberOfDoubleDots, commands) {
        this.isAbsolute = isAbsolute;
        this.numberOfDoubleDots = numberOfDoubleDots;
        this.commands = commands;
        if (isAbsolute && commands.length > 0 && isMatrixParams(commands[0])) {
            throw new Error('Root segment cannot have matrix parameters');
        }
        /** @type {?} */
        var cmdWithOutlet = commands.find(function (c) { return typeof c === 'object' && c != null && c.outlets; });
        if (cmdWithOutlet && cmdWithOutlet !== last$1(commands)) {
            throw new Error('{outlets:{}} has to be the last command');
        }
    }
    /**
     * @return {?}
     */
    Navigation.prototype.toRoot = /**
     * @return {?}
     */
    function () {
        return this.isAbsolute && this.commands.length === 1 && this.commands[0] == '/';
    };
    return Navigation;
}());
/**
 * Transforms commands to a normalized `Navigation`
 * @param {?} commands
 * @return {?}
 */
function computeNavigation(commands) {
    if ((typeof commands[0] === 'string') && commands.length === 1 && commands[0] === '/') {
        return new Navigation(true, 0, commands);
    }
    /** @type {?} */
    var numberOfDoubleDots = 0;
    /** @type {?} */
    var isAbsolute = false;
    /** @type {?} */
    var res = commands.reduce(function (res, cmd, cmdIdx) {
        if (typeof cmd === 'object' && cmd != null) {
            if (cmd.outlets) {
                /** @type {?} */
                var outlets_1 = {};
                forEach(cmd.outlets, function (commands, name) {
                    outlets_1[name] = typeof commands === 'string' ? commands.split('/') : commands;
                });
                return res.concat([{ outlets: outlets_1 }]);
            }
            if (cmd.segmentPath) {
                return res.concat([cmd.segmentPath]);
            }
        }
        if (!(typeof cmd === 'string')) {
            return res.concat([cmd]);
        }
        if (cmdIdx === 0) {
            cmd.split('/').forEach(function (urlPart, partIndex) {
                if (partIndex == 0 && urlPart === '.') {
                    // skip './a'
                }
                else if (partIndex == 0 && urlPart === '') { //  '/a'
                    //  '/a'
                    isAbsolute = true;
                }
                else if (urlPart === '..') { //  '../a'
                    //  '../a'
                    numberOfDoubleDots++;
                }
                else if (urlPart != '') {
                    res.push(urlPart);
                }
            });
            return res;
        }
        return res.concat([cmd]);
    }, []);
    return new Navigation(isAbsolute, numberOfDoubleDots, res);
}
var Position = /** @class */ (function () {
    function Position(segmentGroup, processChildren, index) {
        this.segmentGroup = segmentGroup;
        this.processChildren = processChildren;
        this.index = index;
    }
    return Position;
}());
/**
 * @param {?} nav
 * @param {?} tree
 * @param {?} route
 * @return {?}
 */
function findStartingPosition(nav, tree, route) {
    if (nav.isAbsolute) {
        return new Position(tree.root, true, 0);
    }
    if (route.snapshot._lastPathIndex === -1) {
        return new Position(route.snapshot._urlSegment, true, 0);
    }
    /** @type {?} */
    var modifier = isMatrixParams(nav.commands[0]) ? 0 : 1;
    /** @type {?} */
    var index = route.snapshot._lastPathIndex + modifier;
    return createPositionApplyingDoubleDots(route.snapshot._urlSegment, index, nav.numberOfDoubleDots);
}
/**
 * @param {?} group
 * @param {?} index
 * @param {?} numberOfDoubleDots
 * @return {?}
 */
function createPositionApplyingDoubleDots(group, index, numberOfDoubleDots) {
    /** @type {?} */
    var g = group;
    /** @type {?} */
    var ci = index;
    /** @type {?} */
    var dd = numberOfDoubleDots;
    while (dd > ci) {
        dd -= ci;
        g = /** @type {?} */ ((g.parent));
        if (!g) {
            throw new Error('Invalid number of \'../\'');
        }
        ci = g.segments.length;
    }
    return new Position(g, false, ci - dd);
}
/**
 * @param {?} command
 * @return {?}
 */
function getPath(command) {
    if (typeof command === 'object' && command != null && command.outlets) {
        return command.outlets[PRIMARY_OUTLET];
    }
    return "" + command;
}
/**
 * @param {?} commands
 * @return {?}
 */
function getOutlets(commands) {
    var _a, _b;
    if (!(typeof commands[0] === 'object'))
        return _a = {}, _a[PRIMARY_OUTLET] = commands, _a;
    if (commands[0].outlets === undefined)
        return _b = {}, _b[PRIMARY_OUTLET] = commands, _b;
    return commands[0].outlets;
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function updateSegmentGroup(segmentGroup, startIndex, commands) {
    if (!segmentGroup) {
        segmentGroup = new UrlSegmentGroup([], {});
    }
    if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
        return updateSegmentGroupChildren(segmentGroup, startIndex, commands);
    }
    /** @type {?} */
    var m = prefixedWith(segmentGroup, startIndex, commands);
    /** @type {?} */
    var slicedCommands = commands.slice(m.commandIndex);
    if (m.match && m.pathIndex < segmentGroup.segments.length) {
        /** @type {?} */
        var g = new UrlSegmentGroup(segmentGroup.segments.slice(0, m.pathIndex), {});
        g.children[PRIMARY_OUTLET] =
            new UrlSegmentGroup(segmentGroup.segments.slice(m.pathIndex), segmentGroup.children);
        return updateSegmentGroupChildren(g, 0, slicedCommands);
    }
    else if (m.match && slicedCommands.length === 0) {
        return new UrlSegmentGroup(segmentGroup.segments, {});
    }
    else if (m.match && !segmentGroup.hasChildren()) {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
    else if (m.match) {
        return updateSegmentGroupChildren(segmentGroup, 0, slicedCommands);
    }
    else {
        return createNewSegmentGroup(segmentGroup, startIndex, commands);
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function updateSegmentGroupChildren(segmentGroup, startIndex, commands) {
    if (commands.length === 0) {
        return new UrlSegmentGroup(segmentGroup.segments, {});
    }
    else {
        /** @type {?} */
        var outlets_2 = getOutlets(commands);
        /** @type {?} */
        var children_1 = {};
        forEach(outlets_2, function (commands, outlet) {
            if (commands !== null) {
                children_1[outlet] = updateSegmentGroup(segmentGroup.children[outlet], startIndex, commands);
            }
        });
        forEach(segmentGroup.children, function (child, childOutlet) {
            if (outlets_2[childOutlet] === undefined) {
                children_1[childOutlet] = child;
            }
        });
        return new UrlSegmentGroup(segmentGroup.segments, children_1);
    }
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function prefixedWith(segmentGroup, startIndex, commands) {
    /** @type {?} */
    var currentCommandIndex = 0;
    /** @type {?} */
    var currentPathIndex = startIndex;
    /** @type {?} */
    var noMatch = { match: false, pathIndex: 0, commandIndex: 0 };
    while (currentPathIndex < segmentGroup.segments.length) {
        if (currentCommandIndex >= commands.length)
            return noMatch;
        /** @type {?} */
        var path = segmentGroup.segments[currentPathIndex];
        /** @type {?} */
        var curr = getPath(commands[currentCommandIndex]);
        /** @type {?} */
        var next = currentCommandIndex < commands.length - 1 ? commands[currentCommandIndex + 1] : null;
        if (currentPathIndex > 0 && curr === undefined)
            break;
        if (curr && next && (typeof next === 'object') && next.outlets === undefined) {
            if (!compare(curr, next, path))
                return noMatch;
            currentCommandIndex += 2;
        }
        else {
            if (!compare(curr, {}, path))
                return noMatch;
            currentCommandIndex++;
        }
        currentPathIndex++;
    }
    return { match: true, pathIndex: currentPathIndex, commandIndex: currentCommandIndex };
}
/**
 * @param {?} segmentGroup
 * @param {?} startIndex
 * @param {?} commands
 * @return {?}
 */
function createNewSegmentGroup(segmentGroup, startIndex, commands) {
    /** @type {?} */
    var paths = segmentGroup.segments.slice(0, startIndex);
    /** @type {?} */
    var i = 0;
    while (i < commands.length) {
        if (typeof commands[i] === 'object' && commands[i].outlets !== undefined) {
            /** @type {?} */
            var children = createNewSegmentChildren(commands[i].outlets);
            return new UrlSegmentGroup(paths, children);
        }
        // if we start with an object literal, we need to reuse the path part from the segment
        if (i === 0 && isMatrixParams(commands[0])) {
            /** @type {?} */
            var p = segmentGroup.segments[startIndex];
            paths.push(new UrlSegment(p.path, commands[0]));
            i++;
            continue;
        }
        /** @type {?} */
        var curr = getPath(commands[i]);
        /** @type {?} */
        var next = (i < commands.length - 1) ? commands[i + 1] : null;
        if (curr && next && isMatrixParams(next)) {
            paths.push(new UrlSegment(curr, stringify(next)));
            i += 2;
        }
        else {
            paths.push(new UrlSegment(curr, {}));
            i++;
        }
    }
    return new UrlSegmentGroup(paths, {});
}
/**
 * @param {?} outlets
 * @return {?}
 */
function createNewSegmentChildren(outlets) {
    /** @type {?} */
    var children = {};
    forEach(outlets, function (commands, outlet) {
        if (commands !== null) {
            children[outlet] = createNewSegmentGroup(new UrlSegmentGroup([], {}), 0, commands);
        }
    });
    return children;
}
/**
 * @param {?} params
 * @return {?}
 */
function stringify(params) {
    /** @type {?} */
    var res = {};
    forEach(params, function (v, k) { return res[k] = "" + v; });
    return res;
}
/**
 * @param {?} path
 * @param {?} params
 * @param {?} segment
 * @return {?}
 */
function compare(path, params, segment) {
    return path == segment.path && shallowEqual(params, segment.parameters);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
var activateRoutes = function (rootContexts, routeReuseStrategy, forwardEvent) {
    return rxjs_operators.map(function (t) {
        new ActivateRoutes(routeReuseStrategy, /** @type {?} */ ((t.targetRouterState)), t.currentRouterState, forwardEvent)
            .activate(rootContexts);
        return t;
    });
};
var ActivateRoutes = /** @class */ (function () {
    function ActivateRoutes(routeReuseStrategy, futureState, currState, forwardEvent) {
        this.routeReuseStrategy = routeReuseStrategy;
        this.futureState = futureState;
        this.currState = currState;
        this.forwardEvent = forwardEvent;
    }
    /**
     * @param {?} parentContexts
     * @return {?}
     */
    ActivateRoutes.prototype.activate = /**
     * @param {?} parentContexts
     * @return {?}
     */
    function (parentContexts) {
        /** @type {?} */
        var futureRoot = this.futureState._root;
        /** @type {?} */
        var currRoot = this.currState ? this.currState._root : null;
        this.deactivateChildRoutes(futureRoot, currRoot, parentContexts);
        advanceActivatedRoute(this.futureState.root);
        this.activateChildRoutes(futureRoot, currRoot, parentContexts);
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} contexts
     * @return {?}
     */
    ActivateRoutes.prototype.deactivateChildRoutes = /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} contexts
     * @return {?}
     */
    function (futureNode, currNode, contexts) {
        var _this = this;
        /** @type {?} */
        var children = nodeChildrenAsMap(currNode);
        // Recurse on the routes active in the future state to de-activate deeper children
        futureNode.children.forEach(function (futureChild) {
            /** @type {?} */
            var childOutletName = futureChild.value.outlet;
            _this.deactivateRoutes(futureChild, children[childOutletName], contexts);
            delete children[childOutletName];
        });
        // De-activate the routes that will not be re-used
        forEach(children, function (v, childName) {
            _this.deactivateRouteAndItsChildren(v, contexts);
        });
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} parentContext
     * @return {?}
     */
    ActivateRoutes.prototype.deactivateRoutes = /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} parentContext
     * @return {?}
     */
    function (futureNode, currNode, parentContext) {
        /** @type {?} */
        var future = futureNode.value;
        /** @type {?} */
        var curr = currNode ? currNode.value : null;
        if (future === curr) {
            // Reusing the node, check to see if the children need to be de-activated
            if (future.component) {
                /** @type {?} */
                var context = parentContext.getContext(future.outlet);
                if (context) {
                    this.deactivateChildRoutes(futureNode, currNode, context.children);
                }
            }
            else {
                // if we have a componentless route, we recurse but keep the same outlet map.
                this.deactivateChildRoutes(futureNode, currNode, parentContext);
            }
        }
        else {
            if (curr) {
                // Deactivate the current route which will not be re-used
                this.deactivateRouteAndItsChildren(currNode, parentContext);
            }
        }
    };
    /**
     * @param {?} route
     * @param {?} parentContexts
     * @return {?}
     */
    ActivateRoutes.prototype.deactivateRouteAndItsChildren = /**
     * @param {?} route
     * @param {?} parentContexts
     * @return {?}
     */
    function (route, parentContexts) {
        if (this.routeReuseStrategy.shouldDetach(route.value.snapshot)) {
            this.detachAndStoreRouteSubtree(route, parentContexts);
        }
        else {
            this.deactivateRouteAndOutlet(route, parentContexts);
        }
    };
    /**
     * @param {?} route
     * @param {?} parentContexts
     * @return {?}
     */
    ActivateRoutes.prototype.detachAndStoreRouteSubtree = /**
     * @param {?} route
     * @param {?} parentContexts
     * @return {?}
     */
    function (route, parentContexts) {
        /** @type {?} */
        var context = parentContexts.getContext(route.value.outlet);
        if (context && context.outlet) {
            /** @type {?} */
            var componentRef = context.outlet.detach();
            /** @type {?} */
            var contexts = context.children.onOutletDeactivated();
            this.routeReuseStrategy.store(route.value.snapshot, { componentRef: componentRef, route: route, contexts: contexts });
        }
    };
    /**
     * @param {?} route
     * @param {?} parentContexts
     * @return {?}
     */
    ActivateRoutes.prototype.deactivateRouteAndOutlet = /**
     * @param {?} route
     * @param {?} parentContexts
     * @return {?}
     */
    function (route, parentContexts) {
        var _this = this;
        /** @type {?} */
        var context = parentContexts.getContext(route.value.outlet);
        if (context) {
            /** @type {?} */
            var children = nodeChildrenAsMap(route);
            /** @type {?} */
            var contexts_1 = route.value.component ? context.children : parentContexts;
            forEach(children, function (v, k) { return _this.deactivateRouteAndItsChildren(v, contexts_1); });
            if (context.outlet) {
                // Destroy the component
                context.outlet.deactivate();
                // Destroy the contexts for all the outlets that were in the component
                context.children.onOutletDeactivated();
            }
        }
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} contexts
     * @return {?}
     */
    ActivateRoutes.prototype.activateChildRoutes = /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} contexts
     * @return {?}
     */
    function (futureNode, currNode, contexts) {
        var _this = this;
        /** @type {?} */
        var children = nodeChildrenAsMap(currNode);
        futureNode.children.forEach(function (c) {
            _this.activateRoutes(c, children[c.value.outlet], contexts);
            _this.forwardEvent(new ActivationEnd(c.value.snapshot));
        });
        if (futureNode.children.length) {
            this.forwardEvent(new ChildActivationEnd(futureNode.value.snapshot));
        }
    };
    /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} parentContexts
     * @return {?}
     */
    ActivateRoutes.prototype.activateRoutes = /**
     * @param {?} futureNode
     * @param {?} currNode
     * @param {?} parentContexts
     * @return {?}
     */
    function (futureNode, currNode, parentContexts) {
        /** @type {?} */
        var future = futureNode.value;
        /** @type {?} */
        var curr = currNode ? currNode.value : null;
        advanceActivatedRoute(future);
        // reusing the node
        if (future === curr) {
            if (future.component) {
                /** @type {?} */
                var context = parentContexts.getOrCreateContext(future.outlet);
                this.activateChildRoutes(futureNode, currNode, context.children);
            }
            else {
                // if we have a componentless route, we recurse but keep the same outlet map.
                this.activateChildRoutes(futureNode, currNode, parentContexts);
            }
        }
        else {
            if (future.component) {
                /** @type {?} */
                var context = parentContexts.getOrCreateContext(future.outlet);
                if (this.routeReuseStrategy.shouldAttach(future.snapshot)) {
                    /** @type {?} */
                    var stored = (/** @type {?} */ (this.routeReuseStrategy.retrieve(future.snapshot)));
                    this.routeReuseStrategy.store(future.snapshot, null);
                    context.children.onOutletReAttached(stored.contexts);
                    context.attachRef = stored.componentRef;
                    context.route = stored.route.value;
                    if (context.outlet) {
                        // Attach right away when the outlet has already been instantiated
                        // Otherwise attach from `RouterOutlet.ngOnInit` when it is instantiated
                        context.outlet.attach(stored.componentRef, stored.route.value);
                    }
                    advanceActivatedRouteNodeAndItsChildren(stored.route);
                }
                else {
                    /** @type {?} */
                    var config = parentLoadedConfig(future.snapshot);
                    /** @type {?} */
                    var cmpFactoryResolver = config ? config.module.componentFactoryResolver : null;
                    context.attachRef = null;
                    context.route = future;
                    context.resolver = cmpFactoryResolver;
                    if (context.outlet) {
                        // Activate the outlet when it has already been instantiated
                        // Otherwise it will get activated from its `ngOnInit` when instantiated
                        context.outlet.activateWith(future, cmpFactoryResolver);
                    }
                    this.activateChildRoutes(futureNode, null, context.children);
                }
            }
            else {
                // if we have a componentless route, we recurse but keep the same outlet map.
                this.activateChildRoutes(futureNode, null, parentContexts);
            }
        }
    };
    return ActivateRoutes;
}());
/**
 * @param {?} node
 * @return {?}
 */
function advanceActivatedRouteNodeAndItsChildren(node) {
    advanceActivatedRoute(node.value);
    node.children.forEach(advanceActivatedRouteNodeAndItsChildren);
}
/**
 * @param {?} snapshot
 * @return {?}
 */
function parentLoadedConfig(snapshot) {
    for (var s = snapshot.parent; s; s = s.parent) {
        /** @type {?} */
        var route = s.routeConfig;
        if (route && route._loadedConfig)
            return route._loadedConfig;
        if (route && route.component)
            return null;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Simple function check, but generic so type inference will flow. Example:
 *
 * function product(a: number, b: number) {
 *   return a * b;
 * }
 *
 * if (isFunction<product>(fn)) {
 *   return fn(1, 2);
 * } else {
 *   throw "Must provide the `product` function";
 * }
 * @template T
 * @param {?} v
 * @return {?}
 */
function isFunction(v) {
    return typeof v === 'function';
}
/**
 * @param {?} v
 * @return {?}
 */
function isBoolean(v) {
    return typeof v === 'boolean';
}
/**
 * @param {?} v
 * @return {?}
 */
function isUrlTree(v) {
    return v instanceof UrlTree;
}
/**
 * @param {?} guard
 * @return {?}
 */
function isCanLoad(guard) {
    return guard && isFunction(guard.canLoad);
}
/**
 * @param {?} guard
 * @return {?}
 */
function isCanActivate(guard) {
    return guard && isFunction(guard.canActivate);
}
/**
 * @param {?} guard
 * @return {?}
 */
function isCanActivateChild(guard) {
    return guard && isFunction(guard.canActivateChild);
}
/**
 * @template T
 * @param {?} guard
 * @return {?}
 */
function isCanDeactivate(guard) {
    return guard && isFunction(guard.canDeactivate);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NoMatch = /** @class */ (function () {
    function NoMatch(segmentGroup) {
        this.segmentGroup = segmentGroup || null;
    }
    return NoMatch;
}());
var AbsoluteRedirect = /** @class */ (function () {
    function AbsoluteRedirect(urlTree) {
        this.urlTree = urlTree;
    }
    return AbsoluteRedirect;
}());
/**
 * @param {?} segmentGroup
 * @return {?}
 */
function noMatch(segmentGroup) {
    return new rxjs.Observable(function (obs) { return obs.error(new NoMatch(segmentGroup)); });
}
/**
 * @param {?} newTree
 * @return {?}
 */
function absoluteRedirect(newTree) {
    return new rxjs.Observable(function (obs) { return obs.error(new AbsoluteRedirect(newTree)); });
}
/**
 * @param {?} redirectTo
 * @return {?}
 */
function namedOutletsRedirect(redirectTo) {
    return new rxjs.Observable(function (obs) { return obs.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + redirectTo + "'")); });
}
/**
 * @param {?} route
 * @return {?}
 */
function canLoadFails(route) {
    return new rxjs.Observable(function (obs) { return obs.error(navigationCancelingError("Cannot load children because the guard of the route \"path: '" + route.path + "'\" returned false")); });
}
/**
 * Returns the `UrlTree` with the redirection applied.
 *
 * Lazy modules are loaded along the way.
 * @param {?} moduleInjector
 * @param {?} configLoader
 * @param {?} urlSerializer
 * @param {?} urlTree
 * @param {?} config
 * @return {?}
 */
function applyRedirects$1(moduleInjector, configLoader, urlSerializer, urlTree, config) {
    return new ApplyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config).apply();
}
var ApplyRedirects = /** @class */ (function () {
    function ApplyRedirects(moduleInjector, configLoader, urlSerializer, urlTree, config) {
        this.configLoader = configLoader;
        this.urlSerializer = urlSerializer;
        this.urlTree = urlTree;
        this.config = config;
        this.allowRedirects = true;
        this.ngModule = moduleInjector.get(_angular_core.NgModuleRef);
    }
    /**
     * @return {?}
     */
    ApplyRedirects.prototype.apply = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var expanded$ = this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, PRIMARY_OUTLET);
        /** @type {?} */
        var urlTrees$ = expanded$.pipe(rxjs_operators.map(function (rootSegmentGroup) { return _this.createUrlTree(rootSegmentGroup, _this.urlTree.queryParams, /** @type {?} */ ((_this.urlTree.fragment))); }));
        return urlTrees$.pipe(rxjs_operators.catchError(function (e) {
            if (e instanceof AbsoluteRedirect) {
                // after an absolute redirect we do not apply any more redirects!
                _this.allowRedirects = false;
                // we need to run matching, so we can fetch all lazy-loaded modules
                return _this.match(e.urlTree);
            }
            if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            throw e;
        }));
    };
    /**
     * @param {?} tree
     * @return {?}
     */
    ApplyRedirects.prototype.match = /**
     * @param {?} tree
     * @return {?}
     */
    function (tree) {
        var _this = this;
        /** @type {?} */
        var expanded$ = this.expandSegmentGroup(this.ngModule, this.config, tree.root, PRIMARY_OUTLET);
        /** @type {?} */
        var mapped$ = expanded$.pipe(rxjs_operators.map(function (rootSegmentGroup) {
            return _this.createUrlTree(rootSegmentGroup, tree.queryParams, /** @type {?} */ ((tree.fragment)));
        }));
        return mapped$.pipe(rxjs_operators.catchError(function (e) {
            if (e instanceof NoMatch) {
                throw _this.noMatchError(e);
            }
            throw e;
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ApplyRedirects.prototype.noMatchError = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        return new Error("Cannot match any routes. URL Segment: '" + e.segmentGroup + "'");
    };
    /**
     * @param {?} rootCandidate
     * @param {?} queryParams
     * @param {?} fragment
     * @return {?}
     */
    ApplyRedirects.prototype.createUrlTree = /**
     * @param {?} rootCandidate
     * @param {?} queryParams
     * @param {?} fragment
     * @return {?}
     */
    function (rootCandidate, queryParams, fragment) {
        var _a;
        /** @type {?} */
        var root = rootCandidate.segments.length > 0 ?
            new UrlSegmentGroup([], (_a = {}, _a[PRIMARY_OUTLET] = rootCandidate, _a)) :
            rootCandidate;
        return new UrlTree(root, queryParams, fragment);
    };
    /**
     * @param {?} ngModule
     * @param {?} routes
     * @param {?} segmentGroup
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegmentGroup = /**
     * @param {?} ngModule
     * @param {?} routes
     * @param {?} segmentGroup
     * @param {?} outlet
     * @return {?}
     */
    function (ngModule, routes, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return this.expandChildren(ngModule, routes, segmentGroup)
                .pipe(rxjs_operators.map(function (children) { return new UrlSegmentGroup([], children); }));
        }
        return this.expandSegment(ngModule, segmentGroup, routes, segmentGroup.segments, outlet, true);
    };
    /**
     * @param {?} ngModule
     * @param {?} routes
     * @param {?} segmentGroup
     * @return {?}
     */
    ApplyRedirects.prototype.expandChildren = /**
     * @param {?} ngModule
     * @param {?} routes
     * @param {?} segmentGroup
     * @return {?}
     */
    function (ngModule, routes, segmentGroup) {
        var _this = this;
        return waitForMap(segmentGroup.children, function (childOutlet, child) { return _this.expandSegmentGroup(ngModule, routes, child, childOutlet); });
    };
    /**
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} segments
     * @param {?} outlet
     * @param {?} allowRedirects
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegment = /**
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} segments
     * @param {?} outlet
     * @param {?} allowRedirects
     * @return {?}
     */
    function (ngModule, segmentGroup, routes, segments, outlet, allowRedirects) {
        var _this = this;
        return rxjs.of.apply(void 0, routes).pipe(rxjs_operators.map(function (r) {
            /** @type {?} */
            var expanded$ = _this.expandSegmentAgainstRoute(ngModule, segmentGroup, routes, r, segments, outlet, allowRedirects);
            return expanded$.pipe(rxjs_operators.catchError(function (e) {
                if (e instanceof NoMatch) {
                    // TODO(i): this return type doesn't match the declared Observable<UrlSegmentGroup> -
                    // talk to Jason
                    return /** @type {?} */ (rxjs.of(null));
                }
                throw e;
            }));
        }), rxjs_operators.concatAll(), rxjs_operators.first(function (s) { return !!s; }), rxjs_operators.catchError(function (e, _) {
            if (e instanceof rxjs.EmptyError || e.name === 'EmptyError') {
                if (_this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
                    return rxjs.of(new UrlSegmentGroup([], {}));
                }
                throw new NoMatch(segmentGroup);
            }
            throw e;
        }));
    };
    /**
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.noLeftoversInUrl = /**
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    function (segmentGroup, segments, outlet) {
        return segments.length === 0 && !segmentGroup.children[outlet];
    };
    /**
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} paths
     * @param {?} outlet
     * @param {?} allowRedirects
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegmentAgainstRoute = /**
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} paths
     * @param {?} outlet
     * @param {?} allowRedirects
     * @return {?}
     */
    function (ngModule, segmentGroup, routes, route, paths, outlet, allowRedirects) {
        if (getOutlet(route) !== outlet) {
            return noMatch(segmentGroup);
        }
        if (route.redirectTo === undefined) {
            return this.matchSegmentAgainstRoute(ngModule, segmentGroup, route, paths);
        }
        if (allowRedirects && this.allowRedirects) {
            return this.expandSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, paths, outlet);
        }
        return noMatch(segmentGroup);
    };
    /**
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandSegmentAgainstRouteUsingRedirect = /**
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    function (ngModule, segmentGroup, routes, route, segments, outlet) {
        if (route.path === '**') {
            return this.expandWildCardWithParamsAgainstRouteUsingRedirect(ngModule, routes, route, outlet);
        }
        return this.expandRegularSegmentAgainstRouteUsingRedirect(ngModule, segmentGroup, routes, route, segments, outlet);
    };
    /**
     * @param {?} ngModule
     * @param {?} routes
     * @param {?} route
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = /**
     * @param {?} ngModule
     * @param {?} routes
     * @param {?} route
     * @param {?} outlet
     * @return {?}
     */
    function (ngModule, routes, route, outlet) {
        var _this = this;
        /** @type {?} */
        var newTree = this.applyRedirectCommands([], /** @type {?} */ ((route.redirectTo)), {});
        if (/** @type {?} */ ((route.redirectTo)).startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        return this.lineralizeSegments(route, newTree).pipe(rxjs_operators.mergeMap(function (newSegments) {
            /** @type {?} */
            var group = new UrlSegmentGroup(newSegments, {});
            return _this.expandSegment(ngModule, group, routes, newSegments, outlet, false);
        }));
    };
    /**
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    ApplyRedirects.prototype.expandRegularSegmentAgainstRouteUsingRedirect = /**
     * @param {?} ngModule
     * @param {?} segmentGroup
     * @param {?} routes
     * @param {?} route
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    function (ngModule, segmentGroup, routes, route, segments, outlet) {
        var _this = this;
        var _a = match(segmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild, positionalParamSegments = _a.positionalParamSegments;
        if (!matched)
            return noMatch(segmentGroup);
        /** @type {?} */
        var newTree = this.applyRedirectCommands(consumedSegments, /** @type {?} */ ((route.redirectTo)), /** @type {?} */ (positionalParamSegments));
        if (/** @type {?} */ ((route.redirectTo)).startsWith('/')) {
            return absoluteRedirect(newTree);
        }
        return this.lineralizeSegments(route, newTree).pipe(rxjs_operators.mergeMap(function (newSegments) {
            return _this.expandSegment(ngModule, segmentGroup, routes, newSegments.concat(segments.slice(lastChild)), outlet, false);
        }));
    };
    /**
     * @param {?} ngModule
     * @param {?} rawSegmentGroup
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    ApplyRedirects.prototype.matchSegmentAgainstRoute = /**
     * @param {?} ngModule
     * @param {?} rawSegmentGroup
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    function (ngModule, rawSegmentGroup, route, segments) {
        var _this = this;
        if (route.path === '**') {
            if (route.loadChildren) {
                return this.configLoader.load(ngModule.injector, route)
                    .pipe(rxjs_operators.map(function (cfg) {
                    route._loadedConfig = cfg;
                    return new UrlSegmentGroup(segments, {});
                }));
            }
            return rxjs.of(new UrlSegmentGroup(segments, {}));
        }
        var _a = match(rawSegmentGroup, route, segments), matched = _a.matched, consumedSegments = _a.consumedSegments, lastChild = _a.lastChild;
        if (!matched)
            return noMatch(rawSegmentGroup);
        /** @type {?} */
        var rawSlicedSegments = segments.slice(lastChild);
        /** @type {?} */
        var childConfig$ = this.getChildConfig(ngModule, route, segments);
        return childConfig$.pipe(rxjs_operators.mergeMap(function (routerConfig) {
            /** @type {?} */
            var childModule = routerConfig.module;
            /** @type {?} */
            var childConfig = routerConfig.routes;
            var _a = split(rawSegmentGroup, consumedSegments, rawSlicedSegments, childConfig), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
            if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
                /** @type {?} */
                var expanded$_1 = _this.expandChildren(childModule, childConfig, segmentGroup);
                return expanded$_1.pipe(rxjs_operators.map(function (children) { return new UrlSegmentGroup(consumedSegments, children); }));
            }
            if (childConfig.length === 0 && slicedSegments.length === 0) {
                return rxjs.of(new UrlSegmentGroup(consumedSegments, {}));
            }
            /** @type {?} */
            var expanded$ = _this.expandSegment(childModule, segmentGroup, childConfig, slicedSegments, PRIMARY_OUTLET, true);
            return expanded$.pipe(rxjs_operators.map(function (cs) {
                return new UrlSegmentGroup(consumedSegments.concat(cs.segments), cs.children);
            }));
        }));
    };
    /**
     * @param {?} ngModule
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    ApplyRedirects.prototype.getChildConfig = /**
     * @param {?} ngModule
     * @param {?} route
     * @param {?} segments
     * @return {?}
     */
    function (ngModule, route, segments) {
        var _this = this;
        if (route.children) {
            // The children belong to the same module
            return rxjs.of(new LoadedRouterConfig(route.children, ngModule));
        }
        if (route.loadChildren) {
            // lazy children belong to the loaded module
            if (route._loadedConfig !== undefined) {
                return rxjs.of(route._loadedConfig);
            }
            return runCanLoadGuard(ngModule.injector, route, segments)
                .pipe(rxjs_operators.mergeMap(function (shouldLoad) {
                if (shouldLoad) {
                    return _this.configLoader.load(ngModule.injector, route)
                        .pipe(rxjs_operators.map(function (cfg) {
                        route._loadedConfig = cfg;
                        return cfg;
                    }));
                }
                return canLoadFails(route);
            }));
        }
        return rxjs.of(new LoadedRouterConfig([], ngModule));
    };
    /**
     * @param {?} route
     * @param {?} urlTree
     * @return {?}
     */
    ApplyRedirects.prototype.lineralizeSegments = /**
     * @param {?} route
     * @param {?} urlTree
     * @return {?}
     */
    function (route, urlTree) {
        /** @type {?} */
        var res = [];
        /** @type {?} */
        var c = urlTree.root;
        while (true) {
            res = res.concat(c.segments);
            if (c.numberOfChildren === 0) {
                return rxjs.of(res);
            }
            if (c.numberOfChildren > 1 || !c.children[PRIMARY_OUTLET]) {
                return namedOutletsRedirect(/** @type {?} */ ((route.redirectTo)));
            }
            c = c.children[PRIMARY_OUTLET];
        }
    };
    /**
     * @param {?} segments
     * @param {?} redirectTo
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.applyRedirectCommands = /**
     * @param {?} segments
     * @param {?} redirectTo
     * @param {?} posParams
     * @return {?}
     */
    function (segments, redirectTo, posParams) {
        return this.applyRedirectCreatreUrlTree(redirectTo, this.urlSerializer.parse(redirectTo), segments, posParams);
    };
    /**
     * @param {?} redirectTo
     * @param {?} urlTree
     * @param {?} segments
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.applyRedirectCreatreUrlTree = /**
     * @param {?} redirectTo
     * @param {?} urlTree
     * @param {?} segments
     * @param {?} posParams
     * @return {?}
     */
    function (redirectTo, urlTree, segments, posParams) {
        /** @type {?} */
        var newRoot = this.createSegmentGroup(redirectTo, urlTree.root, segments, posParams);
        return new UrlTree(newRoot, this.createQueryParams(urlTree.queryParams, this.urlTree.queryParams), urlTree.fragment);
    };
    /**
     * @param {?} redirectToParams
     * @param {?} actualParams
     * @return {?}
     */
    ApplyRedirects.prototype.createQueryParams = /**
     * @param {?} redirectToParams
     * @param {?} actualParams
     * @return {?}
     */
    function (redirectToParams, actualParams) {
        /** @type {?} */
        var res = {};
        forEach(redirectToParams, function (v, k) {
            /** @type {?} */
            var copySourceValue = typeof v === 'string' && v.startsWith(':');
            if (copySourceValue) {
                /** @type {?} */
                var sourceName = v.substring(1);
                res[k] = actualParams[sourceName];
            }
            else {
                res[k] = v;
            }
        });
        return res;
    };
    /**
     * @param {?} redirectTo
     * @param {?} group
     * @param {?} segments
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.createSegmentGroup = /**
     * @param {?} redirectTo
     * @param {?} group
     * @param {?} segments
     * @param {?} posParams
     * @return {?}
     */
    function (redirectTo, group, segments, posParams) {
        var _this = this;
        /** @type {?} */
        var updatedSegments = this.createSegments(redirectTo, group.segments, segments, posParams);
        /** @type {?} */
        var children = {};
        forEach(group.children, function (child, name) {
            children[name] = _this.createSegmentGroup(redirectTo, child, segments, posParams);
        });
        return new UrlSegmentGroup(updatedSegments, children);
    };
    /**
     * @param {?} redirectTo
     * @param {?} redirectToSegments
     * @param {?} actualSegments
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.createSegments = /**
     * @param {?} redirectTo
     * @param {?} redirectToSegments
     * @param {?} actualSegments
     * @param {?} posParams
     * @return {?}
     */
    function (redirectTo, redirectToSegments, actualSegments, posParams) {
        var _this = this;
        return redirectToSegments.map(function (s) { return s.path.startsWith(':') ? _this.findPosParam(redirectTo, s, posParams) :
            _this.findOrReturn(s, actualSegments); });
    };
    /**
     * @param {?} redirectTo
     * @param {?} redirectToUrlSegment
     * @param {?} posParams
     * @return {?}
     */
    ApplyRedirects.prototype.findPosParam = /**
     * @param {?} redirectTo
     * @param {?} redirectToUrlSegment
     * @param {?} posParams
     * @return {?}
     */
    function (redirectTo, redirectToUrlSegment, posParams) {
        /** @type {?} */
        var pos = posParams[redirectToUrlSegment.path.substring(1)];
        if (!pos)
            throw new Error("Cannot redirect to '" + redirectTo + "'. Cannot find '" + redirectToUrlSegment.path + "'.");
        return pos;
    };
    /**
     * @param {?} redirectToUrlSegment
     * @param {?} actualSegments
     * @return {?}
     */
    ApplyRedirects.prototype.findOrReturn = /**
     * @param {?} redirectToUrlSegment
     * @param {?} actualSegments
     * @return {?}
     */
    function (redirectToUrlSegment, actualSegments) {
        /** @type {?} */
        var idx = 0;
        for (var _i = 0, actualSegments_1 = actualSegments; _i < actualSegments_1.length; _i++) {
            var s = actualSegments_1[_i];
            if (s.path === redirectToUrlSegment.path) {
                actualSegments.splice(idx);
                return s;
            }
            idx++;
        }
        return redirectToUrlSegment;
    };
    return ApplyRedirects;
}());
/**
 * @param {?} moduleInjector
 * @param {?} route
 * @param {?} segments
 * @return {?}
 */
function runCanLoadGuard(moduleInjector, route, segments) {
    /** @type {?} */
    var canLoad = route.canLoad;
    if (!canLoad || canLoad.length === 0)
        return rxjs.of(true);
    /** @type {?} */
    var obs = rxjs.from(canLoad).pipe(rxjs_operators.map(function (injectionToken) {
        /** @type {?} */
        var guard = moduleInjector.get(injectionToken);
        /** @type {?} */
        var guardVal;
        if (isCanLoad(guard)) {
            guardVal = guard.canLoad(route, segments);
        }
        else if (isFunction(guard)) {
            guardVal = guard(route, segments);
        }
        else {
            throw new Error('Invalid CanLoad guard');
        }
        return wrapIntoObservable(guardVal);
    }));
    return obs.pipe(rxjs_operators.concatAll(), rxjs_operators.every(function (result) { return result === true; }));
}
/**
 * @param {?} segmentGroup
 * @param {?} route
 * @param {?} segments
 * @return {?}
 */
function match(segmentGroup, route, segments) {
    if (route.path === '') {
        if ((route.pathMatch === 'full') && (segmentGroup.hasChildren() || segments.length > 0)) {
            return { matched: false, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        }
        return { matched: true, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
    }
    /** @type {?} */
    var matcher = route.matcher || defaultUrlMatcher;
    /** @type {?} */
    var res = matcher(segments, segmentGroup, route);
    if (!res) {
        return {
            matched: false,
            consumedSegments: /** @type {?} */ ([]),
            lastChild: 0,
            positionalParamSegments: {},
        };
    }
    return {
        matched: true,
        consumedSegments: /** @type {?} */ ((res.consumed)),
        lastChild: /** @type {?} */ ((res.consumed.length)),
        positionalParamSegments: /** @type {?} */ ((res.posParams)),
    };
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} slicedSegments
 * @param {?} config
 * @return {?}
 */
function split(segmentGroup, consumedSegments, slicedSegments, config) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        /** @type {?} */
        var s = new UrlSegmentGroup(consumedSegments, createChildrenForEmptySegments(config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: [] };
    }
    if (slicedSegments.length === 0 &&
        containsEmptyPathRedirects(segmentGroup, slicedSegments, config)) {
        /** @type {?} */
        var s = new UrlSegmentGroup(segmentGroup.segments, addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, config, segmentGroup.children));
        return { segmentGroup: mergeTrivialChildren(s), slicedSegments: slicedSegments };
    }
    return { segmentGroup: segmentGroup, slicedSegments: slicedSegments };
}
/**
 * @param {?} s
 * @return {?}
 */
function mergeTrivialChildren(s) {
    if (s.numberOfChildren === 1 && s.children[PRIMARY_OUTLET]) {
        /** @type {?} */
        var c = s.children[PRIMARY_OUTLET];
        return new UrlSegmentGroup(s.segments.concat(c.segments), c.children);
    }
    return s;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @param {?} children
 * @return {?}
 */
function addEmptySegmentsToChildrenIfNeeded(segmentGroup, slicedSegments, routes, children) {
    /** @type {?} */
    var res = {};
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var r = routes_1[_i];
        if (isEmptyPathRedirect(segmentGroup, slicedSegments, r) && !children[getOutlet(r)]) {
            res[getOutlet(r)] = new UrlSegmentGroup([], {});
        }
    }
    return __assign({}, children, res);
}
/**
 * @param {?} routes
 * @param {?} primarySegmentGroup
 * @return {?}
 */
function createChildrenForEmptySegments(routes, primarySegmentGroup) {
    /** @type {?} */
    var res = {};
    res[PRIMARY_OUTLET] = primarySegmentGroup;
    for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
        var r = routes_2[_i];
        if (r.path === '' && getOutlet(r) !== PRIMARY_OUTLET) {
            res[getOutlet(r)] = new UrlSegmentGroup([], {});
        }
    }
    return res;
}
/**
 * @param {?} segmentGroup
 * @param {?} segments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathRedirectsWithNamedOutlets(segmentGroup, segments, routes) {
    return routes.some(function (r) { return isEmptyPathRedirect(segmentGroup, segments, r) && getOutlet(r) !== PRIMARY_OUTLET; });
}
/**
 * @param {?} segmentGroup
 * @param {?} segments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathRedirects(segmentGroup, segments, routes) {
    return routes.some(function (r) { return isEmptyPathRedirect(segmentGroup, segments, r); });
}
/**
 * @param {?} segmentGroup
 * @param {?} segments
 * @param {?} r
 * @return {?}
 */
function isEmptyPathRedirect(segmentGroup, segments, r) {
    if ((segmentGroup.hasChildren() || segments.length > 0) && r.pathMatch === 'full') {
        return false;
    }
    return r.path === '' && r.redirectTo !== undefined;
}
/**
 * @param {?} route
 * @return {?}
 */
function getOutlet(route) {
    return route.outlet || PRIMARY_OUTLET;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} moduleInjector
 * @param {?} configLoader
 * @param {?} urlSerializer
 * @param {?} config
 * @return {?}
 */
function applyRedirects$$1(moduleInjector, configLoader, urlSerializer, config) {
    return function (source) {
        return source.pipe(rxjs_operators.switchMap(function (t) { return applyRedirects$1(moduleInjector, configLoader, urlSerializer, t.extractedUrl, config)
            .pipe(rxjs_operators.map(function (urlAfterRedirects) { return (__assign({}, t, { urlAfterRedirects: urlAfterRedirects })); })); }));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var CanActivate = /** @class */ (function () {
    function CanActivate(path) {
        this.path = path;
        this.route = this.path[this.path.length - 1];
    }
    return CanActivate;
}());
var CanDeactivate = /** @class */ (function () {
    function CanDeactivate(component, route) {
        this.component = component;
        this.route = route;
    }
    return CanDeactivate;
}());
/**
 * @param {?} future
 * @param {?} curr
 * @param {?} parentContexts
 * @return {?}
 */
function getAllRouteGuards(future, curr, parentContexts) {
    /** @type {?} */
    var futureRoot = future._root;
    /** @type {?} */
    var currRoot = curr ? curr._root : null;
    return getChildRouteGuards(futureRoot, currRoot, parentContexts, [futureRoot.value]);
}
/**
 * @param {?} p
 * @return {?}
 */
function getCanActivateChild(p) {
    /** @type {?} */
    var canActivateChild = p.routeConfig ? p.routeConfig.canActivateChild : null;
    if (!canActivateChild || canActivateChild.length === 0)
        return null;
    return { node: p, guards: canActivateChild };
}
/**
 * @param {?} token
 * @param {?} snapshot
 * @param {?} moduleInjector
 * @return {?}
 */
function getToken(token, snapshot, moduleInjector) {
    /** @type {?} */
    var config = getClosestLoadedConfig(snapshot);
    /** @type {?} */
    var injector = config ? config.module.injector : moduleInjector;
    return injector.get(token);
}
/**
 * @param {?} snapshot
 * @return {?}
 */
function getClosestLoadedConfig(snapshot) {
    if (!snapshot)
        return null;
    for (var s = snapshot.parent; s; s = s.parent) {
        /** @type {?} */
        var route = s.routeConfig;
        if (route && route._loadedConfig)
            return route._loadedConfig;
    }
    return null;
}
/**
 * @param {?} futureNode
 * @param {?} currNode
 * @param {?} contexts
 * @param {?} futurePath
 * @param {?=} checks
 * @return {?}
 */
function getChildRouteGuards(futureNode, currNode, contexts, futurePath, checks) {
    if (checks === void 0) { checks = {
        canDeactivateChecks: [],
        canActivateChecks: []
    }; }
    /** @type {?} */
    var prevChildren = nodeChildrenAsMap(currNode);
    // Process the children of the future route
    futureNode.children.forEach(function (c) {
        getRouteGuards(c, prevChildren[c.value.outlet], contexts, futurePath.concat([c.value]), checks);
        delete prevChildren[c.value.outlet];
    });
    // Process any children left from the current route (not active for the future route)
    forEach(prevChildren, function (v, k) {
        return deactivateRouteAndItsChildren(v, /** @type {?} */ ((contexts)).getContext(k), checks);
    });
    return checks;
}
/**
 * @param {?} futureNode
 * @param {?} currNode
 * @param {?} parentContexts
 * @param {?} futurePath
 * @param {?=} checks
 * @return {?}
 */
function getRouteGuards(futureNode, currNode, parentContexts, futurePath, checks) {
    if (checks === void 0) { checks = {
        canDeactivateChecks: [],
        canActivateChecks: []
    }; }
    /** @type {?} */
    var future = futureNode.value;
    /** @type {?} */
    var curr = currNode ? currNode.value : null;
    /** @type {?} */
    var context = parentContexts ? parentContexts.getContext(futureNode.value.outlet) : null;
    // reusing the node
    if (curr && future.routeConfig === curr.routeConfig) {
        /** @type {?} */
        var shouldRun = shouldRunGuardsAndResolvers(curr, future, /** @type {?} */ ((future.routeConfig)).runGuardsAndResolvers);
        if (shouldRun) {
            checks.canActivateChecks.push(new CanActivate(futurePath));
        }
        else {
            // we need to set the data
            future.data = curr.data;
            future._resolvedData = curr._resolvedData;
        }
        // If we have a component, we need to go through an outlet.
        if (future.component) {
            getChildRouteGuards(futureNode, currNode, context ? context.children : null, futurePath, checks);
            // if we have a componentless route, we recurse but keep the same outlet map.
        }
        else {
            getChildRouteGuards(futureNode, currNode, parentContexts, futurePath, checks);
        }
        if (shouldRun) {
            /** @type {?} */
            var component = context && context.outlet && context.outlet.component || null;
            checks.canDeactivateChecks.push(new CanDeactivate(component, curr));
        }
    }
    else {
        if (curr) {
            deactivateRouteAndItsChildren(currNode, context, checks);
        }
        checks.canActivateChecks.push(new CanActivate(futurePath));
        // If we have a component, we need to go through an outlet.
        if (future.component) {
            getChildRouteGuards(futureNode, null, context ? context.children : null, futurePath, checks);
            // if we have a componentless route, we recurse but keep the same outlet map.
        }
        else {
            getChildRouteGuards(futureNode, null, parentContexts, futurePath, checks);
        }
    }
    return checks;
}
/**
 * @param {?} curr
 * @param {?} future
 * @param {?} mode
 * @return {?}
 */
function shouldRunGuardsAndResolvers(curr, future, mode) {
    switch (mode) {
        case 'always':
            return true;
        case 'paramsOrQueryParamsChange':
            return !equalParamsAndUrlSegments(curr, future) ||
                !shallowEqual(curr.queryParams, future.queryParams);
        case 'paramsChange':
        default:
            return !equalParamsAndUrlSegments(curr, future);
    }
}
/**
 * @param {?} route
 * @param {?} context
 * @param {?} checks
 * @return {?}
 */
function deactivateRouteAndItsChildren(route, context, checks) {
    /** @type {?} */
    var children = nodeChildrenAsMap(route);
    /** @type {?} */
    var r = route.value;
    forEach(children, function (node, childName) {
        if (!r.component) {
            deactivateRouteAndItsChildren(node, context, checks);
        }
        else if (context) {
            deactivateRouteAndItsChildren(node, context.children.getContext(childName), checks);
        }
        else {
            deactivateRouteAndItsChildren(node, null, checks);
        }
    });
    if (!r.component) {
        checks.canDeactivateChecks.push(new CanDeactivate(null, r));
    }
    else if (context && context.outlet && context.outlet.isActivated) {
        checks.canDeactivateChecks.push(new CanDeactivate(context.outlet.component, r));
    }
    else {
        checks.canDeactivateChecks.push(new CanDeactivate(null, r));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
var INITIAL_VALUE = Symbol('INITIAL_VALUE');
/**
 * @return {?}
 */
function prioritizedGuardValue() {
    return rxjs_operators.switchMap(function (obs) {
        return /** @type {?} */ (rxjs.combineLatest.apply(void 0, obs.map(function (o) { return o.pipe(rxjs_operators.take(1), rxjs_operators.startWith(/** @type {?} */ (INITIAL_VALUE))); })).pipe(rxjs_operators.scan(function (acc, list) {
            /** @type {?} */
            var isPending = false;
            return list.reduce(function (innerAcc, val, i) {
                if (innerAcc !== INITIAL_VALUE)
                    return innerAcc;
                // Toggle pending flag if any values haven't been set yet
                if (val === INITIAL_VALUE)
                    isPending = true;
                // Any other return values are only valid if we haven't yet hit a pending call.
                // This guarantees that in the case of a guard at the bottom of the tree that
                // returns a redirect, we will wait for the higher priority guard at the top to
                // finish before performing the redirect.
                if (!isPending) {
                    // Early return when we hit a `false` value as that should always cancel
                    // navigation
                    if (val === false)
                        return val;
                    if (i === list.length - 1 || isUrlTree(val)) {
                        return val;
                    }
                }
                return innerAcc;
            }, acc);
        }, INITIAL_VALUE), rxjs_operators.filter(function (item) { return item !== INITIAL_VALUE; }), rxjs_operators.map(function (item) { return isUrlTree(item) ? item : item === true; }), //
        //
        rxjs_operators.take(1)));
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} moduleInjector
 * @param {?=} forwardEvent
 * @return {?}
 */
function checkGuards(moduleInjector, forwardEvent) {
    return function (source) {
        return source.pipe(rxjs_operators.mergeMap(function (t) {
            var targetSnapshot = t.targetSnapshot, currentSnapshot = t.currentSnapshot, _a = t.guards, canActivateChecks = _a.canActivateChecks, canDeactivateChecks = _a.canDeactivateChecks;
            if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
                return rxjs.of(__assign({}, t, { guardsResult: true }));
            }
            return runCanDeactivateChecks(canDeactivateChecks, /** @type {?} */ ((targetSnapshot)), currentSnapshot, moduleInjector)
                .pipe(rxjs_operators.mergeMap(function (canDeactivate) {
                return canDeactivate && isBoolean(canDeactivate) ?
                    runCanActivateChecks(/** @type {?} */ ((targetSnapshot)), canActivateChecks, moduleInjector, forwardEvent) :
                    rxjs.of(canDeactivate);
            }), rxjs_operators.map(function (guardsResult) { return (__assign({}, t, { guardsResult: guardsResult })); }));
        }));
    };
}
/**
 * @param {?} checks
 * @param {?} futureRSS
 * @param {?} currRSS
 * @param {?} moduleInjector
 * @return {?}
 */
function runCanDeactivateChecks(checks, futureRSS, currRSS, moduleInjector) {
    return rxjs.from(checks).pipe(rxjs_operators.mergeMap(function (check) {
        return runCanDeactivate(check.component, check.route, currRSS, futureRSS, moduleInjector);
    }), rxjs_operators.first(function (result) { return result !== true; }, /** @type {?} */ (true)));
}
/**
 * @param {?} futureSnapshot
 * @param {?} checks
 * @param {?} moduleInjector
 * @param {?=} forwardEvent
 * @return {?}
 */
function runCanActivateChecks(futureSnapshot, checks, moduleInjector, forwardEvent) {
    return rxjs.from(checks).pipe(rxjs_operators.concatMap(function (check) {
        return rxjs.from([
            fireChildActivationStart(check.route.parent, forwardEvent),
            fireActivationStart(check.route, forwardEvent),
            runCanActivateChild(futureSnapshot, check.path, moduleInjector),
            runCanActivate(futureSnapshot, check.route, moduleInjector)
        ])
            .pipe(rxjs_operators.concatAll(), rxjs_operators.first(function (result) {
            return result !== true;
        }, /** @type {?} */ (true)));
    }), rxjs_operators.first(function (result) { return result !== true; }, /** @type {?} */ (true)));
}
/**
 * This should fire off `ActivationStart` events for each route being activated at this
 * level.
 * In other words, if you're activating `a` and `b` below, `path` will contain the
 * `ActivatedRouteSnapshot`s for both and we will fire `ActivationStart` for both. Always
 * return
 * `true` so checks continue to run.
 * @param {?} snapshot
 * @param {?=} forwardEvent
 * @return {?}
 */
function fireActivationStart(snapshot, forwardEvent) {
    if (snapshot !== null && forwardEvent) {
        forwardEvent(new ActivationStart(snapshot));
    }
    return rxjs.of(true);
}
/**
 * This should fire off `ChildActivationStart` events for each route being activated at this
 * level.
 * In other words, if you're activating `a` and `b` below, `path` will contain the
 * `ActivatedRouteSnapshot`s for both and we will fire `ChildActivationStart` for both. Always
 * return
 * `true` so checks continue to run.
 * @param {?} snapshot
 * @param {?=} forwardEvent
 * @return {?}
 */
function fireChildActivationStart(snapshot, forwardEvent) {
    if (snapshot !== null && forwardEvent) {
        forwardEvent(new ChildActivationStart(snapshot));
    }
    return rxjs.of(true);
}
/**
 * @param {?} futureRSS
 * @param {?} futureARS
 * @param {?} moduleInjector
 * @return {?}
 */
function runCanActivate(futureRSS, futureARS, moduleInjector) {
    /** @type {?} */
    var canActivate = futureARS.routeConfig ? futureARS.routeConfig.canActivate : null;
    if (!canActivate || canActivate.length === 0)
        return rxjs.of(true);
    /** @type {?} */
    var canActivateObservables = canActivate.map(function (c) {
        return rxjs.defer(function () {
            /** @type {?} */
            var guard = getToken(c, futureARS, moduleInjector);
            /** @type {?} */
            var observable;
            if (isCanActivate(guard)) {
                observable = wrapIntoObservable(guard.canActivate(futureARS, futureRSS));
            }
            else if (isFunction(guard)) {
                observable = wrapIntoObservable(guard(futureARS, futureRSS));
            }
            else {
                throw new Error('Invalid CanActivate guard');
            }
            return observable.pipe(rxjs_operators.first());
        });
    });
    return rxjs.of(canActivateObservables).pipe(prioritizedGuardValue());
}
/**
 * @param {?} futureRSS
 * @param {?} path
 * @param {?} moduleInjector
 * @return {?}
 */
function runCanActivateChild(futureRSS, path, moduleInjector) {
    /** @type {?} */
    var futureARS = path[path.length - 1];
    /** @type {?} */
    var canActivateChildGuards = path.slice(0, path.length - 1)
        .reverse()
        .map(function (p) { return getCanActivateChild(p); })
        .filter(function (_) { return _ !== null; });
    /** @type {?} */
    var canActivateChildGuardsMapped = canActivateChildGuards.map(function (d) {
        return rxjs.defer(function () {
            /** @type {?} */
            var guardsMapped = d.guards.map(function (c) {
                /** @type {?} */
                var guard = getToken(c, d.node, moduleInjector);
                /** @type {?} */
                var observable;
                if (isCanActivateChild(guard)) {
                    observable = wrapIntoObservable(guard.canActivateChild(futureARS, futureRSS));
                }
                else if (isFunction(guard)) {
                    observable = wrapIntoObservable(guard(futureARS, futureRSS));
                }
                else {
                    throw new Error('Invalid CanActivateChild guard');
                }
                return observable.pipe(rxjs_operators.first());
            });
            return rxjs.of(guardsMapped).pipe(prioritizedGuardValue());
        });
    });
    return rxjs.of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
}
/**
 * @param {?} component
 * @param {?} currARS
 * @param {?} currRSS
 * @param {?} futureRSS
 * @param {?} moduleInjector
 * @return {?}
 */
function runCanDeactivate(component, currARS, currRSS, futureRSS, moduleInjector) {
    /** @type {?} */
    var canDeactivate = currARS && currARS.routeConfig ? currARS.routeConfig.canDeactivate : null;
    if (!canDeactivate || canDeactivate.length === 0)
        return rxjs.of(true);
    /** @type {?} */
    var canDeactivateObservables = canDeactivate.map(function (c) {
        /** @type {?} */
        var guard = getToken(c, currARS, moduleInjector);
        /** @type {?} */
        var observable;
        if (isCanDeactivate(guard)) {
            observable =
                wrapIntoObservable(guard.canDeactivate(/** @type {?} */ ((component)), currARS, currRSS, futureRSS));
        }
        else if (isFunction(guard)) {
            observable = wrapIntoObservable(guard(component, currARS, currRSS, futureRSS));
        }
        else {
            throw new Error('Invalid CanDeactivate guard');
        }
        return observable.pipe(rxjs_operators.first());
    });
    return rxjs.of(canDeactivateObservables).pipe(prioritizedGuardValue());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var NoMatch$1 = /** @class */ (function () {
    function NoMatch() {
    }
    return NoMatch;
}());
/**
 * @param {?} rootComponentType
 * @param {?} config
 * @param {?} urlTree
 * @param {?} url
 * @param {?=} paramsInheritanceStrategy
 * @param {?=} relativeLinkResolution
 * @return {?}
 */
function recognize$1(rootComponentType, config, urlTree, url, paramsInheritanceStrategy, relativeLinkResolution) {
    if (paramsInheritanceStrategy === void 0) { paramsInheritanceStrategy = 'emptyOnly'; }
    if (relativeLinkResolution === void 0) { relativeLinkResolution = 'legacy'; }
    return new Recognizer(rootComponentType, config, urlTree, url, paramsInheritanceStrategy, relativeLinkResolution)
        .recognize();
}
var Recognizer = /** @class */ (function () {
    function Recognizer(rootComponentType, config, urlTree, url, paramsInheritanceStrategy, relativeLinkResolution) {
        this.rootComponentType = rootComponentType;
        this.config = config;
        this.urlTree = urlTree;
        this.url = url;
        this.paramsInheritanceStrategy = paramsInheritanceStrategy;
        this.relativeLinkResolution = relativeLinkResolution;
    }
    /**
     * @return {?}
     */
    Recognizer.prototype.recognize = /**
     * @return {?}
     */
    function () {
        try {
            /** @type {?} */
            var rootSegmentGroup = split$1(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup;
            /** @type {?} */
            var children = this.processSegmentGroup(this.config, rootSegmentGroup, PRIMARY_OUTLET);
            /** @type {?} */
            var root = new ActivatedRouteSnapshot([], Object.freeze({}), Object.freeze(__assign({}, this.urlTree.queryParams)), /** @type {?} */ ((this.urlTree.fragment)), {}, PRIMARY_OUTLET, this.rootComponentType, null, this.urlTree.root, -1, {});
            /** @type {?} */
            var rootNode = new TreeNode(root, children);
            /** @type {?} */
            var routeState = new RouterStateSnapshot(this.url, rootNode);
            this.inheritParamsAndData(routeState._root);
            return rxjs.of(routeState);
        }
        catch (e) {
            return new rxjs.Observable(function (obs) { return obs.error(e); });
        }
    };
    /**
     * @param {?} routeNode
     * @return {?}
     */
    Recognizer.prototype.inheritParamsAndData = /**
     * @param {?} routeNode
     * @return {?}
     */
    function (routeNode) {
        var _this = this;
        /** @type {?} */
        var route = routeNode.value;
        /** @type {?} */
        var i = inheritedParamsDataResolve(route, this.paramsInheritanceStrategy);
        route.params = Object.freeze(i.params);
        route.data = Object.freeze(i.data);
        routeNode.children.forEach(function (n) { return _this.inheritParamsAndData(n); });
    };
    /**
     * @param {?} config
     * @param {?} segmentGroup
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.processSegmentGroup = /**
     * @param {?} config
     * @param {?} segmentGroup
     * @param {?} outlet
     * @return {?}
     */
    function (config, segmentGroup, outlet) {
        if (segmentGroup.segments.length === 0 && segmentGroup.hasChildren()) {
            return this.processChildren(config, segmentGroup);
        }
        return this.processSegment(config, segmentGroup, segmentGroup.segments, outlet);
    };
    /**
     * @param {?} config
     * @param {?} segmentGroup
     * @return {?}
     */
    Recognizer.prototype.processChildren = /**
     * @param {?} config
     * @param {?} segmentGroup
     * @return {?}
     */
    function (config, segmentGroup) {
        var _this = this;
        /** @type {?} */
        var children = mapChildrenIntoArray(segmentGroup, function (child, childOutlet) { return _this.processSegmentGroup(config, child, childOutlet); });
        checkOutletNameUniqueness(children);
        sortActivatedRouteSnapshots(children);
        return children;
    };
    /**
     * @param {?} config
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.processSegment = /**
     * @param {?} config
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    function (config, segmentGroup, segments, outlet) {
        for (var _i = 0, config_1 = config; _i < config_1.length; _i++) {
            var r = config_1[_i];
            try {
                return this.processSegmentAgainstRoute(r, segmentGroup, segments, outlet);
            }
            catch (e) {
                if (!(e instanceof NoMatch$1))
                    throw e;
            }
        }
        if (this.noLeftoversInUrl(segmentGroup, segments, outlet)) {
            return [];
        }
        throw new NoMatch$1();
    };
    /**
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.noLeftoversInUrl = /**
     * @param {?} segmentGroup
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    function (segmentGroup, segments, outlet) {
        return segments.length === 0 && !segmentGroup.children[outlet];
    };
    /**
     * @param {?} route
     * @param {?} rawSegment
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    Recognizer.prototype.processSegmentAgainstRoute = /**
     * @param {?} route
     * @param {?} rawSegment
     * @param {?} segments
     * @param {?} outlet
     * @return {?}
     */
    function (route, rawSegment, segments, outlet) {
        if (route.redirectTo)
            throw new NoMatch$1();
        if ((route.outlet || PRIMARY_OUTLET) !== outlet)
            throw new NoMatch$1();
        /** @type {?} */
        var snapshot;
        /** @type {?} */
        var consumedSegments = [];
        /** @type {?} */
        var rawSlicedSegments = [];
        if (route.path === '**') {
            /** @type {?} */
            var params = segments.length > 0 ? /** @type {?} */ ((last$1(segments))).parameters : {};
            snapshot = new ActivatedRouteSnapshot(segments, params, Object.freeze(__assign({}, this.urlTree.queryParams)), /** @type {?} */ ((this.urlTree.fragment)), getData(route), outlet, /** @type {?} */ ((route.component)), route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + segments.length, getResolve(route));
        }
        else {
            /** @type {?} */
            var result = match$1(rawSegment, route, segments);
            consumedSegments = result.consumedSegments;
            rawSlicedSegments = segments.slice(result.lastChild);
            snapshot = new ActivatedRouteSnapshot(consumedSegments, result.parameters, Object.freeze(__assign({}, this.urlTree.queryParams)), /** @type {?} */ ((this.urlTree.fragment)), getData(route), outlet, /** @type {?} */ ((route.component)), route, getSourceSegmentGroup(rawSegment), getPathIndexShift(rawSegment) + consumedSegments.length, getResolve(route));
        }
        /** @type {?} */
        var childConfig = getChildConfig(route);
        var _a = split$1(rawSegment, consumedSegments, rawSlicedSegments, childConfig, this.relativeLinkResolution), segmentGroup = _a.segmentGroup, slicedSegments = _a.slicedSegments;
        if (slicedSegments.length === 0 && segmentGroup.hasChildren()) {
            /** @type {?} */
            var children_1 = this.processChildren(childConfig, segmentGroup);
            return [new TreeNode(snapshot, children_1)];
        }
        if (childConfig.length === 0 && slicedSegments.length === 0) {
            return [new TreeNode(snapshot, [])];
        }
        /** @type {?} */
        var children = this.processSegment(childConfig, segmentGroup, slicedSegments, PRIMARY_OUTLET);
        return [new TreeNode(snapshot, children)];
    };
    return Recognizer;
}());
/**
 * @param {?} nodes
 * @return {?}
 */
function sortActivatedRouteSnapshots(nodes) {
    nodes.sort(function (a, b) {
        if (a.value.outlet === PRIMARY_OUTLET)
            return -1;
        if (b.value.outlet === PRIMARY_OUTLET)
            return 1;
        return a.value.outlet.localeCompare(b.value.outlet);
    });
}
/**
 * @param {?} route
 * @return {?}
 */
function getChildConfig(route) {
    if (route.children) {
        return route.children;
    }
    if (route.loadChildren) {
        return /** @type {?} */ ((route._loadedConfig)).routes;
    }
    return [];
}
/**
 * @param {?} segmentGroup
 * @param {?} route
 * @param {?} segments
 * @return {?}
 */
function match$1(segmentGroup, route, segments) {
    if (route.path === '') {
        if (route.pathMatch === 'full' && (segmentGroup.hasChildren() || segments.length > 0)) {
            throw new NoMatch$1();
        }
        return { consumedSegments: [], lastChild: 0, parameters: {} };
    }
    /** @type {?} */
    var matcher = route.matcher || defaultUrlMatcher;
    /** @type {?} */
    var res = matcher(segments, segmentGroup, route);
    if (!res)
        throw new NoMatch$1();
    /** @type {?} */
    var posParams = {};
    forEach(/** @type {?} */ ((res.posParams)), function (v, k) { posParams[k] = v.path; });
    /** @type {?} */
    var parameters = res.consumed.length > 0 ? __assign({}, posParams, res.consumed[res.consumed.length - 1].parameters) :
        posParams;
    return { consumedSegments: res.consumed, lastChild: res.consumed.length, parameters: parameters };
}
/**
 * @param {?} nodes
 * @return {?}
 */
function checkOutletNameUniqueness(nodes) {
    /** @type {?} */
    var names = {};
    nodes.forEach(function (n) {
        /** @type {?} */
        var routeWithSameOutletName = names[n.value.outlet];
        if (routeWithSameOutletName) {
            /** @type {?} */
            var p = routeWithSameOutletName.url.map(function (s) { return s.toString(); }).join('/');
            /** @type {?} */
            var c = n.value.url.map(function (s) { return s.toString(); }).join('/');
            throw new Error("Two segments cannot have the same outlet name: '" + p + "' and '" + c + "'.");
        }
        names[n.value.outlet] = n.value;
    });
}
/**
 * @param {?} segmentGroup
 * @return {?}
 */
function getSourceSegmentGroup(segmentGroup) {
    /** @type {?} */
    var s = segmentGroup;
    while (s._sourceSegment) {
        s = s._sourceSegment;
    }
    return s;
}
/**
 * @param {?} segmentGroup
 * @return {?}
 */
function getPathIndexShift(segmentGroup) {
    /** @type {?} */
    var s = segmentGroup;
    /** @type {?} */
    var res = (s._segmentIndexShift ? s._segmentIndexShift : 0);
    while (s._sourceSegment) {
        s = s._sourceSegment;
        res += (s._segmentIndexShift ? s._segmentIndexShift : 0);
    }
    return res - 1;
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} slicedSegments
 * @param {?} config
 * @param {?} relativeLinkResolution
 * @return {?}
 */
function split$1(segmentGroup, consumedSegments, slicedSegments, config, relativeLinkResolution) {
    if (slicedSegments.length > 0 &&
        containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, config)) {
        /** @type {?} */
        var s_1 = new UrlSegmentGroup(consumedSegments, createChildrenForEmptyPaths(segmentGroup, consumedSegments, config, new UrlSegmentGroup(slicedSegments, segmentGroup.children)));
        s_1._sourceSegment = segmentGroup;
        s_1._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s_1, slicedSegments: [] };
    }
    if (slicedSegments.length === 0 &&
        containsEmptyPathMatches(segmentGroup, slicedSegments, config)) {
        /** @type {?} */
        var s_2 = new UrlSegmentGroup(segmentGroup.segments, addEmptyPathsToChildrenIfNeeded(segmentGroup, consumedSegments, slicedSegments, config, segmentGroup.children, relativeLinkResolution));
        s_2._sourceSegment = segmentGroup;
        s_2._segmentIndexShift = consumedSegments.length;
        return { segmentGroup: s_2, slicedSegments: slicedSegments };
    }
    /** @type {?} */
    var s = new UrlSegmentGroup(segmentGroup.segments, segmentGroup.children);
    s._sourceSegment = segmentGroup;
    s._segmentIndexShift = consumedSegments.length;
    return { segmentGroup: s, slicedSegments: slicedSegments };
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} slicedSegments
 * @param {?} routes
 * @param {?} children
 * @param {?} relativeLinkResolution
 * @return {?}
 */
function addEmptyPathsToChildrenIfNeeded(segmentGroup, consumedSegments, slicedSegments, routes, children, relativeLinkResolution) {
    /** @type {?} */
    var res = {};
    for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
        var r = routes_1[_i];
        if (emptyPathMatch(segmentGroup, slicedSegments, r) && !children[getOutlet$1(r)]) {
            /** @type {?} */
            var s = new UrlSegmentGroup([], {});
            s._sourceSegment = segmentGroup;
            if (relativeLinkResolution === 'legacy') {
                s._segmentIndexShift = segmentGroup.segments.length;
            }
            else {
                s._segmentIndexShift = consumedSegments.length;
            }
            res[getOutlet$1(r)] = s;
        }
    }
    return __assign({}, children, res);
}
/**
 * @param {?} segmentGroup
 * @param {?} consumedSegments
 * @param {?} routes
 * @param {?} primarySegment
 * @return {?}
 */
function createChildrenForEmptyPaths(segmentGroup, consumedSegments, routes, primarySegment) {
    /** @type {?} */
    var res = {};
    res[PRIMARY_OUTLET] = primarySegment;
    primarySegment._sourceSegment = segmentGroup;
    primarySegment._segmentIndexShift = consumedSegments.length;
    for (var _i = 0, routes_2 = routes; _i < routes_2.length; _i++) {
        var r = routes_2[_i];
        if (r.path === '' && getOutlet$1(r) !== PRIMARY_OUTLET) {
            /** @type {?} */
            var s = new UrlSegmentGroup([], {});
            s._sourceSegment = segmentGroup;
            s._segmentIndexShift = consumedSegments.length;
            res[getOutlet$1(r)] = s;
        }
    }
    return res;
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathMatchesWithNamedOutlets(segmentGroup, slicedSegments, routes) {
    return routes.some(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r) && getOutlet$1(r) !== PRIMARY_OUTLET; });
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} routes
 * @return {?}
 */
function containsEmptyPathMatches(segmentGroup, slicedSegments, routes) {
    return routes.some(function (r) { return emptyPathMatch(segmentGroup, slicedSegments, r); });
}
/**
 * @param {?} segmentGroup
 * @param {?} slicedSegments
 * @param {?} r
 * @return {?}
 */
function emptyPathMatch(segmentGroup, slicedSegments, r) {
    if ((segmentGroup.hasChildren() || slicedSegments.length > 0) && r.pathMatch === 'full') {
        return false;
    }
    return r.path === '' && r.redirectTo === undefined;
}
/**
 * @param {?} route
 * @return {?}
 */
function getOutlet$1(route) {
    return route.outlet || PRIMARY_OUTLET;
}
/**
 * @param {?} route
 * @return {?}
 */
function getData(route) {
    return route.data || {};
}
/**
 * @param {?} route
 * @return {?}
 */
function getResolve(route) {
    return route.resolve || {};
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} rootComponentType
 * @param {?} config
 * @param {?} serializer
 * @param {?} paramsInheritanceStrategy
 * @param {?} relativeLinkResolution
 * @return {?}
 */
function recognize$$1(rootComponentType, config, serializer, paramsInheritanceStrategy, relativeLinkResolution) {
    return function (source) {
        return source.pipe(rxjs_operators.mergeMap(function (t) { return recognize$1(rootComponentType, config, t.urlAfterRedirects, serializer(t.urlAfterRedirects), paramsInheritanceStrategy, relativeLinkResolution)
            .pipe(rxjs_operators.map(function (targetSnapshot) { return (__assign({}, t, { targetSnapshot: targetSnapshot })); })); }));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} paramsInheritanceStrategy
 * @param {?} moduleInjector
 * @return {?}
 */
function resolveData(paramsInheritanceStrategy, moduleInjector) {
    return function (source) {
        return source.pipe(rxjs_operators.mergeMap(function (t) {
            var targetSnapshot = t.targetSnapshot, canActivateChecks = t.guards.canActivateChecks;
            if (!canActivateChecks.length) {
                return rxjs.of(t);
            }
            return rxjs.from(canActivateChecks)
                .pipe(rxjs_operators.concatMap(function (check) { return runResolve(check.route, /** @type {?} */ ((targetSnapshot)), paramsInheritanceStrategy, moduleInjector); }), rxjs_operators.reduce(function (_, __) { return _; }), rxjs_operators.map(function (_) { return t; }));
        }));
    };
}
/**
 * @param {?} futureARS
 * @param {?} futureRSS
 * @param {?} paramsInheritanceStrategy
 * @param {?} moduleInjector
 * @return {?}
 */
function runResolve(futureARS, futureRSS, paramsInheritanceStrategy, moduleInjector) {
    /** @type {?} */
    var resolve = futureARS._resolve;
    return resolveNode(resolve, futureARS, futureRSS, moduleInjector)
        .pipe(rxjs_operators.map(function (resolvedData) {
        futureARS._resolvedData = resolvedData;
        futureARS.data = __assign({}, futureARS.data, inheritedParamsDataResolve(futureARS, paramsInheritanceStrategy).resolve);
        return null;
    }));
}
/**
 * @param {?} resolve
 * @param {?} futureARS
 * @param {?} futureRSS
 * @param {?} moduleInjector
 * @return {?}
 */
function resolveNode(resolve, futureARS, futureRSS, moduleInjector) {
    /** @type {?} */
    var keys = Object.keys(resolve);
    if (keys.length === 0) {
        return rxjs.of({});
    }
    if (keys.length === 1) {
        /** @type {?} */
        var key_1 = keys[0];
        return getResolver(resolve[key_1], futureARS, futureRSS, moduleInjector)
            .pipe(rxjs_operators.map(function (value) {
            var _a;
            return _a = {}, _a[key_1] = value, _a;
        }));
    }
    /** @type {?} */
    var data = {};
    /** @type {?} */
    var runningResolvers$ = rxjs.from(keys).pipe(rxjs_operators.mergeMap(function (key) {
        return getResolver(resolve[key], futureARS, futureRSS, moduleInjector)
            .pipe(rxjs_operators.map(function (value) {
            data[key] = value;
            return value;
        }));
    }));
    return runningResolvers$.pipe(rxjs_operators.last(), rxjs_operators.map(function () { return data; }));
}
/**
 * @param {?} injectionToken
 * @param {?} futureARS
 * @param {?} futureRSS
 * @param {?} moduleInjector
 * @return {?}
 */
function getResolver(injectionToken, futureARS, futureRSS, moduleInjector) {
    /** @type {?} */
    var resolver = getToken(injectionToken, futureARS, moduleInjector);
    return resolver.resolve ? wrapIntoObservable(resolver.resolve(futureARS, futureRSS)) :
        wrapIntoObservable(resolver(futureARS, futureRSS));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Perform a side effect through a switchMap for every emission on the source Observable,
 * but return an Observable that is identical to the source. It's essentially the same as
 * the `tap` operator, but if the side effectful `next` function returns an ObservableInput,
 * it will wait before continuing with the original value.
 * @template T
 * @param {?} next
 * @return {?}
 */
function switchTap(next) {
    return function (source) {
        return source.pipe(rxjs_operators.switchMap(function (v) {
            /** @type {?} */
            var nextResult = next(v);
            if (nextResult) {
                return rxjs.from(nextResult).pipe(rxjs_operators.map(function () { return v; }));
            }
            return rxjs.from([v]);
        }));
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @typedef {?} */
/**
 * \@description
 *
 * Provides a way to customize when activated routes get reused.
 *
 * \@publicApi
 * @abstract
 */
var RouteReuseStrategy = /** @class */ (function () {
    function RouteReuseStrategy() {
    }
    return RouteReuseStrategy;
}());
/**
 * Does not detach any subtrees. Reuses routes as long as their route config is the same.
 */
var DefaultRouteReuseStrategy = /** @class */ (function () {
    function DefaultRouteReuseStrategy() {
    }
    /**
     * @param {?} route
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.shouldDetach = /**
     * @param {?} route
     * @return {?}
     */
    function (route) { return false; };
    /**
     * @param {?} route
     * @param {?} detachedTree
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.store = /**
     * @param {?} route
     * @param {?} detachedTree
     * @return {?}
     */
    function (route, detachedTree) { };
    /**
     * @param {?} route
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.shouldAttach = /**
     * @param {?} route
     * @return {?}
     */
    function (route) { return false; };
    /**
     * @param {?} route
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.retrieve = /**
     * @param {?} route
     * @return {?}
     */
    function (route) { return null; };
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    DefaultRouteReuseStrategy.prototype.shouldReuseRoute = /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    function (future, curr) {
        return future.routeConfig === curr.routeConfig;
    };
    return DefaultRouteReuseStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** *
 * \@docsNotRequired
 * \@publicApi
  @type {?} */
var ROUTES = new _angular_core.InjectionToken('ROUTES');
var RouterConfigLoader = /** @class */ (function () {
    function RouterConfigLoader(loader, compiler, onLoadStartListener, onLoadEndListener) {
        this.loader = loader;
        this.compiler = compiler;
        this.onLoadStartListener = onLoadStartListener;
        this.onLoadEndListener = onLoadEndListener;
    }
    /**
     * @param {?} parentInjector
     * @param {?} route
     * @return {?}
     */
    RouterConfigLoader.prototype.load = /**
     * @param {?} parentInjector
     * @param {?} route
     * @return {?}
     */
    function (parentInjector, route) {
        var _this = this;
        if (this.onLoadStartListener) {
            this.onLoadStartListener(route);
        }
        /** @type {?} */
        var moduleFactory$ = this.loadModuleFactory(/** @type {?} */ ((route.loadChildren)));
        return moduleFactory$.pipe(rxjs_operators.map(function (factory) {
            if (_this.onLoadEndListener) {
                _this.onLoadEndListener(route);
            }
            /** @type {?} */
            var module = factory.create(parentInjector);
            return new LoadedRouterConfig(flatten(module.injector.get(ROUTES)).map(standardizeConfig), module);
        }));
    };
    /**
     * @param {?} loadChildren
     * @return {?}
     */
    RouterConfigLoader.prototype.loadModuleFactory = /**
     * @param {?} loadChildren
     * @return {?}
     */
    function (loadChildren) {
        var _this = this;
        if (typeof loadChildren === 'string') {
            return rxjs.from(this.loader.load(loadChildren));
        }
        else {
            return wrapIntoObservable(loadChildren()).pipe(rxjs_operators.mergeMap(function (t) {
                if (t instanceof _angular_core.NgModuleFactory) {
                    return rxjs.of(t);
                }
                else {
                    return rxjs.from(_this.compiler.compileModuleAsync(t));
                }
            }));
        }
    };
    return RouterConfigLoader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@description
 *
 * Provides a way to migrate AngularJS applications to Angular.
 *
 * \@publicApi
 * @abstract
 */
var UrlHandlingStrategy = /** @class */ (function () {
    function UrlHandlingStrategy() {
    }
    return UrlHandlingStrategy;
}());
/**
 * \@publicApi
 */
var DefaultUrlHandlingStrategy = /** @class */ (function () {
    function DefaultUrlHandlingStrategy() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    DefaultUrlHandlingStrategy.prototype.shouldProcessUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) { return true; };
    /**
     * @param {?} url
     * @return {?}
     */
    DefaultUrlHandlingStrategy.prototype.extract = /**
     * @param {?} url
     * @return {?}
     */
    function (url) { return url; };
    /**
     * @param {?} newUrlPart
     * @param {?} wholeUrl
     * @return {?}
     */
    DefaultUrlHandlingStrategy.prototype.merge = /**
     * @param {?} newUrlPart
     * @param {?} wholeUrl
     * @return {?}
     */
    function (newUrlPart, wholeUrl) { return newUrlPart; };
    return DefaultUrlHandlingStrategy;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@description
 *
 * Represents the extra options used during navigation.
 *
 * \@publicApi
 * @record
 */

/**
 * @param {?} error
 * @return {?}
 */
function defaultErrorHandler(error) {
    throw error;
}
/**
 * @param {?} error
 * @param {?} urlSerializer
 * @param {?} url
 * @return {?}
 */
function defaultMalformedUriErrorHandler(error, urlSerializer, url) {
    return urlSerializer.parse('/');
}
/**
 * \@internal
 * @param {?} snapshot
 * @param {?} runExtras
 * @return {?}
 */
function defaultRouterHook(snapshot, runExtras) {
    return /** @type {?} */ (rxjs.of(null));
}
/**
 * \@description
 *
 * Provides the navigation and url manipulation capabilities.
 *
 * See `Routes` for more details and examples.
 *
 * \@ngModule RouterModule
 *
 * \@publicApi
 */
var Router = /** @class */ (function () {
    /**
     * Creates the router service.
     */
    // TODO: vsavkin make internal after the final is out.
    function Router(rootComponentType, urlSerializer, rootContexts, location, injector, loader, compiler, config) {
        var _this = this;
        this.rootComponentType = rootComponentType;
        this.urlSerializer = urlSerializer;
        this.rootContexts = rootContexts;
        this.location = location;
        this.config = config;
        this.navigationId = 0;
        this.isNgZoneEnabled = false;
        this.events = new rxjs.Subject();
        /**
         * Error handler that is invoked when a navigation errors.
         *
         * See `ErrorHandler` for more information.
         */
        this.errorHandler = defaultErrorHandler;
        /**
         * Malformed uri error handler is invoked when `Router.parseUrl(url)` throws an
         * error due to containing an invalid character. The most common case would be a `%` sign
         * that's not encoded and is not part of a percent encoded sequence.
         */
        this.malformedUriErrorHandler = defaultMalformedUriErrorHandler;
        /**
         * Indicates if at least one navigation happened.
         */
        this.navigated = false;
        this.lastSuccessfulId = -1;
        /**
         * Used by RouterModule. This allows us to
         * pause the navigation either before preactivation or after it.
         * \@internal
         */
        this.hooks = {
            beforePreactivation: defaultRouterHook,
            afterPreactivation: defaultRouterHook
        };
        /**
         * Extracts and merges URLs. Used for AngularJS to Angular migrations.
         */
        this.urlHandlingStrategy = new DefaultUrlHandlingStrategy();
        this.routeReuseStrategy = new DefaultRouteReuseStrategy();
        /**
         * Define what the router should do if it receives a navigation request to the current URL.
         * By default, the router will ignore this navigation. However, this prevents features such
         * as a "refresh" button. Use this option to configure the behavior when navigating to the
         * current URL. Default is 'ignore'.
         */
        this.onSameUrlNavigation = 'ignore';
        /**
         * Defines how the router merges params, data and resolved data from parent to child
         * routes. Available options are:
         *
         * - `'emptyOnly'`, the default, only inherits parent params for path-less or component-less
         *   routes.
         * - `'always'`, enables unconditional inheritance of parent params.
         */
        this.paramsInheritanceStrategy = 'emptyOnly';
        /**
         * Defines when the router updates the browser URL. The default behavior is to update after
         * successful navigation. However, some applications may prefer a mode where the URL gets
         * updated at the beginning of navigation. The most common use case would be updating the
         * URL early so if navigation fails, you can show an error message with the URL that failed.
         * Available options are:
         *
         * - `'deferred'`, the default, updates the browser URL after navigation has finished.
         * - `'eager'`, updates browser URL at the beginning of navigation.
         */
        this.urlUpdateStrategy = 'deferred';
        /**
         * See {\@link RouterModule} for more information.
         */
        this.relativeLinkResolution = 'legacy';
        /** @type {?} */
        var onLoadStart = function (r) { return _this.triggerEvent(new RouteConfigLoadStart(r)); };
        /** @type {?} */
        var onLoadEnd = function (r) { return _this.triggerEvent(new RouteConfigLoadEnd(r)); };
        this.ngModule = injector.get(_angular_core.NgModuleRef);
        this.console = injector.get(_angular_core.ɵConsole);
        /** @type {?} */
        var ngZone = injector.get(_angular_core.NgZone);
        this.isNgZoneEnabled = ngZone instanceof _angular_core.NgZone;
        this.resetConfig(config);
        this.currentUrlTree = createEmptyUrlTree();
        this.rawUrlTree = this.currentUrlTree;
        this.configLoader = new RouterConfigLoader(loader, compiler, onLoadStart, onLoadEnd);
        this.routerState = createEmptyState(this.currentUrlTree, this.rootComponentType);
        this.transitions = new rxjs.BehaviorSubject({
            id: 0,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
            urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
            rawUrl: this.currentUrlTree,
            extras: {},
            resolve: null,
            reject: null,
            promise: Promise.resolve(true),
            source: 'imperative',
            state: null,
            currentSnapshot: this.routerState.snapshot,
            targetSnapshot: null,
            currentRouterState: this.routerState,
            targetRouterState: null,
            guards: { canActivateChecks: [], canDeactivateChecks: [] },
            guardsResult: null,
        });
        this.navigations = this.setupNavigations(this.transitions);
        this.processNavigations();
    }
    /**
     * @param {?} transitions
     * @return {?}
     */
    Router.prototype.setupNavigations = /**
     * @param {?} transitions
     * @return {?}
     */
    function (transitions) {
        var _this = this;
        /** @type {?} */
        var eventsSubject = (/** @type {?} */ (this.events));
        return /** @type {?} */ ((transitions.pipe(rxjs_operators.filter(function (t) { return t.id !== 0; }), 
        // Extract URL
        rxjs_operators.map(function (t) { return (/** @type {?} */ (__assign({}, t, { extractedUrl: _this.urlHandlingStrategy.extract(t.rawUrl) }))); }), 
        // Using switchMap so we cancel executing navigations when a new one comes in
        rxjs_operators.switchMap(function (t) {
            /** @type {?} */
            var completed = false;
            /** @type {?} */
            var errored = false;
            return rxjs.of(t).pipe(rxjs_operators.switchMap(function (t) {
                /** @type {?} */
                var urlTransition = !_this.navigated || t.extractedUrl.toString() !== _this.currentUrlTree.toString();
                /** @type {?} */
                var processCurrentUrl = (_this.onSameUrlNavigation === 'reload' ? true : urlTransition) &&
                    _this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl);
                if (processCurrentUrl) {
                    return rxjs.of(t).pipe(
                    // Update URL if in `eager` update mode
                    rxjs_operators.tap(function (t) { return _this.urlUpdateStrategy === 'eager' && !t.extras.skipLocationChange &&
                        _this.setBrowserUrl(t.rawUrl, !!t.extras.replaceUrl, t.id); }), 
                    // Fire NavigationStart event
                    rxjs_operators.switchMap(function (t) {
                        /** @type {?} */
                        var transition = _this.transitions.getValue();
                        eventsSubject.next(new NavigationStart(t.id, _this.serializeUrl(t.extractedUrl), t.source, t.state));
                        if (transition !== _this.transitions.getValue()) {
                            return rxjs.EMPTY;
                        }
                        return [t];
                    }), 
                    // This delay is required to match old behavior that forced navigation to
                    // always be async
                    rxjs_operators.switchMap(function (t) { return Promise.resolve(t); }), 
                    // ApplyRedirects
                    applyRedirects$$1(_this.ngModule.injector, _this.configLoader, _this.urlSerializer, _this.config), 
                    // Recognize
                    recognize$$1(_this.rootComponentType, _this.config, function (url) { return _this.serializeUrl(url); }, _this.paramsInheritanceStrategy, _this.relativeLinkResolution), 
                    // Fire RoutesRecognized
                    rxjs_operators.tap(function (t) {
                        /** @type {?} */
                        var routesRecognized = new RoutesRecognized(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), /** @type {?} */ ((t.targetSnapshot)));
                        eventsSubject.next(routesRecognized);
                    }));
                }
                else {
                    /** @type {?} */
                    var processPreviousUrl = urlTransition && _this.rawUrlTree &&
                        _this.urlHandlingStrategy.shouldProcessUrl(_this.rawUrlTree);
                    /* When the current URL shouldn't be processed, but the previous one was, we
                                       * handle this "error condition" by navigating to the previously successful URL,
                                       * but leaving the URL intact.*/
                    if (processPreviousUrl) {
                        var id = t.id, extractedUrl = t.extractedUrl, source = t.source, state = t.state, extras = t.extras;
                        /** @type {?} */
                        var navStart = new NavigationStart(id, _this.serializeUrl(extractedUrl), source, state);
                        eventsSubject.next(navStart);
                        /** @type {?} */
                        var targetSnapshot = createEmptyState(extractedUrl, _this.rootComponentType).snapshot;
                        return rxjs.of(__assign({}, t, { targetSnapshot: targetSnapshot, urlAfterRedirects: extractedUrl, extras: __assign({}, extras, { skipLocationChange: false, replaceUrl: false }) }));
                    }
                    else {
                        /* When neither the current or previous URL can be processed, do nothing other
                                             * than update router's internal reference to the current "settled" URL. This
                                             * way the next navigation will be coming from the current URL in the browser.
                                             */
                        _this.rawUrlTree = t.rawUrl;
                        t.resolve(null);
                        return rxjs.EMPTY;
                    }
                }
            }), 
            // Before Preactivation
            switchTap(function (t) {
                var targetSnapshot = t.targetSnapshot, navigationId = t.id, appliedUrlTree = t.extractedUrl, rawUrlTree = t.rawUrl, _a = t.extras, skipLocationChange = _a.skipLocationChange, replaceUrl = _a.replaceUrl;
                return _this.hooks.beforePreactivation(/** @type {?} */ ((targetSnapshot)), {
                    navigationId: navigationId,
                    appliedUrlTree: appliedUrlTree,
                    rawUrlTree: rawUrlTree,
                    skipLocationChange: !!skipLocationChange,
                    replaceUrl: !!replaceUrl,
                });
            }), 
            // --- GUARDS ---
            rxjs_operators.tap(function (t) {
                /** @type {?} */
                var guardsStart = new GuardsCheckStart(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), /** @type {?} */ ((t.targetSnapshot)));
                _this.triggerEvent(guardsStart);
            }), rxjs_operators.map(function (t) { return (__assign({}, t, { guards: getAllRouteGuards(/** @type {?} */ ((t.targetSnapshot)), t.currentSnapshot, _this.rootContexts) })); }), checkGuards(_this.ngModule.injector, function (evt) { return _this.triggerEvent(evt); }), rxjs_operators.tap(function (t) {
                if (isUrlTree(t.guardsResult)) {
                    /** @type {?} */
                    var error = navigationCancelingError("Redirecting to \"" + _this.serializeUrl(t.guardsResult) + "\"");
                    error.url = t.guardsResult;
                    throw error;
                }
            }), rxjs_operators.tap(function (t) {
                /** @type {?} */
                var guardsEnd = new GuardsCheckEnd(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), /** @type {?} */ ((t.targetSnapshot)), !!t.guardsResult);
                _this.triggerEvent(guardsEnd);
            }), rxjs_operators.filter(function (t) {
                if (!t.guardsResult) {
                    _this.resetUrlToCurrentUrlTree();
                    /** @type {?} */
                    var navCancel = new NavigationCancel(t.id, _this.serializeUrl(t.extractedUrl), '');
                    eventsSubject.next(navCancel);
                    t.resolve(false);
                    return false;
                }
                return true;
            }), 
            // --- RESOLVE ---
            switchTap(function (t) {
                if (t.guards.canActivateChecks.length) {
                    return rxjs.of(t).pipe(rxjs_operators.tap(function (t) {
                        /** @type {?} */
                        var resolveStart = new ResolveStart(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), /** @type {?} */ ((t.targetSnapshot)));
                        _this.triggerEvent(resolveStart);
                    }), resolveData(_this.paramsInheritanceStrategy, _this.ngModule.injector), //
                    //
                    rxjs_operators.tap(function (t) {
                        /** @type {?} */
                        var resolveEnd = new ResolveEnd(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(t.urlAfterRedirects), /** @type {?} */ ((t.targetSnapshot)));
                        _this.triggerEvent(resolveEnd);
                    }));
                }
                return undefined;
            }), 
            // --- AFTER PREACTIVATION ---
            switchTap(function (t) {
                var targetSnapshot = t.targetSnapshot, navigationId = t.id, appliedUrlTree = t.extractedUrl, rawUrlTree = t.rawUrl, _a = t.extras, skipLocationChange = _a.skipLocationChange, replaceUrl = _a.replaceUrl;
                return _this.hooks.afterPreactivation(/** @type {?} */ ((targetSnapshot)), {
                    navigationId: navigationId,
                    appliedUrlTree: appliedUrlTree,
                    rawUrlTree: rawUrlTree,
                    skipLocationChange: !!skipLocationChange,
                    replaceUrl: !!replaceUrl,
                });
            }), rxjs_operators.map(function (t) {
                /** @type {?} */
                var targetRouterState = createRouterState(_this.routeReuseStrategy, /** @type {?} */ ((t.targetSnapshot)), t.currentRouterState);
                return (__assign({}, t, { targetRouterState: targetRouterState }));
            }), /* Once here, we are about to activate syncronously. The assumption is this will
                             succeed, and user code may read from the Router service. Therefore before
                             activation, we need to update router properties storing the current URL and the
                             RouterState, as well as updated the browser URL. All this should happen *before*
                             activating. */
            rxjs_operators.tap(function (t) {
                _this.currentUrlTree = t.urlAfterRedirects;
                _this.rawUrlTree = _this.urlHandlingStrategy.merge(_this.currentUrlTree, t.rawUrl);
                (/** @type {?} */ (_this)).routerState = /** @type {?} */ ((t.targetRouterState));
                if (_this.urlUpdateStrategy === 'deferred' && !t.extras.skipLocationChange) {
                    _this.setBrowserUrl(_this.rawUrlTree, !!t.extras.replaceUrl, t.id);
                }
            }), activateRoutes(_this.rootContexts, _this.routeReuseStrategy, function (evt) { return _this.triggerEvent(evt); }), rxjs_operators.tap({
                next: /**
                 * @return {?}
                 */
                function () { completed = true; }, complete: /**
                 * @return {?}
                 */
                function () { completed = true; }
            }), rxjs_operators.finalize(function () {
                /* When the navigation stream finishes either through error or success, we set the
                                 * `completed` or `errored` flag. However, there are some situations where we could
                                 * get here without either of those being set. For instance, a redirect during
                                 * NavigationStart. Therefore, this is a catch-all to make sure the NavigationCancel
                                 * event is fired when a navigation gets cancelled but not caught by other means. */
                if (!completed && !errored) {
                    // Must reset to current URL tree here to ensure history.state is set. On a fresh
                    // page load, if a new navigation comes in before a successful navigation
                    // completes, there will be nothing in history.state.navigationId. This can cause
                    // sync problems with AngularJS sync code which looks for a value here in order
                    // to determine whether or not to handle a given popstate event or to leave it
                    // to the Angualr router.
                    _this.resetUrlToCurrentUrlTree();
                    /** @type {?} */
                    var navCancel = new NavigationCancel(t.id, _this.serializeUrl(t.extractedUrl), "Navigation ID " + t.id + " is not equal to the current navigation id " + _this.navigationId);
                    eventsSubject.next(navCancel);
                    t.resolve(false);
                }
            }), rxjs_operators.catchError(function (e) {
                errored = true;
                /* This error type is issued during Redirect, and is handled as a cancellation
                                 * rather than an error. */
                if (isNavigationCancelingError(e)) {
                    _this.navigated = true;
                    /** @type {?} */
                    var redirecting = isUrlTree(e.url);
                    if (!redirecting) {
                        _this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                    }
                    /** @type {?} */
                    var navCancel = new NavigationCancel(t.id, _this.serializeUrl(t.extractedUrl), e.message);
                    eventsSubject.next(navCancel);
                    t.resolve(false);
                    if (redirecting) {
                        _this.navigateByUrl(e.url);
                    }
                    /* All other errors should reset to the router's internal URL reference to the
                                       * pre-error state. */
                }
                else {
                    _this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                    /** @type {?} */
                    var navError = new NavigationError(t.id, _this.serializeUrl(t.extractedUrl), e);
                    eventsSubject.next(navError);
                    try {
                        t.resolve(_this.errorHandler(e));
                    }
                    catch (ee) {
                        t.reject(ee);
                    }
                }
                return rxjs.EMPTY;
            }));
            // TODO(jasonaden): remove cast once g3 is on updated TypeScript
        }))));
    };
    /**
     * @internal
     * TODO: this should be removed once the constructor of the router made internal
     */
    /**
     * \@internal
     * TODO: this should be removed once the constructor of the router made internal
     * @param {?} rootComponentType
     * @return {?}
     */
    Router.prototype.resetRootComponentType = /**
     * \@internal
     * TODO: this should be removed once the constructor of the router made internal
     * @param {?} rootComponentType
     * @return {?}
     */
    function (rootComponentType) {
        this.rootComponentType = rootComponentType;
        // TODO: vsavkin router 4.0 should make the root component set to null
        // this will simplify the lifecycle of the router.
        this.routerState.root.component = this.rootComponentType;
    };
    /**
     * @return {?}
     */
    Router.prototype.getTransition = /**
     * @return {?}
     */
    function () { return this.transitions.value; };
    /**
     * @param {?} t
     * @return {?}
     */
    Router.prototype.setTransition = /**
     * @param {?} t
     * @return {?}
     */
    function (t) {
        this.transitions.next(__assign({}, this.getTransition(), t));
    };
    /**
     * Sets up the location change listener and performs the initial navigation.
     */
    /**
     * Sets up the location change listener and performs the initial navigation.
     * @return {?}
     */
    Router.prototype.initialNavigation = /**
     * Sets up the location change listener and performs the initial navigation.
     * @return {?}
     */
    function () {
        this.setUpLocationChangeListener();
        if (this.navigationId === 0) {
            this.navigateByUrl(this.location.path(true), { replaceUrl: true });
        }
    };
    /**
     * Sets up the location change listener.
     */
    /**
     * Sets up the location change listener.
     * @return {?}
     */
    Router.prototype.setUpLocationChangeListener = /**
     * Sets up the location change listener.
     * @return {?}
     */
    function () {
        var _this = this;
        // Don't need to use Zone.wrap any more, because zone.js
        // already patch onPopState, so location change callback will
        // run into ngZone
        if (!this.locationSubscription) {
            this.locationSubscription = /** @type {?} */ (this.location.subscribe(function (change) {
                /** @type {?} */
                var rawUrlTree = _this.parseUrl(change['url']);
                /** @type {?} */
                var source = change['type'] === 'popstate' ? 'popstate' : 'hashchange';
                /** @type {?} */
                var state = change.state && change.state.navigationId ?
                    { navigationId: change.state.navigationId } :
                    null;
                setTimeout(function () { _this.scheduleNavigation(rawUrlTree, source, state, { replaceUrl: true }); }, 0);
            }));
        }
    };
    Object.defineProperty(Router.prototype, "url", {
        /** The current url */
        get: /**
         * The current url
         * @return {?}
         */
        function () { return this.serializeUrl(this.currentUrlTree); },
        enumerable: true,
        configurable: true
    });
    /** @internal */
    /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    Router.prototype.triggerEvent = /**
     * \@internal
     * @param {?} event
     * @return {?}
     */
    function (event) { (/** @type {?} */ (this.events)).next(event); };
    /**
     * Resets the configuration used for navigation and generating links.
     *
     * @usageNotes
     *
     * ### Example
     *
     * ```
     * router.resetConfig([
     *  { path: 'team/:id', component: TeamCmp, children: [
     *    { path: 'simple', component: SimpleCmp },
     *    { path: 'user/:name', component: UserCmp }
     *  ]}
     * ]);
     * ```
     */
    /**
     * Resets the configuration used for navigation and generating links.
     *
     * \@usageNotes
     *
     * ### Example
     *
     * ```
     * router.resetConfig([
     *  { path: 'team/:id', component: TeamCmp, children: [
     *    { path: 'simple', component: SimpleCmp },
     *    { path: 'user/:name', component: UserCmp }
     *  ]}
     * ]);
     * ```
     * @param {?} config
     * @return {?}
     */
    Router.prototype.resetConfig = /**
     * Resets the configuration used for navigation and generating links.
     *
     * \@usageNotes
     *
     * ### Example
     *
     * ```
     * router.resetConfig([
     *  { path: 'team/:id', component: TeamCmp, children: [
     *    { path: 'simple', component: SimpleCmp },
     *    { path: 'user/:name', component: UserCmp }
     *  ]}
     * ]);
     * ```
     * @param {?} config
     * @return {?}
     */
    function (config) {
        validateConfig(config);
        this.config = config.map(standardizeConfig);
        this.navigated = false;
        this.lastSuccessfulId = -1;
    };
    /** @docsNotRequired */
    /**
     * \@docsNotRequired
     * @return {?}
     */
    Router.prototype.ngOnDestroy = /**
     * \@docsNotRequired
     * @return {?}
     */
    function () { this.dispose(); };
    /** Disposes of the router */
    /**
     * Disposes of the router
     * @return {?}
     */
    Router.prototype.dispose = /**
     * Disposes of the router
     * @return {?}
     */
    function () {
        if (this.locationSubscription) {
            this.locationSubscription.unsubscribe();
            this.locationSubscription = /** @type {?} */ ((null));
        }
    };
    /**
     * Applies an array of commands to the current url tree and creates a new url tree.
     *
     * When given an activate route, applies the given commands starting from the route.
     * When not given a route, applies the given command starting from the root.
     *
     * @usageNotes
     *
     * ### Example
     *
     * ```
     * // create /team/33/user/11
     * router.createUrlTree(['/team', 33, 'user', 11]);
     *
     * // create /team/33;expand=true/user/11
     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
     *
     * // you can collapse static segments like this (this works only with the first passed-in value):
     * router.createUrlTree(['/team/33/user', userId]);
     *
     * // If the first segment can contain slashes, and you do not want the router to split it, you
     * // can do the following:
     *
     * router.createUrlTree([{segmentPath: '/one/two'}]);
     *
     * // create /team/33/(user/11//right:chat)
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
     *
     * // remove the right secondary node
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
     *
     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
     *
     * // navigate to /team/33/user/11/details
     * router.createUrlTree(['details'], {relativeTo: route});
     *
     * // navigate to /team/33/user/22
     * router.createUrlTree(['../22'], {relativeTo: route});
     *
     * // navigate to /team/44/user/22
     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
     * ```
     */
    /**
     * Applies an array of commands to the current url tree and creates a new url tree.
     *
     * When given an activate route, applies the given commands starting from the route.
     * When not given a route, applies the given command starting from the root.
     *
     * \@usageNotes
     *
     * ### Example
     *
     * ```
     * // create /team/33/user/11
     * router.createUrlTree(['/team', 33, 'user', 11]);
     *
     * // create /team/33;expand=true/user/11
     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
     *
     * // you can collapse static segments like this (this works only with the first passed-in value):
     * router.createUrlTree(['/team/33/user', userId]);
     *
     * // If the first segment can contain slashes, and you do not want the router to split it, you
     * // can do the following:
     *
     * router.createUrlTree([{segmentPath: '/one/two'}]);
     *
     * // create /team/33/(user/11//right:chat)
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
     *
     * // remove the right secondary node
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
     *
     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
     *
     * // navigate to /team/33/user/11/details
     * router.createUrlTree(['details'], {relativeTo: route});
     *
     * // navigate to /team/33/user/22
     * router.createUrlTree(['../22'], {relativeTo: route});
     *
     * // navigate to /team/44/user/22
     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
     * ```
     * @param {?} commands
     * @param {?=} navigationExtras
     * @return {?}
     */
    Router.prototype.createUrlTree = /**
     * Applies an array of commands to the current url tree and creates a new url tree.
     *
     * When given an activate route, applies the given commands starting from the route.
     * When not given a route, applies the given command starting from the root.
     *
     * \@usageNotes
     *
     * ### Example
     *
     * ```
     * // create /team/33/user/11
     * router.createUrlTree(['/team', 33, 'user', 11]);
     *
     * // create /team/33;expand=true/user/11
     * router.createUrlTree(['/team', 33, {expand: true}, 'user', 11]);
     *
     * // you can collapse static segments like this (this works only with the first passed-in value):
     * router.createUrlTree(['/team/33/user', userId]);
     *
     * // If the first segment can contain slashes, and you do not want the router to split it, you
     * // can do the following:
     *
     * router.createUrlTree([{segmentPath: '/one/two'}]);
     *
     * // create /team/33/(user/11//right:chat)
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: 'chat'}}]);
     *
     * // remove the right secondary node
     * router.createUrlTree(['/team', 33, {outlets: {primary: 'user/11', right: null}}]);
     *
     * // assuming the current url is `/team/33/user/11` and the route points to `user/11`
     *
     * // navigate to /team/33/user/11/details
     * router.createUrlTree(['details'], {relativeTo: route});
     *
     * // navigate to /team/33/user/22
     * router.createUrlTree(['../22'], {relativeTo: route});
     *
     * // navigate to /team/44/user/22
     * router.createUrlTree(['../../team/44/user/22'], {relativeTo: route});
     * ```
     * @param {?} commands
     * @param {?=} navigationExtras
     * @return {?}
     */
    function (commands, navigationExtras) {
        if (navigationExtras === void 0) { navigationExtras = {}; }
        var relativeTo = navigationExtras.relativeTo, queryParams = navigationExtras.queryParams, fragment = navigationExtras.fragment, preserveQueryParams = navigationExtras.preserveQueryParams, queryParamsHandling = navigationExtras.queryParamsHandling, preserveFragment = navigationExtras.preserveFragment;
        if (_angular_core.isDevMode() && preserveQueryParams && /** @type {?} */ (console) && /** @type {?} */ (console.warn)) {
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
        }
        /** @type {?} */
        var a = relativeTo || this.routerState.root;
        /** @type {?} */
        var f = preserveFragment ? this.currentUrlTree.fragment : fragment;
        /** @type {?} */
        var q = null;
        if (queryParamsHandling) {
            switch (queryParamsHandling) {
                case 'merge':
                    q = __assign({}, this.currentUrlTree.queryParams, queryParams);
                    break;
                case 'preserve':
                    q = this.currentUrlTree.queryParams;
                    break;
                default:
                    q = queryParams || null;
            }
        }
        else {
            q = preserveQueryParams ? this.currentUrlTree.queryParams : queryParams || null;
        }
        if (q !== null) {
            q = this.removeEmptyProps(q);
        }
        return createUrlTree(a, this.currentUrlTree, commands, /** @type {?} */ ((q)), /** @type {?} */ ((f)));
    };
    /**
     * Navigate based on the provided url. This navigation is always absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * @usageNotes
     *
     * ### Example
     *
     * ```
     * router.navigateByUrl("/team/33/user/11");
     *
     * // Navigate without updating the URL
     * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
     * ```
     *
     * Since `navigateByUrl()` takes an absolute URL as the first parameter,
     * it will not apply any delta to the current URL and ignores any properties
     * in the second parameter (the `NavigationExtras`) that would change the
     * provided URL.
     */
    /**
     * Navigate based on the provided url. This navigation is always absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * \@usageNotes
     *
     * ### Example
     *
     * ```
     * router.navigateByUrl("/team/33/user/11");
     *
     * // Navigate without updating the URL
     * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
     * ```
     *
     * Since `navigateByUrl()` takes an absolute URL as the first parameter,
     * it will not apply any delta to the current URL and ignores any properties
     * in the second parameter (the `NavigationExtras`) that would change the
     * provided URL.
     * @param {?} url
     * @param {?=} extras
     * @return {?}
     */
    Router.prototype.navigateByUrl = /**
     * Navigate based on the provided url. This navigation is always absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * \@usageNotes
     *
     * ### Example
     *
     * ```
     * router.navigateByUrl("/team/33/user/11");
     *
     * // Navigate without updating the URL
     * router.navigateByUrl("/team/33/user/11", { skipLocationChange: true });
     * ```
     *
     * Since `navigateByUrl()` takes an absolute URL as the first parameter,
     * it will not apply any delta to the current URL and ignores any properties
     * in the second parameter (the `NavigationExtras`) that would change the
     * provided URL.
     * @param {?} url
     * @param {?=} extras
     * @return {?}
     */
    function (url, extras) {
        if (extras === void 0) { extras = { skipLocationChange: false }; }
        if (_angular_core.isDevMode() && this.isNgZoneEnabled && !_angular_core.NgZone.isInAngularZone()) {
            this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
        }
        /** @type {?} */
        var urlTree = isUrlTree(url) ? url : this.parseUrl(url);
        /** @type {?} */
        var mergedTree = this.urlHandlingStrategy.merge(urlTree, this.rawUrlTree);
        return this.scheduleNavigation(mergedTree, 'imperative', null, extras);
    };
    /**
     * Navigate based on the provided array of commands and a starting point.
     * If no starting route is provided, the navigation is absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * @usageNotes
     *
     * ### Example
     *
     * ```
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
     *
     * // Navigate without updating the URL
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
     * ```
     *
     * The first parameter of `navigate()` is a delta to be applied to the current URL
     * or the one provided in the `relativeTo` property of the second parameter (the
     * `NavigationExtras`).
     */
    /**
     * Navigate based on the provided array of commands and a starting point.
     * If no starting route is provided, the navigation is absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * \@usageNotes
     *
     * ### Example
     *
     * ```
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
     *
     * // Navigate without updating the URL
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
     * ```
     *
     * The first parameter of `navigate()` is a delta to be applied to the current URL
     * or the one provided in the `relativeTo` property of the second parameter (the
     * `NavigationExtras`).
     * @param {?} commands
     * @param {?=} extras
     * @return {?}
     */
    Router.prototype.navigate = /**
     * Navigate based on the provided array of commands and a starting point.
     * If no starting route is provided, the navigation is absolute.
     *
     * Returns a promise that:
     * - resolves to 'true' when navigation succeeds,
     * - resolves to 'false' when navigation fails,
     * - is rejected when an error happens.
     *
     * \@usageNotes
     *
     * ### Example
     *
     * ```
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route});
     *
     * // Navigate without updating the URL
     * router.navigate(['team', 33, 'user', 11], {relativeTo: route, skipLocationChange: true});
     * ```
     *
     * The first parameter of `navigate()` is a delta to be applied to the current URL
     * or the one provided in the `relativeTo` property of the second parameter (the
     * `NavigationExtras`).
     * @param {?} commands
     * @param {?=} extras
     * @return {?}
     */
    function (commands, extras) {
        if (extras === void 0) { extras = { skipLocationChange: false }; }
        validateCommands(commands);
        return this.navigateByUrl(this.createUrlTree(commands, extras), extras);
    };
    /** Serializes a `UrlTree` into a string */
    /**
     * Serializes a `UrlTree` into a string
     * @param {?} url
     * @return {?}
     */
    Router.prototype.serializeUrl = /**
     * Serializes a `UrlTree` into a string
     * @param {?} url
     * @return {?}
     */
    function (url) { return this.urlSerializer.serialize(url); };
    /** Parses a string into a `UrlTree` */
    /**
     * Parses a string into a `UrlTree`
     * @param {?} url
     * @return {?}
     */
    Router.prototype.parseUrl = /**
     * Parses a string into a `UrlTree`
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var urlTree;
        try {
            urlTree = this.urlSerializer.parse(url);
        }
        catch (e) {
            urlTree = this.malformedUriErrorHandler(e, this.urlSerializer, url);
        }
        return urlTree;
    };
    /** Returns whether the url is activated */
    /**
     * Returns whether the url is activated
     * @param {?} url
     * @param {?} exact
     * @return {?}
     */
    Router.prototype.isActive = /**
     * Returns whether the url is activated
     * @param {?} url
     * @param {?} exact
     * @return {?}
     */
    function (url, exact) {
        if (isUrlTree(url)) {
            return containsTree(this.currentUrlTree, url, exact);
        }
        /** @type {?} */
        var urlTree = this.parseUrl(url);
        return containsTree(this.currentUrlTree, urlTree, exact);
    };
    /**
     * @param {?} params
     * @return {?}
     */
    Router.prototype.removeEmptyProps = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        return Object.keys(params).reduce(function (result, key) {
            /** @type {?} */
            var value = params[key];
            if (value !== null && value !== undefined) {
                result[key] = value;
            }
            return result;
        }, {});
    };
    /**
     * @return {?}
     */
    Router.prototype.processNavigations = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.navigations.subscribe(function (t) {
            _this.navigated = true;
            _this.lastSuccessfulId = t.id;
            (/** @type {?} */ (_this.events))
                .next(new NavigationEnd(t.id, _this.serializeUrl(t.extractedUrl), _this.serializeUrl(_this.currentUrlTree)));
            t.resolve(true);
        }, function (e) { _this.console.warn("Unhandled Navigation Error: "); });
    };
    /**
     * @param {?} rawUrl
     * @param {?} source
     * @param {?} state
     * @param {?} extras
     * @return {?}
     */
    Router.prototype.scheduleNavigation = /**
     * @param {?} rawUrl
     * @param {?} source
     * @param {?} state
     * @param {?} extras
     * @return {?}
     */
    function (rawUrl, source, state, extras) {
        /** @type {?} */
        var lastNavigation = this.getTransition();
        // If the user triggers a navigation imperatively (e.g., by using navigateByUrl),
        // and that navigation results in 'replaceState' that leads to the same URL,
        // we should skip those.
        if (lastNavigation && source !== 'imperative' && lastNavigation.source === 'imperative' &&
            lastNavigation.rawUrl.toString() === rawUrl.toString()) {
            return Promise.resolve(true); // return value is not used
        }
        // Because of a bug in IE and Edge, the location class fires two events (popstate and
        // hashchange) every single time. The second one should be ignored. Otherwise, the URL will
        // flicker. Handles the case when a popstate was emitted first.
        if (lastNavigation && source == 'hashchange' && lastNavigation.source === 'popstate' &&
            lastNavigation.rawUrl.toString() === rawUrl.toString()) {
            return Promise.resolve(true); // return value is not used
        }
        // Because of a bug in IE and Edge, the location class fires two events (popstate and
        // hashchange) every single time. The second one should be ignored. Otherwise, the URL will
        // flicker. Handles the case when a hashchange was emitted first.
        if (lastNavigation && source == 'popstate' && lastNavigation.source === 'hashchange' &&
            lastNavigation.rawUrl.toString() === rawUrl.toString()) {
            return Promise.resolve(true); // return value is not used
        }
        /** @type {?} */
        var resolve = null;
        /** @type {?} */
        var reject = null;
        /** @type {?} */
        var promise = new Promise(function (res, rej) {
            resolve = res;
            reject = rej;
        });
        /** @type {?} */
        var id = ++this.navigationId;
        this.setTransition({
            id: id,
            source: source,
            state: state,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.rawUrlTree, rawUrl: rawUrl, extras: extras, resolve: resolve, reject: reject, promise: promise,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState
        });
        // Make sure that the error is propagated even though `processNavigations` catch
        // handler does not rethrow
        return promise.catch(function (e) { return Promise.reject(e); });
    };
    /**
     * @param {?} url
     * @param {?} replaceUrl
     * @param {?} id
     * @return {?}
     */
    Router.prototype.setBrowserUrl = /**
     * @param {?} url
     * @param {?} replaceUrl
     * @param {?} id
     * @return {?}
     */
    function (url, replaceUrl, id) {
        /** @type {?} */
        var path = this.urlSerializer.serialize(url);
        if (this.location.isCurrentPathEqualTo(path) || replaceUrl) {
            this.location.replaceState(path, '', { navigationId: id });
        }
        else {
            this.location.go(path, '', { navigationId: id });
        }
    };
    /**
     * @param {?} storedState
     * @param {?} storedUrl
     * @param {?} rawUrl
     * @return {?}
     */
    Router.prototype.resetStateAndUrl = /**
     * @param {?} storedState
     * @param {?} storedUrl
     * @param {?} rawUrl
     * @return {?}
     */
    function (storedState, storedUrl, rawUrl) {
        (/** @type {?} */ (this)).routerState = storedState;
        this.currentUrlTree = storedUrl;
        this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, rawUrl);
        this.resetUrlToCurrentUrlTree();
    };
    /**
     * @return {?}
     */
    Router.prototype.resetUrlToCurrentUrlTree = /**
     * @return {?}
     */
    function () {
        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', { navigationId: this.lastSuccessfulId });
    };
    return Router;
}());
/**
 * @param {?} commands
 * @return {?}
 */
function validateCommands(commands) {
    for (var i = 0; i < commands.length; i++) {
        /** @type {?} */
        var cmd = commands[i];
        if (cmd == null) {
            throw new Error("The requested path contains " + cmd + " segment at index " + i);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@description
 *
 * Lets you link to specific routes in your app.
 *
 * Consider the following route configuration:
 * `[{ path: 'user/:name', component: UserCmp }]`.
 * When linking to this `user/:name` route, you use the `RouterLink` directive.
 *
 * If the link is static, you can use the directive as follows:
 * `<a routerLink="/user/bob">link to user component</a>`
 *
 * If you use dynamic values to generate the link, you can pass an array of path
 * segments, followed by the params for each segment.
 *
 * For instance `['/team', teamId, 'user', userName, {details: true}]`
 * means that we want to generate a link to `/team/11/user/bob;details=true`.
 *
 * Multiple static segments can be merged into one
 * (e.g., `['/team/11/user', userName, {details: true}]`).
 *
 * The first segment name can be prepended with `/`, `./`, or `../`:
 * * If the first segment begins with `/`, the router will look up the route from the root of the
 *   app.
 * * If the first segment begins with `./`, or doesn't begin with a slash, the router will
 *   instead look in the children of the current activated route.
 * * And if the first segment begins with `../`, the router will go up one level.
 *
 * You can set query params and fragment as follows:
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" fragment="education">
 *   link to user component
 * </a>
 * ```
 * RouterLink will use these to generate this link: `/user/bob#education?debug=true`.
 *
 * (Deprecated in v4.0.0 use `queryParamsHandling` instead) You can also tell the
 * directive to preserve the current query params and fragment:
 *
 * ```
 * <a [routerLink]="['/user/bob']" preserveQueryParams preserveFragment>
 *   link to user component
 * </a>
 * ```
 *
 * You can tell the directive to how to handle queryParams, available options are:
 *  - `'merge'`: merge the queryParams into the current queryParams
 *  - `'preserve'`: preserve the current queryParams
 *  - default/`''`: use the queryParams only
 *
 * Same options for {\@link NavigationExtras#queryParamsHandling
 * NavigationExtras#queryParamsHandling}.
 *
 * ```
 * <a [routerLink]="['/user/bob']" [queryParams]="{debug: true}" queryParamsHandling="merge">
 *   link to user component
 * </a>
 * ```
 *
 * The router link directive always treats the provided input as a delta to the current url.
 *
 * For instance, if the current url is `/user/(box//aux:team)`.
 *
 * Then the following link `<a [routerLink]="['/user/jim']">Jim</a>` will generate the link
 * `/user/(jim//aux:team)`.
 *
 * See {\@link Router#createUrlTree createUrlTree} for more information.
 *
 * \@ngModule RouterModule
 *
 * \@publicApi
 */
var RouterLink = /** @class */ (function () {
    function RouterLink(router, route, tabIndex, renderer, el) {
        this.router = router;
        this.route = route;
        this.commands = [];
        if (tabIndex == null) {
            renderer.setAttribute(el.nativeElement, 'tabindex', '0');
        }
    }
    Object.defineProperty(RouterLink.prototype, "routerLink", {
        set: /**
         * @param {?} commands
         * @return {?}
         */
        function (commands) {
            if (commands != null) {
                this.commands = Array.isArray(commands) ? commands : [commands];
            }
            else {
                this.commands = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterLink.prototype, "preserveQueryParams", {
        /**
         * @deprecated 4.0.0 use `queryParamsHandling` instead.
         */
        set: /**
         * @deprecated 4.0.0 use `queryParamsHandling` instead.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_angular_core.isDevMode() && /** @type {?} */ (console) && /** @type {?} */ (console.warn)) {
                console.warn('preserveQueryParams is deprecated!, use queryParamsHandling instead.');
            }
            this.preserve = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    RouterLink.prototype.onClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        this.router.navigateByUrl(this.urlTree, extras);
        return true;
    };
    Object.defineProperty(RouterLink.prototype, "urlTree", {
        get: /**
         * @return {?}
         */
        function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    RouterLink.decorators = [
        { type: _angular_core.Directive, args: [{ selector: ':not(a)[routerLink]' },] },
    ];
    /** @nocollapse */
    RouterLink.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: String, decorators: [{ type: _angular_core.Attribute, args: ['tabindex',] }] },
        { type: _angular_core.Renderer2 },
        { type: _angular_core.ElementRef }
    ]; };
    RouterLink.propDecorators = {
        queryParams: [{ type: _angular_core.Input }],
        fragment: [{ type: _angular_core.Input }],
        queryParamsHandling: [{ type: _angular_core.Input }],
        preserveFragment: [{ type: _angular_core.Input }],
        skipLocationChange: [{ type: _angular_core.Input }],
        replaceUrl: [{ type: _angular_core.Input }],
        routerLink: [{ type: _angular_core.Input }],
        preserveQueryParams: [{ type: _angular_core.Input }],
        onClick: [{ type: _angular_core.HostListener, args: ['click',] }]
    };
    return RouterLink;
}());
/**
 * \@description
 *
 * Lets you link to specific routes in your app.
 *
 * See `RouterLink` for more information.
 *
 * \@ngModule RouterModule
 *
 * \@publicApi
 */
var RouterLinkWithHref = /** @class */ (function () {
    function RouterLinkWithHref(router, route, locationStrategy) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.locationStrategy = locationStrategy;
        this.commands = [];
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof NavigationEnd) {
                _this.updateTargetUrlAndHref();
            }
        });
    }
    Object.defineProperty(RouterLinkWithHref.prototype, "routerLink", {
        set: /**
         * @param {?} commands
         * @return {?}
         */
        function (commands) {
            if (commands != null) {
                this.commands = Array.isArray(commands) ? commands : [commands];
            }
            else {
                this.commands = [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterLinkWithHref.prototype, "preserveQueryParams", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (_angular_core.isDevMode() && /** @type {?} */ (console) && /** @type {?} */ (console.warn)) {
                console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
            }
            this.preserve = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    RouterLinkWithHref.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { this.updateTargetUrlAndHref(); };
    /**
     * @return {?}
     */
    RouterLinkWithHref.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { this.subscription.unsubscribe(); };
    /**
     * @param {?} button
     * @param {?} ctrlKey
     * @param {?} metaKey
     * @param {?} shiftKey
     * @return {?}
     */
    RouterLinkWithHref.prototype.onClick = /**
     * @param {?} button
     * @param {?} ctrlKey
     * @param {?} metaKey
     * @param {?} shiftKey
     * @return {?}
     */
    function (button, ctrlKey, metaKey, shiftKey) {
        if (button !== 0 || ctrlKey || metaKey || shiftKey) {
            return true;
        }
        if (typeof this.target === 'string' && this.target != '_self') {
            return true;
        }
        /** @type {?} */
        var extras = {
            skipLocationChange: attrBoolValue(this.skipLocationChange),
            replaceUrl: attrBoolValue(this.replaceUrl),
        };
        this.router.navigateByUrl(this.urlTree, extras);
        return false;
    };
    /**
     * @return {?}
     */
    RouterLinkWithHref.prototype.updateTargetUrlAndHref = /**
     * @return {?}
     */
    function () {
        this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
    };
    Object.defineProperty(RouterLinkWithHref.prototype, "urlTree", {
        get: /**
         * @return {?}
         */
        function () {
            return this.router.createUrlTree(this.commands, {
                relativeTo: this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                preserveQueryParams: attrBoolValue(this.preserve),
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: attrBoolValue(this.preserveFragment),
            });
        },
        enumerable: true,
        configurable: true
    });
    RouterLinkWithHref.decorators = [
        { type: _angular_core.Directive, args: [{ selector: 'a[routerLink]' },] },
    ];
    /** @nocollapse */
    RouterLinkWithHref.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute },
        { type: _angular_common.LocationStrategy }
    ]; };
    RouterLinkWithHref.propDecorators = {
        target: [{ type: _angular_core.HostBinding, args: ['attr.target',] }, { type: _angular_core.Input }],
        queryParams: [{ type: _angular_core.Input }],
        fragment: [{ type: _angular_core.Input }],
        queryParamsHandling: [{ type: _angular_core.Input }],
        preserveFragment: [{ type: _angular_core.Input }],
        skipLocationChange: [{ type: _angular_core.Input }],
        replaceUrl: [{ type: _angular_core.Input }],
        href: [{ type: _angular_core.HostBinding }],
        routerLink: [{ type: _angular_core.Input }],
        preserveQueryParams: [{ type: _angular_core.Input }],
        onClick: [{ type: _angular_core.HostListener, args: ['click', ['$event.button', '$event.ctrlKey', '$event.metaKey', '$event.shiftKey'],] }]
    };
    return RouterLinkWithHref;
}());
/**
 * @param {?} s
 * @return {?}
 */
function attrBoolValue(s) {
    return s === '' || !!s;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 *
 * \@description
 *
 * Lets you add a CSS class to an element when the link's route becomes active.
 *
 * This directive lets you add a CSS class to an element when the link's route
 * becomes active.
 *
 * Consider the following example:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link">Bob</a>
 * ```
 *
 * When the url is either '/user' or '/user/bob', the active-link class will
 * be added to the `a` tag. If the url changes, the class will be removed.
 *
 * You can set more than one class, as follows:
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="class1 class2">Bob</a>
 * <a routerLink="/user/bob" [routerLinkActive]="['class1', 'class2']">Bob</a>
 * ```
 *
 * You can configure RouterLinkActive by passing `exact: true`. This will add the classes
 * only when the url matches the link exactly.
 *
 * ```
 * <a routerLink="/user/bob" routerLinkActive="active-link" [routerLinkActiveOptions]="{exact:
 * true}">Bob</a>
 * ```
 *
 * You can assign the RouterLinkActive instance to a template variable and directly check
 * the `isActive` status.
 * ```
 * <a routerLink="/user/bob" routerLinkActive #rla="routerLinkActive">
 *   Bob {{ rla.isActive ? '(already open)' : ''}}
 * </a>
 * ```
 *
 * Finally, you can apply the RouterLinkActive directive to an ancestor of a RouterLink.
 *
 * ```
 * <div routerLinkActive="active-link" [routerLinkActiveOptions]="{exact: true}">
 *   <a routerLink="/user/jim">Jim</a>
 *   <a routerLink="/user/bob">Bob</a>
 * </div>
 * ```
 *
 * This will set the active-link class on the div tag if the url is either '/user/jim' or
 * '/user/bob'.
 *
 * \@ngModule RouterModule
 *
 * \@publicApi
 */
var RouterLinkActive = /** @class */ (function () {
    function RouterLinkActive(router, element, renderer, cdr) {
        var _this = this;
        this.router = router;
        this.element = element;
        this.renderer = renderer;
        this.cdr = cdr;
        this.classes = [];
        this.isActive = false;
        this.routerLinkActiveOptions = { exact: false };
        this.subscription = router.events.subscribe(function (s) {
            if (s instanceof NavigationEnd) {
                _this.update();
            }
        });
    }
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.links.changes.subscribe(function (_) { return _this.update(); });
        this.linksWithHrefs.changes.subscribe(function (_) { return _this.update(); });
        this.update();
    };
    Object.defineProperty(RouterLinkActive.prototype, "routerLinkActive", {
        set: /**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            /** @type {?} */
            var classes = Array.isArray(data) ? data : data.split(' ');
            this.classes = classes.filter(function (c) { return !!c; });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    RouterLinkActive.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) { this.update(); };
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { this.subscription.unsubscribe(); };
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.update = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.links || !this.linksWithHrefs || !this.router.navigated)
            return;
        Promise.resolve().then(function () {
            /** @type {?} */
            var hasActiveLinks = _this.hasActiveLinks();
            if (_this.isActive !== hasActiveLinks) {
                (/** @type {?} */ (_this)).isActive = hasActiveLinks;
                _this.classes.forEach(function (c) {
                    if (hasActiveLinks) {
                        _this.renderer.addClass(_this.element.nativeElement, c);
                    }
                    else {
                        _this.renderer.removeClass(_this.element.nativeElement, c);
                    }
                });
            }
        });
    };
    /**
     * @param {?} router
     * @return {?}
     */
    RouterLinkActive.prototype.isLinkActive = /**
     * @param {?} router
     * @return {?}
     */
    function (router) {
        var _this = this;
        return function (link) {
            return router.isActive(link.urlTree, _this.routerLinkActiveOptions.exact);
        };
    };
    /**
     * @return {?}
     */
    RouterLinkActive.prototype.hasActiveLinks = /**
     * @return {?}
     */
    function () {
        return this.links.some(this.isLinkActive(this.router)) ||
            this.linksWithHrefs.some(this.isLinkActive(this.router));
    };
    RouterLinkActive.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[routerLinkActive]',
                    exportAs: 'routerLinkActive',
                },] },
    ];
    /** @nocollapse */
    RouterLinkActive.ctorParameters = function () { return [
        { type: Router },
        { type: _angular_core.ElementRef },
        { type: _angular_core.Renderer2 },
        { type: _angular_core.ChangeDetectorRef }
    ]; };
    RouterLinkActive.propDecorators = {
        links: [{ type: _angular_core.ContentChildren, args: [RouterLink, { descendants: true },] }],
        linksWithHrefs: [{ type: _angular_core.ContentChildren, args: [RouterLinkWithHref, { descendants: true },] }],
        routerLinkActiveOptions: [{ type: _angular_core.Input }],
        routerLinkActive: [{ type: _angular_core.Input }]
    };
    return RouterLinkActive;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Store contextual information about a `RouterOutlet`
 *
 * \@publicApi
 */
var OutletContext = /** @class */ (function () {
    function OutletContext() {
        this.outlet = null;
        this.route = null;
        this.resolver = null;
        this.children = new ChildrenOutletContexts();
        this.attachRef = null;
    }
    return OutletContext;
}());
/**
 * Store contextual information about the children (= nested) `RouterOutlet`
 *
 * \@publicApi
 */
var ChildrenOutletContexts = /** @class */ (function () {
    function ChildrenOutletContexts() {
        this.contexts = new Map();
    }
    /** Called when a `RouterOutlet` directive is instantiated */
    /**
     * Called when a `RouterOutlet` directive is instantiated
     * @param {?} childName
     * @param {?} outlet
     * @return {?}
     */
    ChildrenOutletContexts.prototype.onChildOutletCreated = /**
     * Called when a `RouterOutlet` directive is instantiated
     * @param {?} childName
     * @param {?} outlet
     * @return {?}
     */
    function (childName, outlet) {
        /** @type {?} */
        var context = this.getOrCreateContext(childName);
        context.outlet = outlet;
        this.contexts.set(childName, context);
    };
    /**
     * Called when a `RouterOutlet` directive is destroyed.
     * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
     * re-created later.
     */
    /**
     * Called when a `RouterOutlet` directive is destroyed.
     * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
     * re-created later.
     * @param {?} childName
     * @return {?}
     */
    ChildrenOutletContexts.prototype.onChildOutletDestroyed = /**
     * Called when a `RouterOutlet` directive is destroyed.
     * We need to keep the context as the outlet could be destroyed inside a NgIf and might be
     * re-created later.
     * @param {?} childName
     * @return {?}
     */
    function (childName) {
        /** @type {?} */
        var context = this.getContext(childName);
        if (context) {
            context.outlet = null;
        }
    };
    /**
     * Called when the corresponding route is deactivated during navigation.
     * Because the component get destroyed, all children outlet are destroyed.
     */
    /**
     * Called when the corresponding route is deactivated during navigation.
     * Because the component get destroyed, all children outlet are destroyed.
     * @return {?}
     */
    ChildrenOutletContexts.prototype.onOutletDeactivated = /**
     * Called when the corresponding route is deactivated during navigation.
     * Because the component get destroyed, all children outlet are destroyed.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var contexts = this.contexts;
        this.contexts = new Map();
        return contexts;
    };
    /**
     * @param {?} contexts
     * @return {?}
     */
    ChildrenOutletContexts.prototype.onOutletReAttached = /**
     * @param {?} contexts
     * @return {?}
     */
    function (contexts) { this.contexts = contexts; };
    /**
     * @param {?} childName
     * @return {?}
     */
    ChildrenOutletContexts.prototype.getOrCreateContext = /**
     * @param {?} childName
     * @return {?}
     */
    function (childName) {
        /** @type {?} */
        var context = this.getContext(childName);
        if (!context) {
            context = new OutletContext();
            this.contexts.set(childName, context);
        }
        return context;
    };
    /**
     * @param {?} childName
     * @return {?}
     */
    ChildrenOutletContexts.prototype.getContext = /**
     * @param {?} childName
     * @return {?}
     */
    function (childName) { return this.contexts.get(childName) || null; };
    return ChildrenOutletContexts;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * \@description
 *
 * Acts as a placeholder that Angular dynamically fills based on the current router state.
 *
 * ```
 * <router-outlet></router-outlet>
 * <router-outlet name='left'></router-outlet>
 * <router-outlet name='right'></router-outlet>
 * ```
 *
 * A router outlet will emit an activate event any time a new component is being instantiated,
 * and a deactivate event when it is being destroyed.
 *
 * ```
 * <router-outlet
 *   (activate)='onActivate($event)'
 *   (deactivate)='onDeactivate($event)'></router-outlet>
 * ```
 * \@ngModule RouterModule
 *
 * \@publicApi
 */
var RouterOutlet = /** @class */ (function () {
    function RouterOutlet(parentContexts, location, resolver, name, changeDetector) {
        this.parentContexts = parentContexts;
        this.location = location;
        this.resolver = resolver;
        this.changeDetector = changeDetector;
        this.activated = null;
        this._activatedRoute = null;
        this.activateEvents = new _angular_core.EventEmitter();
        this.deactivateEvents = new _angular_core.EventEmitter();
        this.name = name || PRIMARY_OUTLET;
        parentContexts.onChildOutletCreated(this.name, this);
    }
    /**
     * @return {?}
     */
    RouterOutlet.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { this.parentContexts.onChildOutletDestroyed(this.name); };
    /**
     * @return {?}
     */
    RouterOutlet.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.activated) {
            /** @type {?} */
            var context = this.parentContexts.getContext(this.name);
            if (context && context.route) {
                if (context.attachRef) {
                    // `attachRef` is populated when there is an existing component to mount
                    this.attach(context.attachRef, context.route);
                }
                else {
                    // otherwise the component defined in the configuration is created
                    this.activateWith(context.route, context.resolver || null);
                }
            }
        }
    };
    Object.defineProperty(RouterOutlet.prototype, "isActivated", {
        get: /**
         * @return {?}
         */
        function () { return !!this.activated; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "component", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return this.activated.instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "activatedRoute", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.activated)
                throw new Error('Outlet is not activated');
            return /** @type {?} */ (this._activatedRoute);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouterOutlet.prototype, "activatedRouteData", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._activatedRoute) {
                return this._activatedRoute.snapshot.data;
            }
            return {};
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     */
    /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     * @return {?}
     */
    RouterOutlet.prototype.detach = /**
     * Called when the `RouteReuseStrategy` instructs to detach the subtree
     * @return {?}
     */
    function () {
        if (!this.activated)
            throw new Error('Outlet is not activated');
        this.location.detach();
        /** @type {?} */
        var cmp = this.activated;
        this.activated = null;
        this._activatedRoute = null;
        return cmp;
    };
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     */
    /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     * @param {?} ref
     * @param {?} activatedRoute
     * @return {?}
     */
    RouterOutlet.prototype.attach = /**
     * Called when the `RouteReuseStrategy` instructs to re-attach a previously detached subtree
     * @param {?} ref
     * @param {?} activatedRoute
     * @return {?}
     */
    function (ref, activatedRoute) {
        this.activated = ref;
        this._activatedRoute = activatedRoute;
        this.location.insert(ref.hostView);
    };
    /**
     * @return {?}
     */
    RouterOutlet.prototype.deactivate = /**
     * @return {?}
     */
    function () {
        if (this.activated) {
            /** @type {?} */
            var c = this.component;
            this.activated.destroy();
            this.activated = null;
            this._activatedRoute = null;
            this.deactivateEvents.emit(c);
        }
    };
    /**
     * @param {?} activatedRoute
     * @param {?} resolver
     * @return {?}
     */
    RouterOutlet.prototype.activateWith = /**
     * @param {?} activatedRoute
     * @param {?} resolver
     * @return {?}
     */
    function (activatedRoute, resolver) {
        if (this.isActivated) {
            throw new Error('Cannot activate an already activated outlet');
        }
        this._activatedRoute = activatedRoute;
        /** @type {?} */
        var snapshot = activatedRoute._futureSnapshot;
        /** @type {?} */
        var component = /** @type {?} */ (/** @type {?} */ ((snapshot.routeConfig)).component);
        resolver = resolver || this.resolver;
        /** @type {?} */
        var factory = resolver.resolveComponentFactory(component);
        /** @type {?} */
        var childContexts = this.parentContexts.getOrCreateContext(this.name).children;
        /** @type {?} */
        var injector = new OutletInjector(activatedRoute, childContexts, this.location.injector);
        this.activated = this.location.createComponent(factory, this.location.length, injector);
        // Calling `markForCheck` to make sure we will run the change detection when the
        // `RouterOutlet` is inside a `ChangeDetectionStrategy.OnPush` component.
        this.changeDetector.markForCheck();
        this.activateEvents.emit(this.activated.instance);
    };
    RouterOutlet.decorators = [
        { type: _angular_core.Directive, args: [{ selector: 'router-outlet', exportAs: 'outlet' },] },
    ];
    /** @nocollapse */
    RouterOutlet.ctorParameters = function () { return [
        { type: ChildrenOutletContexts },
        { type: _angular_core.ViewContainerRef },
        { type: _angular_core.ComponentFactoryResolver },
        { type: String, decorators: [{ type: _angular_core.Attribute, args: ['name',] }] },
        { type: _angular_core.ChangeDetectorRef }
    ]; };
    RouterOutlet.propDecorators = {
        activateEvents: [{ type: _angular_core.Output, args: ['activate',] }],
        deactivateEvents: [{ type: _angular_core.Output, args: ['deactivate',] }]
    };
    return RouterOutlet;
}());
var OutletInjector = /** @class */ (function () {
    function OutletInjector(route, childContexts, parent) {
        this.route = route;
        this.childContexts = childContexts;
        this.parent = parent;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    OutletInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    function (token, notFoundValue) {
        if (token === ActivatedRoute) {
            return this.route;
        }
        if (token === ChildrenOutletContexts) {
            return this.childContexts;
        }
        return this.parent.get(token, notFoundValue);
    };
    return OutletInjector;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
*@license
*Copyright Google Inc. All Rights Reserved.
*
*Use of this source code is governed by an MIT-style license that can be
*found in the LICENSE file at https://angular.io/license
*/
/**
 * \@description
 *
 * Provides a preloading strategy.
 *
 * \@publicApi
 * @abstract
 */
var PreloadingStrategy = /** @class */ (function () {
    function PreloadingStrategy() {
    }
    return PreloadingStrategy;
}());
/**
 * \@description
 *
 * Provides a preloading strategy that preloads all modules as quickly as possible.
 *
 * ```
 * RouteModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})
 * ```
 *
 * \@publicApi
 */
var PreloadAllModules = /** @class */ (function () {
    function PreloadAllModules() {
    }
    /**
     * @param {?} route
     * @param {?} fn
     * @return {?}
     */
    PreloadAllModules.prototype.preload = /**
     * @param {?} route
     * @param {?} fn
     * @return {?}
     */
    function (route, fn) {
        return fn().pipe(rxjs_operators.catchError(function () { return rxjs.of(null); }));
    };
    return PreloadAllModules;
}());
/**
 * \@description
 *
 * Provides a preloading strategy that does not preload any modules.
 *
 * This strategy is enabled by default.
 *
 * \@publicApi
 */
var NoPreloading = /** @class */ (function () {
    function NoPreloading() {
    }
    /**
     * @param {?} route
     * @param {?} fn
     * @return {?}
     */
    NoPreloading.prototype.preload = /**
     * @param {?} route
     * @param {?} fn
     * @return {?}
     */
    function (route, fn) { return rxjs.of(null); };
    return NoPreloading;
}());
/**
 * The preloader optimistically loads all router configurations to
 * make navigations into lazily-loaded sections of the application faster.
 *
 * The preloader runs in the background. When the router bootstraps, the preloader
 * starts listening to all navigation events. After every such event, the preloader
 * will check if any configurations can be loaded lazily.
 *
 * If a route is protected by `canLoad` guards, the preloaded will not load it.
 *
 * \@publicApi
 */
var RouterPreloader = /** @class */ (function () {
    function RouterPreloader(router, moduleLoader, compiler, injector, preloadingStrategy) {
        this.router = router;
        this.injector = injector;
        this.preloadingStrategy = preloadingStrategy;
        /** @type {?} */
        var onStartLoad = function (r) { return router.triggerEvent(new RouteConfigLoadStart(r)); };
        /** @type {?} */
        var onEndLoad = function (r) { return router.triggerEvent(new RouteConfigLoadEnd(r)); };
        this.loader = new RouterConfigLoader(moduleLoader, compiler, onStartLoad, onEndLoad);
    }
    /**
     * @return {?}
     */
    RouterPreloader.prototype.setUpPreloading = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription =
            this.router.events
                .pipe(rxjs_operators.filter(function (e) { return e instanceof NavigationEnd; }), rxjs_operators.concatMap(function () { return _this.preload(); }))
                .subscribe(function () { });
    };
    /**
     * @return {?}
     */
    RouterPreloader.prototype.preload = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ngModule = this.injector.get(_angular_core.NgModuleRef);
        return this.processRoutes(ngModule, this.router.config);
    };
    // TODO(jasonaden): This class relies on code external to the class to call setUpPreloading. If
    // this hasn't been done, ngOnDestroy will fail as this.subscription will be undefined. This
    // should be refactored.
    /**
     * @return {?}
     */
    RouterPreloader.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { this.subscription.unsubscribe(); };
    /**
     * @param {?} ngModule
     * @param {?} routes
     * @return {?}
     */
    RouterPreloader.prototype.processRoutes = /**
     * @param {?} ngModule
     * @param {?} routes
     * @return {?}
     */
    function (ngModule, routes) {
        /** @type {?} */
        var res = [];
        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
            var route = routes_1[_i];
            // we already have the config loaded, just recurse
            if (route.loadChildren && !route.canLoad && route._loadedConfig) {
                /** @type {?} */
                var childConfig = route._loadedConfig;
                res.push(this.processRoutes(childConfig.module, childConfig.routes));
                // no config loaded, fetch the config
            }
            else if (route.loadChildren && !route.canLoad) {
                res.push(this.preloadConfig(ngModule, route));
                // recurse into children
            }
            else if (route.children) {
                res.push(this.processRoutes(ngModule, route.children));
            }
        }
        return rxjs.from(res).pipe(rxjs_operators.mergeAll(), rxjs_operators.map(function (_) { return void 0; }));
    };
    /**
     * @param {?} ngModule
     * @param {?} route
     * @return {?}
     */
    RouterPreloader.prototype.preloadConfig = /**
     * @param {?} ngModule
     * @param {?} route
     * @return {?}
     */
    function (ngModule, route) {
        var _this = this;
        return this.preloadingStrategy.preload(route, function () {
            /** @type {?} */
            var loaded$ = _this.loader.load(ngModule.injector, route);
            return loaded$.pipe(rxjs_operators.mergeMap(function (config) {
                route._loadedConfig = config;
                return _this.processRoutes(config.module, config.routes);
            }));
        });
    };
    RouterPreloader.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    RouterPreloader.ctorParameters = function () { return [
        { type: Router },
        { type: _angular_core.NgModuleFactoryLoader },
        { type: _angular_core.Compiler },
        { type: _angular_core.Injector },
        { type: PreloadingStrategy }
    ]; };
    return RouterPreloader;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var RouterScroller = /** @class */ (function () {
    function RouterScroller(router, viewportScroller, options) {
        if (options === void 0) { options = {}; }
        this.router = router;
        this.viewportScroller = viewportScroller;
        this.options = options;
        this.lastId = 0;
        this.lastSource = 'imperative';
        this.restoredId = 0;
        this.store = {};
        // Default both options to 'disabled'
        options.scrollPositionRestoration = options.scrollPositionRestoration || 'disabled';
        options.anchorScrolling = options.anchorScrolling || 'disabled';
    }
    /**
     * @return {?}
     */
    RouterScroller.prototype.init = /**
     * @return {?}
     */
    function () {
        // we want to disable the automatic scrolling because having two places
        // responsible for scrolling results race conditions, especially given
        // that browser don't implement this behavior consistently
        if (this.options.scrollPositionRestoration !== 'disabled') {
            this.viewportScroller.setHistoryScrollRestoration('manual');
        }
        this.routerEventsSubscription = this.createScrollEvents();
        this.scrollEventsSubscription = this.consumeScrollEvents();
    };
    /**
     * @return {?}
     */
    RouterScroller.prototype.createScrollEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.router.events.subscribe(function (e) {
            if (e instanceof NavigationStart) {
                // store the scroll position of the current stable navigations.
                _this.store[_this.lastId] = _this.viewportScroller.getScrollPosition();
                _this.lastSource = e.navigationTrigger;
                _this.restoredId = e.restoredState ? e.restoredState.navigationId : 0;
            }
            else if (e instanceof NavigationEnd) {
                _this.lastId = e.id;
                _this.scheduleScrollEvent(e, _this.router.parseUrl(e.urlAfterRedirects).fragment);
            }
        });
    };
    /**
     * @return {?}
     */
    RouterScroller.prototype.consumeScrollEvents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.router.events.subscribe(function (e) {
            if (!(e instanceof Scroll))
                return;
            // a popstate event. The pop state event will always ignore anchor scrolling.
            if (e.position) {
                if (_this.options.scrollPositionRestoration === 'top') {
                    _this.viewportScroller.scrollToPosition([0, 0]);
                }
                else if (_this.options.scrollPositionRestoration === 'enabled') {
                    _this.viewportScroller.scrollToPosition(e.position);
                }
                // imperative navigation "forward"
            }
            else {
                if (e.anchor && _this.options.anchorScrolling === 'enabled') {
                    _this.viewportScroller.scrollToAnchor(e.anchor);
                }
                else if (_this.options.scrollPositionRestoration !== 'disabled') {
                    _this.viewportScroller.scrollToPosition([0, 0]);
                }
            }
        });
    };
    /**
     * @param {?} routerEvent
     * @param {?} anchor
     * @return {?}
     */
    RouterScroller.prototype.scheduleScrollEvent = /**
     * @param {?} routerEvent
     * @param {?} anchor
     * @return {?}
     */
    function (routerEvent, anchor) {
        this.router.triggerEvent(new Scroll(routerEvent, this.lastSource === 'popstate' ? this.store[this.restoredId] : null, anchor));
    };
    /**
     * @return {?}
     */
    RouterScroller.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.routerEventsSubscription) {
            this.routerEventsSubscription.unsubscribe();
        }
        if (this.scrollEventsSubscription) {
            this.scrollEventsSubscription.unsubscribe();
        }
    };
    return RouterScroller;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** *
 * \@description
 *
 * Contains a list of directives
 *
 *
  @type {?} */
var ROUTER_DIRECTIVES = [RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive, EmptyOutletComponent];
/** *
 * \@description
 *
 * Is used in DI to configure the router.
 *
 * \@publicApi
  @type {?} */
var ROUTER_CONFIGURATION = new _angular_core.InjectionToken('ROUTER_CONFIGURATION');
/** *
 * \@docsNotRequired
  @type {?} */
var ROUTER_FORROOT_GUARD = new _angular_core.InjectionToken('ROUTER_FORROOT_GUARD');
/** @type {?} */
var ROUTER_PROVIDERS = [
    _angular_common.Location,
    { provide: UrlSerializer, useClass: DefaultUrlSerializer },
    {
        provide: Router,
        useFactory: setupRouter,
        deps: [
            _angular_core.ApplicationRef, UrlSerializer, ChildrenOutletContexts, _angular_common.Location, _angular_core.Injector,
            _angular_core.NgModuleFactoryLoader, _angular_core.Compiler, ROUTES, ROUTER_CONFIGURATION,
            [UrlHandlingStrategy, new _angular_core.Optional()], [RouteReuseStrategy, new _angular_core.Optional()]
        ]
    },
    ChildrenOutletContexts,
    { provide: ActivatedRoute, useFactory: rootRoute, deps: [Router] },
    { provide: _angular_core.NgModuleFactoryLoader, useClass: _angular_core.SystemJsNgModuleLoader },
    RouterPreloader,
    NoPreloading,
    PreloadAllModules,
    { provide: ROUTER_CONFIGURATION, useValue: { enableTracing: false } },
];
/**
 * @return {?}
 */
function routerNgProbeToken() {
    return new _angular_core.NgProbeToken('Router', Router);
}
/**
 * \@usageNotes
 *
 * RouterModule can be imported multiple times: once per lazily-loaded bundle.
 * Since the router deals with a global shared resource--location, we cannot have
 * more than one router service active.
 *
 * That is why there are two ways to create the module: `RouterModule.forRoot` and
 * `RouterModule.forChild`.
 *
 * * `forRoot` creates a module that contains all the directives, the given routes, and the router
 *   service itself.
 * * `forChild` creates a module that contains all the directives and the given routes, but does not
 *   include the router service.
 *
 * When registered at the root, the module should be used as follows
 *
 * ```
 * \@NgModule({
 *   imports: [RouterModule.forRoot(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * For submodules and lazy loaded submodules the module should be used as follows:
 *
 * ```
 * \@NgModule({
 *   imports: [RouterModule.forChild(ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * \@description
 *
 * Adds router directives and providers.
 *
 * Managing state transitions is one of the hardest parts of building applications. This is
 * especially true on the web, where you also need to ensure that the state is reflected in the URL.
 * In addition, we often want to split applications into multiple bundles and load them on demand.
 * Doing this transparently is not trivial.
 *
 * The Angular router solves these problems. Using the router, you can declaratively specify
 * application states, manage state transitions while taking care of the URL, and load bundles on
 * demand.
 *
 * [Read this developer guide](https://angular.io/docs/ts/latest/guide/router.html) to get an
 * overview of how the router should be used.
 *
 * \@publicApi
 */
var RouterModule = /** @class */ (function () {
    // Note: We are injecting the Router so it gets created eagerly...
    function RouterModule(guard, router) {
    }
    /**
     * Creates a module with all the router providers and directives. It also optionally sets up an
     * application listener to perform an initial navigation.
     *
     * Options (see `ExtraOptions`):
     * * `enableTracing` makes the router log all its internal events to the console.
     * * `useHash` enables the location strategy that uses the URL fragment instead of the history
     * API.
     * * `initialNavigation` disables the initial navigation.
     * * `errorHandler` provides a custom error handler.
     * * `preloadingStrategy` configures a preloading strategy (see `PreloadAllModules`).
     * * `onSameUrlNavigation` configures how the router handles navigation to the current URL. See
     * `ExtraOptions` for more details.
     * * `paramsInheritanceStrategy` defines how the router merges params, data and resolved data
     * from parent to child routes.
     */
    /**
     * Creates a module with all the router providers and directives. It also optionally sets up an
     * application listener to perform an initial navigation.
     *
     * Options (see `ExtraOptions`):
     * * `enableTracing` makes the router log all its internal events to the console.
     * * `useHash` enables the location strategy that uses the URL fragment instead of the history
     * API.
     * * `initialNavigation` disables the initial navigation.
     * * `errorHandler` provides a custom error handler.
     * * `preloadingStrategy` configures a preloading strategy (see `PreloadAllModules`).
     * * `onSameUrlNavigation` configures how the router handles navigation to the current URL. See
     * `ExtraOptions` for more details.
     * * `paramsInheritanceStrategy` defines how the router merges params, data and resolved data
     * from parent to child routes.
     * @param {?} routes
     * @param {?=} config
     * @return {?}
     */
    RouterModule.forRoot = /**
     * Creates a module with all the router providers and directives. It also optionally sets up an
     * application listener to perform an initial navigation.
     *
     * Options (see `ExtraOptions`):
     * * `enableTracing` makes the router log all its internal events to the console.
     * * `useHash` enables the location strategy that uses the URL fragment instead of the history
     * API.
     * * `initialNavigation` disables the initial navigation.
     * * `errorHandler` provides a custom error handler.
     * * `preloadingStrategy` configures a preloading strategy (see `PreloadAllModules`).
     * * `onSameUrlNavigation` configures how the router handles navigation to the current URL. See
     * `ExtraOptions` for more details.
     * * `paramsInheritanceStrategy` defines how the router merges params, data and resolved data
     * from parent to child routes.
     * @param {?} routes
     * @param {?=} config
     * @return {?}
     */
    function (routes, config) {
        return {
            ngModule: RouterModule,
            providers: [
                ROUTER_PROVIDERS,
                provideRoutes(routes),
                {
                    provide: ROUTER_FORROOT_GUARD,
                    useFactory: provideForRootGuard,
                    deps: [[Router, new _angular_core.Optional(), new _angular_core.SkipSelf()]]
                },
                { provide: ROUTER_CONFIGURATION, useValue: config ? config : {} },
                {
                    provide: _angular_common.LocationStrategy,
                    useFactory: provideLocationStrategy,
                    deps: [
                        _angular_common.PlatformLocation, [new _angular_core.Inject(_angular_common.APP_BASE_HREF), new _angular_core.Optional()], ROUTER_CONFIGURATION
                    ]
                },
                {
                    provide: RouterScroller,
                    useFactory: createRouterScroller,
                    deps: [Router, _angular_common.ViewportScroller, ROUTER_CONFIGURATION]
                },
                {
                    provide: PreloadingStrategy,
                    useExisting: config && config.preloadingStrategy ? config.preloadingStrategy :
                        NoPreloading
                },
                { provide: _angular_core.NgProbeToken, multi: true, useFactory: routerNgProbeToken },
                provideRouterInitializer(),
            ],
        };
    };
    /**
     * Creates a module with all the router directives and a provider registering routes.
     */
    /**
     * Creates a module with all the router directives and a provider registering routes.
     * @param {?} routes
     * @return {?}
     */
    RouterModule.forChild = /**
     * Creates a module with all the router directives and a provider registering routes.
     * @param {?} routes
     * @return {?}
     */
    function (routes) {
        return { ngModule: RouterModule, providers: [provideRoutes(routes)] };
    };
    RouterModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: ROUTER_DIRECTIVES,
                    exports: ROUTER_DIRECTIVES,
                    entryComponents: [EmptyOutletComponent]
                },] },
    ];
    /** @nocollapse */
    RouterModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [ROUTER_FORROOT_GUARD,] }] },
        { type: Router, decorators: [{ type: _angular_core.Optional }] }
    ]; };
    return RouterModule;
}());
/**
 * @param {?} router
 * @param {?} viewportScroller
 * @param {?} config
 * @return {?}
 */
function createRouterScroller(router, viewportScroller, config) {
    if (config.scrollOffset) {
        viewportScroller.setOffset(config.scrollOffset);
    }
    return new RouterScroller(router, viewportScroller, config);
}
/**
 * @param {?} platformLocationStrategy
 * @param {?} baseHref
 * @param {?=} options
 * @return {?}
 */
function provideLocationStrategy(platformLocationStrategy, baseHref, options) {
    if (options === void 0) { options = {}; }
    return options.useHash ? new _angular_common.HashLocationStrategy(platformLocationStrategy, baseHref) :
        new _angular_common.PathLocationStrategy(platformLocationStrategy, baseHref);
}
/**
 * @param {?} router
 * @return {?}
 */
function provideForRootGuard(router) {
    if (router) {
        throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
    }
    return 'guarded';
}
/**
 * \@description
 *
 * Registers routes.
 *
 * \@usageNotes
 * ### Example
 *
 * ```
 * \@NgModule({
 *   imports: [RouterModule.forChild(ROUTES)],
 *   providers: [provideRoutes(EXTRA_ROUTES)]
 * })
 * class MyNgModule {}
 * ```
 *
 * \@publicApi
 * @param {?} routes
 * @return {?}
 */
function provideRoutes(routes) {
    return [
        { provide: _angular_core.ANALYZE_FOR_ENTRY_COMPONENTS, multi: true, useValue: routes },
        { provide: ROUTES, multi: true, useValue: routes },
    ];
}
/**
 * \@description
 *
 * Represents options to configure the router.
 *
 * \@publicApi
 * @record
 */

/**
 * @param {?} ref
 * @param {?} urlSerializer
 * @param {?} contexts
 * @param {?} location
 * @param {?} injector
 * @param {?} loader
 * @param {?} compiler
 * @param {?} config
 * @param {?=} opts
 * @param {?=} urlHandlingStrategy
 * @param {?=} routeReuseStrategy
 * @return {?}
 */
function setupRouter(ref, urlSerializer, contexts, location, injector, loader, compiler, config, opts, urlHandlingStrategy, routeReuseStrategy) {
    if (opts === void 0) { opts = {}; }
    /** @type {?} */
    var router = new Router(null, urlSerializer, contexts, location, injector, loader, compiler, flatten(config));
    if (urlHandlingStrategy) {
        router.urlHandlingStrategy = urlHandlingStrategy;
    }
    if (routeReuseStrategy) {
        router.routeReuseStrategy = routeReuseStrategy;
    }
    if (opts.errorHandler) {
        router.errorHandler = opts.errorHandler;
    }
    if (opts.malformedUriErrorHandler) {
        router.malformedUriErrorHandler = opts.malformedUriErrorHandler;
    }
    if (opts.enableTracing) {
        /** @type {?} */
        var dom_1 = _angular_platformBrowser.ɵgetDOM();
        router.events.subscribe(function (e) {
            dom_1.logGroup("Router Event: " + ((/** @type {?} */ (e.constructor))).name);
            dom_1.log(e.toString());
            dom_1.log(e);
            dom_1.logGroupEnd();
        });
    }
    if (opts.onSameUrlNavigation) {
        router.onSameUrlNavigation = opts.onSameUrlNavigation;
    }
    if (opts.paramsInheritanceStrategy) {
        router.paramsInheritanceStrategy = opts.paramsInheritanceStrategy;
    }
    if (opts.urlUpdateStrategy) {
        router.urlUpdateStrategy = opts.urlUpdateStrategy;
    }
    if (opts.relativeLinkResolution) {
        router.relativeLinkResolution = opts.relativeLinkResolution;
    }
    return router;
}
/**
 * @param {?} router
 * @return {?}
 */
function rootRoute(router) {
    return router.routerState.root;
}
/**
 * To initialize the router properly we need to do in two steps:
 *
 * We need to start the navigation in a APP_INITIALIZER to block the bootstrap if
 * a resolver or a guards executes asynchronously. Second, we need to actually run
 * activation in a BOOTSTRAP_LISTENER. We utilize the afterPreactivation
 * hook provided by the router to do that.
 *
 * The router navigation starts, reaches the point when preactivation is done, and then
 * pauses. It waits for the hook to be resolved. We then resolve it only in a bootstrap listener.
 */
var RouterInitializer = /** @class */ (function () {
    function RouterInitializer(injector) {
        this.injector = injector;
        this.initNavigation = false;
        this.resultOfPreactivationDone = new rxjs.Subject();
    }
    /**
     * @return {?}
     */
    RouterInitializer.prototype.appInitializer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var p = this.injector.get(_angular_common.LOCATION_INITIALIZED, Promise.resolve(null));
        return p.then(function () {
            /** @type {?} */
            var resolve = /** @type {?} */ ((null));
            /** @type {?} */
            var res = new Promise(function (r) { return resolve = r; });
            /** @type {?} */
            var router = _this.injector.get(Router);
            /** @type {?} */
            var opts = _this.injector.get(ROUTER_CONFIGURATION);
            if (_this.isLegacyDisabled(opts) || _this.isLegacyEnabled(opts)) {
                resolve(true);
            }
            else if (opts.initialNavigation === 'disabled') {
                router.setUpLocationChangeListener();
                resolve(true);
            }
            else if (opts.initialNavigation === 'enabled') {
                router.hooks.afterPreactivation = function () {
                    // only the initial navigation should be delayed
                    if (!_this.initNavigation) {
                        _this.initNavigation = true;
                        resolve(true);
                        return _this.resultOfPreactivationDone;
                        // subsequent navigations should not be delayed
                    }
                    else {
                        return /** @type {?} */ (rxjs.of(null));
                    }
                };
                router.initialNavigation();
            }
            else {
                throw new Error("Invalid initialNavigation options: '" + opts.initialNavigation + "'");
            }
            return res;
        });
    };
    /**
     * @param {?} bootstrappedComponentRef
     * @return {?}
     */
    RouterInitializer.prototype.bootstrapListener = /**
     * @param {?} bootstrappedComponentRef
     * @return {?}
     */
    function (bootstrappedComponentRef) {
        /** @type {?} */
        var opts = this.injector.get(ROUTER_CONFIGURATION);
        /** @type {?} */
        var preloader = this.injector.get(RouterPreloader);
        /** @type {?} */
        var routerScroller = this.injector.get(RouterScroller);
        /** @type {?} */
        var router = this.injector.get(Router);
        /** @type {?} */
        var ref = this.injector.get(_angular_core.ApplicationRef);
        if (bootstrappedComponentRef !== ref.components[0]) {
            return;
        }
        if (this.isLegacyEnabled(opts)) {
            router.initialNavigation();
        }
        else if (this.isLegacyDisabled(opts)) {
            router.setUpLocationChangeListener();
        }
        preloader.setUpPreloading();
        routerScroller.init();
        router.resetRootComponentType(ref.componentTypes[0]);
        this.resultOfPreactivationDone.next(/** @type {?} */ ((null)));
        this.resultOfPreactivationDone.complete();
    };
    /**
     * @param {?} opts
     * @return {?}
     */
    RouterInitializer.prototype.isLegacyEnabled = /**
     * @param {?} opts
     * @return {?}
     */
    function (opts) {
        return opts.initialNavigation === 'legacy_enabled' || opts.initialNavigation === true ||
            opts.initialNavigation === undefined;
    };
    /**
     * @param {?} opts
     * @return {?}
     */
    RouterInitializer.prototype.isLegacyDisabled = /**
     * @param {?} opts
     * @return {?}
     */
    function (opts) {
        return opts.initialNavigation === 'legacy_disabled' || opts.initialNavigation === false;
    };
    RouterInitializer.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    RouterInitializer.ctorParameters = function () { return [
        { type: _angular_core.Injector }
    ]; };
    return RouterInitializer;
}());
/**
 * @param {?} r
 * @return {?}
 */
function getAppInitializer(r) {
    return r.appInitializer.bind(r);
}
/**
 * @param {?} r
 * @return {?}
 */
function getBootstrapListener(r) {
    return r.bootstrapListener.bind(r);
}
/** *
 * A token for the router initializer that will be called after the app is bootstrapped.
 *
 * \@publicApi
  @type {?} */
var ROUTER_INITIALIZER = new _angular_core.InjectionToken('Router Initializer');
/**
 * @return {?}
 */
function provideRouterInitializer() {
    return [
        RouterInitializer,
        {
            provide: _angular_core.APP_INITIALIZER,
            multi: true,
            useFactory: getAppInitializer,
            deps: [RouterInitializer]
        },
        { provide: ROUTER_INITIALIZER, useFactory: getBootstrapListener, deps: [RouterInitializer] },
        { provide: _angular_core.APP_BOOTSTRAP_LISTENER, multi: true, useExisting: ROUTER_INITIALIZER },
    ];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** *
 * \@publicApi
  @type {?} */
var VERSION = new _angular_core.Version('7.1.0-beta.2-da59206995');

exports.RouterLink = RouterLink;
exports.RouterLinkWithHref = RouterLinkWithHref;
exports.RouterLinkActive = RouterLinkActive;
exports.RouterOutlet = RouterOutlet;
exports.ActivationEnd = ActivationEnd;
exports.ActivationStart = ActivationStart;
exports.ChildActivationEnd = ChildActivationEnd;
exports.ChildActivationStart = ChildActivationStart;
exports.GuardsCheckEnd = GuardsCheckEnd;
exports.GuardsCheckStart = GuardsCheckStart;
exports.NavigationCancel = NavigationCancel;
exports.NavigationEnd = NavigationEnd;
exports.NavigationError = NavigationError;
exports.NavigationStart = NavigationStart;
exports.ResolveEnd = ResolveEnd;
exports.ResolveStart = ResolveStart;
exports.RouteConfigLoadEnd = RouteConfigLoadEnd;
exports.RouteConfigLoadStart = RouteConfigLoadStart;
exports.RouterEvent = RouterEvent;
exports.RoutesRecognized = RoutesRecognized;
exports.Scroll = Scroll;
exports.RouteReuseStrategy = RouteReuseStrategy;
exports.Router = Router;
exports.ROUTES = ROUTES;
exports.ROUTER_CONFIGURATION = ROUTER_CONFIGURATION;
exports.ROUTER_INITIALIZER = ROUTER_INITIALIZER;
exports.RouterModule = RouterModule;
exports.provideRoutes = provideRoutes;
exports.ChildrenOutletContexts = ChildrenOutletContexts;
exports.OutletContext = OutletContext;
exports.NoPreloading = NoPreloading;
exports.PreloadAllModules = PreloadAllModules;
exports.PreloadingStrategy = PreloadingStrategy;
exports.RouterPreloader = RouterPreloader;
exports.ActivatedRoute = ActivatedRoute;
exports.ActivatedRouteSnapshot = ActivatedRouteSnapshot;
exports.RouterState = RouterState;
exports.RouterStateSnapshot = RouterStateSnapshot;
exports.PRIMARY_OUTLET = PRIMARY_OUTLET;
exports.convertToParamMap = convertToParamMap;
exports.UrlHandlingStrategy = UrlHandlingStrategy;
exports.DefaultUrlSerializer = DefaultUrlSerializer;
exports.UrlSegment = UrlSegment;
exports.UrlSegmentGroup = UrlSegmentGroup;
exports.UrlSerializer = UrlSerializer;
exports.UrlTree = UrlTree;
exports.VERSION = VERSION;
exports.ɵEmptyOutletComponent = EmptyOutletComponent;
exports.ɵROUTER_PROVIDERS = ROUTER_PROVIDERS;
exports.ɵflatten = flatten;
exports.ɵa = ROUTER_FORROOT_GUARD;
exports.ɵh = RouterInitializer;
exports.ɵc = createRouterScroller;
exports.ɵi = getAppInitializer;
exports.ɵj = getBootstrapListener;
exports.ɵe = provideForRootGuard;
exports.ɵd = provideLocationStrategy;
exports.ɵk = provideRouterInitializer;
exports.ɵg = rootRoute;
exports.ɵb = routerNgProbeToken;
exports.ɵf = setupRouter;
exports.ɵn = RouterScroller;
exports.ɵl = Tree;
exports.ɵm = TreeNode;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=router.umd.js.map
