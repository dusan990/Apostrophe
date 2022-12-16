import { loadFontsAsync, once, on, showUI } from '@create-figma-plugin/utilities'
import { CloseHandler, AddStringsHandler } from './types'
import * as mobileStrings from './mobileStrings.json'
import webStrings from './webStrings'

export default function() {
  const translations:any = mobileStrings.en;
  let array:any = [];
  let count = 0;
  
  on<AddStringsHandler>('SOMETHING', function () {
    function getTextNodesFrom(selection:any) {
      type BaseNode = TextNode;
      let nodes = [] as unknown as { name: string };

      function childrenIterator(node) {
        if (node.children) {
          node.children.forEach(child => {
            childrenIterator(child)
          })
        } else {
          if (node.type === 'TEXT') {
            (nodes as unknown as any[]).push(node)
            // nodes.push(node)
            // nodes.push({ id: node.id, characters: node.characters })
          }
        }
      }
    
      selection.forEach(item => childrenIterator(item))
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

    
    // figma.currentPage.selection = targetTextNodes;
    
    // function findAllTextNodes(pageNode: PageNode): TextNode[] {
    //   return pageNode.findAll((node) => {
    //     return node.type === 'TEXT';
    //   }) as TextNode[];
    // }
  })

  let message = (msg:string) => {
    figma.ui.postMessage(msg)
  }

  const options = { width: 300, height: 370, themeColors: true }
  showUI(options)
}
