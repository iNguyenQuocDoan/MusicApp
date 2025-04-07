"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CardItem(props) {
    var image = props.image, title = props.title, description = props.description, link = props.link;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "" },
            React.createElement(link_1["default"], { href: link },
                React.createElement("div", { className: "w-full aspect-square rounded-[15px] truncate mb-[10px]" },
                    React.createElement("img", { src: image, alt: title, className: "w-full h-full object-cover" })),
                React.createElement("div", { className: "font-[700] text-[14px] text-white mb-[10px] line-clamp-1" }, title),
                React.createElement("div", { className: "font-[400] text-[12px] text-[#FFFFFF80] line-clamp-1" }, description)))));
}
exports["default"] = CardItem;
