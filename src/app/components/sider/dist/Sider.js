"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var SiderMenu_1 = require("./SiderMenu");
function Sider() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "bg-[#212121] w-[280px] h-full fixed" },
            React.createElement("div", { className: "bg-[#1C1C1C] py-[25px] px-[30px]" },
                React.createElement(link_1["default"], { href: "/" },
                    React.createElement("img", { src: "/image.png", alt: "Logo", className: "h-[66px] w-auto ml-auto mr-auto" }))),
            React.createElement(SiderMenu_1["default"], null))));
}
exports["default"] = Sider;
