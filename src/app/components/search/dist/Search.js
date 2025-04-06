"use strict";
exports.__esModule = true;
var io5_1 = require("react-icons/io5");
function Search() {
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { className: "bg-[#212121] sticky rounded-[50px] mt-[20px] top-[20px] z-[999] flex py-[15px] px-[30px]" },
            React.createElement("input", { type: "text", name: "keyword", placeholder: "Search song...abc", className: "order-2 text-[16px] font-[600] text-white bg-transparent outline-none flex-1" }),
            React.createElement("button", { type: "submit", className: "order-1 text-[22px] text-white mr-[20px] cursor-pointer " },
                " ",
                React.createElement(io5_1.IoSearchOutline, null)))));
}
exports["default"] = Search;
