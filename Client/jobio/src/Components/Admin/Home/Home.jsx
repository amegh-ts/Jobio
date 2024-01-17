/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Home.scss';
import { LineChart } from '@mui/x-charts/LineChart';
import { getAllUsers } from '../../ApiCalls';
import { IoPersonOutline } from "react-icons/io5";
import { FaCrown, FaUserTie, FaUser, FaPeopleGroup } from "react-icons/fa6";




const Home = () => {
  const [userList, setUserList] = useState([]);
  const [totalUser, setTotalUser] = useState([]);
  const [admins, setAdmin] = useState(0)
  const [employer, setEmployer] = useState(0)
  const [employee, setEmployee] = useState(0)

  useEffect(() => {
    async function display() {
      try {
        const users = await getAllUsers();
        console.log(users);
        setUserList(users);

        setTotalUser(users.length)
        const admins = users.filter(user => user.type === 'admin');
        setAdmin(admins.length);
        const employer = users.filter(user => user.type === 'employer');
        setEmployer(employer.length);
        const employee = users.filter(user => user.type === 'employee');
        setEmployee(employee.length);

      } catch (error) {
        console.log(error);
      }
    }
    display()
  }, []);

  console.log(totalUser);

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
              height={250}
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
            <div className="htr-card card1">
              <span className='htr-icon'>
                <FaCrown className='icon'/>
              </span>
              <h2>{admins}</h2>
              <p>Admins</p>
            </div>
            <div className="htr-card card2">
              <span className='htr-icon'>
                <FaUserTie className='icon'/>
              </span>
              <h2>{employer}</h2>
              <p>Employer</p>
            </div>
            <div className="htr-card card3">
              <span className='htr-icon'>
                <FaUser className='icon'/>
              </span>
              <h2>{employee}</h2>
              <p>Employee</p>
            </div>
            <div className="htr-card card4">
              <span className='htr-icon'>
                <FaPeopleGroup className='icon'/>
              </span>
              <h2>{totalUser}</h2>
              <p>Total Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
