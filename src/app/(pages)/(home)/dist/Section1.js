"use strict";
exports.__esModule = true;
var SongItem_1 = require("@/app/components/song/SongItem");
var Title_1 = require("@/app/components/title/Title");
function Section1() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "flex items-start flex-1 " },
            React.createElement("div", { className: "w-[535px] h-full" },
                React.createElement("div", { className: "w-full flex items-center bg-cover rounded-[15px] h-[361px]", style: { backgroundImage: "url('/Banner/Background1.png')" } },
                    React.createElement("div", { className: "flex-1 mr-[34px] ml-[30px]" },
                        React.createElement("div", { className: "font-[700] text-[32px] text-white" }, "Nhac EDM"),
                        React.createElement("div", { className: "font-[500] text-[14px] text-white" }, "Top 100 Nh\u1EA1c Electronic/Dance \u00C2u M\u1EF9 l\u00E0 danh s\u00E1ch 100 ca kh\u00FAc hot nh\u1EA5t hi\u1EC7n t\u1EA1i c\u1EE7a th\u1EC3 lo\u1EA1i Top 100 Nh\u1EA1c Electronic/Dance \u00C2u M\u1EF9")),
                    React.createElement("div", { className: "" },
                        React.createElement("img", { src: "/Banner/Nigga1.png", alt: "EDM", className: "w-[215px] h-[321px]  mt-[17%] mr-[25px] " })))),
            React.createElement("div", { className: "ml-[20px] flex-1" },
                React.createElement(Title_1["default"], { text: "Nghe Nhieu" }),
                React.createElement("div", { className: "grid grid-cols-1 gap-[10px]" },
                    React.createElement(SongItem_1["default"], { image: "/Banner/HoQuangHieu.png", title: "Co phong", singer: "Ho Quang Hieu", listen: 1234 }),
                    React.createElement(SongItem_1["default"], { image: "/Banner/HoQuangHieu.png", title: "Co phong", singer: "Ho Quang Hieu", listen: 1234 }),
                    React.createElement(SongItem_1["default"], { image: "/Banner/HoQuangHieu.png", title: "Co phong", singer: "Ho Quang Hieu", listen: 1234 }))))));
}
exports["default"] = Section1;
