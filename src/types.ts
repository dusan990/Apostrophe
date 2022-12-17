import { EventHandler } from '@create-figma-plugin/utilities'

export interface AddStringsHandler extends EventHandler {
  name: 'UPDATEFIGMA'
  handler: () => void
}

export interface SaveStringsToStorage extends EventHandler {
  name: 'SAVE'
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
