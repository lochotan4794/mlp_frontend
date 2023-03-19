import axios from "axios";
import React from "react"
import { useEffect } from "react";
import { useState } from "react";
// import { useMediaQuery } from "react-responsive";
// import severUrl from "../../api";
// import user from "../../assets/svgs/user.svg"
// import LoadingOverlay from "./LoadingOverlay";
import severUrl from "@/utils/api";
import Layout from "@/components/Layout";

export default function SettingPage() {

    // const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
    const [avatar, setAvatar] = useState(null)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [is_admin, setAdmin] = useState(false)
    const [email, setEmail] = useState(null)
    const [email_accept, setEmailAccept] = useState(false)
    const [email_authenticated, setAuthenticated] = useState(false)
    const [ isShowing, setIsShowing ] = useState(false)
    const [isStaff, setIsStaff] = useState(false)
    const user = 'https://cdn.iconscout.com/icon/free/png-512/avatar-1047-840229.png?f=avif&w=512'


    useEffect(() => {
        const local = localStorage.getItem("user", false);
        console.log(local)
        if (local && (local !== "undefined")) {
            const user_local = JSON.parse(local);
            setEmail(user_local.email)
            setUsername(user_local.username)
        // setUser({ ...user_local });
        // setFirstName(user_local.firstName)
        // setLastName(user_local.lastName)
        // setAuthenticated(user_local.is_active)
        // console.log(user_local)
            var bodyFormData = new FormData();
            bodyFormData.append("username", user_local.username);
            bodyFormData.append("email", user_local.password);
            axios
                .post(severUrl + `users/load_profile/`, bodyFormData)
                .then((response) => {
                    const data = response.data
                    console.log(data.is_staff)
                    setUsername(data.username)
                    setFirstName(data.first_name)
                    setLastName(data.last_name)
                    setEmail(data.email)
                    setAvatar(data.profile)
                    setAuthenticated(data.is_active)
                    setPassword(data.password)
                    setEmailAccept(data.profile.accept_email)
                    setIsStaff(data.is_staff)
                })
                .catch((error) => {
                    //console.log(error);
                });}
    }, []);

    const saveChange = (e) => {
        console.log(email)
        // e.preventDefault();
        setIsShowing(true)
        var bodyFormData = new FormData();
        bodyFormData.append("username", username);
        bodyFormData.append("password", password);
        bodyFormData.append("email", email);
        bodyFormData.append("first_name", firstName);
        bodyFormData.append("last_name", lastName);
        bodyFormData.append("accept_email", email_accept);
        console.log(firstName)
        axios
            .post(severUrl + `users/edit_user`, bodyFormData)
            .then((response) => {
                console.log(response)
                localStorage.setItem("user", JSON.stringify(response.data));
                // localStorage.setItem("access", JSON.stringify(response.data.access));
                // localStorage.setItem("refresh", JSON.stringify(response.data.refresh));
            })
            .catch((error) => {
                console.log(error);
            });
        setIsShowing(false);
    }

    const toAdmin = () => {
        sessionStorage.setItem("admin", true)
        window.location.href = "admin/searchpost"
    }

    const handleLogout = (e) => {
        localStorage.removeItem("user");
        window.location = "/";
    };

    const update_first_name = (e) => {
        setFirstName(e.target.value)
        console.log(e.target.value)
    }

    const update_last_name = (e) => {
        setLastName(e.target.value)
        console.log(e.target.value)
    }

    const update_email = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }

    const update_password = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const update_username = (e) => {
        setUsername(e.target.value)
        console.log(e.target.value)
    }

    const update_email_accept = (e) =>{
        console.log(e.target.value)
        setEmailAccept(e.target.value)
    }

    return (<>
        {/* <LoadingOverlay isShowing={isShowing} /> */}
        <Layout>
        <p  className="big-title" style={{ width: "100%", textAlign: "center" }}>Personal Information</p>
        <div style={{ width: "100%" }}>
            <div className="setting-item">
                <p className="setting-item-name">Profile image</p>
                <img style={{ width: "40px", marginLeft: "20px" }} src={avatar ? avatar : user}></img>
            </div>
            <div className="setting-item">
                <p className="setting-item-name">First Name</p>
                <input className="setting-item-input" value={firstName} onChange={(e) => update_first_name(e)} ></input>
            </div>
            <div className="setting-item">
                <p className="setting-item-name">Last Name</p>
                <input className="setting-item-input" value={lastName} onChange={(e) => update_last_name(e)}></input>
            </div>
            <div
                className="setting-item">
                <p className="setting-item-name">Username</p>
                <input className="setting-item-input" value={username} onChange={(e) => update_username(e)}></input>
            </div>
            <div className="setting-item">
                <p className="setting-item-name">Password</p>
                <input type="password" className="setting-item-input" value={password} onChange={(e) => update_password(e)}></input>
            </div>
            <div className="setting-item">
                <p className="setting-item-name">Email address</p>
                <input className="setting-item-input" value={email} onChange={(e) => update_email(e)}></input>
            </div>
            <div className="setting-item">
                {!email_authenticated && <button>Verify Email</button>}
            </div>
            <div className="setting-item">
                <p className="setting-item-name">New post notification by email</p>
                <label className="switch">
                    <input type="checkbox" defaultChecked={email_accept} onChange={(e) => setEmailAccept(!email_accept)}/>
                    <span className="slider"></span>
                </label>
            </div>
        </div>
        <button onClick={saveChange}>Save change</button>
        <div className="setting-item" style={{ marginTop: "10px" }}>
            {isStaff ? <button onClick={toAdmin}>Go to admin page</button>: <></>}
        </div>
        <button onClick={handleLogout}>Log out</button></Layout>
    </>
    )
}

