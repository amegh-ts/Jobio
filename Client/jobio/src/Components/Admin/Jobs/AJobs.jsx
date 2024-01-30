/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './AJobs.scss';
import { AllJobs, createChat, deleteJob } from '../../ApiCalls';

const AJobs = ({ setActivePageToChats }) => {
    const [jobs, setJobs] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);

    const storedData = localStorage.getItem('persist:jobio');
    const user = storedData ? JSON.parse(JSON.parse(storedData).user) : null;
    const userId = user?.userInfo?.[0]?.id;

    useEffect(() => {
        async function fetchJobs() {
            try {
                const jobData = await AllJobs();
                setJobs(jobData);
                setSelectedJob(jobData.length > 0 ? jobData[jobData.length - 1] : null);

            } catch (error) {
                console.log(error);
            }
        }
        fetchJobs();
    }, []);

    const reversedJobs = [...jobs].reverse();


    const handleJobClick = (job) => {
        setSelectedJob(job);
    };

    const handleChatButtonClick = async (firstId, secondId) => {
        try {
            await createChat({ firstId, secondId });
            setActivePageToChats();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDeleteJobClick = async (id) => {
        // console.log('clickeddd',data);
        try {
            console.log(id);
            await deleteJob(id)
            window.location.reload()
            alert('Job Deleted Successfully')
        } catch (error) {
            console.log(error);
            alert('error')
        }
    }

    return (
        <div className='AJobs'>
            <div className="Aj-main">
                <div className="vjm-header">
                    <h3>Jobs</h3>
                </div>
                <div className="Ajm-body">
                    <div className="Ajmb-left">
                        <div className="Ajml-container">
                            {reversedJobs &&
                                reversedJobs.map((job) => (
                                    <div className={`Ajml-card ${selectedJob === job ? 'selected' : ''}`} key={job._id} onClick={() => handleJobClick(job)}>
                                        <div className="Ajmlc-header">
                                            <p>{job._id}</p>
                                            <h3>{job.job}</h3>
                                        </div>
                                        <div className="Ajmlc-body">
                                            <span>posted by {job.userId}</span>
                                        </div>
                                        <div className="Ajmlc-footer">
                                            <h6>{new Date(job.createdAt).toLocaleString()}</h6>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="Ajmb-right">
                        <div className="Ajmr-container">
                            {selectedJob && (
                                <div className="detailed-info">
                                    <div className="Ajmc-header">
                                        <h3>{selectedJob.job}</h3>
                                        <h4>posted by {selectedJob.userId}</h4>
                                        <h5>{selectedJob.city}, {selectedJob.district}</h5>
                                    </div>
                                    <div className="Ajmc-body">
                                        <p>{selectedJob.description}</p>
                                        <span>Base salary <button>₹ {selectedJob.salary}/-</button></span>
                                    </div>
                                    <div className="Ajmc-footer">
                                        <button onClick={() => handleChatButtonClick(userId, selectedJob.userId)}>Contact</button>
                                        <button onClick={() => handleDeleteJobClick(selectedJob._id)}>Delete</button>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AJobs;
