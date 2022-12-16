import { loadFontsAsync, once, on, showUI } from '@create-figma-plugin/utilities'
import { CloseHandler, AddStringsHandler } from './types'
import mobileStrings from './mobileStrings'
import webStrings from './webStrings'

export default function() {
  let array:any = [];
  let count = 0;
  
  on<AddStringsHandler>('SOMETHING', function () {
    const textNodes = findAllTextNodes(figma.currentPage);
    const targetTextNodes = textNodes.filter((textNode) => {
  
      async function nodes(textNode:any) {
        await figma.loadFontAsync(textNode.fontName)

        for(let property in mobileStrings) {
          if(`_${property}` === textNode.name) {
            console.log(property)
            
            if(mobileStrings[property] !== textNode.characters) {
              count = count + 1
              array.push(property)
            }
            
            if(count < 1) {
              return message('No strings to edit');
            }

            textNode.characters = mobileStrings[property]
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

    
    figma.currentPage.selection = targetTextNodes;
    
    function findAllTextNodes(pageNode: PageNode): TextNode[] {
      return pageNode.findAll((node) => {
        return node.type === 'TEXT';
      }) as TextNode[];
    }
  })

  let message = (msg:string) => {
    figma.ui.postMessage(msg)
  }

  const options = { width: 300, height: 370, themeColors: true }
  showUI(options)
}
