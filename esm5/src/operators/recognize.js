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
import { map, mergeMap } from 'rxjs/operators';
import { recognize as recognizeFn } from '../recognize';
/**
 * @param {?} rootComponentType
 * @param {?} config
 * @param {?} serializer
 * @param {?} paramsInheritanceStrategy
 * @param {?} relativeLinkResolution
 * @return {?}
 */
export function recognize(rootComponentType, config, serializer, paramsInheritanceStrategy, relativeLinkResolution) {
    return function (source) {
        return source.pipe(mergeMap(function (t) { return recognizeFn(rootComponentType, config, t.urlAfterRedirects, serializer(t.urlAfterRedirects), paramsInheritanceStrategy, relativeLinkResolution)
            .pipe(map(function (targetSnapshot) { return (tslib_1.__assign({}, t, { targetSnapshot: targetSnapshot })); })); }));
    };
}
//# sourceMappingURL=recognize.js.map