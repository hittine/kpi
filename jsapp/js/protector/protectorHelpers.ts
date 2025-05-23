import { UNSAVED_CHANGES_WARNING } from '#/protector/protectorConstants'

/**
 * This is a companion piece of code for workProtector that allows to safeguard
 * a single callback that will cause loosing work, but isn't necessarily causing
 * navigation.
 */
class ProtectorHelpers {
  /** Safeguards the callback function with a confirm if protection is on. */
  safeExecute(shouldProtect: boolean, callback: Function) {
    if (shouldProtect) {
      if (confirm(UNSAVED_CHANGES_WARNING)) {
        callback()
      }
    } else {
      callback()
    }
  }
}

const protectorHelpers = new ProtectorHelpers()

export default protectorHelpers
