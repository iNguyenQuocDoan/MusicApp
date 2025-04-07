"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var cardItem_1 = require("@/app/components/card/cardItem");
var Title_1 = require("@/app/components/title/Title");
function Section2() {
    var data = [
        {
            image: "/Banner/AllanWalker.png",
            title: "nhac gia",
            description: "1",
            link: ""
        },
        {
            image: "/Banner/AllanWalker.png",
            title: "nhac khong gia",
            description: "2",
            link: ""
        },
        {
            image: "/Banner/AllanWalker.png",
            title: "nhac chua gia",
            description: "3",
            link: ""
        },
        {
            image: "/Banner/AllanWalker.png",
            title: "nhac chua tre",
            description: "4",
            link: ""
        },
        {
            image: "/Banner/AllanWalker.png",
            title: "nhac da tre",
            description: "5",
            link: ""
        },
        {
            image: "/Banner/AllanWalker.png",
            title: "nhac da tre",
            description: "5",
            link: ""
        },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "mt-[30px]" },
            React.createElement(Title_1["default"], { text: "Danh Muc Bai Hat" }),
            React.createElement("div", { className: "grid grid-cols-5 gap-[20px]" }, data.map(function (item, index) { return (React.createElement(cardItem_1["default"], __assign({ key: index }, item))); })))));
}
exports["default"] = Section2;
