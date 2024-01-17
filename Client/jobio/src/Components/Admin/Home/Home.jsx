/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Home.scss';
import { LineChart } from '@mui/x-charts/LineChart';
import { getAllUsers } from '../../ApiCalls';


const Home = ({userId}) => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    async function display() {
      try {
        const users = await getAllUsers();
        // console.log(users);
        const filteredUsers = users.filter(user => user._id !== userId);
        setAllUsers(filteredUsers);
        setFilteredUsers(filteredUsers);
      } catch (error) {
        console.log(error);
      }
    }
    display();
  }, []);


  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
  ];



  return (
    <div className="Home">
      <h3>Dashboard</h3>
      <div className="home-main">
        <div className="home-top">
          <div className="htl">
            <LineChart
              width={500}
              height={300}
              series={[{ data: uData, label: 'uv', area: true, showMark: false }]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
              sx={{
                '.MuiLineElement-root': {
                  display: 'none',
                },
              }}
            />
          </div>
          <div className="htr">rr</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
