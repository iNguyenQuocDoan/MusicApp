"use strict";
exports.__esModule = true;
exports.metadata = void 0;
require("./globals.css");
var Search_1 = require("./components/search/Search");
var Sider_1 = require("./components/sider/Sider");
var Play_1 = require("./components/play/Play");
exports.metadata = {
    title: "Project 5",
    description: "Music app project"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: "bg-[#292929]" },
            React.createElement("div", { className: "container mx-auto" },
                React.createElement("div", { className: "flex" },
                    React.createElement("div", { className: "w-[280px]" },
                        React.createElement(Sider_1["default"], null)),
                    React.createElement("div", { className: "flex-1 ml-[20px]" },
                        React.createElement(Search_1["default"], null),
                        React.createElement("main", { className: "mb-[130px] mt-[30px]" },
                            " ",
                            children,
                            " ")))),
            React.createElement(Play_1["default"], null))));
}
exports["default"] = RootLayout;
