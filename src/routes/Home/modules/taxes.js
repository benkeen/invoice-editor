/**
 * I put this here for illustration only. The taxes could possibly change based on the user's location etc, so
 * putting a blank reducer here that always returns the default tax (0.05) is kinda reasonable.
 */

export default function taxReducer (state = 0.05, action) {
  return state;
}
