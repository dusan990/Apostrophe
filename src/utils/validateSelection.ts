export type SelectionState =
	| 'VALID'
	| 'EMPTY'

export function validateSelection(
	selection: ReadonlyArray<SceneNode>
): SelectionState {
   if (selection.length > 0) {
      return 'VALID'
   }else {
		return 'EMPTY'
	}
}