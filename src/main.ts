import { useState } from 'react';
import { on, once, showUI, loadSettingsAsync, saveSettingsAsync } from '@create-figma-plugin/utilities'
import { AddStringsHandler } from './types'
import { validateSelection, SelectionState } from './utils/validateSelection';
import * as mobileStrings from './mobileStrings.json'


export default function() {
	// const translations:any = mobileStrings.en;
	let translations:any;
	let array:any = [];
	let count = 0;
	const ERROR_MSG:{[type in SelectionState]: string} = {
		VALID: '....',
		EMPTY: 'Select at least one type of element that has text.'
	}
	
	loadSettingsAsync("savedTranslations").then(
		(key:any) => {
			return translations = key
		}
	)

	const saveToLocalStorage = (data:any) => {
		// saveSettingsAsync("savedTranslations", data)
		// console.log(data.en)
		saveSettingsAsync("savedTranslations" [,data.en])
		console.log('data saved')
	}
	once('SAVE', saveToLocalStorage)
	

	//adding strings to figma  
	on<AddStringsHandler>('UPDATEFIGMA', function() {
		const selection = figma.currentPage.selection
		const state: SelectionState = validateSelection(selection)

		if (state === 'EMPTY') {
			figma.notify(ERROR_MSG[state])
		} else {
			const getTextNodesFrom = (selection:any) => {
				if(selection.length < 1) {
					return message('Select elements to update')
				} else {
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
			}

			const textNodes = getTextNodesFrom(selection)
			
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
		
					//⚠️the function does not add any strings and returns the msg
					return message(
						'Done! ' + 'Updated ' + `${count}` + ' strings \n' + array.toString().replaceAll(",", "\n") 
					);
				}
		
				count = 0;
				array = [];
				nodes(textNode)
			});
		}
	})

	//message to plugin ui
	let message = (msg:string) => {
		figma.ui.postMessage(msg)
	}
	
	const options = { width: 300, height: 370, themeColors: true }
	showUI(options)
}