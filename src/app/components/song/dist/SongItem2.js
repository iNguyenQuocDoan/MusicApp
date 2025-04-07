"use strict";
exports.__esModule = true;
var fa_1 = require("react-icons/fa");
var md_1 = require("react-icons/md");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SongItem2(props) {
    var image = props.image, title = props.title, singer = props.singer, time = props.time;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex items-center justify-between bg-[#212121] py-[10px] px-[18px] rounded-[15px]" },
            React.createElement("div", { className: "flex items-center w-[40%]" },
                React.createElement("button", { className: "text-[20px] text-white" },
                    React.createElement(fa_1.FaPlay, null)),
                React.createElement("div", { className: "aspect-square w-[42px] rounded-[8px] truncate mx-[12px]" },
                    React.createElement("img", { src: image, alt: title, className: "object-cover w-full h-full" }))),
            React.createElement("div", { className: " w-[30%]" },
                React.createElement("div", { className: "font-[400] text-[14px] text-[#FFFFFF]" }, singer)),
            React.createElement("div", { className: "w-[30%] text-right flex items-center justify-end" },
                React.createElement("div", { className: "font-[400] text-[14px] text-white mr-[18px]" }, time),
                React.createElement("button", { className: "text-[20px] text-white" },
                    React.createElement(md_1.MdFavorite, null))))));
}
exports["default"] = SongItem2;
