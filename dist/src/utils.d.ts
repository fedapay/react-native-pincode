export declare enum PinResultStatus {
    initial = "initial",
    success = "success",
    failure = "failure",
    locked = "locked"
}
export declare const resetInternalStates: (asyncStorageKeys: string[]) => Promise<void>;
