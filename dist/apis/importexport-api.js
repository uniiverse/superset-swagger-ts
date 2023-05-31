"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportexportApi = exports.ImportexportApiFactory = exports.ImportexportApiFp = exports.ImportexportApiAxiosParamCreator = void 0;
/* tslint:disable */
/* eslint-disable */
/**
 * Superset
 * Superset
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var base_1 = require("../base");
/**
 * ImportexportApi - axios parameter creator
 * @export
 */
var ImportexportApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Returns a ZIP file with all the Superset assets (databases, datasets, charts, dashboards, saved queries) as YAML files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AssetsExportGet: function (options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    localVarPath = "/api/v1/assets/export/";
                    localVarUrlObj = new URL(localVarPath, 'https://example.com');
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    query = new URLSearchParams(localVarUrlObj.search);
                    for (key in localVarQueryParameter) {
                        query.set(key, localVarQueryParameter[key]);
                    }
                    for (key in options.params) {
                        query.set(key, options.params[key]);
                    }
                    localVarUrlObj.search = (new URLSearchParams(query)).toString();
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    return [2 /*return*/, {
                            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
        /**
         *
         * @param {Blob} bundle
         * @param {string} passwords
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AssetsImportPostForm: function (bundle, passwords, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarFormParams, query, key, key, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    // verify required parameter 'bundle' is not null or undefined
                    if (bundle === null || bundle === undefined) {
                        throw new base_1.RequiredError('bundle', 'Required parameter bundle was null or undefined when calling apiV1AssetsImportPostForm.');
                    }
                    // verify required parameter 'passwords' is not null or undefined
                    if (passwords === null || passwords === undefined) {
                        throw new base_1.RequiredError('passwords', 'Required parameter passwords was null or undefined when calling apiV1AssetsImportPostForm.');
                    }
                    localVarPath = "/api/v1/assets/import/";
                    localVarUrlObj = new URL(localVarPath, 'https://example.com');
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    localVarFormParams = new FormData();
                    // authentication jwt required
                    if (bundle !== undefined) {
                        localVarFormParams.append('bundle', bundle);
                    }
                    if (passwords !== undefined) {
                        localVarFormParams.append('passwords', passwords);
                    }
                    localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
                    query = new URLSearchParams(localVarUrlObj.search);
                    for (key in localVarQueryParameter) {
                        query.set(key, localVarQueryParameter[key]);
                    }
                    for (key in options.params) {
                        query.set(key, options.params[key]);
                    }
                    localVarUrlObj.search = (new URLSearchParams(query)).toString();
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    localVarRequestOptions.data = localVarFormParams;
                    return [2 /*return*/, {
                            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
    };
};
exports.ImportexportApiAxiosParamCreator = ImportexportApiAxiosParamCreator;
/**
 * ImportexportApi - functional programming interface
 * @export
 */
var ImportexportApiFp = function (configuration) {
    return {
        /**
         * Returns a ZIP file with all the Superset assets (databases, datasets, charts, dashboards, saved queries) as YAML files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AssetsExportGet: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.ImportexportApiAxiosParamCreator)(configuration).apiV1AssetsExportGet(options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
        /**
         *
         * @param {Blob} bundle
         * @param {string} passwords
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AssetsImportPostForm: function (bundle, passwords, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.ImportexportApiAxiosParamCreator)(configuration).apiV1AssetsImportPostForm(bundle, passwords, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
    };
};
exports.ImportexportApiFp = ImportexportApiFp;
/**
 * ImportexportApi - factory interface
 * @export
 */
var ImportexportApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Returns a ZIP file with all the Superset assets (databases, datasets, charts, dashboards, saved queries) as YAML files.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AssetsExportGet: function (options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.ImportexportApiFp)(configuration).apiV1AssetsExportGet(options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         *
         * @param {Blob} bundle
         * @param {string} passwords
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1AssetsImportPostForm: function (bundle, passwords, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.ImportexportApiFp)(configuration).apiV1AssetsImportPostForm(bundle, passwords, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
    };
};
exports.ImportexportApiFactory = ImportexportApiFactory;
/**
 * ImportexportApi - object-oriented interface
 * @export
 * @class ImportexportApi
 * @extends {BaseAPI}
 */
var ImportexportApi = /** @class */ (function (_super) {
    __extends(ImportexportApi, _super);
    function ImportexportApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a ZIP file with all the Superset assets (databases, datasets, charts, dashboards, saved queries) as YAML files.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImportexportApi
     */
    ImportexportApi.prototype.apiV1AssetsExportGet = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.ImportexportApiFp)(this.configuration).apiV1AssetsExportGet(options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     *
     * @param {Blob} bundle
     * @param {string} passwords
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ImportexportApi
     */
    ImportexportApi.prototype.apiV1AssetsImportPostForm = function (bundle, passwords, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.ImportexportApiFp)(this.configuration).apiV1AssetsImportPostForm(bundle, passwords, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    return ImportexportApi;
}(base_1.BaseAPI));
exports.ImportexportApi = ImportexportApi;
