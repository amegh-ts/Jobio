import { useEffect, useState } from 'react';
import './ViewJobs.scss';
import { AllJobs } from '../../ApiCalls';

const ViewJobs = () => {
    const [jobs, setJobs] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        async function fetchJobs() {
            try {
                const jobData = await AllJobs();
                setJobs(jobData);
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
                                    <div
                                        className={`vjml-card ${selectedJob === job ? 'selected' : ''}`}
                                        key={job._id}
                                        onClick={() => handleJobClick(job)}
                                    >
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
                        
                        {selectedJob && (
                            <>
                                <div className="detailed-info">
                                    <h3>{selectedJob.job}</h3>
                                    <p>{selectedJob.userId}</p>
                                    <p>{selectedJob.description}</p>
                                    {/* Add other fields from selectedJob as needed */}
                                </div>
                                {/* Add additional detailed explanation components as needed */}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewJobs;
