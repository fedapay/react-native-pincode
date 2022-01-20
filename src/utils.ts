import AsyncStorage from '@react-native-async-storage/async-storage'

export enum PinResultStatus {
  initial = 'initial',
  success = 'success',
  failure = 'failure',
  locked = 'locked'
}

export const resetInternalStates = async (asyncStorageKeys: string[]) => {
  return await AsyncStorage.multiRemove(asyncStorageKeys)
}
