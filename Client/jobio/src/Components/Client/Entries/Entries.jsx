import { useEffect, useState } from 'react'
import './Entries.scss'
import { applicationByUID } from '../../ApiCalls'

const Entries = () => {
    const [entries, setEntries] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState(null);



    useEffect(() => {
        async function fetchEntire() {
            try {
                const entries = await applicationByUID()
                setEntries(entries)
            } catch (error) {
                console.log(error);
            }
        }
        fetchEntire()
    }, [])

    const reversedEntries = [...entries].reverse();

    const handleEntriesClick = (entries) => {
        setSelectedEntry(entries);
    };


    console.log(reversedEntries);
    return (
        <div className='Entries'>
            <div className="es-main">
                <div className="em-header">
                    <h3>My Entries</h3>
                </div>
                <div className="em-body">
                    <div className="emb-left">
                        <div className="embl-container">
                            {reversedEntries && reversedEntries.map((entries) => (
                                <div className={`embl-card ${selectedEntry == entries ? 'selected' : ''}`} key={entries._id} onClick={() => handleEntriesClick(entries)}>
                                    <div className="emblc-header">
                                        <p>{entries._id}</p>
                                        <h3>{entries.jobDetails.job}</h3>
                                    </div>
                                    <div className="emblc-body">
                                        <span>posted by {entries.jobDetails.userId}</span>
                                    </div>
                                    <div className="emblc-footer">
                                        <h6>{new Date(entries.jobDetails.createdAt).toLocaleString()}</h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="emb-right">
                        <div className="embr-container">
                            {selectedEntry && (
                                <div className="detailed-info">
                                    <div className="embrc-header">
                                        <h3>{selectedEntry.jobDetails.job}</h3>
                                        <h4>posted by {selectedEntry.jobDetails.userId}</h4>
                                        <h5>{selectedEntry.jobDetails.city}, {selectedEntry.jobDetails.district}</h5>
                                    </div>
                                    <div className="embrc-body">
                                        <p>{selectedEntry.jobDetails.description}</p>
                                        <span>Base salary <button>₹ {selectedEntry.jobDetails.salary}/-</button></span>
                                    </div>
                                    <div className="embrc-footer">
                                        <button>{selectedEntry.status}</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entries