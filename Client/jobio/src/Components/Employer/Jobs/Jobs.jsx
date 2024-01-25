/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './Jobs.scss'
import { createJob, deleteJob, jobsById, } from '../../ApiCalls'
import Popup from './JobPopup/Jpopup';


const Jobs = (props) => {
    const [job, setJob] = useState('')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [description, setDescription] = useState('')
    const [salary, setSalary] = useState('')
    const [jobsId, setJobsId] = useState([])
    var userId = props.userId
    const [applicationPopup, setApplicationPopup] = useState(false)


    const KeralaStates = [
        'Trivandrum',
        'Kollam',
        'Pathanamthitta',
        'Alappuzha',
        'Kottayam',
        'Idukki',
        'Ernakulam',
        'Thrissur',
        'Palakkad',
        'Malappuram',
        'Kozhikode',
        'Wayanad',
        'Kannur',
        'Kasaragod',
    ];

    useEffect(() => {
        async function fetchJobs() {
            try {
                const jobData = await jobsById();
                console.log(jobData);
                setJobsId(jobData)
            } catch (error) {
                console.log(error);
            }
        }
        fetchJobs()
    }, [])

    const reversedJobs = [...jobsId].reverse();


    const handlePostJob = async () => {
        if (!job || !city || !district || !description || !salary) {
            alert("Please fill in all the fields.");
            return;
        }

        try {
            await createJob({ job, city, district, description, salary, userId });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    const handelDeleteJob = async (data) => {
        console.log(data);
        try {
            await deleteJob({ id: data });
            window.location.reload();
            alert(`Deleted successfully`)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="Jobs">
            <div className="jobs-main">
                <div className="jobs-header">
                    <h3>Jobs</h3>
                    <button>Post Job</button>
                </div>
                <div className="jobs-body">
                    <div className="jb-left">
                        <div className="jbl-container">

                            {reversedJobs && reversedJobs.map((jobs) => (
                                <div className="jblc-cards" key={jobs._id}>
                                    <div className="jbc-header">
                                        <h3>{jobs.job}</h3>
                                        <h4>{jobs.city}, {jobs.district}</h4>
                                        <div>
                                            <button>{jobs.salary}</button>
                                        </div>
                                    </div>

                                    <div className="jbc-body">
                                        <p>{jobs.description}</p>
                                        {/* <span>
                                        <button>Skill 1</button>
                                        <button>Skill 2</button>
                                    </span> */}
                                    </div>
                                    <div className="jbc-footer">
                                        <h6>{new Date(jobs.createdAt).toLocaleString()}</h6>
                                        <span>
                                            <button onClick={() => setApplicationPopup(true)}>Applications</button>
                                            <button onClick={() => { handelDeleteJob(jobs._id) }}>Delete</button>
                                        </span>

                                        <Popup trigger={applicationPopup} setTrigger={setApplicationPopup}>
                                            <div className="Application-popup">
                                                <div className="apl-container">
                                                    <div className="aplc-header">
                                                        <h3>Applications</h3>
                                                    </div>
                                                    <div className="aplc-body">
                                                        <div className="aplcb-table">
                                                            <table className="all-application-table">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Applicant ID</th>
                                                                        <th>email</th>
                                                                        <th>Email</th>
                                                                        <th>State</th>
                                                                        <th>Phone</th>
                                                                        <th>Type</th>
                                                                        <th>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {/* {filteredUsers.map((user, index) => (
                                                                        <tr key={index}>
                                                                            <td>
                                                                                <div className="user-cards-img">
                                                                                    <img src={user.photo} alt="" />
                                                                                </div>
                                                                            </td>
                                                                            <td>{user.username}</td>
                                                                            <td>{user.email}</td>
                                                                            <td>{user.state}</td>
                                                                            <td>{user.phone}</td>
                                                                            <td>{user.type}</td>
                                                                            <td>
                                                                                <div className="edit-chat">
                                                                                    <button><IoPencil className='bicon' /></button>
                                                                                    <button onClick={() => handleChatButtonClick(userId, user._id)}><IoChatbubbles className='bicon' /></button>
                                                                                    <button onClick={() => handleBanButtonClick(userId, user._id, user.username)}><IoBan /></button>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    ))}
                                                                     */}

                                                                    <tr>
                                                                        <td>abc test</td>
                                                                        <td>abc test</td>
                                                                        <td>abc test</td>
                                                                        <td>abc test</td>
                                                                        <td>abc test</td>
                                                                        <td>abc test</td>
                                                                        <td>abc test</td>
                                                                    </tr>

                                                                    <tr>
                                                                        <td>abc test</td>
                                                                        <td>abc test</td>
                                                                        <td>abc test</td>
                                                                        <td>abc test</td>
                                                                        <td>abc test</td>
                                                                        <td>abc test</td>
                                                                        <td>abc test</td>
                                                                    </tr>

                                                                </tbody>
                                                            </table>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </Popup>
                                    </div>
                                </div>

                            ))}



                        </div>
                    </div>
                    <div className="jb-right">
                        <div className="jbr-container">
                            <div className="jbr-header">
                                <h1>Post Job</h1>
                            </div>
                            <div className="jbr-body">
                                <div className="jbrb-container">
                                    <div className="inp-container">
                                        <input type="text" placeholder='Job Title' value={job} onChange={(e) => setJob(e.target.value)} />
                                    </div>
                                    <div className="inp-container">
                                        <input type="text" placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                                    </div>
                                    <div className="inp-container">
                                        <select name="district" id="district" value={district} onChange={(e) => setDistrict(e.target.value)}>
                                            <option value="" disabled defaultValue >State</option>
                                            {KeralaStates.map((state, index) => (
                                                <option key={index} value={state}>
                                                    {state}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="inp-container">
                                        <textarea name="" id="" cols="30" rows="10" placeholder='Brief Description about the Job' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>

                                    </div>
                                    <div className="inp-container">
                                        <input type="text" placeholder='Base salary' value={salary} onChange={(e) => setSalary(e.target.value)} />
                                    </div>
                                    <div className="inp-button">
                                        <button onClick={handlePostJob}>Post Job</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs