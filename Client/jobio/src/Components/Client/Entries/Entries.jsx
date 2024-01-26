import './Entries.scss'

const Entries = () => {
    return (
        <div className='Entries'>
            <div className="es-main">
                <div className="em-header">
                    <h3>My Entries</h3>
                </div>
                <div className="em-body">
                    <div className="emb-table">
                        <table id="detailTable">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Entries