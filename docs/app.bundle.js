!(function(n) {
  var e = {};
  function t(o) {
    if (e[o]) return e[o].exports;
    var r = (e[o] = { i: o, l: !1, exports: {} });
    return n[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
  }
  (t.m = n),
    (t.c = e),
    (t.d = function(n, e, o) {
      t.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: o });
    }),
    (t.r = function(n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (t.t = function(n, e) {
      if ((1 & e && (n = t(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var o = Object.create(null);
      if (
        (t.r(o),
        Object.defineProperty(o, "default", { enumerable: !0, value: n }),
        2 & e && "string" != typeof n)
      )
        for (var r in n)
          t.d(
            o,
            r,
            function(e) {
              return n[e];
            }.bind(null, r)
          );
      return o;
    }),
    (t.n = function(n) {
      var e =
        n && n.__esModule
          ? function() {
              return n.default;
            }
          : function() {
              return n;
            };
      return t.d(e, "a", e), e;
    }),
    (t.o = function(n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (t.p = ""),
    t((t.s = 11));
})([
  function(n, e, t) {
    n.exports = {
      "u-padding1":
        "src-components-AccordionItem-___styles-module__u-padding1___Z8icE",
      "AccordionItem-title":
        "src-components-AccordionItem-___styles-module__AccordionItem-title___2O-Ln",
      "u-paddingLeft1":
        "src-components-AccordionItem-___styles-module__u-paddingLeft1___3FOEr",
      "AccordionItem-content":
        "src-components-AccordionItem-___styles-module__AccordionItem-content___hHzEC",
      "u-paddingRight1":
        "src-components-AccordionItem-___styles-module__u-paddingRight1___2OiiA",
      "u-paddingTop3":
        "src-components-AccordionItem-___styles-module__u-paddingTop3___315Ev",
      "u-cursorPointer":
        "src-components-AccordionItem-___styles-module__u-cursorPointer___3Ga6O",
      "u-margin0":
        "src-components-AccordionItem-___styles-module__u-margin0___1wHG7",
      "u-fontWeightBold":
        "src-components-AccordionItem-___styles-module__u-fontWeightBold___3ymJv"
    };
  },
  function(n, e, t) {
    n.exports = {
      "u-displayFlex":
        "src-components-Header-___styles-module__u-displayFlex___2mhNx",
      Header: "src-components-Header-___styles-module__Header___ChGjM",
      "u-justifyContentCenter":
        "src-components-Header-___styles-module__u-justifyContentCenter___2ZNjx",
      "u-alignItemsCenter":
        "src-components-Header-___styles-module__u-alignItemsCenter___pM0Ky",
      "u-flexDirectionColumn":
        "src-components-Header-___styles-module__u-flexDirectionColumn___13ZFd",
      "Header-title":
        "src-components-Header-___styles-module__Header-title___2OQWF"
    };
  },
  function(n, e, t) {
    n.exports = {
      "u-displayFlex":
        "src-components-Footer-___styles-module__u-displayFlex___2JZa7",
      Footer: "src-components-Footer-___styles-module__Footer___omm6X",
      "u-justifyContentCenter":
        "src-components-Footer-___styles-module__u-justifyContentCenter___1asGn",
      "u-alignItemsCenter":
        "src-components-Footer-___styles-module__u-alignItemsCenter___1ojqf",
      "u-flexDirectionColumn":
        "src-components-Footer-___styles-module__u-flexDirectionColumn___3LGIf",
      "Footer-text":
        "src-components-Footer-___styles-module__Footer-text___31LLU"
    };
  },
  function(n, e, t) {
    n.exports = {
      Home: "src-containers-Home-___styles-module__Home___2F1Ps",
      "Home-content":
        "src-containers-Home-___styles-module__Home-content___e2xPz"
    };
  },
  function(n, e, t) {
    n.exports = {
      "u-displayFlex":
        "src-components-Accordion-___styles-module__u-displayFlex___2WjAv",
      Accordion: "src-components-Accordion-___styles-module__Accordion___1PwZM",
      "u-justifyContentCenter":
        "src-components-Accordion-___styles-module__u-justifyContentCenter___3rRGk",
      "u-alignItemsCenter":
        "src-components-Accordion-___styles-module__u-alignItemsCenter___uQZdn",
      "u-flexDirectionColumn":
        "src-components-Accordion-___styles-module__u-flexDirectionColumn___2pwVw",
      "u-padding1":
        "src-components-Accordion-___styles-module__u-padding1___3XtKo",
      "u-paddingLeft1":
        "src-components-Accordion-___styles-module__u-paddingLeft1___26WQe",
      "u-paddingRight1":
        "src-components-Accordion-___styles-module__u-paddingRight1___G71ca",
      "u-paddingTop3":
        "src-components-Accordion-___styles-module__u-paddingTop3___n_Pd7",
      "u-margin0":
        "src-components-Accordion-___styles-module__u-margin0___1Vgk-"
    };
  },
  function(n, e, t) {
    var o = t(6);
    "string" == typeof o && (o = [[n.i, o, ""]]);
    var r = { hmr: !0, transform: void 0, insertInto: void 0 };
    t(8)(o, r);
    o.locals && (n.exports = o.locals);
  },
  function(n, e, t) {
    (n.exports = t(7)(!1)).push([
      n.i,
      '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',
      ""
    ]);
  },
  function(n, e) {
    n.exports = function(n) {
      var e = [];
      return (
        (e.toString = function() {
          return this.map(function(e) {
            var t = (function(n, e) {
              var t = n[1] || "",
                o = n[3];
              if (!o) return t;
              if (e && "function" == typeof btoa) {
                var r = ((s = o),
                  "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                    btoa(unescape(encodeURIComponent(JSON.stringify(s)))) +
                    " */"),
                  i = o.sources.map(function(n) {
                    return "/*# sourceURL=" + o.sourceRoot + n + " */";
                  });
                return [t]
                  .concat(i)
                  .concat([r])
                  .join("\n");
              }
              var s;
              return [t].join("\n");
            })(e, n);
            return e[2] ? "@media " + e[2] + "{" + t + "}" : t;
          }).join("");
        }),
        (e.i = function(n, t) {
          "string" == typeof n && (n = [[null, n, ""]]);
          for (var o = {}, r = 0; r < this.length; r++) {
            var i = this[r][0];
            "number" == typeof i && (o[i] = !0);
          }
          for (r = 0; r < n.length; r++) {
            var s = n[r];
            ("number" == typeof s[0] && o[s[0]]) ||
              (t && !s[2]
                ? (s[2] = t)
                : t && (s[2] = "(" + s[2] + ") and (" + t + ")"),
              e.push(s));
          }
        }),
        e
      );
    };
  },
  function(n, e, t) {
    var o,
      r,
      i = {},
      s = ((o = function() {
        return window && document && document.all && !window.atob;
      }),
      function() {
        return void 0 === r && (r = o.apply(this, arguments)), r;
      }),
      a = (function(n) {
        var e = {};
        return function(n, t) {
          if ("function" == typeof n) return n();
          if (void 0 === e[n]) {
            var o = function(n, e) {
              return e ? e.querySelector(n) : document.querySelector(n);
            }.call(this, n, t);
            if (
              window.HTMLIFrameElement &&
              o instanceof window.HTMLIFrameElement
            )
              try {
                o = o.contentDocument.head;
              } catch (n) {
                o = null;
              }
            e[n] = o;
          }
          return e[n];
        };
      })(),
      c = null,
      l = 0,
      u = [],
      d = t(9);
    function m(n, e) {
      for (var t = 0; t < n.length; t++) {
        var o = n[t],
          r = i[o.id];
        if (r) {
          r.refs++;
          for (var s = 0; s < r.parts.length; s++) r.parts[s](o.parts[s]);
          for (; s < o.parts.length; s++) r.parts.push(g(o.parts[s], e));
        } else {
          var a = [];
          for (s = 0; s < o.parts.length; s++) a.push(g(o.parts[s], e));
          i[o.id] = { id: o.id, refs: 1, parts: a };
        }
      }
    }
    function p(n, e) {
      for (var t = [], o = {}, r = 0; r < n.length; r++) {
        var i = n[r],
          s = e.base ? i[0] + e.base : i[0],
          a = { css: i[1], media: i[2], sourceMap: i[3] };
        o[s] ? o[s].parts.push(a) : t.push((o[s] = { id: s, parts: [a] }));
      }
      return t;
    }
    function f(n, e) {
      var t = a(n.insertInto);
      if (!t)
        throw new Error(
          "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
        );
      var o = u[u.length - 1];
      if ("top" === n.insertAt)
        o
          ? o.nextSibling
            ? t.insertBefore(e, o.nextSibling)
            : t.appendChild(e)
          : t.insertBefore(e, t.firstChild),
          u.push(e);
      else if ("bottom" === n.insertAt) t.appendChild(e);
      else {
        if ("object" != typeof n.insertAt || !n.insertAt.before)
          throw new Error(
            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
          );
        var r = a(n.insertAt.before, t);
        t.insertBefore(e, r);
      }
    }
    function _(n) {
      if (null === n.parentNode) return !1;
      n.parentNode.removeChild(n);
      var e = u.indexOf(n);
      e >= 0 && u.splice(e, 1);
    }
    function h(n) {
      var e = document.createElement("style");
      if (
        (void 0 === n.attrs.type && (n.attrs.type = "text/css"),
        void 0 === n.attrs.nonce)
      ) {
        var o = (function() {
          0;
          return t.nc;
        })();
        o && (n.attrs.nonce = o);
      }
      return b(e, n.attrs), f(n, e), e;
    }
    function b(n, e) {
      Object.keys(e).forEach(function(t) {
        n.setAttribute(t, e[t]);
      });
    }
    function g(n, e) {
      var t, o, r, i;
      if (e.transform && n.css) {
        if (
          !(i =
            "function" == typeof e.transform
              ? e.transform(n.css)
              : e.transform.default(n.css))
        )
          return function() {};
        n.css = i;
      }
      if (e.singleton) {
        var s = l++;
        (t = c || (c = h(e))),
          (o = x.bind(null, t, s, !1)),
          (r = x.bind(null, t, s, !0));
      } else
        n.sourceMap &&
        "function" == typeof URL &&
        "function" == typeof URL.createObjectURL &&
        "function" == typeof URL.revokeObjectURL &&
        "function" == typeof Blob &&
        "function" == typeof btoa
          ? ((t = (function(n) {
              var e = document.createElement("link");
              return (
                void 0 === n.attrs.type && (n.attrs.type = "text/css"),
                (n.attrs.rel = "stylesheet"),
                b(e, n.attrs),
                f(n, e),
                e
              );
            })(e)),
            (o = function(n, e, t) {
              var o = t.css,
                r = t.sourceMap,
                i = void 0 === e.convertToAbsoluteUrls && r;
              (e.convertToAbsoluteUrls || i) && (o = d(o));
              r &&
                (o +=
                  "\n/*# sourceMappingURL=data:application/json;base64," +
                  btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
                  " */");
              var s = new Blob([o], { type: "text/css" }),
                a = n.href;
              (n.href = URL.createObjectURL(s)), a && URL.revokeObjectURL(a);
            }.bind(null, t, e)),
            (r = function() {
              _(t), t.href && URL.revokeObjectURL(t.href);
            }))
          : ((t = h(e)),
            (o = function(n, e) {
              var t = e.css,
                o = e.media;
              o && n.setAttribute("media", o);
              if (n.styleSheet) n.styleSheet.cssText = t;
              else {
                for (; n.firstChild; ) n.removeChild(n.firstChild);
                n.appendChild(document.createTextNode(t));
              }
            }.bind(null, t)),
            (r = function() {
              _(t);
            }));
      return (
        o(n),
        function(e) {
          if (e) {
            if (
              e.css === n.css &&
              e.media === n.media &&
              e.sourceMap === n.sourceMap
            )
              return;
            o((n = e));
          } else r();
        }
      );
    }
    n.exports = function(n, e) {
      if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
        throw new Error(
          "The style-loader cannot be used in a non-browser environment"
        );
      ((e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}),
        e.singleton || "boolean" == typeof e.singleton || (e.singleton = s()),
        e.insertInto || (e.insertInto = "head"),
        e.insertAt || (e.insertAt = "bottom");
      var t = p(n, e);
      return (
        m(t, e),
        function(n) {
          for (var o = [], r = 0; r < t.length; r++) {
            var s = t[r];
            (a = i[s.id]).refs--, o.push(a);
          }
          n && m(p(n, e), e);
          for (r = 0; r < o.length; r++) {
            var a;
            if (0 === (a = o[r]).refs) {
              for (var c = 0; c < a.parts.length; c++) a.parts[c]();
              delete i[a.id];
            }
          }
        }
      );
    };
    var y,
      v = ((y = []),
      function(n, e) {
        return (y[n] = e), y.filter(Boolean).join("\n");
      });
    function x(n, e, t, o) {
      var r = t ? "" : o.css;
      if (n.styleSheet) n.styleSheet.cssText = v(e, r);
      else {
        var i = document.createTextNode(r),
          s = n.childNodes;
        s[e] && n.removeChild(s[e]),
          s.length ? n.insertBefore(i, s[e]) : n.appendChild(i);
      }
    }
  },
  function(n, e) {
    n.exports = function(n) {
      var e = "undefined" != typeof window && window.location;
      if (!e) throw new Error("fixUrls requires window.location");
      if (!n || "string" != typeof n) return n;
      var t = e.protocol + "//" + e.host,
        o = t + e.pathname.replace(/\/[^\/]*$/, "/");
      return n.replace(
        /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
        function(n, e) {
          var r,
            i = e
              .trim()
              .replace(/^"(.*)"$/, function(n, e) {
                return e;
              })
              .replace(/^'(.*)'$/, function(n, e) {
                return e;
              });
          return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)
            ? n
            : ((r =
                0 === i.indexOf("//")
                  ? i
                  : 0 === i.indexOf("/")
                  ? t + i
                  : o + i.replace(/^\.\//, "")),
              "url(" + JSON.stringify(r) + ")");
        }
      );
    };
  },
  function(n, e, t) {},
  function(n, e, t) {
    "use strict";
    t.r(e);
    const o = (n, e, ...t) => {
        n.classList[e](...t);
      },
      r = (n, e) => {
        for (let t = 0; t < n.length; t += 1) e.appendChild(n[t]);
      };
    var i = t(0),
      s = t.n(i);
    const a = n => {
      const e = n.target.nextElementSibling;
      e.setAttribute("style", "height: 0"),
        o(e, "toggle", s.a["AccordionItem-content-active"]),
        e.classList.contains(s.a["AccordionItem-content-active"]) &&
          e.setAttribute("style", `height: ${e.scrollHeight}px`);
    };
    var c = ({ title: n, content: e }) => {
        const t = document.createElement("dt");
        (t.innerHTML = n),
          t.addEventListener("click", a),
          o(t, "add", s.a["AccordionItem-title"]);
        const r = document.createElement("dd");
        return (
          (r.innerHTML = `<p>${e}</p>`),
          o(r, "add", s.a["AccordionItem-content"]),
          [t, r]
        );
      },
      l = t(4),
      u = t.n(l);
    const d = ({ title: n, content: e }) => c({ title: n, content: e });
    var m = ({ items: n }) => {
        const e = document.createElement("dl");
        o(e, "add", u.a.Accordion);
        let t = [];
        for (let o = 0; o < n.length; o += 1) (t = d(n[o])), r(t, e);
        return [e];
      },
      p = t(1),
      f = t.n(p);
    var _ = ({ title: n }) => {
        const e = document.createElement("header");
        return (
          (e.innerHTML = `<h1 class="${f.a["Header-title"]}">${n}</h1>`),
          o(e, "add", f.a.Header),
          [e]
        );
      },
      h = t(2),
      b = t.n(h);
    var g = ({ text: n }) => {
      const e = document.createElement("footer");
      return (
        (e.innerHTML = `<p class="${b.a["Footer-text"]}">${n}</p>`),
        o(e, "add", b.a.Footer),
        [e]
      );
    };
    const y = [
      {
        title: "Section 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend ornare sapien sit amet sagittis. Curabitur in justo sed sapien tincidunt pharetra. Suspendisse potenti. Donec vitae vestibulum purus. Aliquam elementum lorem nec enim posuere dapibus. Mauris auctor ligula egestas venenatis egestas. Vestibulum a dolor vel turpis pulvinar posuere. Integer a volutpat mauris. Sed ut bibendum augue. Ut eleifend pellentesque molestie."
      },
      {
        title: "Section 2",
        content:
          "Lorem ipsum dolor sit amet. Curabitur in justo sed sapien tincidunt pharetra. Suspendisse potenti. Donec vitae vestibulum purus. Aliquam elementum lorem nec enim posuere dapibus. Mauris auctor ligula egestas venenatis egestas. Vestibulum a dolor vel turpis pulvinar posuere. Integer a volutpat mauris. Sed ut bibendum augue. Ut eleifend pellentesque molestie."
      },
      { title: "Section 3", content: "Lorem Ipsum" }
    ];
    var v = t(3),
      x = t.n(v);
    const w = async () => {
      return {
        title: "Section Ajax",
        content: await (() =>
          fetch("https://jsonplaceholder.typicode.com/posts/1/comments?id=1")
            .then(n => n.json())
            .then(n => n && n.length && n[0].body)
            .catch(n => console.log("Error: ", n)))()
      };
    };
    var C = async () => {
      const n = await w(),
        e = [...y, n],
        t = m({ items: e }),
        i = _({ title: "VanilaJS Accordion" }),
        s = g({ text: "By Juan Mendez" }),
        a = document.createElement("section");
      o(a, "add", x.a.Home);
      const c = document.createElement("div");
      return (
        o(c, "add", x.a["Home-content"]), r(t, c), r([c], a), [...i, a, ...s]
      );
    };
    t(5), t(10);
    document.addEventListener("DOMContentLoaded", async () => {
      const n = document.getElementById("root"),
        e = await C();
      r(e, n);
    });
  }
]);
