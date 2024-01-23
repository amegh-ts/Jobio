import { useEffect, useState } from 'react';
import './ViewJobs.scss';
import { AllJobs, createChat } from '../../ApiCalls';

const ViewJobs = ({ setActivePageToChats }) => {
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

    return (
        <div className='ViewJobs'>
            <div className="vj-main">
                <div className="vjm-header">
                    <h3>Job Openings</h3>
                </div>
                <div className="vjm-body">
                    <div className="vjmb-left">
                        <div className="vjml-container">
                            {reversedJobs &&
                                reversedJobs.map((job) => (
                                    <div className={`vjml-card ${selectedJob === job ? 'selected' : ''}`} key={job._id} onClick={() => handleJobClick(job)}>
                                        <div className="vjmlc-header">
                                            <p>{job._id}</p>
                                            <h3>{job.job}</h3>
                                        </div>
                                        <div className="vjmlc-body">
                                            <span>posted by {job.userId}</span>
                                        </div>
                                        <div className="vjmlc-footer">
                                            <h6>{new Date(job.createdAt).toLocaleString()}</h6>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="vjmb-right">
                        <div className="vjmr-container">
                            {selectedJob && (
                                <div className="detailed-info">
                                    <div className="vjmc-header">
                                        <h3>{selectedJob.job}</h3>
                                        <h4>posted by {selectedJob.userId}</h4>
                                        <h5>{selectedJob.city}, {selectedJob.district}</h5>
                                    </div>
                                    <div className="vjmc-body">
                                        <p>{selectedJob.description}</p>
                                        <span>Base salary <button>₹ {selectedJob.salary}/-</button></span>
                                    </div>
                                    <div className="vjmc-footer">
                                        <button>Apply</button>
                                        <button onClick={() => handleChatButtonClick(userId, selectedJob.userId)}>Contact Us</button>
                                        <button>Report</button>
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

export default ViewJobs;
