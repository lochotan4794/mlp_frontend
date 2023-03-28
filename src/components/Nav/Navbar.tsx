import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import Router from 'next/router'
import { render } from "react-dom";
import { useRouter } from 'next/navigation';
import { withRouter } from 'next/router'
import { Header } from '../Dropdown'


const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Research", href: "/research" },
    { text: "Story", href: "/story" },
    { text: "Fun", href: "/fun" },
    { text: "Support", href: "/support" },
    { text: "Hire Me", href: "/hire" },
];


// function Navbar  ()  {
//     const [navActive, setNavActive] = useState(false);
//     const [activeIdx, setActiveIdx] = useState(-1);
//     const [searchText, setText] = useState("")

//     const onSubmit = (): void => {
//         Router.push({
//             pathname: '/search',
//             query: { keyword: searchText },
//         })
//       }

//     const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
//         // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
//         if (event.key === 'Enter') {
//           event.preventDefault();
//           event.stopPropagation();
//           onSubmit();
//         }
//       }

//     return (
//         <header>
//             <nav className={`nav`}>
//                 <div
//                     onClick={() => setNavActive(!navActive)}
//                     className={`nav__menu-bar`}
//                 >
//                     <div></div>
//                     <div></div>
//                     <div></div>
//                 </div>
//                 <div className={`${navActive ? "active" : ""} nav__menu-list`}>
//                     {MENU_LIST.map((menu, idx) => (
//                         <div
//                             onClick={() => {
//                                 setActiveIdx(idx);
//                                 setNavActive(false);
//                             }}
//                             key={menu.text}
//                         >
//                             <NavItem active={activeIdx === idx} {...menu} />
//                         </div>
//                     ))}
//                 </div>
//                 {/* <Link href={"/"}>

// <h1 className="logo">CodeWithMarish</h1>

// </Link> */}
//                 <input placeholder="search" value={searchText} onChange={(e) => setText(e.target.value)} onKeyDown={onKeyDown} />
//             </nav>
//         </header>
//     );
// };

// export default Navbar;


class Navbar extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            navActive: false,
            activeIdx: -1,
            searchText: ""
        }
    }


    onSubmit() {
        // Router.push({
        //     pathname: '/search',
        //     query: { keyword: this.state.searchText }
        // })
        localStorage.setItem("keysearch", this.state.searchText)
        window.location.href = '/search?key=' + this.state.searchText
    }

    onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            this.onSubmit();
        }
    }
    render() {
        return (
            <>
                <header>
                    <nav className={`nav`}>
                        <div
                            onClick={() => this.setState({ navActive: !this.state.navActive })}
                            className={`nav__menu-bar`}
                        >
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={`${this.state.navActive ? "active" : ""} nav__menu-list`}>
                            <div
                                onClick={() => this.setState({ navActive: !this.state.navActive })}
                                className={ `${this.state.navActive ? "active" : ""} nav__menu-bar`}
                            >
                                <div></div>
                                <div></div>
                                <div></div>
                                <polyline id="globalnav-menutrigger-bread-top" className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" points="2 5, 16 5"><animate id="globalnav-anim-menutrigger-bread-top-open" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"></animate><animate id="globalnav-anim-menutrigger-bread-top-close" attributeName="points" keyTimes="0;0.5;1" dur="0.24s" begin="indefinite" fill="freeze" calcMode="spline" keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1" values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"></animate></polyline>
                            </div>
                            {MENU_LIST.map((menu, idx) => (
                                <div
                                    onClick={() => {
                                        this.setState({ "setActiveIdx": idx });
                                        this.setState({ "setNavActive": false });
                                    }}
                                    key={menu.text}
                                >
                                    {idx == 2 && <Header />}
                                    {idx != 2 && <NavItem active={this.state.activeIdx === idx} {...menu} />}
                                </div>
                            ))}
                            <input className={`${this.state.navActive ? "active" : ""} search-button-sm`} placeholder="search" value={this.state.searchText} onChange={(e) => this.setState({ searchText: e.target.value })} onKeyDown={this.onKeyDown} />
                        </div>
                        <input className={`${this.state.navActive ? "active" : ""} search-button`} placeholder="search" value={this.state.searchText} onChange={(e) => this.setState({ searchText: e.target.value })} onKeyDown={this.onKeyDown} />
                    </nav>
                </header>
            </>)
    }
}


export default Navbar;