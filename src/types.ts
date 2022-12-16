import { EventHandler } from '@create-figma-plugin/utilities'

export interface AddStringsHandler extends EventHandler {
  name: 'SOMETHING'
  handler: () => void
}

export interface JustClickHandler extends EventHandler {
  name: 'PROMPT'
  handler: () => void
}

export interface CloseHandler extends EventHandler {
  name: 'CLOSE'
  handler: () => void
}
