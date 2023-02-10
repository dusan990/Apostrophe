const getTextNodesFrom = (selection: any) => {
   let nodes: Array<object> = [];

   function childrenIterator(node: any) {
      if (node.children) {
         node.children.forEach((child) => {
            childrenIterator(child);
         });
      } else {
         if (node.type === "TEXT") {
            (nodes as unknown as any[]).push(node);
         }
      }
   }

   selection.forEach((selectedNode) => childrenIterator(selectedNode));
   return nodes;
};

export default getTextNodesFrom;