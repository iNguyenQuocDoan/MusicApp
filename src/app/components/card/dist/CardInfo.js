"use strict";
exports.__esModule = true;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CardInfo(props) {
    var image = props.image, title = props.title, description = props.description;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex items-center" },
            React.createElement("div", { className: " aspect-square rounded-[15px] truncate" },
                React.createElement("img", { src: image, alt: title, className: "w-full h-full object-cover" })),
            React.createElement("div", null,
                React.createElement("div", { className: "flex-1 ml-[20px]" },
                    React.createElement("h1", { className: "font-[700] text-[35px] text-[#00ADEF]" }, title),
                    React.createElement("div", { className: "font-[400] text-[14px] text-[#EFEEE0] mt-[10px]" },
                        " ",
                        description))))));
}
exports["default"] = CardInfo;
