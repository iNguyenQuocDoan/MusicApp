"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
function SiderMenu() {
    var menu = [
        {
            icon: React.createElement(React.Fragment, null, "Icon"),
            title: "Trang chu",
            link: "/"
        },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement("nav", { className: "py-[30px] px-[20px]" },
            React.createElement("ul", { className: "" }, menu.map(function (item, index) { return (React.createElement("li", { className: "", key: index },
                React.createElement(link_1["default"], { href: item.link, className: "text-white" },
                    React.createElement("span", { className: "" }, item.icon)))); })))));
}
exports["default"] = SiderMenu;
