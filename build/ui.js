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
  var __spreadValues = (a3, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a3, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a3, prop, b3[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b3) => __defProps(a3, __getOwnPropDescs(b3));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
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

  // node_modules/preact/dist/preact.module.js
  function s(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function a(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function h(l3, u3, i3) {
    var t3, o3, r3, f3 = {};
    for (r3 in u3)
      "key" == r3 ? t3 = u3[r3] : "ref" == r3 ? o3 = u3[r3] : f3[r3] = u3[r3];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (r3 in l3.defaultProps)
        void 0 === f3[r3] && (f3[r3] = l3.defaultProps[r3]);
    return v(l3, f3, t3, o3, null);
  }
  function v(n2, i3, t3, o3, r3) {
    var f3 = { type: n2, props: i3, key: t3, ref: o3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r3 ? ++u : r3 };
    return null == r3 && null != l.vnode && l.vnode(f3), f3;
  }
  function p(n2) {
    return n2.children;
  }
  function d(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function _(n2, l3) {
    if (null == l3)
      return n2.__ ? _(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? _(n2) : null;
  }
  function k(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return k(n2);
    }
  }
  function b(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l3) {
        return n3.__v.__b - l3.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l3, u3, i3, t3, o3, r3;
        n3.__d && (o3 = (t3 = (l3 = n3).__v).__e, (r3 = l3.__P) && (u3 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r3, t3, i3, l3.__n, void 0 !== r3.ownerSVGElement, null != t3.__h ? [o3] : null, u3, null == o3 ? _(t3) : o3, t3.__h), z(u3, t3), t3.__e != o3 && k(t3)));
      });
  }
  function w(n2, l3, u3, i3, t3, o3, r3, c3, s2, a3) {
    var h2, y2, d3, k3, b3, g3, w3, x = i3 && i3.__k || e, C2 = x.length;
    for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
      if (null != (k3 = u3.__k[h2] = null == (k3 = l3[h2]) || "boolean" == typeof k3 ? null : "string" == typeof k3 || "number" == typeof k3 || "bigint" == typeof k3 ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(p, { children: k3 }, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, k3.ref ? k3.ref : null, k3.__v) : k3)) {
        if (k3.__ = u3, k3.__b = u3.__b + 1, null === (d3 = x[h2]) || d3 && k3.key == d3.key && k3.type === d3.type)
          x[h2] = void 0;
        else
          for (y2 = 0; y2 < C2; y2++) {
            if ((d3 = x[y2]) && k3.key == d3.key && k3.type === d3.type) {
              x[y2] = void 0;
              break;
            }
            d3 = null;
          }
        j(n2, k3, d3 = d3 || f, t3, o3, r3, c3, s2, a3), b3 = k3.__e, (y2 = k3.ref) && d3.ref != y2 && (w3 || (w3 = []), d3.ref && w3.push(d3.ref, null, k3), w3.push(y2, k3.__c || b3, k3)), null != b3 ? (null == g3 && (g3 = b3), "function" == typeof k3.type && k3.__k === d3.__k ? k3.__d = s2 = m(k3, s2, n2) : s2 = A(n2, k3, d3, x, b3, s2), "function" == typeof u3.type && (u3.__d = s2)) : s2 && d3.__e == s2 && s2.parentNode != n2 && (s2 = _(d3));
      }
    for (u3.__e = g3, h2 = C2; h2--; )
      null != x[h2] && N(x[h2], x[h2]);
    if (w3)
      for (h2 = 0; h2 < w3.length; h2++)
        M(w3[h2], w3[++h2], w3[++h2]);
  }
  function m(n2, l3, u3) {
    for (var i3, t3 = n2.__k, o3 = 0; t3 && o3 < t3.length; o3++)
      (i3 = t3[o3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function A(n2, l3, u3, i3, t3, o3) {
    var r3, f3, e3;
    if (void 0 !== l3.__d)
      r3 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != o3 || null == t3.parentNode)
      n:
        if (null == o3 || o3.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f3 = o3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, o3), r3 = o3;
        }
    return void 0 !== r3 ? r3 : t3.nextSibling;
  }
  function C(n2, l3, u3, i3, t3) {
    var o3;
    for (o3 in u3)
      "children" === o3 || "key" === o3 || o3 in l3 || H(n2, o3, null, u3[o3], i3);
    for (o3 in l3)
      t3 && "function" != typeof l3[o3] || "children" === o3 || "key" === o3 || "value" === o3 || "checked" === o3 || u3[o3] === l3[o3] || H(n2, o3, l3[o3], u3[o3], i3);
  }
  function $(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
  }
  function H(n2, l3, u3, i3, t3) {
    var o3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || $(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || $(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        o3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + o3] = u3, u3 ? i3 || n2.addEventListener(l3, o3 ? T : I, o3) : n2.removeEventListener(l3, o3 ? T : I, o3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && -1 == l3.indexOf("-") ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u3, i3, t3, o3, r3, f3, e3, c3) {
    var a3, h2, v3, y2, _3, k3, b3, g3, m3, x, A2, C2, $2, H2, I2, T3 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r3 = [e3]), (a3 = l.__b) && a3(u3);
    try {
      n:
        if ("function" == typeof T3) {
          if (g3 = u3.props, m3 = (a3 = T3.contextType) && t3[a3.__c], x = a3 ? m3 ? m3.props.value : a3.__ : t3, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in T3 && T3.prototype.render ? u3.__c = h2 = new T3(g3, x) : (u3.__c = h2 = new d(g3, x), h2.constructor = T3, h2.render = O), m3 && m3.sub(h2), h2.props = g3, h2.state || (h2.state = {}), h2.context = x, h2.__n = t3, v3 = h2.__d = true, h2.__h = [], h2._sb = []), null == h2.__s && (h2.__s = h2.state), null != T3.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s({}, h2.__s)), s(h2.__s, T3.getDerivedStateFromProps(g3, h2.__s))), y2 = h2.props, _3 = h2.state, v3)
            null == T3.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
          else {
            if (null == T3.getDerivedStateFromProps && g3 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g3, x), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g3, h2.__s, x) || u3.__v === i3.__v) {
              for (h2.props = g3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), A2 = 0; A2 < h2._sb.length; A2++)
                h2.__h.push(h2._sb[A2]);
              h2._sb = [], h2.__h.length && f3.push(h2);
              break n;
            }
            null != h2.componentWillUpdate && h2.componentWillUpdate(g3, h2.__s, x), null != h2.componentDidUpdate && h2.__h.push(function() {
              h2.componentDidUpdate(y2, _3, k3);
            });
          }
          if (h2.context = x, h2.props = g3, h2.__v = u3, h2.__P = n2, C2 = l.__r, $2 = 0, "prototype" in T3 && T3.prototype.render) {
            for (h2.state = h2.__s, h2.__d = false, C2 && C2(u3), a3 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
              h2.__h.push(h2._sb[H2]);
            h2._sb = [];
          } else
            do {
              h2.__d = false, C2 && C2(u3), a3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
            } while (h2.__d && ++$2 < 25);
          h2.state = h2.__s, null != h2.getChildContext && (t3 = s(s({}, t3), h2.getChildContext())), v3 || null == h2.getSnapshotBeforeUpdate || (k3 = h2.getSnapshotBeforeUpdate(y2, _3)), I2 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n2, Array.isArray(I2) ? I2 : [I2], u3, i3, t3, o3, r3, f3, e3, c3), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
        } else
          null == r3 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o3, r3, f3, c3);
      (a3 = l.diffed) && a3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != r3) && (u3.__e = e3, u3.__h = !!c3, r3[r3.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function z(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function L(l3, u3, i3, t3, o3, r3, e3, c3) {
    var s2, h2, v3, y2 = i3.props, p3 = u3.props, d3 = u3.type, k3 = 0;
    if ("svg" === d3 && (o3 = true), null != r3) {
      for (; k3 < r3.length; k3++)
        if ((s2 = r3[k3]) && "setAttribute" in s2 == !!d3 && (d3 ? s2.localName === d3 : 3 === s2.nodeType)) {
          l3 = s2, r3[k3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d3)
        return document.createTextNode(p3);
      l3 = o3 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r3 = null, c3 = false;
    }
    if (null === d3)
      y2 === p3 || c3 && l3.data === p3 || (l3.data = p3);
    else {
      if (r3 = r3 && n.call(l3.childNodes), h2 = (y2 = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c3) {
        if (null != r3)
          for (y2 = {}, k3 = 0; k3 < l3.attributes.length; k3++)
            y2[l3.attributes[k3].name] = l3.attributes[k3].value;
        (v3 || h2) && (v3 && (h2 && v3.__html == h2.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l3, p3, y2, o3, c3), v3)
        u3.__k = [];
      else if (k3 = u3.props.children, w(l3, Array.isArray(k3) ? k3 : [k3], u3, i3, t3, o3 && "foreignObject" !== d3, r3, e3, r3 ? r3[0] : i3.__k && _(i3, 0), c3), null != r3)
        for (k3 = r3.length; k3--; )
          null != r3[k3] && a(r3[k3]);
      c3 || ("value" in p3 && void 0 !== (k3 = p3.value) && (k3 !== l3.value || "progress" === d3 && !k3 || "option" === d3 && k3 !== y2.value) && H(l3, "value", k3, y2.value, false), "checked" in p3 && void 0 !== (k3 = p3.checked) && k3 !== l3.checked && H(l3, "checked", k3, y2.checked, false));
    }
    return l3;
  }
  function M(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function N(n2, u3, i3) {
    var t3, o3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null, n2.__c = void 0;
    }
    if (t3 = n2.__k)
      for (o3 = 0; o3 < t3.length; o3++)
        t3[o3] && N(t3[o3], u3, i3 || "function" != typeof n2.type);
    i3 || null == n2.__e || a(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function O(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function P(u3, i3, t3) {
    var o3, r3, e3;
    l.__ && l.__(u3, i3), r3 = (o3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, e3 = [], j(i3, u3 = (!o3 && t3 || i3).__k = h(p, null, [u3]), r3 || f, f, void 0 !== i3.ownerSVGElement, !o3 && t3 ? [t3] : r3 ? null : i3.firstChild ? n.call(i3.childNodes) : null, e3, !o3 && t3 ? t3 : r3 ? r3.__e : i3.firstChild, o3), z(e3, u3);
  }
  var n, l, u, i, t, o, r, f, e, c;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      f = {};
      e = [];
      c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = e.slice, l = { __e: function(n2, l3, u3, i3) {
        for (var t3, o3, r3; l3 = l3.__; )
          if ((t3 = l3.__c) && !t3.__)
            try {
              if ((o3 = t3.constructor) && null != o3.getDerivedStateFromError && (t3.setState(o3.getDerivedStateFromError(n2)), r3 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), r3 = t3.__d), r3)
                return t3.__E = t3;
            } catch (l4) {
              n2 = l4;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return null != n2 && void 0 === n2.constructor;
      }, d.prototype.setState = function(n2, l3) {
        var u3;
        u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n2 && (n2 = n2(s({}, u3), this.props)), n2 && s(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), b(this));
      }, d.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), b(this));
      }, d.prototype.render = p, t = [], g.__r = 0, r = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function d2(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function p2(n2) {
    return o2 = 1, y(B, n2);
  }
  function y(n2, u3, i3) {
    var o3 = d2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : B(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.u)) {
      r2.u = true;
      var f3 = r2.shouldComponentUpdate;
      r2.shouldComponentUpdate = function(n3, t3, r3) {
        if (!o3.__c.__H)
          return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !f3 || f3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o3.__c.props === n3) && (!f3 || f3.call(this, n3, t3, r3));
      };
    }
    return o3.__N || o3.__;
  }
  function _2(n2) {
    return o2 = 5, F(function() {
      return { current: n2 };
    }, []);
  }
  function F(n2, r3) {
    var u3 = d2(t2++, 7);
    return z2(u3.__H, r3) ? (u3.__V = n2(), u3.i = r3, u3.__h = n2, u3.__V) : u3.__;
  }
  function T2(n2, t3) {
    return o2 = 8, F(function() {
      return n2;
    }, t3);
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function z2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function B(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, g2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = [];
      e2 = l.__b;
      a2 = l.__r;
      v2 = l.diffed;
      l2 = l.__c;
      m2 = l.unmount;
      l.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, l.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
        })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
      }, l.diffed = function(t3) {
        v2 && v2(t3);
        var o3 = t3.__c;
        o3 && o3.__H && (o3.__H.__h.length && (1 !== f2.push(o3) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o3.__H.__.forEach(function(n2) {
          n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
        })), u2 = r2 = null;
      }, l.__c = function(t3, r3) {
        r3.some(function(t4) {
          try {
            t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
              return !n2.__ || w2(n2);
            });
          } catch (u3) {
            r3.some(function(n2) {
              n2.__h && (n2.__h = []);
            }), r3 = [], l.__e(u3, t4.__v);
          }
        }), l2 && l2(t3, r3);
      }, l.unmount = function(t3) {
        m2 && m2(t3);
        var r3, u3 = t3.__c;
        u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
          try {
            k2(n2);
          } catch (n3) {
            r3 = n3;
          }
        }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
      };
      g2 = "function" == typeof requestAnimationFrame;
    }
  });

  // ../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/366e6392-1f17-4816-a329-b31dd1c454ed/loading-indicator.js
  var loading_indicator_default;
  var init_loading_indicator = __esm({
    "../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/366e6392-1f17-4816-a329-b31dd1c454ed/loading-indicator.js"() {
      if (document.getElementById("9be0b4cdc3") === null) {
        const element = document.createElement("style");
        element.id = "9be0b4cdc3";
        element.textContent = `._loadingIndicator_pl5c3_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_pl5c3_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_pl5c3_1 0.5s linear infinite;
  fill: currentColor;
}

@keyframes _rotating_pl5c3_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixpREFBd0M7RUFDeEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZ0luZGljYXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgYW5pbWF0aW9uOiByb3RhdGluZyAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0aW5nIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      loading_indicator_default = { "loadingIndicator": "_loadingIndicator_pl5c3_1", "svg": "_svg_pl5c3_8", "rotating": "_rotating_pl5c3_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  function LoadingIndicator(_a) {
    var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: loading_indicator_default.loadingIndicator }), h("svg", { class: loading_indicator_default.svg, style: typeof color === "undefined" ? void 0 : {
      fill: `var(--figma-color-icon-${color})`
    } }, h("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })));
  }
  var init_loading_indicator2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_loading_indicator();
    }
  });

  // ../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/42605edb-dbfc-4d34-8136-a5d560ab8f47/button.js
  var button_default;
  var init_button = __esm({
    "../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/42605edb-dbfc-4d34-8136-a5d560ab8f47/button.js"() {
      if (document.getElementById("ff2b20e4ad") === null) {
        const element = document.createElement("style");
        element.id = "ff2b20e4ad";
        element.textContent = `._button_5fxgc_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}

._fullWidth_5fxgc_7 {
  display: block;
}

._button_5fxgc_1 button {
  display: inline-block;
  height: 32px;
  border-radius: var(--border-radius-6);
}

._disabled_5fxgc_17 button {
  cursor: not-allowed;
}

._fullWidth_5fxgc_7 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._default_5fxgc_29 button {
  padding: 0 14px;
  border: 2px solid transparent;
  background-color: var(--figma-color-bg-brand);
  color: var(--figma-color-text-onbrand);
  line-height: 28px;
}
._default_5fxgc_29:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-brand-strong);
}
._default_5fxgc_29._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 button {
  background-color: var(--figma-color-bg-danger);
  color: var(--figma-color-text-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._secondary_5fxgc_56 button {
  padding: 0 15px;
  border: 1px solid var(--figma-color-border-strong);
  background-color: transparent;
  color: var(--figma-color-text);
  line-height: 30px;
}
._secondary_5fxgc_56:not(._disabled_5fxgc_17) button:focus {
  padding: 0 14px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
  line-height: 28px;
}
._secondary_5fxgc_56._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 button {
  border-color: var(--figma-color-border-danger-strong);
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44:not(._disabled_5fxgc_17) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._loadingIndicator_5fxgc_86 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

._default_5fxgc_29 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-onbrand);
}
._default_5fxgc_29._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._default_5fxgc_29._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondanger);
}
._default_5fxgc_29._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-icon-ondisabled);
}

._secondary_5fxgc_56 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text);
}
._secondary_5fxgc_56._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._secondary_5fxgc_56._danger_5fxgc_44 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-danger);
}
._secondary_5fxgc_56._danger_5fxgc_44._disabled_5fxgc_17 ._loadingIndicator_5fxgc_86 {
  color: var(--figma-color-text-disabled);
}

._children_5fxgc_122 {
  display: inline;
}
._loading_5fxgc_86 ._children_5fxgc_122 {
  visibility: hidden;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsNkNBQTZDO0VBQzdDLHNDQUFzQztFQUN0QyxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG9EQUFvRDtBQUN0RDtBQUNBO0VBQ0UsZ0RBQWdEO0VBQ2hELHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLDhDQUE4QztFQUM5Qyx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHFEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsZ0RBQWdEO0VBQ2hELHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrREFBa0Q7RUFDbEQsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0RBQW9EO0VBQ3BELGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsdURBQXVEO0VBQ3ZELHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLHFEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsdURBQXVEO0VBQ3ZELHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFvQjtFQUNwQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiB2YXIoLS16LWluZGV4LTEpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mdWxsV2lkdGgge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJ1dHRvbiBidXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy02KTtcbn1cblxuLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5mdWxsV2lkdGggYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRlZmF1bHQgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctYnJhbmQpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1vbmJyYW5kKTtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG59XG4uZGVmYXVsdDpub3QoLmRpc2FibGVkKSBidXR0b246Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1icmFuZC1zdHJvbmcpO1xufVxuLmRlZmF1bHQuZGlzYWJsZWQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGlzYWJsZWQpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1vbmRpc2FibGVkKTtcbn1cblxuLmRlZmF1bHQuZGFuZ2VyIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWRhbmdlcik7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uZGFuZ2VyKTtcbn1cbi5kZWZhdWx0LmRhbmdlcjpub3QoLmRpc2FibGVkKSBidXR0b246Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kYW5nZXItc3Ryb25nKTtcbn1cbi5kZWZhdWx0LmRhbmdlci5kaXNhYmxlZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1kaXNhYmxlZCk7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LW9uZGlzYWJsZWQpO1xufVxuXG4uc2Vjb25kYXJ5IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLXN0cm9uZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLnNlY29uZGFyeTpub3QoLmRpc2FibGVkKSBidXR0b246Zm9jdXMge1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1icmFuZC1zdHJvbmcpO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbi5zZWNvbmRhcnkuZGlzYWJsZWQgYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGlzYWJsZWQtc3Ryb25nKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uc2Vjb25kYXJ5LmRhbmdlciBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kYW5nZXItc3Ryb25nKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGFuZ2VyKTtcbn1cbi5zZWNvbmRhcnkuZGFuZ2VyOm5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xufVxuLnNlY29uZGFyeS5kYW5nZXIuZGlzYWJsZWQgYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGlzYWJsZWQtc3Ryb25nKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4ubG9hZGluZ0luZGljYXRvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZGVmYXVsdCAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uYnJhbmQpO1xufVxuLmRlZmF1bHQuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRpc2FibGVkKTtcbn1cblxuLmRlZmF1bHQuZGFuZ2VyIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25kYW5nZXIpO1xufVxuLmRlZmF1bHQuZGFuZ2VyLmRpc2FibGVkIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG59XG4uc2Vjb25kYXJ5LmRpc2FibGVkIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uc2Vjb25kYXJ5LmRhbmdlciAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LWRhbmdlcik7XG59XG4uc2Vjb25kYXJ5LmRhbmdlci5kaXNhYmxlZCAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0LWRpc2FibGVkKTtcbn1cblxuLmNoaWxkcmVuIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLmxvYWRpbmcgLmNoaWxkcmVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuIl19 */`;
        document.head.append(element);
      }
      button_default = { "button": "_button_5fxgc_1", "fullWidth": "_fullWidth_5fxgc_7", "disabled": "_disabled_5fxgc_17", "default": "_default_5fxgc_29", "danger": "_danger_5fxgc_44", "secondary": "_secondary_5fxgc_56", "loadingIndicator": "_loadingIndicator_5fxgc_86", "children": "_children_5fxgc_122", "loading": "_loading_5fxgc_86" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  function Button(_a) {
    var _b = _a, { children, danger = false, disabled = false, fullWidth = false, loading = false, onClick, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "danger", "disabled", "fullWidth", "loading", "onClick", "propagateEscapeKeyDown", "secondary"]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [propagateEscapeKeyDown]);
    return h("div", { class: createClassName([
      button_default.button,
      secondary === true ? button_default.secondary : button_default.default,
      danger === true ? button_default.danger : null,
      fullWidth === true ? button_default.fullWidth : null,
      disabled === true ? button_default.disabled : null,
      loading === true ? button_default.loading : null
    ]) }, loading === true ? h("div", { class: button_default.loadingIndicator }, h(LoadingIndicator, null)) : null, h("button", __spreadProps(__spreadValues({}, rest), { disabled: disabled === true, onClick: disabled === true || loading === true ? void 0 : onClick, onKeyDown: disabled === true || loading === true ? void 0 : handleKeyDown, tabIndex: disabled === true ? -1 : 0 }), h("div", { class: button_default.children }, children)));
  }
  var init_button2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_loading_indicator2();
      init_button();
    }
  });

  // ../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/26bf7f43-88be-44b7-b9f2-a9f618ef3f04/icon.js
  var icon_default;
  var init_icon = __esm({
    "../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/26bf7f43-88be-44b7-b9f2-a9f618ef3f04/icon.js"() {
      if (document.getElementById("5bceae4490") === null) {
        const element = document.createElement("style");
        element.id = "5bceae4490";
        element.textContent = `._icon_13804_1 {
  fill: currentColor;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9pY29ucy9pY29uLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufVxuIl19 */`;
        document.head.append(element);
      }
      icon_default = { "icon": "_icon_13804_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js
  function createIcon(path, options) {
    const { width, height } = options;
    return function Icon(_a) {
      var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
      return h("svg", __spreadProps(__spreadValues({}, rest), { class: icon_default.icon, height, style: typeof color === "undefined" ? void 0 : {
        fill: `var(--figma-color-icon-${color})`
      }, width, xmlns: "http://www.w3.org/2000/svg" }), h("path", { "clip-rule": "evenodd", d: path, "fill-rule": "evenodd" }));
    };
  }
  var init_create_icon = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js"() {
      init_preact_module();
      init_icon();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js
  function getCurrentFromRef(ref) {
    if (ref.current === null) {
      throw new Error("`ref.current` is `undefined`");
    }
    return ref.current;
  }
  var init_get_current_from_ref = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/get-current-from-ref.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-cross-32.js
  var IconCross32;
  var init_icon_cross_32 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-cross-32.js"() {
      init_create_icon();
      IconCross32 = createIcon("m16 15.293 4.6465-4.6464.7071.7071-4.6465 4.6464 4.6465 4.6465-.7071.7071L16 16.7073l-4.6464 4.6464-.7071-.7071 4.6464-4.6465-4.6464-4.6463.7071-.7071L16 15.293Z", { height: 32, width: 32 });
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-search-32.js
  var IconSearch32;
  var init_icon_search_32 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-32/icon-search-32.js"() {
      init_create_icon();
      IconSearch32 = createIcon("M19.1034 15.0517c0 1.9616-1.5901 3.5517-3.5517 3.5517-1.9615 0-3.5517-1.5901-3.5517-3.5517 0-1.9615 1.5902-3.5517 3.5517-3.5517 1.9616 0 3.5517 1.5902 3.5517 3.5517Zm-.7062 3.5529c-.7793.625-1.7687.9988-2.8455.9988-2.5138 0-4.5517-2.0378-4.5517-4.5517 0-2.5138 2.0379-4.5517 4.5517-4.5517 2.5139 0 4.5517 2.0379 4.5517 4.5517 0 1.0769-.3739 2.0664-.999 2.8458l3.2491 3.2492-.7071.7071-3.2492-3.2492Z", { height: 32, width: 32 });
    }
  });

  // ../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/f90f5154-975d-45b2-8d23-27b5a1106127/search-textbox.js
  var search_textbox_default;
  var init_search_textbox = __esm({
    "../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/f90f5154-975d-45b2-8d23-27b5a1106127/search-textbox.js"() {
      if (document.getElementById("52b76c6ee5") === null) {
        const element = document.createElement("style");
        element.id = "52b76c6ee5";
        element.textContent = `._searchTextbox_1ynmc_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: flex;
  align-items: center;
}
/* .disabled {
  opacity: var(--opacity-30);
} */

._input_1ynmc_11 {
  width: 100%;
  height: 40px;
  flex-grow: 1;
  padding-left: 36px;
  background-color: transparent;
  color: var(--figma-color-text);
}
._disabled_1ynmc_7 ._input_1ynmc_11 {
  color: var(--figma-color-text-disabled);
  cursor: not-allowed;
}
._input_1ynmc_11::placeholder {
  color: var(--figma-color-text-tertiary);
}

._searchIcon_1ynmc_27 {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  padding: 4px;
  color: var(--figma-color-icon);
  pointer-events: none; /* so that clicking the icon focuses the textbox */
}
._disabled_1ynmc_7 ._searchIcon_1ynmc_27 {
  color: var(--figma-color-icon-disabled);
}

._clearButton_1ynmc_41 {
  height: 40px;
  flex: 0 0 40px;
  padding: 4px;
  color: var(--figma-color-icon-secondary);
}
._searchTextbox_1ynmc_1:not(._disabled_1ynmc_7) ._clearButton_1ynmc_41:hover {
  color: var(--figma-color-icon);
}
._searchTextbox_1ynmc_1:not(._disabled_1ynmc_7) ._clearButton_1ynmc_41:focus {
  color: var(--figma-color-icon);
  outline: 0;
}
._disabled_1ynmc_7 ._clearButton_1ynmc_41 {
  color: var(--figma-color-icon-disabled);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9zZWFyY2gtdGV4dGJveC9zZWFyY2gtdGV4dGJveC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTs7R0FFRzs7QUFFSDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx1Q0FBdUM7RUFDdkMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsb0JBQW9CLEVBQUUsa0RBQWtEO0FBQzFFO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7RUFDWix3Q0FBd0M7QUFDMUM7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9zZWFyY2gtdGV4dGJveC9zZWFyY2gtdGV4dGJveC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoVGV4dGJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi8qIC5kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IHZhcigtLW9wYWNpdHktMzApO1xufSAqL1xuXG4uaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmctbGVmdDogMzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtdGVydGlhcnkpO1xufVxuXG4uc2VhcmNoSWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIHNvIHRoYXQgY2xpY2tpbmcgdGhlIGljb24gZm9jdXNlcyB0aGUgdGV4dGJveCAqL1xufVxuLmRpc2FibGVkIC5zZWFyY2hJY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tZGlzYWJsZWQpO1xufVxuXG4uY2xlYXJCdXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZsZXg6IDAgMCA0MHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLXNlY29uZGFyeSk7XG59XG4uc2VhcmNoVGV4dGJveDpub3QoLmRpc2FibGVkKSAuY2xlYXJCdXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbik7XG59XG4uc2VhcmNoVGV4dGJveDpub3QoLmRpc2FibGVkKSAuY2xlYXJCdXR0b246Zm9jdXMge1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbik7XG4gIG91dGxpbmU6IDA7XG59XG4uZGlzYWJsZWQgLmNsZWFyQnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tZGlzYWJsZWQpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      search_textbox_default = { "searchTextbox": "_searchTextbox_1ynmc_1", "input": "_input_1ynmc_11", "disabled": "_disabled_1ynmc_7", "searchIcon": "_searchIcon_1ynmc_27", "clearButton": "_clearButton_1ynmc_41" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/search-textbox/search-textbox.js
  function SearchTextbox(_a) {
    var _b = _a, { clearOnEscapeKeyDown = false, disabled = false, name, onInput = function() {
    }, onValueInput = function() {
    }, placeholder, propagateEscapeKeyDown = true, spellCheck = false, value } = _b, rest = __objRest(_b, ["clearOnEscapeKeyDown", "disabled", "name", "onInput", "onValueInput", "placeholder", "propagateEscapeKeyDown", "spellCheck", "value"]);
    const inputElementRef = _2(null);
    const handleClearButtonClick = T2(function() {
      const inputElement = getCurrentFromRef(inputElementRef);
      inputElement.value = EMPTY_STRING;
      const inputEvent = document.createEvent("Event");
      inputEvent.initEvent("input", true, true);
      inputElement.dispatchEvent(inputEvent);
      inputElement.focus();
    }, []);
    const handleFocus = T2(function(event) {
      event.currentTarget.select();
    }, []);
    const handleInput = T2(function(event) {
      onValueInput(event.currentTarget.value, name);
      onInput(event);
    }, [name, onInput, onValueInput]);
    const handleKeyDown = T2(function(event) {
      if (event.key !== "Escape") {
        return;
      }
      if (clearOnEscapeKeyDown === true && value !== EMPTY_STRING && value !== null) {
        event.stopPropagation();
        handleClearButtonClick();
        return;
      }
      if (propagateEscapeKeyDown === false) {
        event.stopPropagation();
      }
      event.currentTarget.blur();
    }, [
      clearOnEscapeKeyDown,
      handleClearButtonClick,
      propagateEscapeKeyDown,
      value
    ]);
    return h("div", { class: createClassName([
      search_textbox_default.searchTextbox,
      disabled === true ? search_textbox_default.disabled : null
    ]) }, h("input", __spreadProps(__spreadValues({}, rest), { ref: inputElementRef, class: search_textbox_default.input, disabled: disabled === true, name, onFocus: handleFocus, onInput: handleInput, onKeyDown: handleKeyDown, placeholder, spellcheck: spellCheck, tabIndex: 0, type: "text", value: value === null ? EMPTY_STRING : value })), h("div", { class: search_textbox_default.searchIcon }, h(IconSearch32, null)), value === null || value === EMPTY_STRING || disabled === true ? null : h("button", { class: search_textbox_default.clearButton, onClick: handleClearButtonClick, tabIndex: 0 }, h(IconCross32, null)));
  }
  var EMPTY_STRING;
  var init_search_textbox2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/search-textbox/search-textbox.js"() {
      init_preact_module();
      init_hooks_module();
      init_icon_cross_32();
      init_icon_search_32();
      init_create_class_name();
      init_get_current_from_ref();
      init_search_textbox();
      EMPTY_STRING = "";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
      }
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
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

  // node_modules/@create-figma-plugin/utilities/lib/mixed-values.js
  var MIXED_STRING;
  var init_mixed_values = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/mixed-values.js"() {
      MIXED_STRING = "999999999999999";
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
      init_mixed_values();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js
  function isKeyCodeCharacterGenerating(keyCode) {
    return keyCode === 32 || keyCode >= 48 && keyCode <= 57 || keyCode >= 65 && keyCode <= 90 || keyCode >= 96 && keyCode <= 105 || keyCode >= 186 && keyCode <= 192 || keyCode >= 219 && keyCode <= 222;
  }
  var init_is_keycode_character_generating = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/private/is-keycode-character-generating.js"() {
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox/private/raw-textbox.js
  function RawTextbox(_a) {
    var _b = _a, { disabled = false, name, onInput = function() {
    }, onValueInput = function() {
    }, password = false, placeholder, propagateEscapeKeyDown = true, revertOnEscapeKeyDown = false, spellCheck = false, validateOnBlur, value } = _b, rest = __objRest(_b, ["disabled", "name", "onInput", "onValueInput", "password", "placeholder", "propagateEscapeKeyDown", "revertOnEscapeKeyDown", "spellCheck", "validateOnBlur", "value"]);
    const inputElementRef = _2(null);
    const revertOnEscapeKeyDownRef = _2(false);
    const [originalValue, setOriginalValue] = p2(EMPTY_STRING2);
    const setInputElementValue = T2(function(value2) {
      const inputElement = getCurrentFromRef(inputElementRef);
      inputElement.value = value2;
      const inputEvent = document.createEvent("Event");
      inputEvent.initEvent("input", true, true);
      inputElement.dispatchEvent(inputEvent);
    }, []);
    const handleBlur = T2(function() {
      if (revertOnEscapeKeyDownRef.current === true) {
        revertOnEscapeKeyDownRef.current = false;
        return;
      }
      if (typeof validateOnBlur !== "undefined") {
        const result = validateOnBlur(value);
        if (typeof result === "string") {
          setInputElementValue(result);
          setOriginalValue(EMPTY_STRING2);
          return;
        }
        if (result === false) {
          if (value !== originalValue) {
            setInputElementValue(originalValue);
          }
          setOriginalValue(EMPTY_STRING2);
          return;
        }
      }
      setOriginalValue(EMPTY_STRING2);
    }, [originalValue, setInputElementValue, validateOnBlur, value]);
    const handleFocus = T2(function(event) {
      setOriginalValue(value);
      event.currentTarget.select();
    }, [value]);
    const handleInput = T2(function(event) {
      onValueInput(event.currentTarget.value, name);
      onInput(event);
    }, [name, onInput, onValueInput]);
    const handleKeyDown = T2(function(event) {
      const key = event.key;
      if (key === "Escape") {
        if (propagateEscapeKeyDown === false) {
          event.stopPropagation();
        }
        if (revertOnEscapeKeyDown === true) {
          revertOnEscapeKeyDownRef.current = true;
          setInputElementValue(originalValue);
          setOriginalValue(EMPTY_STRING2);
        }
        event.currentTarget.blur();
        return;
      }
      if (key === "Enter") {
        event.currentTarget.blur();
        return;
      }
      if (value === MIXED_STRING && isKeyCodeCharacterGenerating(event.keyCode) === false) {
        event.preventDefault();
        event.currentTarget.select();
      }
    }, [
      originalValue,
      propagateEscapeKeyDown,
      revertOnEscapeKeyDown,
      setInputElementValue,
      value
    ]);
    const handleMouseUp = T2(function(event) {
      if (value === MIXED_STRING) {
        event.preventDefault();
      }
    }, [value]);
    return h("input", __spreadProps(__spreadValues({}, rest), { ref: inputElementRef, disabled: disabled === true, name, onBlur: handleBlur, onFocus: handleFocus, onInput: handleInput, onKeyDown: handleKeyDown, onMouseUp: handleMouseUp, placeholder, spellcheck: spellCheck, tabIndex: disabled === true ? -1 : 0, type: password === true ? "password" : "text", value: value === MIXED_STRING ? "Mixed" : value }));
  }
  var EMPTY_STRING2;
  var init_raw_textbox = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox/private/raw-textbox.js"() {
      init_lib();
      init_preact_module();
      init_hooks_module();
      init_get_current_from_ref();
      init_is_keycode_character_generating();
      EMPTY_STRING2 = "";
    }
  });

  // ../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/3b8fbfa6-5915-4468-bc77-556bf18d966a/textbox.js
  var textbox_default;
  var init_textbox = __esm({
    "../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/3b8fbfa6-5915-4468-bc77-556bf18d966a/textbox.js"() {
      if (document.getElementById("5c0f579037") === null) {
        const element = document.createElement("style");
        element.id = "5c0f579037";
        element.textContent = `._textbox_sir3b_1 {
  position: relative;
  z-index: var(--z-index-1);
}
._textbox_sir3b_1:focus-within {
  z-index: var(--z-index-2); /* Stack \`.textbox\` over its sibling elements */
}

._input_sir3b_9 {
  display: block;
  width: 100%;
  height: 28px;
  padding: 0 var(--space-extra-small);
  background-color: transparent;
  color: var(--figma-color-text);
}
._disabled_sir3b_17 ._input_sir3b_9 {
  color: var(--figma-color-text-disabled);
  cursor: not-allowed;
}
._hasIcon_sir3b_21 ._input_sir3b_9 {
  padding-left: 32px;
}

._input_sir3b_9::placeholder {
  color: var(--figma-color-text-tertiary);
}

._icon_sir3b_29 {
  position: absolute;
  top: 14px;
  left: 16px;
  color: var(--figma-color-icon-secondary);
  pointer-events: none; /* so that clicking the icon focuses the textbox */
  text-align: center;
  transform: translate(-50%, -50%);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._icon_sir3b_29 {
  color: var(--figma-color-icon-brand);
}
._disabled_sir3b_17 ._icon_sir3b_29 {
  color: var(--figma-color-icon-disabled);
}

._icon_sir3b_29 svg {
  fill: currentColor;
}

._border_sir3b_49 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  pointer-events: none;
}
._hasBorder_sir3b_59 ._border_sir3b_49,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._border_sir3b_49 {
  border-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._border_sir3b_49 {
  top: -1px;
  bottom: -1px;
  border-width: 2px;
  border-color: var(--figma-color-border-brand-strong);
}

._underline_sir3b_70 {
  position: absolute;
  right: var(--space-extra-small);
  bottom: 0;
  left: var(--space-extra-small);
  height: 1px;
  background-color: var(--figma-color-border);
}
._textbox_sir3b_1:not(._disabled_sir3b_17) ._input_sir3b_9:focus ~ ._underline_sir3b_70,
._textbox_sir3b_1:not(._disabled_sir3b_17):hover ._underline_sir3b_70 {
  background-color: transparent;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gvdGV4dGJveC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUIsRUFBRSwrQ0FBK0M7QUFDNUU7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0NBQXdDO0VBQ3hDLG9CQUFvQixFQUFFLGtEQUFrRDtFQUN4RSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsNkJBQTZCO0VBQzdCLHFDQUFxQztFQUNyQyxvQkFBb0I7QUFDdEI7QUFDQTs7RUFFRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsU0FBUztFQUNULDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsMkNBQTJDO0FBQzdDO0FBQ0E7O0VBRUUsNkJBQTZCO0FBQy9CIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0Ym94L3RleHRib3gvdGV4dGJveC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbn1cbi50ZXh0Ym94OmZvY3VzLXdpdGhpbiB7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMik7IC8qIFN0YWNrIGAudGV4dGJveGAgb3ZlciBpdHMgc2libGluZyBlbGVtZW50cyAqL1xufVxuXG4uaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjhweDtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG59XG4uZGlzYWJsZWQgLmlucHV0IHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuLmhhc0ljb24gLmlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xufVxuXG4uaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtdGVydGlhcnkpO1xufVxuXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICBsZWZ0OiAxNnB4O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1zZWNvbmRhcnkpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogc28gdGhhdCBjbGlja2luZyB0aGUgaWNvbiBmb2N1c2VzIHRoZSB0ZXh0Ym94ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4udGV4dGJveDpub3QoLmRpc2FibGVkKSAuaW5wdXQ6Zm9jdXMgfiAuaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLWJyYW5kKTtcbn1cbi5kaXNhYmxlZCAuaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLWRpc2FibGVkKTtcbn1cblxuLmljb24gc3ZnIHtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufVxuXG4uYm9yZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLTIpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5oYXNCb3JkZXIgLmJvcmRlcixcbi50ZXh0Ym94Om5vdCguZGlzYWJsZWQpOmhvdmVyIC5ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG59XG4udGV4dGJveDpub3QoLmRpc2FibGVkKSAuaW5wdXQ6Zm9jdXMgfiAuYm9yZGVyIHtcbiAgdG9wOiAtMXB4O1xuICBib3R0b206IC0xcHg7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1icmFuZC1zdHJvbmcpO1xufVxuXG4udW5kZXJsaW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG59XG4udGV4dGJveDpub3QoLmRpc2FibGVkKSAuaW5wdXQ6Zm9jdXMgfiAudW5kZXJsaW5lLFxuLnRleHRib3g6bm90KC5kaXNhYmxlZCk6aG92ZXIgLnVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuIl19 */`;
        document.head.append(element);
      }
      textbox_default = { "textbox": "_textbox_sir3b_1", "input": "_input_sir3b_9", "disabled": "_disabled_sir3b_17", "hasIcon": "_hasIcon_sir3b_21", "icon": "_icon_sir3b_29", "border": "_border_sir3b_49", "hasBorder": "_hasBorder_sir3b_59", "underline": "_underline_sir3b_70" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox/textbox.js
  function Textbox(_a) {
    var _b = _a, { icon, variant } = _b, rest = __objRest(_b, ["icon", "variant"]);
    if (typeof icon === "string" && icon.length !== 1) {
      throw new Error(`String \`icon\` must be a single character: ${icon}`);
    }
    return h("div", { class: createClassName([
      textbox_default.textbox,
      typeof variant === "undefined" ? null : variant === "border" ? textbox_default.hasBorder : null,
      typeof icon === "undefined" ? null : textbox_default.hasIcon,
      rest.disabled === true ? textbox_default.disabled : null
    ]) }, h(RawTextbox, __spreadProps(__spreadValues({}, rest), { class: textbox_default.input })), typeof icon === "undefined" ? null : h("div", { class: textbox_default.icon }, icon), h("div", { class: textbox_default.border }), variant === "underline" ? h("div", { class: textbox_default.underline }) : null);
  }
  var init_textbox2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/textbox/textbox/textbox.js"() {
      init_preact_module();
      init_create_class_name();
      init_raw_textbox();
      init_textbox();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-hyperlink-16.js
  var IconHyperlink16;
  var init_icon_hyperlink_16 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-16/icon-hyperlink-16.js"() {
      init_create_icon();
      IconHyperlink16 = createIcon("m5.52512 13.6568 2.65165-2.6516.70711.7071-2.65165 2.6517c-1.26921 1.2692-3.32699 1.2692-4.5962 0-1.2692-1.2692-1.2692-3.327 0-4.59624l2.65165-2.65165.70711.70711-2.65165 2.65168c-.87868.8786-.87868 2.3033 0 3.1819.87868.8787 2.3033.8787 3.18198 0Zm6.18718-4.77292-.7071-.70711 2.6516-2.65165c.8787-.87868.8787-2.3033 0-3.18198-.8786-.87868-2.3033-.87868-3.1819 0L7.82322 4.99479l-.70711-.70711 2.65165-2.65165c1.26924-1.2692 3.32704-1.2692 4.59624 0 1.2692 1.26921 1.2692 3.32699 0 4.5962l-2.6517 2.65165ZM6.26169 10.5043l4.24261-4.24261-.766-.76603L5.49566 9.7383l.76603.766Z", { height: 16, width: 16 });
    }
  });

  // ../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/686154cb-d691-4634-8ddd-55adf57951c8/container.js
  var container_default;
  var init_container = __esm({
    "../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/686154cb-d691-4634-8ddd-55adf57951c8/container.js"() {
      if (document.getElementById("e06bf98763") === null) {
        const element = document.createElement("style");
        element.id = "e06bf98763";
        element.textContent = `._extraSmall_1oe77_1 {
  padding: 0 var(--space-extra-small);
}
._small_1oe77_4 {
  padding: 0 var(--space-small);
}
._medium_1oe77_7 {
  padding: 0 var(--space-medium);
}
._large_1oe77_10 {
  padding: 0 var(--space-large);
}
._extraLarge_1oe77_13 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9sYXlvdXQvY29udGFpbmVyL2NvbnRhaW5lci5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXh0cmFTbWFsbCB7XG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpO1xufVxuLnNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1zbWFsbCk7XG59XG4ubWVkaXVtIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1tZWRpdW0pO1xufVxuLmxhcmdlIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1sYXJnZSk7XG59XG4uZXh0cmFMYXJnZSB7XG4gIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2UtZXh0cmEtbGFyZ2UpO1xufVxuIl19 */`;
        document.head.append(element);
      }
      container_default = { "extraSmall": "_extraSmall_1oe77_1", "small": "_small_1oe77_4", "medium": "_medium_1oe77_7", "large": "_large_1oe77_10", "extraLarge": "_extraLarge_1oe77_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/container/container.js
  function Container(_a) {
    var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: container_default[space] }));
  }
  var init_container2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/container/container.js"() {
      init_preact_module();
      init_container();
    }
  });

  // ../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/ddcff270-197d-4a20-b63c-fc4e9d482a69/vertical-space.js
  var vertical_space_default;
  var init_vertical_space = __esm({
    "../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/ddcff270-197d-4a20-b63c-fc4e9d482a69/vertical-space.js"() {
      if (document.getElementById("e00547f8d3") === null) {
        const element = document.createElement("style");
        element.id = "e00547f8d3";
        element.textContent = `._extraSmall_zc4n0_1 {
  height: var(--space-extra-small);
}
._small_zc4n0_4 {
  height: var(--space-small);
}
._medium_zc4n0_7 {
  height: var(--space-medium);
}
._large_zc4n0_10 {
  height: var(--space-large);
}
._extraLarge_zc4n0_13 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3ZlcnRpY2FsLXNwYWNlL3ZlcnRpY2FsLXNwYWNlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3ZlcnRpY2FsLXNwYWNlL3ZlcnRpY2FsLXNwYWNlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgaGVpZ2h0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0ge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2Uge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlIHtcbiAgaGVpZ2h0OiB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      vertical_space_default = { "extraSmall": "_extraSmall_zc4n0_1", "small": "_small_zc4n0_4", "medium": "_medium_zc4n0_7", "large": "_large_zc4n0_10", "extraLarge": "_extraLarge_zc4n0_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js
  function VerticalSpace(_a) {
    var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
    return h("div", __spreadProps(__spreadValues({}, rest), { class: vertical_space_default[space] }));
  }
  var init_vertical_space2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_vertical_space();
    }
  });

  // ../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/e101faee-b033-4357-9b1c-261c805d2b78/base.js
  var init_base = __esm({
    "../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/e101faee-b033-4357-9b1c-261c805d2b78/base.js"() {
      if (document.getElementById("a97773f91e") === null) {
        const element = document.createElement("style");
        element.id = "a97773f91e";
        element.textContent = `@import url('https://fonts.googleapis.com/css?family=Inter:400,600&display=swap');

:root {
  /* border-radius */
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  /* box-shadow */
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  /* font */
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  /* opacity */
  --opacity-30: 0.3;
  /* space */
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  /* z-index */
  --z-index-1: 1;
  --z-index-2: 2;
}

.figma-dark {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      P(h(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button2();
      init_search_textbox2();
      init_textbox2();
      init_icon_hyperlink_16();
      init_container2();
      init_vertical_space2();
      init_render();
    }
  });

  // src/mobileStrings.json
  var en;
  var init_mobileStrings = __esm({
    "src/mobileStrings.json"() {
      en = {
        your_group_order: "Your group order",
        invite: "Invite",
        link_expired: "Link has expired",
        group_order_not_active: "The group order is no longer active",
        your_name: "Your name",
        join_group_order: "Join {name} group order",
        create_group_description: "Add items to the basket and confirm your selections. Once everyone is ready, Bessie will place the order.",
        host_will_pay: "Besie will pay for this order",
        join_group: "Join group",
        order_too_large: "Your order is too large",
        "order exceeds_maximym": "Your order total excedees the maximum of $ 200. Please contact the restaurant if you want to place a larger order.",
        abort: "Abort",
        account_already_exists: "Account for {{email}} already exists. Please sign in.",
        account_created: "Account created",
        account_created_apple: "You already created account with your Apple ID",
        account_created_apple_facebook: "You created your account with Apple or Facebook",
        account_created_facebook: "You created your account with facebook",
        account_exists_apple_facebook: "Please continue with Apple or Facebook to sign in.",
        account_settings: "Account settings",
        account_title: "User account - Account settings",
        add: "Add",
        add_address: "Add New Address",
        add_birthday: "Add birthday",
        add_building_number: "Add building number",
        add_code_create_account: "Add code and Create account",
        add_country: "Add country",
        add_coupon_order: "You can add this offer to your order from the menu",
        add_cvv: "Add CVV",
        add_date: "Add date",
        add_delivery_address: "Add delivery address",
        add_discount_card: "Add discount card",
        add_items_order_desc: "You can use credits only after adding items to your order",
        add_items_order_title: "Add items to your order",
        add_month: "Add month",
        add_offer: "Add offer to your order",
        add_offer_or_reward: "Add offer or reward to your order",
        add_offers_credits_desc: "Add offer or use available credits",
        add_payment_method: "Add payment method",
        add_promotion_order: "Add promotion to your order",
        add_referral_code_desc: "If someone invited you to join, add the referral code given you to unlock a special offer. Otherwise, you can skip this step and create an account without it.",
        add_referral_code_title: "Lastly, add a referral code",
        add_reward: "Add reward to your order",
        add_reward_or_offer: "Add reward or offer to your order",
        add_table_number: "Add table number",
        add_to_order: "Add to order",
        add_year: "Add year",
        add_zip_code: "Add ZIP code",
        adjust_pin: "Adjust Pin",
        allergens: "Allergens",
        already_have_account: "You already have an account",
        already_have_offer_tooltip: "You already have an offer in the cart",
        already_have_referral_dialogue: "Looks like you already have a referral offer! We've added it for you.",
        already_have_reward_tooltip: "You already have a reward in your cart",
        already_have_your_feedback: "You already left feedback. We\u2019re looking forward to your next order!",
        already_registered: "Already registered?",
        amount_off: "{{value}} off ",
        and_confirm_that: "and confirm that I have read the",
        and_get_points: "and get {{points}} with this order",
        apartment_floor: "Apartment / Floor",
        apple_id_error_text: "Please remove this application from your Apple ID Password and Security settings and try again.",
        apple_id_error_title: "You already used your Apple ID",
        applepay_general_error: "ApplePay was not able to complete your order. Please choose another payment method or contact the support.",
        applepay_merchant_validation_error: "ApplePay validation failed. Please choose another payment method or contact the support.",
        applepay_not_supported: "ApplePay is not supported in your browser. Please choose another payment method or use the Safari browser.",
        apply: "Apply",
        are_you_sure: "Are you sure?",
        area_not_configured: "Area not configured",
        around: "around",
        around_minutes: "around {{time}} min",
        article_about: "Article about",
        asap: "ASAP",
        asap_around_minutes: "ASAP (in around {{time}} min)",
        ask_to_fill_verve: "We'll ask you to fill in the card details when placing the order",
        ask_to_login_applepay: "We\u2019ll ask you to log-in with Apple Pay when placing an order",
        ask_to_login_mercadopago: "We'll ask you to log-in with Mercado Pago when placing an order",
        ask_to_login_paypal: "We'll ask you to log-in with PayPal when placing an order",
        at: "at",
        back: "Back",
        back_to_orders: "Back to orders",
        banner_compliant: "We use cookies to enhance your browsing experience, serve personalized ads or content and analyze our traffic. By clicking \u201CAccept all\u201C, you agree to our website's cookie use as described in our Privacy policy. You can change your cookie settings at any time by clicking Manage cookies in the footer.",
        barcode_already_user_error: "This code has already been used",
        barcode_invalid_error: "Invalid barcode number",
        birthday_date: "Birthday date (can be set only once)",
        browse_menu: "Order now",
        building_name_number: "Building Name/Number",
        button_acceptall: "Accept all",
        button_managecookies: "Manage cookies",
        button_reject: "Reject",
        button_saveandclose: "Save and close",
        by_proceeding_text: "By proceeding, you accept our",
        call: "Call",
        call_for_assistance: "For any additional assistance, please call the restaurant.",
        cancel: "Cancel",
        cancel_order: "Cancel order",
        cancel_order_title: "Cancel order?",
        canceled: "Cancelled",
        cant_cancel: "Order can\u2019t be cancelled",
        cant_order_working_hard: "Temporarily orders cannot be placed at this store. We are working hard to bring it back as soon as possible.",
        cant_place_order: "Can't place order.",
        card_expired_text: "The credit card expiry date you entered is expired. Please insert the correct expiry date and try again.",
        card_number: "Card number",
        cards_active_modal_description: "Rewards & Offers cannot be added while a discount card is active. Remove cards to add a reward or an offer.",
        cards_active_modal_title: "Discount cards are active",
        care_about_privacy: "We deeply care about your privacy",
        cart: "cart",
        cart_items_not_available: "Some items are not available. They are removed from your order.",
        cart_will_show_here: "Your cart will show up here",
        cash: "Cash",
        cash_amount_field_required_error: "This field is required.",
        cash_amount_incorrect_amount_error: "Please insert correct amount.",
        cash_amount_should_be_equal_total_error: "Cash amount should be equal or greater than total.",
        cash_amount_text: "Please input the amount of cash you have so the courier can prepare change for you",
        cash_amount_wrong_amount_error: "Wrong amount.",
        cash_order_dinein_takeout_placed: "Head to a cashier and pay your order.",
        cash_order_text: "The order will be placed when it's payed at a cash register",
        cash_status_text: "Show at cash register to pay",
        categories: "menu categories",
        center_receipt_barcode: "Center the code found on your receipt",
        chage_order_type: "Change to {{orderType}}?",
        chage_type_remove: "This will remove items from your cart.",
        chage_type_warning: "Some items are not available for {{orderType}}. They will be removed from your order.",
        change: "Change",
        change_amount: "Change amount",
        change_amount_balance_error: "Amount can\u2019t be higher than {{current_balance}}",
        change_amount_desc: "Enter the credit amount you want to use. Your current balance is {{current_balance}}.",
        change_amount_order_error: "Amount can\u2019t be higher than the total order amount",
        change_details: "Change details",
        change_password: "Change password",
        change_payment_method: "Please change your payment method or add a new one",
        change_to_new_address: "Change to new address?",
        check_email_spam: "Didn't get email? Check your spam folder.",
        check_inbox_instructions_desc: "We sent an instruction on how to reset your password to {{email_address}}",
        check_inbox_instructions_title: "Check your inbox",
        check_your_email: "Please check your inbox and enter the code we sent to {{email}}",
        checkout: "Checkout",
        checkout_contact_information: "Contact information",
        checkout_contact_information_name: "Your name",
        checkout_page_title: "Checkout",
        checkout_payment_method_description: "Select payment method to continue",
        checkout_title: "Place order",
        choose_combo: "Choose combo",
        choose_new_password_title: "Choose new password",
        choose_password_title: "Choose a memorable password",
        chose_another_one: "Please choose another one.",
        city: "City",
        clear: "Clear",
        clear_all: "clear all",
        clear_apartment_number: "Clear apartment number",
        clear_building_name_number: "Clear building name/number",
        clear_search_field: "Clear search field",
        clear_street_name: "Clear street name",
        clear_table_number: "Clear table number",
        click_for_more_news: "Click for more News",
        click_for_previous_news: "Click to go to previous News",
        close_announcement: "Close Announcement",
        closed: "Closed",
        closing_time_message: "Sorry, it's too late to order now",
        closing_time_title: "It's closing time",
        code: "Code",
        code_already_used: "Code already used",
        code_expired: "Code expired",
        code_wrong_or_expired: "Your code is wrong or it has expired",
        collect_points: "Collect {{points}}",
        collect_points_button: "Collect points",
        collect_points_desc: "Enter the receipt barcode number to earn points",
        collect_points_description: "Put this code under the scanner of the kiosk or cash register. Or, you can enter the card number manually.",
        collect_points_description_POS_only: "Put this code under the cash register's scanner",
        comment_description: 'For example: "No olives please."',
        confirm: "Confirm",
        confirm_your_address: "Confirm your address",
        congratulations: "Congratulations!",
        connected_to_internet: "Connected to internet",
        continue: "Continue",
        continue_with_email: "Continue with email",
        continue_with_facebook: "Continue with Facebook",
        continue_with_payment: "Continue with payment",
        cookie_message: "We use cookies for Analytics, in order to enhance & improve your experience, as well as to track when you are logged-in. For more information read our {{privacy_policy}}.",
        cookie_title: "This site uses cookies",
        copied: "Copied",
        copy: "Copy",
        country: "Country",
        country_code: "Country code",
        coupons_in_article: "Offers in this article",
        create_account: "Create account",
        create_new_account: "Create new account",
        credit_balance_amount: "Credit balance {{balance_amount}}",
        credit_balance_available: "Credit balance available",
        credit_balance_desc: "You have {{balance_amount}}  in your credit balance",
        credit_cant_be_higher: "The credit amount can't be higher than your total order ({{total_order_amount}})",
        current_location: "Current location",
        current_password: "Current password",
        currently_closed: "Currently closed",
        customize: "Customize",
        decrease_quantity_by_1: "Decrease quantity by 1",
        delete: "Delete",
        delete_account_back_button: "Back to Account settings",
        delete_account_body: "If you delete your account",
        delete_account_bullet_1: "You will no longer be able to log in with your account",
        delete_account_bullet_2: "You will no longer be able to see receipts of all of your past orders",
        delete_account_bullet_3: "You will no longer be able to order delicious meals from our restaurants",
        delete_account_bullet_4: "You will no longer be able to access our latest offers",
        delete_account_bullet_loyalty: "You will lose your {{number}} {{points}}",
        delete_account_button: "Delete account",
        delete_account_confirmation: "Your account has been deleted",
        delete_account_dialog_body: "Your account will be permanently deleted",
        delete_account_dialog_title: "Are you sure you want to delete your account?",
        delete_account_loading_time: "This can take up to 1 minute to complete",
        delete_account_loading_title: "Deleting data",
        delete_account_note: "Note: It can take up to 6 months for your data to be completely removed from our systems. Please review our Privacy policy for further information.",
        delete_account_note_divided_1: "Note: It can take up to 6 months for your data to be completely removed from our systems. Please review our",
        delete_account_note_divided_2: "for further information.",
        delete_account_title: "Delete account",
        delete_card: "Delete card",
        delete_discount_card: "Delete this discount card?",
        delete_payment_method: "Delete this payment method?",
        deliver_to: "Deliver to",
        delivering: "Delivering",
        delivers_to: "Delivers to",
        delivery: "Delivery",
        delivery_address: "Delivery address",
        delivery_closed: "Delivery closed. Sorry, too late to order now.",
        delivery_closed_text: "Sorry, too late to order now",
        delivery_closed_title: "Delivery closed",
        delivery_description: "Order is delivered to you",
        delivery_fee: "Delivery fee",
        delivery_opens_at: "Delivery opens at",
        delivery_placed: "Delivery placed!",
        delivery_placed_for: "Delivery placed for",
        delivery_placed_for_asap: "Delivery placed for as soon as possible",
        delivery_tracking: "Delivery tracking",
        delivery_venue_closed: "The location delivering to your address is currently closed. Please try again later.",
        demographic_data_company_hint: "Leave blank If you are not using company identification number",
        demographic_data_company_name: "Company name",
        demographic_data_company_name_empty: "Add company name",
        demographic_data_error_numbers: "This field must be numeric",
        demographic_data_identification_number: "Identification number",
        demographic_data_identification_number_empty: "Add identification number",
        desc_functional: "Cookies used to enhance the performance and functionality of our websites. They allow you to interact with a service or site to access features that are fundamental to a service. Some of those might be a preferance to a language or an information in user\u2019s session, such as the content of a shopping cart.",
        desc_marketing: "These cookies are sometimes set and used to build a profile of interests and show you relevant ads on other sites. Sometimes they are also used to personalize, limit the number of ads and measuring the effectiveness of ads.",
        desc_necessary: "These cookies are used to enhance the core functionality of our websites and can only be disabled by changing your browser preferences. Without these cookies, certain functionalities of the website may become unavailable.",
        desc_performance: "Cookies used for analytics allows us and services to better understand how you interact with a particular part of the website. These insights will allow us to improve content and build better features that improve user\u2019s experience.",
        details: "Details",
        dialog_delivery_promise_drivers_unavailable_description: "Please try again later",
        dialog_delivery_promise_drivers_unavailable_title: "We don't have any drivers available right now",
        dialog_delivery_promise_fee_changed_description: "Please check the new delivery fee before confirming the order",
        dialog_delivery_promise_fee_changed_title: "Delivery fee changed",
        dialog_delivery_promise_fee_time_changed_description: "Please check the new delivery fee and time before confirming the order",
        dialog_delivery_promise_fee_time_changed_title: "Delivery details changed",
        dialog_no_internet_description: "It looks like you are offline",
        dialog_no_internet_heading: "No internet connection",
        dialog_offer_not_available_news_heading: "Available soon!",
        dialog_offer_not_available_news_paragraph: "This offer will become available on {{date}}",
        dine_in: "Dine-in Pickup",
        dine_in_FS: "Table Service",
        dine_in_FS_description: "Order is served at your table",
        dine_in_combined: "Dine-in",
        dine_in_description: "Order is served in restaurant",
        directory: "Directory",
        directory_title: "Choose venue",
        discard_order_modifications_dialog_cta: "Leave order",
        discard_order_modifications_dialog_description: "We'll have to remove all items in your cart",
        discard_order_modifications_dialog_title: "Are you sure you want to leave \u2028this order?",
        disclamier: "Food type, calories and allergens vary based on modifications made to item. 2000 calories a day is used for general nutrition advice, but calorie needs vary. Additional information available upon request.",
        discount: "Discount",
        discount_card_note: "Note: You can use one type of discount card at a time",
        discount_cards: "Discount cards",
        discount_cards_description: "Discount will be applied to whole order",
        discount_cards_description_memc_false: "Discount will be applied to the amount of {{memc}}",
        discount_cards_description_memc_true: "Discount will be applied to the amount of {{memc}} per added card",
        discounts_not_available_dialog_description: "Looks like some offers and rewards are not available at this time",
        donot_close: "Please don\u2019t close or refresh this page",
        earn_offer: "Earn a {{offer_name}}",
        earn_points_new: "Earn {{points}}",
        edit: "Edit",
        edit_address: "Edit delivery address",
        edit_customize: "Edit customization",
        edit_email: "Edit email address",
        edit_phone: "Edit phone number",
        email: "Email",
        email_changed: "Email changed",
        email_in_use: "Email is already in use",
        email_promotions: "Email promotions",
        email_taken: "{{email}} is already taken ",
        empty_cart_message: "Double-check your cart and try again",
        empty_cart_title: "Can't place this order",
        english: "English",
        enjoy_loyalty_currency_benefits_desc: "Join now and start collecting points to earn credits and use them on your orders",
        enjoy_loyalty_currency_benefits_title: "Do you want to earn credits?",
        enter_code: "Enter code",
        enter_promo_code: "Enter promo code",
        enter_receipt_code_manually: "Enter the receipt code number manually",
        enter_receipt_code_number: "Enter receipt code number",
        error_page_button_text: "Back to home",
        error_page_subtitle: "We can't find what you're looking for",
        error_page_title: "Page not found",
        error_title: "Error - Page not found",
        expiration_date: "Expiration date",
        expired: "Expired",
        expires_at_time: "Expires in {{days}} days at {{time}}",
        expires_in: "Expires in {{days}} days",
        expires_on_date: "Expires on {{expiration_date}}",
        expiry_date: "Expiry date",
        faq: "FAQ",
        feedback_title: "Feedback - Send us a message",
        field_required: "This field is required",
        filter_by: "Filter by",
        filters: "Filters",
        find_location: "Find my location",
        find_out_more: "Find out more",
        find_receipt_code_number: "Find the code number on the bottom of your receipt",
        first_name: "First Name",
        first_order_condition: "On 1st order",
        foodspot: "Foodspot",
        foodspot_description: "Order is delivered to a station",
        foodspot_discount_description: "{{number}} % off your order",
        foodspot_intro: "Foodspot is a convenient way of ordering onsite food. Offer companies and communities a platform to allow employees or group of people to order delivery to a station",
        foodspot_is_closed_for_ordering: "Foodspot is closed for ordering",
        foodspot_subsidy: "Foodspot Subsidy",
        foodspot_subsidy_amount: "Foodspot Subsidy ({{subsidy_amount}})",
        footer_newsletter_content: "By signing up, I agree to receive marketing communication via email",
        footer_newsletter_header: "Sign up to our newsletter for exclusive offers",
        for: "for",
        for_around: "for around",
        for_table: "for",
        forgot_password: "Forgot password?",
        forgot_password_desc: "We'll send instructions on how to reset your password to {{email_address}}",
        free: "Free",
        free_delivery: "Free delivery",
        french: "French",
        friday: "Friday",
        gcash: "GCash",
        gcash_description: "We'll ask you to log-in with GCash when placing an order",
        gcash_title: "Use GCash",
        gdpr_addinfo_one: '""',
        gdpr_addinfo_two: '""',
        gdpr_terms_of_service: "I agree to the {{terms_of_service}}.",
        general_pages: "General pages",
        generic_error: "We ran into a problem \u{1F915}",
        generic_message: "There was an interruption and we couldn't do what you wanted us to do",
        german: "German",
        get_code_from_organization: "Get the code from your organization",
        get_new_code: "Get new code",
        get_notified: "Get notified about special offers, rewards and promotions",
        go_back: "Go back",
        go_menu_coupon: "Go to menu to use this offer",
        go_to_offers: "Go to Offers",
        good_afternoon: "Good afternoon",
        good_evening: "Good evening",
        good_morning: "Good morning",
        got_promotion_discount: "Hooray! \u{1F389} You got a promotion discount.",
        got_refrerral_dilogue_paragraph: "Go to Offers to add it to your cart",
        got_refrerral_dilogue_title: "Woohoo! You got a referral offer!",
        h_functional: "Functional",
        h_manage: "Manage cookies",
        h_marketing: "Marketing",
        h_necessary: "Strictly necessary",
        h_performance: "Performance & Analytics",
        have_offer: "You already have an offer",
        have_reward: "You already have a reward",
        hello_email: "Hello, {{email_address}}",
        hide_kiosk_scan_instructions: "Hide kiosk scan instructions",
        high_contrast: "High contrast",
        home: "Home",
        home_logo: "Jump to Home screen",
        home_subtitle: "Nice to see you!",
        home_title: "What would you like?",
        home_title_customer: "What would you like {{customer}}?",
        i_agree: "I agree to the Terms of Service",
        i_agree_to_the: "I agree to the",
        icelandic: "Icelandic",
        id: "ID",
        imprint: "Imprint",
        increase_quantity_by_1: "Increase quantity by 1",
        info: "Info",
        instruction_for_courier: "Instruction for courier",
        instructions: "Special instructions",
        instructions_resent_desc: "We resent instructions on how to reset your password to {{email_address}}",
        instructions_resent_title: "Instructions resent",
        introducting_foodspot: "Introducting Foodspot",
        invalid_phonenumber: "Invalid phone number",
        invite_history: "Invite history",
        invite_history_empty: "Your invite history will show up here when your friends use your referral code to place their first order",
        item_not_available: "This item is not available",
        join_loyalty_benefits_desc: "Join now to start keep the offers saved in your offers list",
        join_loyalty_benefits_title: "Do you want to enjoy all loyalty benefits?",
        join_now: "Join now",
        join_start_earning: "Join and start earning",
        jump_to: "Jump to",
        kcal: "kcal",
        language: "Language:",
        last_name: "Last Name",
        left_to_cancel: "left to cancel",
        like_to_receive: "I'd like to receive special deals and promotions by email. You can opt-out any time in account settings.",
        list_locations: "List of locations",
        loading_longer: "It\u2019s taking longer than usual\u2026",
        location_error_message: "Allow location permissions in your browser and try again",
        location_error_title: "We can't find you",
        location_found: "Location found",
        loyalty_converreward_desc: "You have {{current_balance}}  out of {{total_points_reward}}  points to get a free {{reward_title}}",
        loyalty_program_collect_points_desc: "Did you purchase any items in-store? Collect points by entering your receipt barcode number.",
        loyalty_program_desc: '""',
        loyalty_program_title: "Your rewards",
        loyalty_value_prop_desc_1: '""',
        loyalty_value_prop_desc_2: '""',
        loyalty_value_prop_desc_3: '""',
        loyalty_value_prop_heading_1: '""',
        loyalty_value_prop_heading_2: '""',
        loyalty_value_prop_heading_3: '""',
        make_combo: "Make it a combo?",
        max_allowed_url_items_size_message: "You've reached the maximum amount of products in your cart. Please consider ordering a few orders.",
        max_cards_reached: "Maximum number of cards reached. Remove a card to add a new one.",
        max_cash_amount_error: "Input is higher than maximum cash amount",
        max_char: "Max. {{number}} characters",
        max_points_reached: "You've reached the maximum number of {{points}}. You can't get any more.",
        max_points_will_be_reached: "You're going to reach the maximum number of {{points}}. You won't get the full amount.",
        maximum_characters: "Maximum {{number}} characters",
        maximum_points_reached: "You've reached the maximum number of {{points}}. Now it's time to start using them so you can collect even more.",
        meet_conditions_enjoy_benefits: "Please meet all the offer conditions to enjoy its full benefits",
        meet_conditions_offer: "Meet conditions to unlock the offer",
        meet_conditions_reward: "Meet conditions to unlock the reward",
        menu: "Menu",
        menu_not_available_dialog_description: "Looks like some items or customisations are not available at this time",
        message_when_on_the_way: "You'll get an SMS when it's on the way",
        message_when_ready: "You'll get an SMS when it's ready",
        min: "min",
        minimal_order_amount_text: "The minimum order size is {{minimalAmount}}. You can still place the order, but unfortunately we have to charge you the difference.",
        minimum_short: "Min.",
        minutes: "minutes",
        miss_you: "We'll miss you",
        missing_card_number: "Add card number",
        missing_cc: "Add code",
        missing_email: "Add email",
        missing_first_name: "Add first name",
        missing_last_name: "Add last name",
        missing_name: "Add name",
        missing_phone: "Add phone",
        monday: "Monday",
        more: "More",
        more_filters: "More filters",
        more_info: "More info",
        more_news: "Show more News",
        my_orders: "My orders",
        new_password: "New password",
        new_password_doesnt_meet_criteria_error: "The new password doesn\u2019t meet the criteria",
        news: "News",
        next: "Next",
        next_suggested_item: "Next suggested item",
        no_areas: "No areas",
        no_credits_available_desc: "You don't have enough credit available. Collect more points to increase your credit balance.",
        no_credits_available_title: "No credit available",
        no_details: "No details",
        no_expiry_date: "No expiry date",
        no_internet: "No internet connection",
        no_letters: "No letters allowed",
        no_menu_translation: "Unfortunately there is no menu translation for selected language.",
        no_offers_available: "Your offers will show up here, once they are available",
        no_payment_methods: "No payment methods",
        no_prev_address: "Your addresses will show up here",
        no_results: "No results",
        no_results_for_filters: "There are no offers for the selected filters",
        no_rewards_available: "Your rewards will show up here, once they are available",
        not_available: "Not available",
        not_eligible_offer_dialogue_heading: "You are not eligible for this offer",
        not_eligible_offer_dialogue_paragraph: "This offer can be only used with your first order",
        not_eligible_referral_dialogue_heading: "You are not eligible for this referral",
        not_eligible_referral_dialogue_paragraph: "This referral can be only used with your first order",
        not_valid_card_number: "Credit card number entered is not valid",
        not_valid_cvv: "CVV is not valid",
        not_valid_month: "Month is not valid",
        not_valid_year: "Year is not valid",
        number: "number",
        number_of_coupons_left: "{{number}} left",
        number_of_items: "Number of items",
        number_of_payment_methods: "Number of payment methods",
        number_of_points: "{{number}} {{points}} ",
        offer_conditions_not_met: "Offer condition isn\u2019t met. You can go to Checkout, but the offer will be removed from your cart.",
        offer_emptystate_info: "Your offers will show up here, once they are available. If you have a promo code, enter it to use the benefit right away.",
        offer_in_account_order_types: "Offer is added to your account and can be used for supported order types",
        offer_in_account_specific_store: "Offer is added to your account and you can use it in participating restaurants",
        offer_not_applied: "Offer can't be applied",
        offer_not_for_order_type: "Offer can\u2019t be used for {{orderType}}",
        offer_not_for_specific_store: "Offer can\u2019t be used in {{restaurant}}",
        offer_or_reward_error_message: "Sorry, you can add only one offer or reward to your order",
        offer_unavailable_item_snackbar: "This offer isn\u2019t available for the selected order type",
        offers: "Offers",
        offers_and_rewards: "Offers & Rewards",
        offers_credits_title: "Offers & Credits",
        ok: "OK",
        okay: "Okay",
        on_order: "on order",
        only_numbers: "Only numbers allowed",
        only_numbers_and_letters: "Only numbers and letters are allowed",
        open: "open",
        open_24_hours: "Open 24h",
        opening_hours: "Opening Hours",
        opens_at: "Opens at",
        opt_out: "Opt out",
        optout_dialog_paragraph: "If you decide to no longer be a part of loyalty program you must delete your account.",
        optout_dialog_title: "To opt out you must delete your account",
        order: "Order",
        order_cancel_time_expired: "Time for order cancellation expired",
        order_canceled: "Order cancelled",
        order_desc: "{{orderType}} for {{pickupTime}} ",
        order_has_changed_dialog_description: "Some items, prices or offers may have changed since your last order",
        order_has_changed_dialog_title: "Please check carefully before placing the order",
        order_in_advance: "Order in advance",
        order_location: "Order location",
        order_number_cash: "Order placed! Head to a cashier and pay using your order number",
        order_number_code: "{{order_number}} ",
        order_number_empty: "Your order number has not yet been assigned. We'll send you a SMS when it is available.",
        order_number_filled: "Your order number",
        order_number_ond: "Order placed! Your order number will appear on the restaurant's order screen when it's ready",
        order_number_placeholder: "_ _ _",
        order_on_the_way: "Your order is on the way. Enjoy!",
        order_placed: "Order placed!",
        order_placed_for: "Order placed for",
        order_placed_for_asap: "Order placed for around",
        order_processing: "Processing order",
        order_summary: "Order summary",
        order_time: "Order time",
        order_time_changed: "Order time changed",
        order_time_is_not_available: "Order time isn\u2019t available",
        order_type: "Order type",
        order_type_not_available_dialog_description: "Looks like your order type is unavailable so we have chosen the next available order type for you",
        orders: "Orders",
        orders_are_accepted_until: "Orders are accepted until",
        orders_below_fee: "Fee for orders below {{minimalAmount}}",
        orders_show_up_here: "Your orders will show up here. Go ahead and order something delicious.",
        orders_title: "Orders - Your orders",
        out_of_points: "out of {{number_points}} {{points}}",
        paid: "Paid",
        part_of_loyalty_desc: "Now you are part of the loyalty program. Enjoy all the benefits.",
        password: "Password",
        password_changed_desc: "Now you have a new password. You\u2019ll be signed in to your account automatically.",
        password_changed_title: "Password changed",
        password_criteria_info: "Your password needs to be at least 7 characters long and include at least 1 number",
        password_error: "Password doesn\u2019t meet the criteria",
        pay_bill: "We have your order! Head to a cashier and settle your bill.",
        pay_with: "Pay With",
        pay_with_applepay: "Pay with Apple Pay",
        pay_with_cash: "Pay with cash",
        pay_with_mercadopago: "Pay with Mercado Pago",
        pay_with_paypal: "Pay with PayPal",
        payment: "Payment",
        payment_card_authorization_disclaimer: '"" ',
        payment_method: "Payment method",
        payment_method_changed: "Payment method changed",
        payment_method_expired: "Payment method expired",
        payment_methods: "Payment methods",
        payment_methods_show_up_here: "Payment methods will show up here. Go ahead and add one.",
        payment_methods_title: "Payment methods - Manage your payments",
        payment_not_accepted_text: "{{venue}} doesn't accept {{method}}. Please change your payment method or add a new one.",
        payment_not_accepted_title: "{{method}} not accepted here",
        payment_not_complete: "Waiting for payment ",
        people_also_added: "People often also order",
        percentage_off: "{{value}}% off",
        personal_info: "Personal info",
        phone: "Phone number",
        phone_changed: "Phone number changed",
        phone_number: "Phone number",
        pin_not_match_address: "Your pin doesn't match the written address. The order will be delivered to the pin location. If you're certain the address is correct you can confirm and continue.",
        place_order: "Place order",
        placed_after: "Order will be placed after payment is complete",
        placing_order: "Placing the order",
        please_add_your: "Please add your",
        please_continue_apple: "Please continue with your Apple ID to sign in",
        please_continue_facebook: "Please continue with Facebook to sign in",
        point: "Point",
        points: "Points",
        points_away: "You are {{number}} {{points}} away",
        points_away_currency: "You are {{points_away}}  {{points}}  away of getting your next {{amount_reward}}  credits",
        points_earned: "Points earned",
        points_earned_new: "{{points}} earned",
        points_out_of: "<current_points> <points_name> out of <total_points>",
        points_plural: "Points",
        points_spent: "{{points}} spent",
        points_used: "{{number}} used",
        points_with_this_order: "{{number}} with this order",
        points_you_will_earn: "{{points}} you'll earn",
        postal_code_placeholder: "Postcode",
        preparing: "Preparing",
        previous_addresses: "Previous addresses",
        previous_news: "Show previous News",
        previous_suggested_item: "Previous suggested item",
        previously_used: "Previously used",
        price_high_to_low: "Price: high to low",
        price_low_to_high: "Price: low to high",
        price_with_points: "{{price}} with {{number}} {{points}}",
        prices_has_changed_dialog_description: "Looks like some prices have changed since your last order",
        prices_updated: "Prices have been updated",
        privacy: "Privacy Policy",
        privacy_policy: "Privacy Policy",
        proceed: "Proceed",
        processing: "Processing",
        promo_code: "Promo code",
        promotions: "Promotions",
        promotions_show_here_registered: "Your promotions will show up here. To get a promotion enter a promo code.",
        promotions_show_here_unregistered: "Your promotions will show up here. Sign in or create account to enable promotions and promo codes.",
        quantity: "Quantity",
        ready_to_use: "Ready to use",
        ready_to_use_desc: '"Ready to use" indicates that your cart has all the items needed to apply the offer',
        receipt_barcode_number: "Receipt barcode number",
        receipt_code_number: "Receipt code number",
        recently_added: "Recently added",
        red_compra: "Red Compra",
        red_compra_description: "We\u2019ll ask you to log-in with Red Compra when placing an order",
        red_compra_title: "Use Red Compra",
        referral: "Referral",
        referral_code: "Referral code",
        referral_code_added_desc: "Your referral code was added successfully! It's already available for your first order.",
        referral_code_error: "You can only add this offer if you are a new user who has never ordered before",
        referral_code_max_error: "We are sorry. This code has been used the maximum number of times.",
        referral_email_subject: "Here is something nice for you",
        referrals_heading: "Invite a friend, get an offer",
        referrals_paragraph: "Share this code with friends and get an offer when they use it on their first order.",
        referrals_points_heading: "Invite a friend, get {{points}}",
        referrals_points_paragraph: "Share this code with friends and get {{number}} {{points}} when they use it on their first order.",
        refferal_replacing_dialogue_paragraph: "Sorry, you can only have one offer or reward with your order",
        refferal_replacing_offer_dialogue_heading: "Your offer has been replaced with your referral offer",
        refferal_replacing_reward_dialogue_heading: "Your reward has been replaced with your referral offer",
        refund_on_its_way: "A refund is on it's way",
        refunded: "Refunded",
        region: "Region",
        register: "Register",
        register_and_get: "Register and get",
        register_to_use: "Register to use",
        register_to_view: "Register to view",
        registration_modal_guest_button: "Checkout as guest",
        registration_modal_separator: "Or",
        registration_modal_title: "Sign in or Create account to proceed",
        registration_referral_code_added_desc: "Your referral offer was added to your account. Now you are part of the loyalty program. Enjoy all the benefits.",
        relevance: "Relevance",
        remove: "Remove",
        remove_address: "Remove address",
        remove_item: "Remove item",
        remove_item_text: "Are you sure you want to remove this item from your cart?",
        remove_item_title: "Remove item from cart?",
        remove_items_from_cart: "This will remove items from your cart",
        remove_offer_text: "Are you sure you want to remove this offer?",
        remove_offer_title: "Remove offer?",
        remove_promo_code_desc: "After removing your promo code, you can add it later",
        remove_promo_code_title: "Do you want to remove the promo code?",
        remove_reward_text: "Are you sure you want to remove this reward?",
        remove_reward_title: "Remove reward?",
        remove_this_address: "Remove this address?",
        removing_this_item_offer_info: "Removing this item will reduce your cart total below the amount needed to unlock the offer",
        removing_this_item_reward_info: "Removing this item will reduce your cart total below the amount needed to unlock the reward",
        reorder_cta: "Order again",
        reordering_failed_dialog_description: "Something went wrong. Please start a new order in the app.",
        reordering_failed_dialog_title: "Oops!",
        request_new_code: "Please request new code to sign in or create account. Code will be send to {{email}}",
        request_new_code_2: "Please request a new code. Code will be send to {{email}}.",
        resend_code: "Resend code",
        resend_instructions: "Resend instructions",
        reset: "Reset",
        reset_password: "Reset password",
        restaurants: "Locations",
        review_promotion_details: "Please review the promotion details to ensure the promo code is applied correctly",
        reward_conditions_not_met: "Reward condition isn\u2019t met. You can go to Checkout, but the reward will be removed from your cart.",
        reward_locked_points_away: "It's locked. You are {{number}} {{points}} away.",
        reward_not_applied: "Reward can't be applied",
        rewardoffer_active_modal_description: "Discount cards cannot be added while a discount card is active. Remove to add a discount card.",
        rewardoffer_active_modal_title: "Rewards & Offers are active",
        rewards: "Rewards",
        rewards_and_offers: "Rewards & Offers",
        rewards_terms: "Rewards terms",
        saturday: "Saturday",
        save: "Save",
        scan_barcode_kiosk: "Scan the barcode at the kiosk",
        scan_instructions_paragraph_new: 'Select "Collect {{points}}" during checkout on a kiosk. Scan the barcode at the kiosk to collect {{points}} from your kiosk order.',
        scan_receipt_barcode_desc: "Scan the receipt barcode or enter the receipt number manually",
        scan_receipt_code: "Scan receipt code",
        scan_to_collect_points: "Scan to collect {{points}}",
        search: "Search",
        second: "second",
        seconds: "seconds",
        security_code: "Security code",
        select: "Select",
        select_at_least: "Select at least {{number}}",
        select_country: "Select Country Dropdown",
        select_delivery_address: "Select delivery address",
        select_from_to: "Select {{number1}} to {{number2}}",
        select_language: "Select language:",
        select_location: "Select location",
        select_number: "Select {{number}} ",
        select_on_map: "Select on map",
        select_payment_method: "Select payment method",
        select_payment_method_above: "Please select payment method above",
        select_restaurant: "Select restaurant",
        select_up_to: "Select up to {{number}}",
        select_your_location: "Select your location",
        selected_time_changed: "Your selected time isn\u2019t available. We changed it to the first available time.",
        selected_time_not_available: "Your selected time isn\u2019t available. Foodspot is closed for ordering.",
        send: "Send",
        send_feedback: "Send feedback",
        send_feedback_info: "We appreciate your feedback. Describe an issue or share your ideas.",
        send_feedback_max_length_validation_text: "Maximum 1000 characters",
        send_feedback_min_length_validation_text: "Minimum 50 characters",
        send_feedback_placeholder: "Let us know your thoughts...",
        send_you_instructions: "We'll send you instructions to sign in or create account",
        send_you_instructions_checkout: "We'll send you instructions create account at {{email}}",
        service_amplitude_desc: "Using Amplitude, we can track all the actions user makes in detail and better understand what\u2019s working and what\u2019s not to deliver the best experience.",
        service_amplitude_duration: "up to 1 year",
        service_analytics_desc: "Google Analytics is a tool that helps websites measure how users interact with website content. As a user navigates between web pages, Google Analytics records information about, for example a page the user has seen.",
        service_analytics_duration: "up to 2 years",
        service_braze_desc: "Braze will collect the following device-level properties to allow device, language, and time zone based message personalization.",
        service_braze_duration: "up to 1 year",
        service_desc: "Description",
        service_duration: "Duration",
        service_gtag_desc: "Manager works with advertising and measuring products such as Google Analytics, Google Ads. It adds and updates tags for conversion tracking, site analytics, remarketing, and more.",
        service_gtag_duration: "Up to 2 years",
        service_mparticle_desc: "Cookies are used to associate a particular person's web browser with actions taken, such as content view and things purchased. They are also used by a variety of platforms to personalize advertising messages.",
        service_mparticle_duration: "up to 1 year",
        service_name: "Name",
        service_pixel_desc: "The platform can help advertisers to keep tracking user activity on other sites and retarget them with Meta ads.",
        service_pixel_duration: "up to 1 year",
        settings_saved: "Settings saved",
        share_earn: "Share and earn!",
        share_link: "Share",
        share_message: "Hey! Get promotion at {{brand_name}}. Use my referral code {{code}} when placing an order. {{link}}",
        share_with: "Share with",
        share_your_code: "Share referral code",
        show: "Show",
        show_all: "Show all",
        show_all_offers: "Show all offers",
        show_kiosk_scan_instructions: "Show kiosk scan instructions",
        show_on_map: "Show on map",
        show_qrcode_cash_register: "Show the QR code at the cash register",
        sign_in: "Sign in",
        sign_in_create_account: "Sign in or Create account",
        sign_in_with_apple: "Sign in with Apple",
        sign_out: "Sign out",
        signin_or_register: "Sign in or register",
        single_order_title: "Order details",
        sitemap_heading: "Welcome to {{brandName}} sitemap page",
        sitemap_title: "Sitemap page",
        skip_and_create_account: "Skip and Create account",
        smart_banner_button_primary: "Continue in our mobile app",
        smart_banner_button_secondary: "Not now",
        smart_banner_description: "Enjoy exclusive offers and an even better experience by using our native mobile app",
        smart_banner_title: "Continue in our mobile app?",
        snack_bar_delivery_promise_drivers_unavailable: "We don't have any drivers available right now. Please try again later.",
        sort_and_filter: "Sort and filter",
        sort_by: "Sort by",
        spanish: "Spanish",
        spend_amount: "Spend {{amount}}",
        status: "Status",
        status_title: "Order status",
        street_name: "Street name",
        street_name_is_required: "Street name is required",
        street_name_required: "Street (required)",
        subsidy: "Subsidy",
        subtotal: "Subtotal",
        sunday: "Sunday",
        table: "Table",
        take_look_at_cart: "Take a look at your cart",
        takeout: "Takeout",
        takeout_description: "Order is packed for outside",
        tax_info: "Tax information",
        temporarily_offline: "Temporarily unavailable for digital orders",
        temporarily_offline_working_hard: "Temporarily unavailable for digital orders. We are working hard to bring it back as soon as possible.",
        terms: "Terms of Service.",
        terms_and_privacy_validation: "To create an account you have to agree to the Terms of Service and Privacy Policy",
        terms_apply: "Terms apply",
        terms_of_service: "Terms of Service",
        terms_privacy_text: "By placing your order you accept our",
        terms_privacy_text_first_part: "By proceeding, you accept our",
        terms_privacy_text_second_part: "You can find",
        terms_privacy_text_third_part: "our Privacy Policy",
        terms_update_paragraph: "We've updated our Terms of Service and Privacy Policy. Please take a moment to review the changes to the Terms of Service linked below and let us know that you agree to them. You must agree to the updated Terms of Service in order to continue using our app.",
        terms_update_title: "Updates to our Terms of Service and Privacy Policy",
        thank_you_feedback: "Thanks for your feedback",
        thank_you_feedback_info: "Your voice is important to us in creating a better experience",
        thursday: "Thursday",
        time_unavailable_message: "Your selected time is no longer available. We selected the next available time for you.",
        time_unavailable_title: "Pickup time changed",
        tip: "Tip",
        tip_tooltip: "All tips go to the restaurant staff ",
        to: "To",
        to_late_to_cancel: "Sorry, it's to late to cancel your order",
        to_menu: "Back to menu",
        to_start: "Back to start",
        total: "Total",
        track_delivery: "Track delivery",
        transbank_duplicate_card_error: "There is already a card registered. If you want to replace it, please delete the existing one first.",
        tuesday: "Tuesday",
        unavailable_items_message: "They are removed from your order",
        unavailable_items_title: "Some items are not available",
        unlimited: "Unlimited",
        unlocked: "Unlocked",
        update: "Update",
        update_loyalty_balance_info: "{{points}} will be added to your loyalty balance 12 hours after the cash payment is completed",
        update_loyalty_balance_info_order: "If you earned any {{points}} they will show up here and will be added to your balance 12 hours after the cash payment is completed",
        use: "Use",
        use_applepay: "Use Apple Pay",
        use_at_kiosk: "Use at kiosk",
        use_cash: "Use Cash",
        use_credits: "Use credits",
        use_current_location: "Use current location",
        use_mercadopago: "Use Mercado Pago",
        use_offer: "Use offer",
        use_paypal: "Use PayPal",
        use_promotion: "Use promotion",
        use_reward: "Use reward",
        use_verve: "Use Verve",
        use_your_current_location: "Use current location",
        use_your_data: "We\u2019ll use your data to tailor offers, awards and promotions just for you. We do not sell your data.",
        used: "Used",
        used_by: "Used by {{user_name}}",
        used_credits: "Use credits ({{chosen_amount}}  used of {{total_credit_balance}})",
        user_at_cash_register: "Use at cash register",
        user_logged_in: "You are logged in",
        user_logged_out: "You are logged out",
        user_menu: "User menu dropdown",
        validate_cvv: "Validate CVV",
        vat: "VAT",
        vat_exemption: "VAT Exemption",
        vegan: "Vegan",
        vegetarian: "Vegetarian",
        venue_closed: "Closed right now.",
        venue_closing: "Closing soon. Sorry, it\u2019s too late to order now.",
        venue_not_found: "Venue not found",
        venue_now_closed: "Venue is now closed",
        venue_title: "Add items to the cart",
        verify_email: "Verify email address",
        verify_email_description: "To verify the changes, please enter the code we sent to {{email}}.",
        verify_phone: "Verify phone number",
        verify_phone_description: "To verify the changes, please enter the code we send you via SMS.",
        view_all: "View all",
        view_details: "View details ({{number}})",
        view_details_only: "View details",
        view_order: "View order",
        warning: "Too many products",
        we_do_not_deliver: "Oh snap! We don't deliver to this address yet with our delivery service, but please try one of our delivery partners, which you can find on our website.",
        we_do_not_deliver_to_this_address: "Oh snap! We don\u2019t deliver to this address",
        we_do_not_support_this_order_type: "We do not support this order type",
        we_need_your_email: "We need your email to create your account",
        we_would_like_to_know_you_better: "We\u2019d like to get to know you better",
        wednesday: "Wednesday",
        what_would_you_like: "What would you like?",
        what_would_you_like_customer: "What would you like {{customer}}?",
        whats_the_code: "What's the code?",
        whats_your_email: "What's your email?",
        whats_your_name: "Finally, what's your name?",
        where: "Where",
        wrong_address_format: "Wrong address format",
        wrong_card_number: "Wrong card number",
        wrong_card_number_text: "You have inserted the wrong card number. Please insert the correct card number and try again.",
        wrong_cc: "Wrong country code",
        wrong_code: "Wrong Code",
        wrong_code_try_again: "Wrong code. Please try again.",
        wrong_email: "Enter your email in format yourname@example.com",
        wrong_number: "Wrong number",
        wrong_password_error: "Wrong password",
        wrong_time_format: "Wrong time format",
        youll_pay: "You'll pay",
        your_balance: "Your balance",
        your_points_will_expire: "Your {{points}} will expire on {{date}}",
        zip_code: "ZIP code",
        zoom_in: "Zoom in",
        zoom_out: "Zoom out"
      };
    }
  });

  // src/fetch.tsx
  async function getJsonFile(url) {
    try {
      let response = await fetch(url);
      let responseJson = await response.json();
      emit("SAVE", responseJson);
    } catch (error) {
      console.error(error);
    }
  }
  var init_fetch = __esm({
    "src/fetch.tsx"() {
      "use strict";
      init_lib();
    }
  });

  // ../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/6f03b432-7eec-41ec-a758-ec9bbc719cbc/styles.js
  var styles_default;
  var init_styles = __esm({
    "../../../../../../../../private/var/folders/9r/fcj4w54d38q6vwk9qt35vbsw0000gn/T/6f03b432-7eec-41ec-a758-ec9bbc719cbc/styles.js"() {
      if (document.getElementById("11985b7a22") === null) {
        const element = document.createElement("style");
        element.id = "11985b7a22";
        element.textContent = `body {
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
}

._cont_14ipg_6 {
  background-color: red;
  height: 164px;
  overflow: auto;
}

._editor_14ipg_12 {
  min-height: 100%;
  font-size: var(--font-size-12);
  font-family: var(--font-family-code);
}

._myinput_14ipg_18 {
  border: 1px solid white!important;
}

._someclass_14ipg_22 {
  height: 100px;  
}
._key_14ipg_25, 
._text_14ipg_26 {
  margin: 0;
}
._key_14ipg_25 {
  opacity: 0.5;
}

._json_14ipg_33 {
  display: flex;
  align-items: center;
  gap: 16px;
}
._json_14ipg_33 > div:first-child {
  width: 100%;
}
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQXVDO0VBQ3ZDLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQpO1xufVxuXG4uY29udCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgaGVpZ2h0OiAxNjRweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5lZGl0b3Ige1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS0xMik7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1jb2RlKTtcbn1cblxuLm15aW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZSFpbXBvcnRhbnQ7XG59XG5cbi5zb21lY2xhc3Mge1xuICBoZWlnaHQ6IDEwMHB4OyAgXG59XG4ua2V5LCBcbi50ZXh0IHtcbiAgbWFyZ2luOiAwO1xufVxuLmtleSB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmpzb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG4uanNvbiA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */`;
        document.head.append(element);
      }
      styles_default = { "cont": "_cont_14ipg_6", "editor": "_editor_14ipg_12", "myinput": "_myinput_14ipg_18", "someclass": "_someclass_14ipg_22", "key": "_key_14ipg_25", "text": "_text_14ipg_26", "json": "_json_14ipg_33" };
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    const style = {
      myinput: {
        width: "100%",
        border: "1px solid #5b5b5b"
      },
      columns: {
        display: "flex"
      },
      key: {
        width: "100px",
        opacity: 0.4,
        margin: 0,
        lineHeight: 1.6,
        overflowWrap: "anywhere",
        userSelect: "text"
      },
      text: {
        width: "100%",
        paddingLeft: "16px",
        margin: 0,
        lineHeight: 1.6,
        userSelect: "text"
      },
      json: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "24px"
      }
    };
    const data = Object.entries(en);
    const urlInputRef = _2(null);
    const [jsonUrl, setJsonUrl] = p2("");
    const [message, setMessage] = p2("");
    const [value, setValue] = p2("");
    const [results, setResults] = p2([]);
    const [isDisabled, setIsDisabled] = p2(false);
    const handleAddStrings = T2(
      function() {
        emit("UPDATEFIGMA");
      },
      []
    );
    function handleJsonInput(jsonValue) {
      setJsonUrl(jsonValue);
    }
    const search = () => {
      setResults([]);
      data.filter((arr) => {
        if (arr[0].toLowerCase().includes(value.toLowerCase()) || arr[1].toLowerCase().includes(value.toLowerCase())) {
          setResults((current) => [...current, arr]);
        }
      });
    };
    onmessage = (event) => {
      return setMessage(event.data.pluginMessage);
    };
    return /* @__PURE__ */ h(Container, { space: "large" }, /* @__PURE__ */ h(VerticalSpace, { space: "large" }), /* @__PURE__ */ h("div", { className: styles_default.json }, /* @__PURE__ */ h(
      Textbox,
      {
        placeholder: "JSON file link",
        value: jsonUrl,
        onValueInput: handleJsonInput,
        icon: /* @__PURE__ */ h(IconHyperlink16, null)
      }
    ), /* @__PURE__ */ h(Button, { onClick: (e3) => getJsonFile(jsonUrl), secondary: true }, "Upload")), /* @__PURE__ */ h(VerticalSpace, { space: "large" }), /* @__PURE__ */ h("div", { className: styles_default.json }, /* @__PURE__ */ h(
      SearchTextbox,
      {
        onInput: (e3) => setValue(e3.currentTarget.value),
        value,
        style: style.myinput
      }
    ), /* @__PURE__ */ h(Button, { class: "hello", onClick: search }, "Search")), results == null ? void 0 : results.map((item) => /* @__PURE__ */ h(p, null, /* @__PURE__ */ h(VerticalSpace, { space: "large" }), /* @__PURE__ */ h("div", { style: style.columns }, /* @__PURE__ */ h("p", { style: style.key }, item[0]), /* @__PURE__ */ h("p", { style: style.text }, item[1])))), /* @__PURE__ */ h(VerticalSpace, { space: "large" }), /* @__PURE__ */ h(
      Button,
      {
        fullWidth: true,
        onClick: handleAddStrings
      },
      "Update strings"
    ), /* @__PURE__ */ h(VerticalSpace, { space: "small" }), /* @__PURE__ */ h("div", null, message));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_lib2();
      init_preact_module();
      init_hooks_module();
      init_lib();
      init_mobileStrings();
      init_fetch();
      init_styles();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
