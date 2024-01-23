import { useEffect, useState } from 'react';
import './ViewJobs.scss'
import { AllJobs } from '../../ApiCalls';

const ViewJobs = () => {
    const [jobs, setJobs] = useState('')


    useEffect(() => {
        async function fetchJobs() {
            try {
                const jobData = await AllJobs();
                // console.log(jobData);
                setJobs(jobData)
            } catch (error) {
                console.log(error);
            }
        }
        fetchJobs()
    }, [])

    const reversedJobs = [...jobs].reverse();
    console.log(reversedJobs);



    return (
        <div className='ViewJobs'>
            <div className="vj-main">
                <div className="vjm-header">
                    <h3>Job Openings</h3>
                </div>
                <div className="vjm-body">
                    <div className="vjmb-left">
                        <div className="vjml-container">

                            {reversedJobs && reversedJobs.map((jobs) => (
                                <div className="vjml-card" key={jobs._id}>
                                    <div className="vjmlc-header">
                                        <p>{jobs._id}</p>
                                        <h3>{jobs.job}</h3>
                                    </div>
                                    <div className="vjmlc-body">
                                        <span>posted by {jobs.userId}</span>
                                    </div>
                                    <div className="vjmlc-footer">
                                    <h6>{new Date(jobs.createdAt).toLocaleString()}</h6>                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="vjmb-right"></div>
                </div>
            </div>
        </div>
    )
}

export default ViewJobs