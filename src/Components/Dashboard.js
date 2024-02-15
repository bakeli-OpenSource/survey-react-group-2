import React from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
import Card from "react-bootstrap/Card";
import "./dashboard.css";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import Sidebar from "./Sidebar";


// end graph

  
const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

function Dashboard() {

  return (
    <div className=' my-5 py-5 zIndex'>
    <div className="d-flex ">
      {/* <Sidebar /> */}
      <Sidebar/>
      
      <div className="col overflow-auto align-items-center text-center">
        {/* <Header /> */}
        <div>
          <div className="p-5">
            <div className="container-fluid">
              <div className="row align-items-center">
                <Card
                  border=""
                  style={{ width: "16rem", fontWeight: 700, color: "red" }}
                  className="me-5 card"
                >
                  <Card.Body>
                    <Card.Title className="text-center">
                      Nombre Sondages 
                    </Card.Title>
                    <Card.Text className="text-center mt-4">
                        <div className="d-flex">
                        {/* <BsFillBarChartFill /> */}
                        <h3 className="">10</h3>
                        </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  border=""
                  style={{ width: "16rem" , fontWeight: 800, color: "red"}}
                  className="me-5 card"
                >
                  <Card.Body>
                    <Card.Title className="text-center">
                       Sondages partagés
                    </Card.Title>
                    <Card.Text className="text-center mt-4">
                      <h3>0</h3>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* graphique */}

        <div className='charts'>
          
        <BarChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>

        </div>

        {/* fin graphique */}

      </div>
    </div>
    </div>
  );
}

export default Dashboard;