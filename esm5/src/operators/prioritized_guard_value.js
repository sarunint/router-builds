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
import { combineLatest } from 'rxjs';
import { filter, map, scan, startWith, switchMap, take } from 'rxjs/operators';
import { isUrlTree } from '../utils/type_guards';
/** @type {?} */
var INITIAL_VALUE = Symbol('INITIAL_VALUE');
/**
 * @return {?}
 */
export function prioritizedGuardValue() {
    return switchMap(function (obs) {
        return /** @type {?} */ (combineLatest.apply(void 0, obs.map(function (o) { return o.pipe(take(1), startWith(/** @type {?} */ (INITIAL_VALUE))); })).pipe(scan(function (acc, list) {
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
        }, INITIAL_VALUE), filter(function (item) { return item !== INITIAL_VALUE; }), map(function (item) { return isUrlTree(item) ? item : item === true; }), //
        //
        take(1)));
    });
}
//# sourceMappingURL=prioritized_guard_value.js.map