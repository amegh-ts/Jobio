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
  const xLabels = userList.map(user => {
    const createdAtDate = new Date(user.createdAt);
    return isNaN(createdAtDate) ? '' : createdAtDate.toLocaleDateString();
  });
  
  const uData = Array.from({ length: xLabels.length }, (_, index) => index);
  // console.log(x);
  // console.log(date);
  


  // const uData = [0, 1, 2, 3, 4, 5, 6];
  // const xLabels = [
  //   'Page A',
  //   'Page B',
  //   'Page C',
  //   'Page D',
  //   'Page E',
  //   'Page F',
  //   'Page G',
  // ];



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
