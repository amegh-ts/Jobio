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


    return (
        <div className='ViewJobs'>
            <div className="vj-main">
                <div className="vjm-header">
                    <h3>Job Openings</h3>
                </div>
                <div className="vjm-body">
                    <div className="vjmb-left">
                        <div className="vjml-container">

                            {reversedJobs && reversedJobs.map((job) => {

                                <div className="vjml-card">
                                    <div className="vjmlc-header">
                                        <h3>Python Fullstack</h3>
                                        <h5>userid</h5>
                                    </div>
                                    <div className="vjmlc-body">

                                    </div>
                                    <div className="vjmlc-footer">
                                        <h6>date</h6>
                                    </div>
                                </div>
                            })}



                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>

                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>

                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>

                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>

                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>


                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>

                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>

                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>


                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>

                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>

                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>


                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>

                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>

                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-body">

                                </div>
                                <div className="vjmlc-footer">
                                    <h6>date</h6>
                                </div>
                            </div>



                        </div>
                    </div>
                    <div className="vjmb-right"></div>
                </div>
            </div>
        </div>
    )
}

export default ViewJobs