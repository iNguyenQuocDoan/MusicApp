"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var ti_1 = require("react-icons/ti");
function SiderMenu() {
    var menu = [
        {
            icon: React.createElement(ti_1.TiHomeOutline, null),
            title: "Trang chu",
            link: "/"
        },
        {
            icon: React.createElement(ti_1.TiHomeOutline, null),
            title: "Danh muc bai hat",
            link: "/category"
        },
        {
            icon: React.createElement(ti_1.TiHomeOutline, null),
            title: "Ca sĩ",
            link: "/singers"
        },
        {
            icon: React.createElement(ti_1.TiHomeOutline, null),
            title: "Bài hát yêu thích",
            link: "/wishlist"
        },
        {
            icon: React.createElement(ti_1.TiHomeOutline, null),
            title: "Đăng xuất",
            link: "/home"
        },
        {
            icon: React.createElement(ti_1.TiHomeOutline, null),
            title: "Đăng nhập",
            link: "/login"
        },
        {
            icon: React.createElement(ti_1.TiHomeOutline, null),
            title: "Đăng kí",
            link: "/home"
        },
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement("nav", { className: "py-[30px] px-[20px]" },
            React.createElement("ul", { className: "" }, menu.map(function (item, index) { return (React.createElement("li", { className: "mb-[30px]", key: index },
                React.createElement(link_1["default"], { href: item.link, className: "text-white flex items-center hover:text-[#00ADEF] capitalize" },
                    React.createElement("span", { className: "text-[20px] mr-[20px]" }, item.icon),
                    React.createElement("span", { className: "font-[700]" }, item.title)))); })))));
}
exports["default"] = SiderMenu;
