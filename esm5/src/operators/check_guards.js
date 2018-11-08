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
import * as tslib_1 from "tslib";
import { defer, from, of } from 'rxjs';
import { concatAll, concatMap, first, map, mergeMap } from 'rxjs/operators';
import { ActivationStart, ChildActivationStart } from '../events';
import { wrapIntoObservable } from '../utils/collection';
import { getCanActivateChild, getToken } from '../utils/preactivation';
import { isBoolean, isCanActivate, isCanActivateChild, isCanDeactivate, isFunction } from '../utils/type_guards';
import { prioritizedGuardValue } from './prioritized_guard_value';
/**
 * @param {?} moduleInjector
 * @param {?=} forwardEvent
 * @return {?}
 */
export function checkGuards(moduleInjector, forwardEvent) {
    return function (source) {
        return source.pipe(mergeMap(function (t) {
            var targetSnapshot = t.targetSnapshot, currentSnapshot = t.currentSnapshot, _a = t.guards, canActivateChecks = _a.canActivateChecks, canDeactivateChecks = _a.canDeactivateChecks;
            if (canDeactivateChecks.length === 0 && canActivateChecks.length === 0) {
                return of(tslib_1.__assign({}, t, { guardsResult: true }));
            }
            return runCanDeactivateChecks(canDeactivateChecks, /** @type {?} */ ((targetSnapshot)), currentSnapshot, moduleInjector)
                .pipe(mergeMap(function (canDeactivate) {
                return canDeactivate && isBoolean(canDeactivate) ?
                    runCanActivateChecks(/** @type {?} */ ((targetSnapshot)), canActivateChecks, moduleInjector, forwardEvent) :
                    of(canDeactivate);
            }), map(function (guardsResult) { return (tslib_1.__assign({}, t, { guardsResult: guardsResult })); }));
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
    return from(checks).pipe(mergeMap(function (check) {
        return runCanDeactivate(check.component, check.route, currRSS, futureRSS, moduleInjector);
    }), first(function (result) { return result !== true; }, /** @type {?} */ (true)));
}
/**
 * @param {?} futureSnapshot
 * @param {?} checks
 * @param {?} moduleInjector
 * @param {?=} forwardEvent
 * @return {?}
 */
function runCanActivateChecks(futureSnapshot, checks, moduleInjector, forwardEvent) {
    return from(checks).pipe(concatMap(function (check) {
        return from([
            fireChildActivationStart(check.route.parent, forwardEvent),
            fireActivationStart(check.route, forwardEvent),
            runCanActivateChild(futureSnapshot, check.path, moduleInjector),
            runCanActivate(futureSnapshot, check.route, moduleInjector)
        ])
            .pipe(concatAll(), first(function (result) {
            return result !== true;
        }, /** @type {?} */ (true)));
    }), first(function (result) { return result !== true; }, /** @type {?} */ (true)));
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
    return of(true);
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
    return of(true);
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
        return of(true);
    /** @type {?} */
    var canActivateObservables = canActivate.map(function (c) {
        return defer(function () {
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
            return observable.pipe(first());
        });
    });
    return of(canActivateObservables).pipe(prioritizedGuardValue());
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
        return defer(function () {
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
                return observable.pipe(first());
            });
            return of(guardsMapped).pipe(prioritizedGuardValue());
        });
    });
    return of(canActivateChildGuardsMapped).pipe(prioritizedGuardValue());
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
        return of(true);
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
        return observable.pipe(first());
    });
    return of(canDeactivateObservables).pipe(prioritizedGuardValue());
}
//# sourceMappingURL=check_guards.js.map