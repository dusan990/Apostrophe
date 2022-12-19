(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function on(name, handler) {
    const id = `${currentId}`;
    currentId += 1;
    eventHandlers[id] = { handler, name };
    return function() {
      delete eventHandlers[id];
    };
  }
  function once(name, handler) {
    let done = false;
    return on(name, function(...args) {
      if (done === true) {
        return;
      }
      done = true;
      handler(...args);
    });
  }
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, currentId;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      currentId = 0;
      if (typeof window === "undefined") {
        figma.ui.onmessage = function([name, ...args]) {
          invokeEventHandler(name, args);
        };
      } else {
        window.onmessage = function(event) {
          if (typeof event.data.pluginMessage === "undefined") {
            return;
          }
          const [name, ...args] = event.data.pluginMessage;
          invokeEventHandler(name, args);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/settings.js
  async function loadSettingsAsync(defaultSettings, settingsKey = DEFAULT_SETTINGS_KEY) {
    const settings = await figma.clientStorage.getAsync(settingsKey);
    if (typeof settings === "undefined") {
      return defaultSettings;
    }
    return Object.assign({}, defaultSettings, settings);
  }
  async function saveSettingsAsync(settings, settingsKey = DEFAULT_SETTINGS_KEY) {
    await figma.clientStorage.setAsync(settingsKey, settings);
  }
  var DEFAULT_SETTINGS_KEY;
  var init_settings = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/settings.js"() {
      DEFAULT_SETTINGS_KEY = "settings";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/ui.js
  function showUI(options, data) {
    if (typeof __html__ === "undefined") {
      throw new Error("No UI defined");
    }
    const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === "undefined" ? "" : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === "undefined" ? {} : data)};${__html__}<\/script>`;
    figma.showUI(html, __spreadProps(__spreadValues({}, options), {
      themeColors: typeof options.themeColors === "undefined" ? true : options.themeColors
    }));
  }
  var init_ui = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/ui.js"() {
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_settings();
      init_ui();
    }
  });

  // src/utils/validateSelection.ts
  function validateSelection(selection) {
    if (selection.length > 0) {
      return "VALID";
    } else {
      return "EMPTY";
    }
  }
  var init_validateSelection = __esm({
    "src/utils/validateSelection.ts"() {
      "use strict";
    }
  });

  // src/main.ts
  var main_exports = {};
  __export(main_exports, {
    default: () => main_default
  });
  function main_default() {
    let array = [];
    let count = 0;
    const ERROR_MSG = {
      VALID: "....",
      EMPTY: "Select at least one type of element that has text."
    };
    loadSettingsAsync("savedTranslations").then(
      (key) => {
        return translations = key;
      }
    );
    const saveToLocalStorage = (data) => {
      saveSettingsAsync(data.en);
      console.log("data saved");
    };
    once("SAVE", saveToLocalStorage);
    on("UPDATEFIGMA", function() {
      const selection = figma.currentPage.selection;
      const state = validateSelection(selection);
      if (state === "EMPTY") {
        figma.notify(ERROR_MSG[state]);
      } else {
        const getTextNodesFrom = (selection2) => {
          if (selection2.length < 1) {
            return message("Select elements to update");
          } else {
            let childrenIterator2 = function(node) {
              if (node.children) {
                node.children.forEach((child) => {
                  childrenIterator2(child);
                });
              } else {
                if (node.type === "TEXT") {
                  nodes.push(node);
                }
              }
            };
            var childrenIterator = childrenIterator2;
            let nodes = [];
            selection2.forEach((selectedNode) => childrenIterator2(selectedNode));
            return nodes;
          }
        };
        const textNodes = getTextNodesFrom(selection);
        const targetTextNodes = textNodes.filter((textNode) => {
          async function nodes(textNode2) {
            await figma.loadFontAsync(textNode2.fontName);
            for (let property in translations) {
              console.log(translations);
              if (`_${property}` === textNode2.name) {
                if (translations[property] !== textNode2.characters) {
                  count = count + 1;
                  array.push(property);
                }
                textNode2.characters = translations[property];
              }
            }
            return message(
              `Done! Updated ${count} strings 
` + array.toString().replaceAll(",", "\n")
            );
          }
          count = 0;
          array = [];
          nodes(textNode);
        });
      }
    });
    let message = (msg) => {
      figma.ui.postMessage(msg);
    };
    const options = { width: 300, height: 370, themeColors: true };
    showUI(options);
  }
  var translations;
  var init_main = __esm({
    "src/main.ts"() {
      "use strict";
      init_lib();
      init_validateSelection();
    }
  });

  // <stdin>
  var modules = { "src/main.ts--default": (init_main(), __toCommonJS(main_exports))["default"] };
  var commandId = true ? "src/main.ts--default" : figma.command;
  modules[commandId]();
})();