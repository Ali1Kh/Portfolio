import React from "react";
import $ from "jquery";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DashboardLogin() {
  let navigate = useNavigate();
  async function login() {
    $("#loginAdminBtn").attr("disabled", true);
    $("#loginAdminBtn").html("Please Wait...");
    try {
      let body = {
        username: $("#email").val(),
        password: $("#password").val(),
      };
      if (!body.username || !body.password) {
        toast.error("Please Fill All The Fields");
        $("#loginAdminBtn").attr("disabled", false);
        $("#loginAdminBtn").html("Login");
        return;
      }
      let { data } = await axios.post(
        `https://api.ali1kh.com/admin/login`,
        body
      );
      if (data.success) {
        localStorage.setItem("adminPanel", data.token);
        navigate("/dashboard");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      $("#loginAdminBtn").attr("disabled", false);
      $("#loginAdminBtn").html("Login");
    }
    $("#loginAdminBtn").attr("disabled", false);
    $("#loginAdminBtn").html("Login");
  }
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center py-3">
        <img
          src={require("../../../imgs/fav.png")}
          alt="Logo"
          width="150"
          className="d-inline-block align-text-top me-s2 m-0 p-0 mb-5"
        />
        <h4
          style={{
            fontFamily: "sans-serif",
            textTransform: "uppercase",
          }}
        >
          Login To Admin Panel
        </h4>
        <div
          style={{
            minWidth: "300px",
          }}
          className="formInput mt-4 d-flex gap-3 flex-column"
        >
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
          />
          <button
            id="loginAdminBtn"
            onClick={login}
            className="btn mainBgColor text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
