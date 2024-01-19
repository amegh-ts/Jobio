/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Home.scss';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { fetchBanLogs, getAllUsers } from '../../ApiCalls';
import { FaCrown, FaUserTie, FaUser, FaPeopleGroup } from "react-icons/fa6";
import Popup from '../../../Assets/Popups/Popup';
// import { ChartContainer, BarPlot } from '@mui/x-charts';




const Home = () => {
  const [userList, setUserList] = useState([]);
  const [totalUser, setTotalUser] = useState([]);
  const [admins, setAdmin] = useState(0);
  const [employer, setEmployer] = useState(0);
  const [employee, setEmployee] = useState(0);

  const [active, setActive] = useState(0);
  const [inactive, setInactive] = useState(0);
  const [banned, setBanned] = useState(0);
  const [banLogpopup, setBanLogpopup] = useState(false)

  const [banLogs, setBanLogs] = useState([]);
  const [recenrBanLog, setRecentBanLog] = useState({});



  useEffect(() => {
    async function display() {
      try {
        const users = await getAllUsers();
        const logs = await fetchBanLogs()
        setUserList(users);
        setBanLogs(logs)


        setTotalUser(users.length)
        const admins = users.filter(user => user.type === 'admin');
        setAdmin(admins.length);
        const employer = users.filter(user => user.type === 'employer');
        setEmployer(employer.length);
        const employee = users.filter(user => user.type === 'employee');
        setEmployee(employee.length);

        const active = users.filter(user => user.state === 'active')
        setActive(active.length)
        const inactive = users.filter(user => user.state === 'inactive')
        setInactive(inactive.length)
        const banned = users.filter(user => user.state === 'banned')
        setBanned(banned.length)


        if (logs.length > 0) {
          const mostRecentLog = logs.reduce((prev, current) =>
            new Date(prev.timestamp) > new Date(current.timestamp) ? prev : current
          );

          setRecentBanLog(mostRecentLog)
        } else {
          console.log('No ban logs available.');
        }

      } catch (error) {
        console.log(error);
      }
    }
    display()
  }, []);

  // console.log(banLogs);


  const userCountByDay = userList.reduce((countByDay, user) => {
    const date = user.createdAt.split('T')[0];
    countByDay[date] = (countByDay[date] || 0) + 1;
    return countByDay;
  }, {});

  const xLabels = Object.keys(userCountByDay);
  const uData = xLabels.map((date) => userCountByDay[date]);

  // Limit to the most recent 7 days
  const recentXLabels = xLabels.slice(-7);
  const recentUData = uData.slice(-7);


  const data = [
    { id: 0, value: totalUser, label: 'Total', color: '#767676' },
    { id: 1, value: active, label: 'Active', color: '#008000' },
    { id: 2, value: inactive, label: 'Inactive', color: '#695cfe' },
    { id: 3, value: banned, label: 'Banned', color: '#ff0000' },
  ];

  // const buData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  // const bxLabels = [
  //   'Page A',
  //   'Page B',
  //   'Page C',
  //   'Page D',
  //   'Page E',
  //   'Page F',
  //   'Page G',
  // ];

  return (
    <div className="AHome">
      <h3>Dashboard</h3>
      <div className="home-main">
        <div className="home-top">
          <div className="htl">
            <LineChart
              width={500}
              height={250}
              series={[{ type: 'line', data: recentUData, label: 'Growth', area: 'true', showMark: true, color: 'rgba(98, 179, 98, 0.685)' }]}
              xAxis={[{ scaleType: 'point', data: recentXLabels }]}
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
                <FaCrown className='icon' />
              </span>
              <h2>{admins}</h2>
              <p>Admins</p>
            </div>
            <div className="htr-card card2">
              <span className='htr-icon'>
                <FaUserTie className='icon' />
              </span>
              <h2>{employer}</h2>
              <p>Employer</p>
            </div>
            <div className="htr-card card3">
              <span className='htr-icon'>
                <FaUser className='icon' />
              </span>
              <h2>{employee}</h2>
              <p>Employee</p>
            </div>
            <div className="htr-card card4">
              <span className='htr-icon'>
                <FaPeopleGroup className='icon' />
              </span>
              <h2>{totalUser}</h2>
              <p>Total Users</p>
            </div>
          </div>
        </div>


        <div className="home-middle">
          <div className="hml">
            <div className="hml-card card1">
              <div className="hml-header">
                <h2>Ban Logs</h2>
                <button onClick={() => { setBanLogpopup(true) }}>Full logs</button>

                <Popup trigger={banLogpopup} setTrigger={setBanLogpopup}>
                  <div className="banlog-popup">
                    <div className="blp-header">
                      <h4>Full logs</h4>
                    </div>
                    <div className="blp-body">
                      <div className="blpb-container">
                        {banLogs.map((log, index) => (
                          <div key={index} className="log-item">
                            {/* <p>{index + 1}</p> */}
                            <div className='log-info'>INFO - [{log.createdAt ? new Date(log.createdAt).toLocaleString() : 'N/A'}] :  <span>{log._id} </span> </div>
                            <div className="log-content">User {log.banned} state set to {log.state} by {log.bannedBy}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Popup>

              </div>
              <div className="ban-log">
                <p>Recent log</p>
                <div className="log-container">
                  <div className='lc-top'>
                    <div className="lc-users">
                      <p>Ban of </p><h4>{recenrBanLog.banned}</h4><p>by </p><h4>{recenrBanLog.bannedBy}</h4>
                    </div>
                    <div className="lc-date">
                      <h5>
                        {recenrBanLog.createdAt ? new Date(recenrBanLog.createdAt).toLocaleString() : 'N/A'}
                      </h5>
                    </div>
                  </div>
                  <div className="lc-content">
                    <span>
                      <p>Reason : {recenrBanLog.reason}</p>
                    </span>
                    <span>
                      <p>Current status : {recenrBanLog.state}</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hml-card card2">
              <h2>Users</h2>
              <PieChart
                series={[
                  {
                    data, innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: 0,
                    endAngle: 360,
                    // cx: 150,
                    // cy: 150,
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  },
                ]}
                slotProps={{ legend: { hidden: false } }}

                height={200}
              />
            </div>
          </div>
          <div className="hmr">
            {/* <ChartContainer
              width={500}
              height={300}
              series={[{ data: buData, label: 'uv', type: 'bar' }]}
              xAxis={[{ scaleType: 'band', data: bxLabels }]}
            >
              <BarPlot />
            </ChartContainer> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
