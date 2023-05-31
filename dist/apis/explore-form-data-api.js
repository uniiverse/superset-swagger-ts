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
exports.ExploreFormDataApi = exports.ExploreFormDataApiFactory = exports.ExploreFormDataApiFp = exports.ExploreFormDataApiAxiosParamCreator = void 0;
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
 * ExploreFormDataApi - axios parameter creator
 * @export
 */
var ExploreFormDataApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Deletes a form_data.
         * @param {string} key The form_data key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExploreFormDataKeyDelete: function (key, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, query, key_1, key_2, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    // verify required parameter 'key' is not null or undefined
                    if (key === null || key === undefined) {
                        throw new base_1.RequiredError('key', 'Required parameter key was null or undefined when calling apiV1ExploreFormDataKeyDelete.');
                    }
                    localVarPath = "/api/v1/explore/form_data/{key}"
                        .replace("{".concat("key", "}"), encodeURIComponent(String(key)));
                    localVarUrlObj = new URL(localVarPath, 'https://example.com');
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'DELETE' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    query = new URLSearchParams(localVarUrlObj.search);
                    for (key_1 in localVarQueryParameter) {
                        query.set(key_1, localVarQueryParameter[key_1]);
                    }
                    for (key_2 in options.params) {
                        query.set(key_2, options.params[key_2]);
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
         * Retrives a form_data.
         * @param {string} key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExploreFormDataKeyGet: function (key, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, query, key_3, key_4, headersFromBaseOptions;
                return __generator(this, function (_a) {
                    // verify required parameter 'key' is not null or undefined
                    if (key === null || key === undefined) {
                        throw new base_1.RequiredError('key', 'Required parameter key was null or undefined when calling apiV1ExploreFormDataKeyGet.');
                    }
                    localVarPath = "/api/v1/explore/form_data/{key}"
                        .replace("{".concat("key", "}"), encodeURIComponent(String(key)));
                    localVarUrlObj = new URL(localVarPath, 'https://example.com');
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    query = new URLSearchParams(localVarUrlObj.search);
                    for (key_3 in localVarQueryParameter) {
                        query.set(key_3, localVarQueryParameter[key_3]);
                    }
                    for (key_4 in options.params) {
                        query.set(key_4, options.params[key_4]);
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
         * Updates an existing form_data.
         * @param {FormDataPutSchema} body
         * @param {string} key
         * @param {number} [tabId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExploreFormDataKeyPut: function (body, key, tabId, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, query, key_5, key_6, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_a) {
                    // verify required parameter 'body' is not null or undefined
                    if (body === null || body === undefined) {
                        throw new base_1.RequiredError('body', 'Required parameter body was null or undefined when calling apiV1ExploreFormDataKeyPut.');
                    }
                    // verify required parameter 'key' is not null or undefined
                    if (key === null || key === undefined) {
                        throw new base_1.RequiredError('key', 'Required parameter key was null or undefined when calling apiV1ExploreFormDataKeyPut.');
                    }
                    localVarPath = "/api/v1/explore/form_data/{key}"
                        .replace("{".concat("key", "}"), encodeURIComponent(String(key)));
                    localVarUrlObj = new URL(localVarPath, 'https://example.com');
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'PUT' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    // authentication jwt required
                    if (tabId !== undefined) {
                        localVarQueryParameter['tab_id'] = tabId;
                    }
                    localVarHeaderParameter['Content-Type'] = 'application/json';
                    query = new URLSearchParams(localVarUrlObj.search);
                    for (key_5 in localVarQueryParameter) {
                        query.set(key_5, localVarQueryParameter[key_5]);
                    }
                    for (key_6 in options.params) {
                        query.set(key_6, options.params[key_6]);
                    }
                    localVarUrlObj.search = (new URLSearchParams(query)).toString();
                    headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                    localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                    needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                    localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                    return [2 /*return*/, {
                            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
        /**
         * Stores a new form_data.
         * @param {FormDataPostSchema} body
         * @param {number} [tabId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExploreFormDataPost: function (body, tabId, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, query, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_a) {
                    // verify required parameter 'body' is not null or undefined
                    if (body === null || body === undefined) {
                        throw new base_1.RequiredError('body', 'Required parameter body was null or undefined when calling apiV1ExploreFormDataPost.');
                    }
                    localVarPath = "/api/v1/explore/form_data";
                    localVarUrlObj = new URL(localVarPath, 'https://example.com');
                    if (configuration) {
                        baseOptions = configuration.baseOptions;
                    }
                    localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                    localVarHeaderParameter = {};
                    localVarQueryParameter = {};
                    // authentication jwt required
                    if (tabId !== undefined) {
                        localVarQueryParameter['tab_id'] = tabId;
                    }
                    localVarHeaderParameter['Content-Type'] = 'application/json';
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
                    needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
                    localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                    return [2 /*return*/, {
                            url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                            options: localVarRequestOptions,
                        }];
                });
            });
        },
    };
};
exports.ExploreFormDataApiAxiosParamCreator = ExploreFormDataApiAxiosParamCreator;
/**
 * ExploreFormDataApi - functional programming interface
 * @export
 */
var ExploreFormDataApiFp = function (configuration) {
    return {
        /**
         * Deletes a form_data.
         * @param {string} key The form_data key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExploreFormDataKeyDelete: function (key, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.ExploreFormDataApiAxiosParamCreator)(configuration).apiV1ExploreFormDataKeyDelete(key, options)];
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
         * Retrives a form_data.
         * @param {string} key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExploreFormDataKeyGet: function (key, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.ExploreFormDataApiAxiosParamCreator)(configuration).apiV1ExploreFormDataKeyGet(key, options)];
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
         * Updates an existing form_data.
         * @param {FormDataPutSchema} body
         * @param {string} key
         * @param {number} [tabId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExploreFormDataKeyPut: function (body, key, tabId, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.ExploreFormDataApiAxiosParamCreator)(configuration).apiV1ExploreFormDataKeyPut(body, key, tabId, options)];
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
         * Stores a new form_data.
         * @param {FormDataPostSchema} body
         * @param {number} [tabId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExploreFormDataPost: function (body, tabId, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, exports.ExploreFormDataApiAxiosParamCreator)(configuration).apiV1ExploreFormDataPost(body, tabId, options)];
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
exports.ExploreFormDataApiFp = ExploreFormDataApiFp;
/**
 * ExploreFormDataApi - factory interface
 * @export
 */
var ExploreFormDataApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Deletes a form_data.
         * @param {string} key The form_data key.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExploreFormDataKeyDelete: function (key, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.ExploreFormDataApiFp)(configuration).apiV1ExploreFormDataKeyDelete(key, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         * Retrives a form_data.
         * @param {string} key
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExploreFormDataKeyGet: function (key, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.ExploreFormDataApiFp)(configuration).apiV1ExploreFormDataKeyGet(key, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         * Updates an existing form_data.
         * @param {FormDataPutSchema} body
         * @param {string} key
         * @param {number} [tabId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExploreFormDataKeyPut: function (body, key, tabId, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.ExploreFormDataApiFp)(configuration).apiV1ExploreFormDataKeyPut(body, key, tabId, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
        /**
         * Stores a new form_data.
         * @param {FormDataPostSchema} body
         * @param {number} [tabId]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1ExploreFormDataPost: function (body, tabId, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, (0, exports.ExploreFormDataApiFp)(configuration).apiV1ExploreFormDataPost(body, tabId, options).then(function (request) { return request(axios, basePath); })];
                });
            });
        },
    };
};
exports.ExploreFormDataApiFactory = ExploreFormDataApiFactory;
/**
 * ExploreFormDataApi - object-oriented interface
 * @export
 * @class ExploreFormDataApi
 * @extends {BaseAPI}
 */
var ExploreFormDataApi = /** @class */ (function (_super) {
    __extends(ExploreFormDataApi, _super);
    function ExploreFormDataApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Deletes a form_data.
     * @param {string} key The form_data key.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExploreFormDataApi
     */
    ExploreFormDataApi.prototype.apiV1ExploreFormDataKeyDelete = function (key, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.ExploreFormDataApiFp)(this.configuration).apiV1ExploreFormDataKeyDelete(key, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * Retrives a form_data.
     * @param {string} key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExploreFormDataApi
     */
    ExploreFormDataApi.prototype.apiV1ExploreFormDataKeyGet = function (key, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.ExploreFormDataApiFp)(this.configuration).apiV1ExploreFormDataKeyGet(key, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * Updates an existing form_data.
     * @param {FormDataPutSchema} body
     * @param {string} key
     * @param {number} [tabId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExploreFormDataApi
     */
    ExploreFormDataApi.prototype.apiV1ExploreFormDataKeyPut = function (body, key, tabId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.ExploreFormDataApiFp)(this.configuration).apiV1ExploreFormDataKeyPut(body, key, tabId, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    /**
     * Stores a new form_data.
     * @param {FormDataPostSchema} body
     * @param {number} [tabId]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ExploreFormDataApi
     */
    ExploreFormDataApi.prototype.apiV1ExploreFormDataPost = function (body, tabId, options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, (0, exports.ExploreFormDataApiFp)(this.configuration).apiV1ExploreFormDataPost(body, tabId, options).then(function (request) { return request(_this.axios, _this.basePath); })];
            });
        });
    };
    return ExploreFormDataApi;
}(base_1.BaseAPI));
exports.ExploreFormDataApi = ExploreFormDataApi;
