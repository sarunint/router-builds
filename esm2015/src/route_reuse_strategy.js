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
var DetachedRouteHandle;
export { DetachedRouteHandle };
/** @typedef {?} */
var DetachedRouteHandleInternal;
export { DetachedRouteHandleInternal };
/**
 * \@description
 *
 * Provides a way to customize when activated routes get reused.
 *
 * \@publicApi
 * @abstract
 */
export class RouteReuseStrategy {
}
if (false) {
    /**
     * Determines if this route (and its subtree) should be detached to be reused later
     * @abstract
     * @param {?} route
     * @return {?}
     */
    RouteReuseStrategy.prototype.shouldDetach = function (route) { };
    /**
     * Stores the detached route.
     *
     * Storing a `null` value should erase the previously stored value.
     * @abstract
     * @param {?} route
     * @param {?} handle
     * @return {?}
     */
    RouteReuseStrategy.prototype.store = function (route, handle) { };
    /**
     * Determines if this route (and its subtree) should be reattached
     * @abstract
     * @param {?} route
     * @return {?}
     */
    RouteReuseStrategy.prototype.shouldAttach = function (route) { };
    /**
     * Retrieves the previously stored route
     * @abstract
     * @param {?} route
     * @return {?}
     */
    RouteReuseStrategy.prototype.retrieve = function (route) { };
    /**
     * Determines if a route should be reused
     * @abstract
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    RouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) { };
}
/**
 * Does not detach any subtrees. Reuses routes as long as their route config is the same.
 */
export class DefaultRouteReuseStrategy {
    /**
     * @param {?} route
     * @return {?}
     */
    shouldDetach(route) { return false; }
    /**
     * @param {?} route
     * @param {?} detachedTree
     * @return {?}
     */
    store(route, detachedTree) { }
    /**
     * @param {?} route
     * @return {?}
     */
    shouldAttach(route) { return false; }
    /**
     * @param {?} route
     * @return {?}
     */
    retrieve(route) { return null; }
    /**
     * @param {?} future
     * @param {?} curr
     * @return {?}
     */
    shouldReuseRoute(future, curr) {
        return future.routeConfig === curr.routeConfig;
    }
}
//# sourceMappingURL=route_reuse_strategy.js.map