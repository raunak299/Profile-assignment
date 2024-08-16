/**
 * Checks of the window and document is ready in browser
 * @returns true if the browser is ready
 */
export const isBrowserReady = () => {
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    return true;
  } else {
    return false;
  }
};
