import React, { useState } from 'react';

function App() {
    const [dob, setDob] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://YOUR_API_GATEWAY_URL?dateOfBirth=${dob}`, {
            headers: {
                'x-api-key': 'YOUR_API_KEY'
            }
        });
        const data = await response.json();
        setUsername(data.username);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Username Generator</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Date of Birth:
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />
                    </label>
                    <button type="submit">Generate Username</button>
                </form>
                {username && <p>Generated Username: {username}</p>}
            </header>
        </div>
    );
}

export default App;