import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Bowser from "bowser";
import dayjs from "dayjs";

export default function Visitors() {
  const [visitors, setVisitors] = useState([]);
  let [count, setCount] = useState(0);
  let [loading, setLoading] = useState(false);
  const [myIp, setIP] = useState("");
  let [seenVisitors, setSeenVisitors] = useState(
    JSON.parse(localStorage.getItem("seenVisitors")) || []
  );

  useEffect(() => {
    getMyIp();
    fetchVisitors();
  }, []);

  const getMyIp = async () => {
    try {
      const res = await axios.get("https://api.ipify.org/?format=json");
      setIP(res.data.ip);
    } catch (error) {}
  };
  const fetchVisitors = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://api.ali1kh.com/visitors", {
        headers: {
          token: localStorage.getItem("adminPanel"),
        },
      });
      if (data.success) setVisitors(data.results);
      setCount(data.count);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    if (visitors.length == 0) return;
    localStorage.setItem(
      "seenVisitors",
      JSON.stringify(visitors.map((v) => v._id))
    );
  }, [visitors]);

  return (
    <div className="container pb-5">
      {loading ? (
        <>
          <div
            style={{
              height: "85vh",
            }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="spinner-border primaryText" role="status">
              <span className="visually-hidden fs-3">Loading...</span>
            </div>
            <div className="mx-3">
              <h3 className="primaryText m-0">Loading...</h3>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="d-flex my-3">
            <h4>Total Visitors: {count} Visit</h4>
            <button
              className="btn mainBgColor text-white ms-auto"
              onClick={fetchVisitors}
            >
              <i className="fa fa-refresh me-1"></i>
              Refresh
            </button>
          </div>
          <div
            style={{
              maxHeight: "77vh",
              overflowY: "scroll",
            }}
          >
            <Table size="sm" variant="dark" responsive striped bordered hover>
              <thead>
                <tr>
                  <th
                    style={{
                      backgroundColor: "transparent",
                    }}
                  ></th>
                  <th>IP</th>
                  <th>Region</th>
                  <th>Location</th>
                  <th>Device</th>
                  <th>Last Visit</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {visitors.map((visitor) => (
                  <tr
                    className={`${myIp === visitor.ip && "d-none"}`}
                    key={visitor._id}
                  >
                    <td
                      style={{
                        backgroundColor: "transparent",
                      }}
                    >
                      {seenVisitors?.includes(visitor._id) ? (
                        ""
                      ) : (
                        <div className="badge bg-success w-100">New</div>
                      )}
                    </td>
                    <td>{visitor.ip}</td>
                    <td>
                      {visitor.city}/ {visitor.region} / {visitor.country}
                    </td>
                    <td>{visitor.loc}</td>
                    <td title={visitor.device}>
                      {visitor.device
                        ? Bowser.parse(visitor.device).browser.name +
                          (Bowser.parse(visitor.device).os.name
                            ? "/" + Bowser.parse(visitor.device).os.name
                            : "") +
                          (Bowser.parse(visitor.device).platform.vendor
                            ? "/" + Bowser.parse(visitor.device).platform.vendor
                            : "")
                        : "Unknown"}
                    </td>
                    <td>
                      {dayjs(visitor.updatedAt).format("DD-MMM-YYYY, hh:mm A")}
                    </td>
                    <td>{visitor.count}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
}
