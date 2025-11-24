import Link from 'next/link';

export default function Flights() {
  const flights = [
    { id: 1, number: 'AA100', destination: 'New York', departure: '08:00', status: 'On Time' },
    { id: 2, number: 'UA200', destination: 'Los Angeles', departure: '09:30', status: 'Boarding' },
    { id: 3, number: 'DL300', destination: 'Chicago', departure: '11:00', status: 'Delayed' },
    { id: 4, number: 'SW400', destination: 'Dallas', departure: '13:15', status: 'Scheduled' },
    { id: 5, number: 'BA500', destination: 'London', departure: '15:45', status: 'On Time' },
  ];

  return (
    <div style={{ fontFamily: 'Arial', margin: 0, padding: 0, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0, color: '#333' }}>✈️ Flights</h1>
          <p style={{ margin: '10px 0 0 0', color: '#666', fontSize: '14px' }}>Manage airport flights</p>
        </div>
        <Link href="/">
          <a style={{ padding: '10px 20px', backgroundColor: '#0066cc', color: '#fff', borderRadius: '4px', textDecoration: 'none', cursor: 'pointer' }}>← Back</a>
        </Link>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ margin: '0 0 20px 0', color: '#333' }}>All Flights Today</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ddd', backgroundColor: '#f9f9f9' }}>
                <th style={{ padding: '15px', textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Flight #</th>
                <th style={{ padding: '15px', textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Destination</th>
                <th style={{ padding: '15px', textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Departure</th>
                <th style={{ padding: '15px', textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {flights.map((flight) => (
                <tr key={flight.id} style={{ borderBottom: '1px solid #eee', hover: { backgroundColor: '#f5f5f5' } }}>
                  <td style={{ padding: '15px', color: '#333', fontWeight: 'bold' }}>{flight.number}</td>
                  <td style={{ padding: '15px', color: '#333' }}>{flight.destination}</td>
                  <td style={{ padding: '15px', color: '#333' }}>{flight.departure}</td>
                  <td style={{ padding: '15px' }}>
                    <span style={{
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      backgroundColor: 
                        flight.status === 'On Time' ? '#d4edda' : 
                        flight.status === 'Boarding' ? '#cfe2ff' : 
                        flight.status === 'Delayed' ? '#f8d7da' : '#e2e3e5',
                      color: 
                        flight.status === 'On Time' ? '#155724' : 
                        flight.status === 'Boarding' ? '#084298' : 
                        flight.status === 'Delayed' ? '#842029' : '#383d41'
                    }}>
                      {flight.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
