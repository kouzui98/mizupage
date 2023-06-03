"use strict";
exports.id = 972;
exports.ids = [972];
exports.modules = {

/***/ 71:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/my.df1969cc.webp","height":2580,"width":2580,"blurDataURL":"data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADwAQCdASoIAAgAAkA4JZACdAEO5e7IvAAA/tgdL1z4644saTAt3PJL84TmJi1sby9CNV61XtTEdjPQSE6QAB0ZjYzSrrwJO/fk+AAA","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 69:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ AccountShowcase)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./components/typography/index.tsx + 4 modules
var typography = __webpack_require__(23);
;// CONCATENATED MODULE: ./components/display/capsule.tsx


const CapsuleLink = ({ background , children , href , icon , iconBackground  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: href ?? "#",
                rel: "noopener noreferrer",
                target: "_blank",
                className: style_default().dynamic([
                    [
                        "1f7e798a5ded108f",
                        [
                            background ?? "#354c64aa",
                            iconBackground ?? "white"
                        ]
                    ]
                ]) + " " + "capsule",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: style_default().dynamic([
                            [
                                "1f7e798a5ded108f",
                                [
                                    background ?? "#354c64aa",
                                    iconBackground ?? "white"
                                ]
                            ]
                        ]) + " " + "icon-container",
                        children: icon
                    }),
                    children
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "1f7e798a5ded108f",
                dynamic: [
                    background ?? "#354c64aa",
                    iconBackground ?? "white"
                ],
                children: `.capsule.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:.5rem;-webkit-border-radius:50vh;-moz-border-radius:50vh;border-radius:50vh;padding:0rem;padding-right:.75rem;width:auto;background:${background ?? "#354c64aa"};-webkit-box-shadow:0 0 .25rem rgba(0,0,0,.25);-moz-box-shadow:0 0 .25rem rgba(0,0,0,.25);box-shadow:0 0 .25rem rgba(0,0,0,.25);color:white;text-decoration:none;text-shadow:0 0 .5rem rgba(0,0,0,.25);-webkit-transition:box-shadow.25s ease;-moz-transition:box-shadow.25s ease;-o-transition:box-shadow.25s ease;transition:box-shadow.25s ease}.capsule.__jsx-style-dynamic-selector:hover{-webkit-box-shadow:0 0 .25rem rgba(0,0,0,.5);-moz-box-shadow:0 0 .25rem rgba(0,0,0,.5);box-shadow:0 0 .25rem rgba(0,0,0,.5)}.icon-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1.75rem;height:2.5rem;width:2.5rem;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background:${iconBackground ?? "white"}}`
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/display/accounts.tsx




const Account = ({ children , capsuleBackground , href ="#" , icon , iconBackground , platform , redacted =false , redactedHoverToShow =false  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CapsuleLink, {
        background: capsuleBackground,
        href: href,
        icon: icon,
        iconBackground: iconBackground,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "platform",
                children: platform
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(typography/* Dimmed */.Bv, {
                children: redacted ? /*#__PURE__*/ jsx_runtime_.jsx(typography/* Redacted */.F7, {
                    hoverToShow: redactedHoverToShow,
                    children: children
                }) : children
            })
        ]
    });
};
const Category = ({ children , title  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-808bae0e3212ccb9" + " " + "category",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "jsx-808bae0e3212ccb9" + " " + "title",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "jsx-808bae0e3212ccb9" + " " + "row",
                children: children
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "808bae0e3212ccb9",
                children: '.category.jsx-808bae0e3212ccb9{-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:.75rem}.title.jsx-808bae0e3212ccb9{color:#eee;font-size:1rem}.title.jsx-808bae0e3212ccb9::before{content:"#";color:#aaa;vertical-align:.1rem}.row.jsx-808bae0e3212ccb9{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:.75rem}'
            })
        ]
    });
const Container = ({ children  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-60d5e9d0164d3313" + " " + "container",
        children: [
            children,
            jsx_runtime_.jsx((style_default()), {
                id: "60d5e9d0164d3313",
                children: ".container.jsx-60d5e9d0164d3313{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:1rem}"
            })
        ]
    });
const AccountShowcase = {
    Account: Account,
    Category: Category,
    Container: Container
};


/***/ }),

/***/ 321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer),
/* harmony export */   "w": () => (/* binding */ FooterParagraph)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);


const FooterParagraph = ({ backgroundColor , color , children , icon: Icon  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "8467dafbc551476",
                        [
                            color ?? "#eee"
                        ]
                    ]
                ]) + " " + "paragraph",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                            [
                                "8467dafbc551476",
                                [
                                    color ?? "#eee"
                                ]
                            ]
                        ]) + " " + "icon",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                                [
                                    "8467dafbc551476",
                                    [
                                        color ?? "#eee"
                                    ]
                                ]
                            ])
                        })
                    }),
                    children,
                    backgroundColor
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "8467dafbc551476",
                dynamic: [
                    color ?? "#eee"
                ],
                children: `.paragraph.__jsx-style-dynamic-selector{color:${color ?? "#eee"};text-shadow:0 0 .25em rgba(0,0,0,.5);font-size:.8em;margin:0;padding:.75em 1em}.icon.__jsx-style-dynamic-selector{display:inline-block;font-size:1.2em;vertical-align:middle;width:1.25em}`
            })
        ]
    });
const Footer = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
                className: "jsx-a125b74d58df388c" + " " + "footer",
                children: children
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "a125b74d58df388c",
                children: ".footer.jsx-a125b74d58df388c{margin-top:1rem}"
            })
        ]
    });


/***/ }),

/***/ 884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LM": () => (/* binding */ ProfileAddonGroup),
/* harmony export */   "Rt": () => (/* binding */ ProfileNameStandout),
/* harmony export */   "Sf": () => (/* binding */ ProfileAddonGroupX),
/* harmony export */   "bX": () => (/* binding */ ProfileAddons),
/* harmony export */   "h4": () => (/* binding */ Header),
/* harmony export */   "kU": () => (/* binding */ ProfileAddonGroupTitle)
/* harmony export */ });
/* unused harmony export ProfileName */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const ProfileNameStandout = ({ backgroundColor , children , hoverColor , hoverRuby , href , ruby  })=>{
    ruby = ruby || "";
    hoverRuby = hoverRuby || ruby || "";
    href = href || "#";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: href,
        rel: "noreferrer",
        target: "_blank",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "b44ed82826f9df72",
                [
                    backgroundColor,
                    ruby || "",
                    hoverColor,
                    hoverRuby
                ]
            ]
        ]) + " " + "standout",
        children: [
            children,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "b44ed82826f9df72",
                dynamic: [
                    backgroundColor,
                    ruby || "",
                    hoverColor,
                    hoverRuby
                ],
                children: `.standout.__jsx-style-dynamic-selector{background:${backgroundColor};-webkit-border-radius:.25em;-moz-border-radius:.25em;border-radius:.25em;-webkit-box-shadow:0 0 .1em .1em rgba(0,0,0,.05);-moz-box-shadow:0 0 .1em .1em rgba(0,0,0,.05);box-shadow:0 0 .1em .1em rgba(0,0,0,.05);color:white;display:inline-block;padding:.1em;position:relative;text-decoration:none;-webkit-transition-duration:.5s;-moz-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s}.standout.__jsx-style-dynamic-selector::after{color:#eee;content:"${ruby || ""}";display:block;font-size:.5em;line-height:1.5em;position:absolute;top:2.5em;-webkit-transition-duration:.5s;-moz-transition-duration:.5s;-o-transition-duration:.5s;transition-duration:.5s}.standout.__jsx-style-dynamic-selector:hover{background:${hoverColor};-webkit-box-shadow:0 0 .2em .2em rgba(0,0,0,.1);-moz-box-shadow:0 0 .2em .2em rgba(0,0,0,.1);box-shadow:0 0 .2em .2em rgba(0,0,0,.1)}.standout.__jsx-style-dynamic-selector:hover::after{color:#fff;content:"${hoverRuby}"}`
            })
        ]
    });
};
const ProfileName = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-2dca3908f829f855" + " " + "profile-name",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "jsx-2dca3908f829f855" + " " + "content",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "jsx-2dca3908f829f855" + " " + "description",
                children: "preferred-name"
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "2dca3908f829f855",
                children: '.profile-name.jsx-2dca3908f829f855{background:#555;-webkit-border-radius:.5rem;-moz-border-radius:.5rem;border-radius:.5rem;color:white;display:block;padding:1.75em .5rem .5em .5rem;position:relative}.content.jsx-2dca3908f829f855{font-family:"Courier New";font-size:2.5em;font-weight:normal;line-height:1em;margin:0;padding:0;text-wrap:none}.description.jsx-2dca3908f829f855{color:#999;font-size:1.25rem;font-weight:300;position:absolute;top:0;right:.5rem}'
            })
        ]
    });
const ProfileAddonGroupTitle = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "jsx-53ecf8df5afabfd3" + " " + "title",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                className: "jsx-53ecf8df5afabfd3"
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "53ecf8df5afabfd3",
                children: "hr.jsx-53ecf8df5afabfd3{background:#777;border:none;display:block;height:.15rem;margin:0;padding:0;width:100%}.title.jsx-53ecf8df5afabfd3{color:#777;font-size:1.2rem;font-weight:300;line-height:1em;margin:0;padding:0}"
            })
        ]
    });
const ProfileAddonGroup = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-df1442cd193aa793" + " " + "group",
        children: [
            children,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "df1442cd193aa793",
                children: ".group.jsx-df1442cd193aa793{background:#fff;-webkit-border-radius:.5em;-moz-border-radius:.5em;border-radius:.5em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;gap:.5rem;padding:.5em .5rem 1.75em .5rem}"
            })
        ]
    });
const ProfileAddonGroupX = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-fddd882f6cb42d82" + " " + "group",
        children: [
            children,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "fddd882f6cb42d82",
                children: ".group.jsx-fddd882f6cb42d82{background:transparent;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;gap:.5rem}"
            })
        ]
    });
const ProfileAddons = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "jsx-c5843da0ffc5b58f" + " " + "addons",
        children: [
            children,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "c5843da0ffc5b58f",
                children: ".addons.jsx-c5843da0ffc5b58f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:1.5em}.description.jsx-c5843da0ffc5b58f{bottom:0;color:#999;display:block;font-weight:300;margin:0;padding:0;position:absolute;right:.5em}"
            })
        ]
    });
const Header = ({ children , profileName , profilePicture  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "jsx-3c951da1779b7194" + " " + "header row",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-3c951da1779b7194" + " " + "column column-picture",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: profilePicture.src,
                    className: "jsx-3c951da1779b7194" + " " + "picture-container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: profilePicture,
                        alt: "profile picture",
                        style: {
                            height: "auto",
                            width: "100%"
                        }
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-3c951da1779b7194" + " " + "column column-names",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileName, {
                        children: profileName
                    }),
                    children
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "3c951da1779b7194",
                children: ".row.jsx-3c951da1779b7194{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.column.jsx-3c951da1779b7194{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:2rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:2em}.column-picture.jsx-3c951da1779b7194{-webkit-flex-basis:40%;-ms-flex-preferred-size:40%;flex-basis:40%}.picture-container.jsx-3c951da1779b7194{background:#fff;border:.5em solid#fff;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-box-shadow:0 0 .15em .15em rgb(0 0 0/15%);-moz-box-shadow:0 0 .15em .15em rgb(0 0 0/15%);box-shadow:0 0 .15em .15em rgb(0 0 0/15%);overflow:hidden}.column-names.jsx-3c951da1779b7194{-webkit-flex-basis:60%;-ms-flex-preferred-size:60%;flex-basis:60%}.column-names.jsx-3c951da1779b7194 .container.jsx-3c951da1779b7194{background:#ccc;-webkit-border-radius:.25em;-moz-border-radius:.25em;border-radius:.25em;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:1.5em;padding:.5em .25em}@media(max-width:40rem){.column-picture.jsx-3c951da1779b7194,.column-names.jsx-3c951da1779b7194{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%}}"
            })
        ]
    });


/***/ }),

/***/ 233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$w": () => (/* binding */ Monoline),
/* harmony export */   "tV": () => (/* binding */ MonolineGroup)
/* harmony export */ });
/* unused harmony export MonolineGroupIndentContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const MonolineGroupIndentContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({
    maxContentLength: 0,
    maxCommentLength: 0,
    updateLength: ()=>void undefined
});
const Monoline = ({ children , comment  })=>{
    const { maxContentLength , maxCommentLength , updateLength: updateLength  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(MonolineGroupIndentContext);
    const self = (0,react__WEBPACK_IMPORTED_MODULE_2__.useId)();
    const contentLength = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const childrenLength = react__WEBPACK_IMPORTED_MODULE_2__.Children.map(children, (child)=>typeof child === "string" ? child.length : 0);
        return childrenLength.reduce((a, b)=>a + b, 0);
    }, [
        children
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        updateLength(contentLength, (comment ?? "").length, self);
        return ()=>updateLength(0, 0, self);
    }, [
        comment,
        self,
        contentLength,
        updateLength
    ]);
    // space to prepend to the comment for aligned indentation
    const prepend = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>maxContentLength - contentLength, [
        maxContentLength,
        contentLength
    ]);
    const commentPrefix = "// ";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "75c642cd74dc13d1",
                [
                    prepend + 1,
                    maxCommentLength + commentPrefix.length,
                    commentPrefix
                ]
            ]
        ]) + " " + "item",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "75c642cd74dc13d1",
                        [
                            prepend + 1,
                            maxCommentLength + commentPrefix.length,
                            commentPrefix
                        ]
                    ]
                ]) + " " + "content",
                children: children
            }),
            comment && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "75c642cd74dc13d1",
                        [
                            prepend + 1,
                            maxCommentLength + commentPrefix.length,
                            commentPrefix
                        ]
                    ]
                ]) + " " + "comment",
                children: comment
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "75c642cd74dc13d1",
                dynamic: [
                    prepend + 1,
                    maxCommentLength + commentPrefix.length,
                    commentPrefix
                ],
                children: `.item.__jsx-style-dynamic-selector{color:#222;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap-reverse;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;font-family:monospace;font-size:1em
                    vertical-align: middle}.content.__jsx-style-dynamic-selector{margin-right:${prepend + 1}ch}.comment.__jsx-style-dynamic-selector{color:#666;width:${maxCommentLength + commentPrefix.length}ch}.comment.__jsx-style-dynamic-selector::before{content:"${commentPrefix}"}`
            })
        ]
    });
};
const MonolineGroup = ({ children , tabSize =1  })=>{
    const [lengthMap, setLengthMap] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [commentLengthMap, setCommentLengthMap] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const maxContentLength = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const max = Math.max(...Object.values(lengthMap));
        return Math.ceil(max / tabSize) * tabSize;
    }, [
        lengthMap,
        tabSize
    ]);
    const maxCommentLength = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        return Math.max(...Object.values(commentLengthMap));
    }, [
        commentLengthMap
    ]);
    const updateLength = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((length, commentLength, elementId)=>{
        setLengthMap((prev)=>({
                ...prev,
                [elementId]: length
            }));
        setCommentLengthMap((prev)=>({
                ...prev,
                [elementId]: commentLength
            }));
    }, [
        setLengthMap
    ]);
    const indentCtx = {
        maxContentLength,
        maxCommentLength,
        updateLength
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MonolineGroupIndentContext.Provider, {
        value: indentCtx,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-8811968ed73e699" + " " + "group",
            children: [
                children,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                    id: "8811968ed73e699",
                    children: ".group.jsx-8811968ed73e699{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"
                })
            ]
        })
    });
};


/***/ }),

/***/ 688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ Row)
/* harmony export */ });
/* unused harmony export Column */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);


const Column = ({ children , width  })=>/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: _JSXStyle.dynamic([
                    [
                        "7e840e35fee294f8",
                        [
                            width || "50%"
                        ]
                    ]
                ]) + " " + "column",
                children: children
            }),
            _jsx(_JSXStyle, {
                id: "7e840e35fee294f8",
                dynamic: [
                    width || "50%"
                ],
                children: `.column.__jsx-style-dynamic-selector{-webkit-flex-basis:${width || "50%"};-ms-flex-preferred-size:${width || "50%"};flex-basis:${width || "50%"}}@media(max-width:40rem){.column.__jsx-style-dynamic-selector{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%}}`
            })
        ]
    });
const Row = ({ children , style  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "jsx-34bcc490f045c2fd" + " " + "block",
                children: children
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "34bcc490f045c2fd",
                children: ".block.jsx-34bcc490f045c2fd{background:#fffe;-webkit-border-radius:2em;-moz-border-radius:2em;border-radius:2em;-webkit-box-shadow:0 0 .5em rgba(0,0,0,.25);-moz-box-shadow:0 0 .5em rgba(0,0,0,.25);box-shadow:0 0 .5em rgba(0,0,0,.25);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}"
            }),
            style
        ]
    });


/***/ }),

/***/ 637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/chunks/public/assets/images/waves-haikei.f17d8eb0835aea2d.svg";

/***/ })

};
;