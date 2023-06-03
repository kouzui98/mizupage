"use strict";
exports.id = 728;
exports.ids = [728];
exports.modules = {

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d3": () => (/* binding */ DescriptionX),
  "Bv": () => (/* binding */ Dimmed),
  "nv": () => (/* binding */ Paragraph),
  "F7": () => (/* binding */ Redacted),
  "EH": () => (/* binding */ RedactedFont)
});

// UNUSED EXPORTS: Description

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./public/assets/fonts/redacted/otf/RedactedScript-Bold.otf
const RedactedScript_Bold_namespaceObject = __webpack_require__.p + "static/chunks/public/assets/fonts/redacted/otf/RedactedScript-Bold.a3614879898eab8a.otf";
;// CONCATENATED MODULE: ./public/assets/fonts/redacted/ttf/RedactedScript-Bold.ttf
const ttf_RedactedScript_Bold_namespaceObject = __webpack_require__.p + "static/chunks/public/assets/fonts/redacted/ttf/RedactedScript-Bold.21bd2477dc4329a8.ttf";
;// CONCATENATED MODULE: ./public/assets/fonts/redacted/woff/RedactedScript-Bold.woff2
const RedactedScript_Bold_woff2_namespaceObject = __webpack_require__.p + "static/chunks/public/assets/fonts/redacted/woff/RedactedScript-Bold.f6b44c5976c60a38.woff2";
;// CONCATENATED MODULE: ./lib/classnames.ts
const classnames = (...classnames)=>{
    return classnames.filter(Boolean).join(" ");
};

;// CONCATENATED MODULE: ./components/typography/index.tsx






const Description = ({ children  })=>/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "jsx-8f42d1765f7d9a19" + " " + "description",
                children: children
            }),
            _jsx(_JSXStyle, {
                id: "8f42d1765f7d9a19",
                children: ".description.jsx-8f42d1765f7d9a19{display:block;padding:1em}"
            })
        ]
    });
const DescriptionX = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-806347ec930a6bac" + " " + "description",
                children: children
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "806347ec930a6bac",
                children: ".description.jsx-806347ec930a6bac{display:block;padding:1em;width:100%}"
            })
        ]
    });
const Dimmed = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "jsx-a3cc15960b669e31" + " " + "dimmed",
                children: children
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "a3cc15960b669e31",
                children: ".dimmed.jsx-a3cc15960b669e31{opacity:.8}"
            })
        ]
    });
const Paragraph = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "jsx-5344100b42154640" + " " + "paragraph",
                children: children
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "5344100b42154640",
                children: ".paragraph.jsx-5344100b42154640{font-size:1.2em;font-weight:300;line-height:1.2em}"
            })
        ]
    });
const Redacted = ({ children , hoverToShow  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "jsx-496cfcaf0ae86a6e" + " " + "redacted",
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "jsx-496cfcaf0ae86a6e" + " " + (classnames("redact", hoverToShow && "hover-to-show") || ""),
                        children: children
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "496cfcaf0ae86a6e",
                children: '.redacted.jsx-496cfcaf0ae86a6e{position:relative}.redact.jsx-496cfcaf0ae86a6e{font-family:"Redacted";font-size:1.2em;left:0;line-height:1;position:absolute;top:0;-webkit-transition:opacity.25s;-moz-transition:opacity.25s;-o-transition:opacity.25s;transition:opacity.25s;-webkit-transform:rotate(1deg);-moz-transform:rotate(1deg);-ms-transform:rotate(1deg);-o-transform:rotate(1deg);transform:rotate(1deg)}.redact.hover-to-show.jsx-496cfcaf0ae86a6e:hover{opacity:.25}'
            })
        ]
    });
const RedactedFont = ()=>jsx_runtime_.jsx((style_default()), {
        id: "4deb0a8c42c028f6",
        dynamic: [
            RedactedScript_Bold_woff2_namespaceObject,
            RedactedScript_Bold_namespaceObject,
            ttf_RedactedScript_Bold_namespaceObject
        ],
        children: `@font-face{font-family:"Redacted";src:url("${RedactedScript_Bold_woff2_namespaceObject}")format("woff2"),url("${RedactedScript_Bold_namespaceObject}")format("opentype"),url("${ttf_RedactedScript_Bold_namespaceObject}")format("truetype")}`
    });


/***/ })

};
;