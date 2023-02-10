/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/components/createText.ts":
/*!******************************************!*\
  !*** ./src/app/components/createText.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getTextNodesFrom = (selection) => {
    let nodes = [];
    function childrenIterator(node) {
        if (node.children) {
            node.children.forEach((child) => {
                childrenIterator(child);
            });
        }
        else {
            if (node.type === "TEXT") {
                nodes.push(node);
            }
        }
    }
    selection.forEach((selectedNode) => childrenIterator(selectedNode));
    return nodes;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTextNodesFrom);


/***/ }),

/***/ "./src/app/components/search.ts":
/*!**************************************!*\
  !*** ./src/app/components/search.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let results = [];
const findEntries = (value, searchTerm) => {
    results = [];
    Object.entries(value).filter(entries => {
        if (entries[0].toLowerCase().replace(/\b'|'\b|\b’|’\b/g, '').includes(searchTerm.toLowerCase().replace(/\b'|'\b|\b’|’\b/g, ''))
            ||
                entries[1].toLowerCase().replace(/\b'|'\b|\b’|’\b/g, '').includes(searchTerm.toLowerCase().replace(/\b'|'\b|\b’|’\b/g, ''))) {
            let newEntries = entries.map(function (entry) { return entry.replace(/'/g, "’"); });
            ;
            results.push(newEntries);
        }
    });
    return results;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findEntries);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_components_createText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/components/createText */ "./src/app/components/createText.ts");
/* harmony import */ var _app_components_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/components/search */ "./src/app/components/search.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const options = {
    width: 300,
    height: 500,
    themeColors: true
};
figma.showUI(__html__, options);
figma.ui.onmessage = (msg) => {
    let count = 0;
    let selectedTextNodeArray = [];
    const selectedNodes = (0,_app_components_createText__WEBPACK_IMPORTED_MODULE_0__["default"])(figma.currentPage.selection);
    if (msg.type === "update-strings-in-figma") {
        const targetTextNodes = selectedNodes.filter((textNode) => {
            function nodes(textNode) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield figma.loadFontAsync(textNode.fontName);
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
                    return;
                });
            }
            selectedTextNodeArray = [];
            nodes(textNode);
        });
        return targetTextNodes;
    }
    if (msg.type === "existing-keys-on-page") {
        let nodesArray = [];
        function greet(callback) {
            selectedNodes.filter(textNode => {
                const node = textNode.name;
                if (node.startsWith('_')) {
                    const duplicate = nodesArray.some(node => node.name === textNode.name);
                    if (!duplicate) {
                        nodesArray.push(textNode);
                    }
                }
            });
            callback();
        }
        function callMe() {
            nodesArray.forEach(textNode => {
                calcnodes(textNode);
            });
            console.log(nodesArray);
            function calcnodes(textNode) {
                return __awaiter(this, void 0, void 0, function* () {
                    const text = figma.createText();
                    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
                    text.name = textNode.name;
                    text.characters = textNode.characters;
                    text.fontSize = 16;
                    text.fills = [{ type: 'SOLID', color: { r: 0.48, g: 0.38, b: 1 } }];
                    console.log(textNode.name);
                    figma.viewport.scrollAndZoomIntoView([text]);
                });
            }
        }
        greet(callMe);
    }
    if (msg.type === "add-text-to-figma") {
        const targetTextNodes = selectedNodes.filter((textNode) => {
            function nodes(textNode) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield figma.loadFontAsync(textNode.fontName);
                    textNode.name = `_${msg.data[0]}`;
                    textNode.characters = `${msg.data[1]}`;
                });
            }
            nodes(textNode);
        });
        return targetTextNodes;
    }
    if (msg.type === "save-data-to-local-storage") {
        figma.clientStorage.setAsync("data", msg.data.en);
    }
    if (msg.type === "save-url-to-local-storage") {
        figma.clientStorage.setAsync("url", msg.data);
    }
    if (msg.type === "get-data-from-local-storage") {
        figma.clientStorage.getAsync("data").then(data => {
            figma.ui.postMessage({
                type: "send-data-from-local-storage",
                message: (0,_app_components_search__WEBPACK_IMPORTED_MODULE_1__["default"])(data, msg.data)
            });
        });
    }
};
figma.on('run', function () {
    setTimeout(() => {
        figma.clientStorage.getAsync("url").then(url => {
            if (url != undefined) {
                figma.ui.postMessage({
                    type: "get-url-from-local-storage",
                    message: url,
                });
            }
            else {
                console.log("URL does not exist.");
            }
        });
    }, 100);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNqQmhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGtDQUFrQztBQUM5RjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQ2QzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUM0RDtBQUNUO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixzRUFBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsbUNBQW1DO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx3QkFBd0IsMEJBQTBCO0FBQ3RGO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFlBQVk7QUFDcEQsNkNBQTZDLFlBQVk7QUFDekQsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtFQUFXO0FBQ3BDLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlLy4vc3JjL2FwcC9jb21wb25lbnRzL2NyZWF0ZVRleHQudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlLy4vc3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC50cyIsIndlYnBhY2s6Ly9maWdtYS1wbHVnaW4tcmVhY3QtdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maWdtYS1wbHVnaW4tcmVhY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maWdtYS1wbHVnaW4tcmVhY3QtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maWdtYS1wbHVnaW4tcmVhY3QtdGVtcGxhdGUvLi9zcmMvcGx1Z2luL2NvbnRyb2xsZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0VGV4dE5vZGVzRnJvbSA9IChzZWxlY3Rpb24pID0+IHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICBmdW5jdGlvbiBjaGlsZHJlbkl0ZXJhdG9yKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbkl0ZXJhdG9yKGNoaWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJURVhUXCIpIHtcbiAgICAgICAgICAgICAgICBub2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNlbGVjdGlvbi5mb3JFYWNoKChzZWxlY3RlZE5vZGUpID0+IGNoaWxkcmVuSXRlcmF0b3Ioc2VsZWN0ZWROb2RlKSk7XG4gICAgcmV0dXJuIG5vZGVzO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdldFRleHROb2Rlc0Zyb207XG4iLCJsZXQgcmVzdWx0cyA9IFtdO1xuY29uc3QgZmluZEVudHJpZXMgPSAodmFsdWUsIHNlYXJjaFRlcm0pID0+IHtcbiAgICByZXN1bHRzID0gW107XG4gICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZpbHRlcihlbnRyaWVzID0+IHtcbiAgICAgICAgaWYgKGVudHJpZXNbMF0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXGInfCdcXGJ8XFxi4oCZfOKAmVxcYi9nLCAnJykuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcYid8J1xcYnxcXGLigJl84oCZXFxiL2csICcnKSlcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgICAgICAgZW50cmllc1sxXS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcYid8J1xcYnxcXGLigJl84oCZXFxiL2csICcnKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxiJ3wnXFxifFxcYuKAmXzigJlcXGIvZywgJycpKSkge1xuICAgICAgICAgICAgbGV0IG5ld0VudHJpZXMgPSBlbnRyaWVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHsgcmV0dXJuIGVudHJ5LnJlcGxhY2UoLycvZywgXCLigJlcIik7IH0pO1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKG5ld0VudHJpZXMpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG59O1xuZXhwb3J0IGRlZmF1bHQgZmluZEVudHJpZXM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IGdldFRleHROb2Rlc0Zyb20gZnJvbSBcIi4uL2FwcC9jb21wb25lbnRzL2NyZWF0ZVRleHRcIjtcbmltcG9ydCBmaW5kRW50cmllcyBmcm9tIFwiLi4vYXBwL2NvbXBvbmVudHMvc2VhcmNoXCI7XG5jb25zdCBvcHRpb25zID0ge1xuICAgIHdpZHRoOiAzMDAsXG4gICAgaGVpZ2h0OiA1MDAsXG4gICAgdGhlbWVDb2xvcnM6IHRydWVcbn07XG5maWdtYS5zaG93VUkoX19odG1sX18sIG9wdGlvbnMpO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgbGV0IHNlbGVjdGVkVGV4dE5vZGVBcnJheSA9IFtdO1xuICAgIGNvbnN0IHNlbGVjdGVkTm9kZXMgPSBnZXRUZXh0Tm9kZXNGcm9tKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbik7XG4gICAgaWYgKG1zZy50eXBlID09PSBcInVwZGF0ZS1zdHJpbmdzLWluLWZpZ21hXCIpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGV4dE5vZGVzID0gc2VsZWN0ZWROb2Rlcy5maWx0ZXIoKHRleHROb2RlKSA9PiB7XG4gICAgICAgICAgICBmdW5jdGlvbiBub2Rlcyh0ZXh0Tm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmModGV4dE5vZGUuZm9udE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25zO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwiZGF0YVwiKS50aGVuKGRhdGEgPT4gdHJhbnNsYXRpb25zID0gZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdHJhbnNsYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGBfJHtwcm9wZXJ0eX1gID09PSB0ZXh0Tm9kZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2xhdGlvbnNbcHJvcGVydHldICE9PSB0ZXh0Tm9kZS5jaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudCA9IGNvdW50ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGV4dE5vZGVBcnJheS5wdXNoKHByb3BlcnR5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5jaGFyYWN0ZXJzID0gdHJhbnNsYXRpb25zW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0ZWRUZXh0Tm9kZUFycmF5ID0gW107XG4gICAgICAgICAgICBub2Rlcyh0ZXh0Tm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0VGV4dE5vZGVzO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiZXhpc3Rpbmcta2V5cy1vbi1wYWdlXCIpIHtcbiAgICAgICAgbGV0IG5vZGVzQXJyYXkgPSBbXTtcbiAgICAgICAgZnVuY3Rpb24gZ3JlZXQoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNlbGVjdGVkTm9kZXMuZmlsdGVyKHRleHROb2RlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlID0gdGV4dE5vZGUubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS5zdGFydHNXaXRoKCdfJykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlID0gbm9kZXNBcnJheS5zb21lKG5vZGUgPT4gbm9kZS5uYW1lID09PSB0ZXh0Tm9kZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkdXBsaWNhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzQXJyYXkucHVzaCh0ZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY2FsbE1lKCkge1xuICAgICAgICAgICAgbm9kZXNBcnJheS5mb3JFYWNoKHRleHROb2RlID0+IHtcbiAgICAgICAgICAgICAgICBjYWxjbm9kZXModGV4dE5vZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub2Rlc0FycmF5KTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbGNub2Rlcyh0ZXh0Tm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Lm5hbWUgPSB0ZXh0Tm9kZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LmNoYXJhY3RlcnMgPSB0ZXh0Tm9kZS5jaGFyYWN0ZXJzO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LmZvbnRTaXplID0gMTY7XG4gICAgICAgICAgICAgICAgICAgIHRleHQuZmlsbHMgPSBbeyB0eXBlOiAnU09MSUQnLCBjb2xvcjogeyByOiAwLjQ4LCBnOiAwLjM4LCBiOiAxIH0gfV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRleHROb2RlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW3RleHRdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBncmVldChjYWxsTWUpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiYWRkLXRleHQtdG8tZmlnbWFcIikge1xuICAgICAgICBjb25zdCB0YXJnZXRUZXh0Tm9kZXMgPSBzZWxlY3RlZE5vZGVzLmZpbHRlcigodGV4dE5vZGUpID0+IHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIG5vZGVzKHRleHROb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh0ZXh0Tm9kZS5mb250TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHRleHROb2RlLm5hbWUgPSBgXyR7bXNnLmRhdGFbMF19YDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IGAke21zZy5kYXRhWzFdfWA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2Rlcyh0ZXh0Tm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0VGV4dE5vZGVzO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwic2F2ZS1kYXRhLXRvLWxvY2FsLXN0b3JhZ2VcIikge1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwiZGF0YVwiLCBtc2cuZGF0YS5lbik7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJzYXZlLXVybC10by1sb2NhbC1zdG9yYWdlXCIpIHtcbiAgICAgICAgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhcInVybFwiLCBtc2cuZGF0YSk7XG4gICAgfVxuICAgIGlmIChtc2cudHlwZSA9PT0gXCJnZXQtZGF0YS1mcm9tLWxvY2FsLXN0b3JhZ2VcIikge1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwiZGF0YVwiKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwic2VuZC1kYXRhLWZyb20tbG9jYWwtc3RvcmFnZVwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGZpbmRFbnRyaWVzKGRhdGEsIG1zZy5kYXRhKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5maWdtYS5vbigncnVuJywgZnVuY3Rpb24gKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwidXJsXCIpLnRoZW4odXJsID0+IHtcbiAgICAgICAgICAgIGlmICh1cmwgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImdldC11cmwtZnJvbS1sb2NhbC1zdG9yYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHVybCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVVJMIGRvZXMgbm90IGV4aXN0LlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMTAwKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9