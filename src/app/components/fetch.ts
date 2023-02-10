import { proxyServer } from './proxy';

export default async function fetchFromUrl(url:string) {
   await fetch(`${proxyServer}${url}`)
   .then((data) => (
      data.text()))
   .then((text) => {
      try {
         let response = JSON.parse(text)
         parent.postMessage(
            { pluginMessage: { 
               type: "save-data-to-local-storage", 
               data: response
            } },"*"
         );
      } catch(error) {
         console.log(error)
      }
   })
}