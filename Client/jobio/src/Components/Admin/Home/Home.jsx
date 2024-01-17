/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Home.scss';
import { LineChart } from '@mui/x-charts/LineChart';
import { getAllUsers } from '../../ApiCalls';


const Home = () => {
  const [userList, setUserList] = useState([]);


  useEffect(() => {
    async function display() {
      try {
        const users = await getAllUsers();
        console.log(users);
        setUserList(users);
      } catch (error) {
        console.log(error);
      }
    }
    display();
  }, []);

  // const xLabels = userList.map(user => user.createdAt);
  // const uData = Array.from({ length: xLabels.length }, (_, index) => index);

    // Assuming userList contains objects with 'createdAt' property
    const userCountByDay = userList.reduce((countByDay, user) => {
      const date = user.createdAt.split('T')[0]; // Assuming createdAt is a full date-time string
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
              series={[{ type: 'line',data: uData, label: 'Growth',area:'true', showMark: true ,color: 'rgba(98, 179, 98, 0.685)'}]}
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
            <div className="htr-children"></div>
            <div className="htr-children"></div>
            <div className="htr-children"></div>
            <div className="htr-children"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
