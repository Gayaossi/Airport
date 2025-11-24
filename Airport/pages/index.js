import Link from 'next/link';

export default function Home() {
  const flights = [
    { id: 1, number: 'AA100', destination: 'New York', status: 'On Time' },
    { id: 2, number: 'UA200', destination: 'Los Angeles', status: 'Boarding' },
    { id: 3, number: 'DL300', destination: 'Chicago', status: 'Delayed' },
  ];

  const passengers = [
    { id: 1, name: 'John Smith', flight: 'AA100', status: 'Checked In' },
    { id: 2, name: 'Jane Doe', flight: 'UA200', status: 'Checked In' },
    { id: 3, name: 'Bob Johnson', flight: 'DL300', status: 'Pending' },
  ];

  return (
    <div style={{ fontFamily: 'Arial', margin: 0, padding: 0, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '20px' }}>
        <h1 style={{ margin: 0, color: '#333' }}>✈️ Airport Operations Dashboard</h1>
        <p style={{ margin: '10px 0 0 0', color: '#666', fontSize: '14px' }}>Real-time flight and passenger management</p>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: 0, color: '#666', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Total Flights</p>
            <p style={{ margin: '10px 0 0 0', fontSize: '32px', fontWeight: 'bold', color: '#0066cc' }}>3</p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: 0, color: '#666', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Total Passengers</p>
            <p style={{ margin: '10px 0 0 0', fontSize: '32px', fontWeight: 'bold', color: '#00aa00' }}>3</p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: 0, color: '#666', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>On-Time Rate</p>
            <p style={{ margin: '10px 0 0 0', fontSize: '32px', fontWeight: 'bold', color: '#00aa00' }}>66%</p>
          </div>
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <p style={{ margin: 0, color: '#666', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>Delayed Flights</p>
            <p style={{ margin: '10px 0 0 0', fontSize: '32px', fontWeight: 'bold', color: '#ff9900' }}>1</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
          <h2 style={{ margin: '0 0 20px 0', color: '#333', fontSize: '18px' }}>Quick Navigation</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
            <Link href="/flights">
              <a style={{ display: 'block', padding: '15px', backgroundColor: '#0066cc', color: '#fff', textDecoration: 'none', textAlign: 'center', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>✈️ View Flights</a>
            </Link>
            <Link href="/passengers">
              <a style={{ display: 'block', padding: '15px', backgroundColor: '#00aa00', color: '#fff', textDecoration: 'none', textAlign: 'center', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>👥 Passengers</a>
            </Link>
          </div>
        </div>

        {/* Flights Section */}
        <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
          <h2 style={{ margin: '0 0 20px 0', color: '#333', fontSize: '20px' }}>Today's Flights</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ddd' }}>
                <th style={{ padding: '10px', textAlign: 'left', color: '#666', fontWeight: 'bold' }}>Flight #</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#666', fontWeight: 'bold' }}>Destination</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#666', fontWeight: 'bold' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((flight) => (
                <tr key={flight.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px', color: '#333' }}>{flight.number}</td>
                  <td style={{ padding: '10px', color: '#333' }}>{flight.destination}</td>
                  <td style={{ padding: '10px' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      backgroundColor: flight.status === 'On Time' ? '#d4edda' : flight.status === 'Boarding' ? '#cfe2ff' : '#f8d7da',
                      color: flight.status === 'On Time' ? '#155724' : flight.status === 'Boarding' ? '#084298' : '#842029'
                    }}>
                      {flight.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Passengers Section */}
        <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ margin: '0 0 20px 0', color: '#333', fontSize: '20px' }}>Passengers</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ddd' }}>
                <th style={{ padding: '10px', textAlign: 'left', color: '#666', fontWeight: 'bold' }}>Name</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#666', fontWeight: 'bold' }}>Flight</th>
                <th style={{ padding: '10px', textAlign: 'left', color: '#666', fontWeight: 'bold' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {passengers.map((passenger) => (
                <tr key={passenger.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px', color: '#333' }}>{passenger.name}</td>
                  <td style={{ padding: '10px', color: '#333' }}>{passenger.flight}</td>
                  <td style={{ padding: '10px' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      backgroundColor: passenger.status === 'Checked In' ? '#d4edda' : '#fff3cd',
                      color: passenger.status === 'Checked In' ? '#155724' : '#997404'
                    }}>
                      {passenger.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
