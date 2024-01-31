import { useState, useEffect } from 'react';

const Test = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const logValues = () => {
        console.log("Name: " + formData.name);
        console.log("Email: " + formData.email);
        console.log("Password: " + formData.password);

        // You can perform additional actions here, such as sending the values to a server.
    }


    return (
        <div className='signup'>
            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <br />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <br />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <br />

                <button type="button" onClick={logValues}>
                    Log Values
                </button>
            </form>
        </div>
    );
};

export default Test;
