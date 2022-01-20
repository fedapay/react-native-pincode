"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetInternalStates = exports.PinResultStatus = void 0;
const async_storage_1 = require("@react-native-async-storage/async-storage");
var PinResultStatus;
(function (PinResultStatus) {
    PinResultStatus["initial"] = "initial";
    PinResultStatus["success"] = "success";
    PinResultStatus["failure"] = "failure";
    PinResultStatus["locked"] = "locked";
})(PinResultStatus = exports.PinResultStatus || (exports.PinResultStatus = {}));
exports.resetInternalStates = async (asyncStorageKeys) => {
    return await async_storage_1.default.multiRemove(asyncStorageKeys);
};
