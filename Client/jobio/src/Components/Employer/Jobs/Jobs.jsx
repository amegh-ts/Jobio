import './Jobs.scss'

const Jobs = () => {


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

                            <div className="jblc-cards">
                                <div className="jbc-header">
                                    <h3>Job Title</h3>
                                    <h4>place</h4>
                                    <div>
                                        <button>Revenue</button>
                                    </div>
                                </div>

                                <div className="jbc-body">
                                    <p>Description</p>
                                    <span>
                                        <button>Skill 1</button>
                                        <button>Skill 2</button>
                                    </span>
                                </div>
                                <div className="jbc-footer">
                                    <h6>Date</h6>
                                    <button>Apply Now</button>
                                </div>
                            </div>

                            <div className="jblc-cards">
                                <div className="jbc-header">
                                    <h3>Job Title</h3>
                                    <h4>place</h4>
                                    <div>
                                        <button>Revenue</button>
                                    </div>
                                </div>

                                <div className="jbc-body">
                                    <p>Description</p>
                                    <span>
                                        <button>Skill 1</button>
                                        <button>Skill 2</button>
                                    </span>
                                </div>
                                <div className="jbc-footer">
                                    <h6>Date</h6>
                                    <button>Apply Now</button>
                                </div>
                            </div>

                            <div className="jblc-cards">
                                <div className="jbc-header">
                                    <h3>Job Title</h3>
                                    <h4>place</h4>
                                    <div>
                                        <button>Revenue</button>
                                    </div>
                                </div>

                                <div className="jbc-body">
                                    <p>Description</p>
                                    <span>
                                        <button>Skill 1</button>
                                        <button>Skill 2</button>
                                    </span>
                                </div>
                                <div className="jbc-footer">
                                    <h6>Date</h6>
                                    <button>Apply Now</button>
                                </div>
                            </div>

                            <div className="jblc-cards">
                                <div className="jbc-header">
                                    <h3>Job Title</h3>
                                    <h4>place</h4>
                                    <div>
                                        <button>Revenue</button>
                                    </div>
                                </div>

                                <div className="jbc-body">
                                    <p>Description</p>
                                    <span>
                                        <button>Skill 1</button>
                                        <button>Skill 2</button>
                                    </span>
                                </div>
                                <div className="jbc-footer">
                                    <h6>Date</h6>
                                    <button>Apply Now</button>
                                </div>
                            </div>

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
                                        <input type="text" placeholder='Job Title' />
                                    </div>
                                    <div className="inp-container">
                                        <input type="text" placeholder='City' />
                                    </div>
                                    <div className="inp-container">
                                        <select name="district" id="district">
                                            <option value="" disabled defaultValue>State</option>
                                            {KeralaStates.map((state, index) => (
                                                <option key={index} value={state}>
                                                    {state}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="inp-container">
                                        <textarea name="" id="" cols="30" rows="10" placeholder='Brief Description about the Job' ></textarea>

                                    </div>
                                    <div className="inp-container">
                                        <input type="text" placeholder='Base salary' />
                                    </div>
                                    <div className="inp-button">
                                        <button>Post Job</button>
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