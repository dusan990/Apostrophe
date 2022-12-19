export type SelectionState =
   | 'MULTIPLE'
   | 'VALID'
   | 'INVALID'
   | 'HAS_COMPONENT_CHILD'
   | 'IS_WITHIN_COMPONENT'
   | 'IS_WITHIN_INSTANCE'
   | 'EMPTY'

export function validateSelection(
   selection: ReadonlyArray<SceneNode>,
): SelectionState {
   if (selection.length > 1) {
      return 'MULTIPLE'
   } else {
      return 'EMPTY'
   }
}