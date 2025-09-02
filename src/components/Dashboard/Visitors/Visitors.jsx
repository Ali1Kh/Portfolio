import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import Bowser from "bowser";

export default function Visitors() {
  const [visitors, setVisitors] = useState([]);
  let [count, setCount] = useState(0);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchVisitors();
  }, []);

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
                  <tr key={visitor._id}>
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
                      {new Date(visitor.updatedAt).toLocaleDateString("en-eg", {
                        day: "2-digit",
                        month: "short",
                        year: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
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
