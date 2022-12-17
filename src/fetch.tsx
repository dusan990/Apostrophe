import { emit } from "@create-figma-plugin/utilities";

export default async function getJsonFile(url:string) {
   try {
      let response = await fetch(url);
      let responseJson = await response.json();
      emit('SAVE', responseJson)
   } catch(error) {
      console.error(error);
   }
}