import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../../global/functions/ApiHandler";
import axios from "axios";
import "./styles.css";

const Evaluate: React.FC = () => {
  const history = useHistory();

  const [bandList, setBandList] = useState([]);

  useEffect(() => {
    authorization();

    fetchBands();
  }, []);

  const authorization = async () => {
    const token = window.localStorage.getItem("token");

    try {
      const response = await axios.get(`${baseUrl}users/verification`, {
        headers: { auth: token },
      });
      if (response.data.type !== "ADMIN") {
        history.push("/home");
      }
    } catch (e) {
      history.push("/login");
    }
  };

  const fetchBands = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const result = await axios.get(`${baseUrl}bands/all`, {
        headers: {
          auth: token,
        },
      });

      setBandList(result.data.result);
    } catch (error) {
      console.log(error.message);
    }
  };

  interface Band {
    name: string;
    description: string;
  }

  const approve = async (band: string) => {
    const body = {
      name: band,
    };

    try {
      const response = await axios.put(`${baseUrl}bands/approve`, body, {
        headers: {
          token: window.localStorage.getItem("token"),
        },
      });
      window.alert(`${response.data.message}`);

      fetchBands();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="evaluateContainer">
      <Header />
      <div className="bodyContainer">
        <img
          src="https://images.unsplash.com/flagged/photo-1572482810910-9ff68908fcf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="singer"
        />
        <div className="listContainer">
          {bandList ? (
            bandList.map((band: Band) => {
              return (
                <li>
                  <strong>{band.name}</strong> <br /> {band.description} <br />
                  <button onClick={() => approve(band.name)}>approve</button>
                </li>
              );
            })
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Evaluate;
