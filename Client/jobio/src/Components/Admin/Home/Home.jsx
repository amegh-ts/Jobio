/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Home.scss';
import { LineChart } from '@mui/x-charts/LineChart';
import { getAllUsers } from '../../ApiCalls';
import { IoPersonOutline } from "react-icons/io5";



const Home = () => {
  const [userList, setUserList] = useState([]);
  const [totalUser, setTotalUser] = useState([]);


  useEffect(() => {
    async function display() {
      try {
        const users = await getAllUsers();
        console.log(users);
        setUserList(users);
        setTotalUser(users.length)
      } catch (error) {
        console.log(error);
      }
    }
    display()
  }, []);

  const userCountByDay = userList.reduce((countByDay, user) => {
    const date = user.createdAt.split('T')[0];
    countByDay[date] = (countByDay[date] || 0) + 1;
    return countByDay;
  }, {});

  const xLabels = Object.keys(userCountByDay);
  const uData = xLabels.map((date) => userCountByDay[date]);



  return (
    <div className="AHome">
      <h3>Dashboard</h3>
      <div className="home-main">
        <div className="home-top">
          <div className="htl">
            <LineChart
              width={500}
              max-width={500}
              height={300}
              series={[{ type: 'line', data: uData, label: 'Growth', area: 'true', showMark: true, color: 'rgba(98, 179, 98, 0.685)' }]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
              sx={{
                '.MuiLineElement-root': {
                  stroke: 'rgb(16, 118, 16)',
                  strokeWidth: 2,
                },
                '.MuiMarkElement-root': {
                  scale: '0.6',
                  fill: '#fff',
                  strokeWidth: 2,
                },
              }}
            />
          </div>
          <div className="htr">
            <div className="admin-dash-card b-card1">
              <i>
                <IoPersonOutline />
              </i>
              <p>Admins</p>
              <span>{admins}</span>
            </div>
            <div className="admin-dash-card b-card2">
              <i>
                <IoPersonOutline />
              </i>
              <p>Clients</p>
              <span>{clients}</span>
            </div>
            <div className="admin-dash-card b-card3">
              <i>
                <IoPersonOutline />
              </i>
              <p>Total Users</p>
              <span>{state}</span>
            </div>
            <div className="admin-dash-card b-card4">
              <i>
                <IoPersonOutline />
              </i>
              <p>Maximum Users</p>
              <span>200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
