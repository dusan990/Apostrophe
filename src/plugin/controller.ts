import getTextNodesFrom from "../app/components/createText";
import findEntries from "../app/components/search";

const options = {
	width: 300,
	height: 500,
	themeColors: true
};

figma.showUI(__html__, options);

figma.ui.onmessage = (msg) => {
	let count = 0;
	let selectedTextNodeArray: any = [];
	const selectedNodes = getTextNodesFrom(figma.currentPage.selection)
	
	if(msg.type === "update-strings-in-figma") {
		const targetTextNodes = selectedNodes.filter((textNode) => {
			async function nodes(textNode: any) {
				await figma.loadFontAsync(textNode.fontName);
				let translations;
				figma.clientStorage.getAsync("data").then(data => translations = data);
				
				setTimeout(() => {
					for (let property in translations) {
						if (`_${property}` === textNode.name) {
							if (translations[property] !== textNode.characters) {
								count = count + 1;
								selectedTextNodeArray.push(property);
							}
							textNode.characters = translations[property];
						}
					}
				}, 50);


				return 
			}
			
			selectedTextNodeArray = [];
			nodes(textNode);
		});

		return targetTextNodes
	}
	
	if(msg.type === "existing-keys-on-page") {
		let nodesArray = [];

		function greet(callback) {
			selectedNodes.filter(textNode => {
				const node = textNode.name;
				if(node.startsWith('_')) {
					const duplicate = nodesArray.some(node => node.name === textNode.name);
	
					if(!duplicate) {
						nodesArray.push(textNode)
					}
				}
			})
			
			callback();
		}

		function callMe() {
			nodesArray.forEach(textNode => {
				calcnodes(textNode)
			})
			console.log(nodesArray)
			async function calcnodes(textNode) {
				const text = figma.createText();
				await figma.loadFontAsync({ family: "Inter", style: "Regular" })
				text.name = textNode.name;
				text.characters = textNode.characters;
				text.fontSize = 16;
				text.fills = [{ type: 'SOLID', color: { r: 0.48, g: 0.38, b: 1 } }];
				console.log(textNode.name)
				figma.viewport.scrollAndZoomIntoView([text]);
			}
		}

		greet(callMe);
	}
	
	if (msg.type === "add-text-to-figma") {
		const targetTextNodes = selectedNodes.filter((textNode) => {
			async function nodes(textNode: any) {
				await figma.loadFontAsync(textNode.fontName);
						textNode.name = `_${msg.data[0]}`;
						textNode.characters = `${msg.data[1]}`;
			}
			nodes(textNode)
		})
		
		return targetTextNodes
	}

	if (msg.type === "save-data-to-local-storage") {
		figma.clientStorage.setAsync("data", msg.data.en)
	}

	if (msg.type === "save-url-to-local-storage") {
		figma.clientStorage.setAsync("url", msg.data)
	}

	if (msg.type === "get-data-from-local-storage") {
		figma.clientStorage.getAsync("data").then(data => {
			figma.ui.postMessage({
				type: "send-data-from-local-storage",
				message: findEntries(data, msg.data)
			});
		})
	}
};

figma.on('run', function() {
	setTimeout(() => {
		figma.clientStorage.getAsync("url").then(url => {
			if (url != undefined) {
				figma.ui.postMessage({
					type: "get-url-from-local-storage",
					message: url,
				});
			} else {
				console.log("URL does not exist.")
			}
		});	
	}, 100);
})

// const icon = fs.readFileSync('./icon.png', 'base64');

// figma.clientStorage.setAsync('icon', icon).then(() => {
//   console.log('Icon set');
// });
