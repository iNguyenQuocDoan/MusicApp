"use strict";
exports.__esModule = true;
var ci_1 = require("react-icons/ci");
var fa_1 = require("react-icons/fa");
function Play() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "fixed bottom-0 bg-[#212121] border-t border-[#494949] w-full left-0  py-[20px] z-[999] " },
            React.createElement("div", { className: "container mx-auto flex justify-between" },
                React.createElement("div", { className: "flex items-center w-[218px]" },
                    React.createElement("div", { className: "w-[49px] aspect-square rounded-[14px] truncate" },
                        React.createElement("img", { src: "/Cophong.svg", alt: "Co phong", className: "h-full w-full object-cover" })),
                    React.createElement("div", { className: "ml-[12px]" },
                        React.createElement("div", { className: "flex-1 " },
                            React.createElement("span", { className: "font-[700] text-[15px] text-[#FFFFFF]" }, "Co Phong")),
                        React.createElement("div", { className: "" },
                            React.createElement("span", { className: "font-[700] text-[12px] text-[#FFFFFF70] italic" }, "Ho Quang Hieu")))),
                React.createElement("div", { className: "flex-1 mx-[67px]" },
                    React.createElement("div", { className: "flex items-center justify-center" },
                        React.createElement("button", { className: "text-white text-[16px]" },
                            React.createElement(fa_1.FaStepBackward, null)),
                        React.createElement("button", { className: "bg-[#00ADEF] text-[16px] h-[32px] w-[32px] text-white rounded-full  inline-flex justify-center items-center mx-[52px]" },
                            React.createElement(ci_1.CiPlay1, null)),
                        React.createElement("button", { className: "text-white text-[16px]" },
                            React.createElement(fa_1.FaStepForward, null))),
                    React.createElement("div", { className: "mt-[11px] relative" },
                        React.createElement("div", { className: "h-[4px] w-0 bg-[#00ADEF] rounded-[50px] absolute left-0 top-[13px]" }),
                        React.createElement("input", { type: "range", min: 0, max: 100, defaultValue: 0, className: "w-full h-[4px] bg-[#FFFFFF0A] cursor-pointer range-sm" }))),
                React.createElement("div", { className: "w-[184px] flex items-end" },
                    React.createElement("button", { className: "text-white text-[16px]" },
                        React.createElement(ci_1.CiVolume, null)),
                    React.createElement("div", { className: "ml-[6px] w-full" },
                        React.createElement("input", { type: "range", min: 0, max: 100, defaultValue: 0, className: "w-full h-[3px] bg-[#FFFFFF1A] cursor-pointer range-sm" })))))));
}
exports["default"] = Play;
