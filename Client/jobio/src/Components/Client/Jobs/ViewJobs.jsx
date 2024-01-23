import './ViewJobs.scss'

const ViewJobs = () => {
    return (
        <div className='ViewJobs'>
            <div className="vj-main">
                <div className="vjm-header">
                    <h3>Job Openings</h3>
                </div>
                <div className="vjm-body">
                    <div className="vjmb-left">
                        <div className="vjml-container">
                            <div className="vjml-card">
                                <div className="vjmlc-header">
                                    <h3>Python Fullstack</h3>
                                    <h5>userid</h5>
                                </div>
                                <div className="vjmlc-boady">

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