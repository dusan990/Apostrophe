import { useState } from 'react'
import { JSX } from 'preact'
import { on, once, showUI, loadSettingsAsync, saveSettingsAsync } from '@create-figma-plugin/utilities'
import { AddStringsHandler } from './types'
import * as mobileStrings from './mobileStrings.json'
import styles, { text } from './styles.css'

export default function() {
  const translations:any = mobileStrings.en;
  let array:any = [];
  let count = 0;
  
  function handleSubmit (data:any) {
    console.log(data)
  }
  once('SAVE', handleSubmit)

  on<AddStringsHandler>('UPDATEFIGMA', function () {

    function getTextNodesFrom(selection:any) {
      type BaseNode = TextNode;
      let nodes:Array<object> = [];

      function childrenIterator(node:any) {
        if (node.children) {
          node.children.forEach(child => {
            childrenIterator(child)
          })
        } else {
          if (node.type === 'TEXT') {
            (nodes as unknown as any[]).push(node)
          }
        }
      }
    
      selection.forEach(selectedNode => childrenIterator(selectedNode))
      return nodes
    }
    
    const textNodes = getTextNodesFrom(figma.currentPage.selection)
    
    const targetTextNodes = textNodes.filter((textNode) => {
      async function nodes(textNode:any) {
        await figma.loadFontAsync(textNode.fontName)
        
        for(let property in translations) {
          if(`_${property}` === textNode.name) {

            if(translations[property] !== textNode.characters) {
              count = count + 1
              array.push(property)
            }

            textNode.characters = translations[property]
          }
        }

        return message(
          'Done! ' + 'Updated ' + `${count}` + ' strings \n' + array.toString().replaceAll(",", "\n") 
        );
      }

      count = 0;
      array = [];
      nodes(textNode)
    });
  })

  let message = (msg:string) => {
    figma.ui.postMessage(msg)
  }

  const options = { width: 300, height: 370, themeColors: true }
  showUI(options)
}
