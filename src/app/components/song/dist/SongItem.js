"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var fa_1 = require("react-icons/fa");
var md_1 = require("react-icons/md");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SongItem(props) {
    var image = props.image, title = props.title, singer = props.singer, listen = props.listen;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "rounded-[15px] bg-[#212121] p-[10px] flex items-center" },
            React.createElement("div", { className: "aspect-square  truncate w-[76px] h-auto mr-[10px]" },
                React.createElement("img", { src: image, alt: "Co Phong", className: "w-full h-full object-cover" })),
            React.createElement("div", { className: "flex-1" },
                React.createElement("div", { className: "mb-[2px]" },
                    React.createElement(link_1["default"], { href: "", className: "font-[600] text-[16px] text-[#FFFFFF]" }, title)),
                React.createElement("div", { className: "font-[400] text-[12px] text-[#FFFFFF80] mb-[5px]" }, singer),
                React.createElement("div", { className: "font-[400] text-[12px] text-[#FFFFFF]" }, listen.toLocaleString("vi-VN"))),
            React.createElement("div", { className: "" },
                React.createElement("button", { className: "w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] mr-[10px]" },
                    React.createElement(fa_1.FaPlay, null)),
                React.createElement("button", { className: "w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px]" },
                    React.createElement(md_1.MdFavorite, null))))));
}
exports["default"] = SongItem;
