import Link from 'next/link';

export default function Passengers() {
  const passengers = [
    { id: 1, name: 'John Smith', flight: 'AA100', seatNumber: '12A', status: 'Checked In' },
    { id: 2, name: 'Jane Doe', flight: 'UA200', seatNumber: '5C', status: 'Checked In' },
    { id: 3, name: 'Bob Johnson', flight: 'DL300', seatNumber: '8B', status: 'Pending' },
    { id: 4, name: 'Alice Williams', flight: 'SW400', seatNumber: '15F', status: 'Checked In' },
    { id: 5, name: 'Charlie Brown', flight: 'BA500', seatNumber: '1A', status: 'Checked In' },
  ];

  return (
    <div style={{ fontFamily: 'Arial', margin: 0, padding: 0, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0, color: '#333' }}>👥 Passengers</h1>
          <p style={{ margin: '10px 0 0 0', color: '#666', fontSize: '14px' }}>Passenger manifest and check-in status</p>
        </div>
        <Link href="/">
          <a style={{ padding: '10px 20px', backgroundColor: '#0066cc', color: '#fff', borderRadius: '4px', textDecoration: 'none', cursor: 'pointer' }}>← Back</a>
        </Link>
      </header>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ margin: '0 0 20px 0', color: '#333' }}>Passenger List</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #ddd', backgroundColor: '#f9f9f9' }}>
                <th style={{ padding: '15px', textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Name</th>
                <th style={{ padding: '15px', textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Flight</th>
                <th style={{ padding: '15px', textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Seat</th>
                <th style={{ padding: '15px', textAlign: 'left', color: '#333', fontWeight: 'bold' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {passengers.map((passenger) => (
                <tr key={passenger.id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '15px', color: '#333' }}>{passenger.name}</td>
                  <td style={{ padding: '15px', color: '#333', fontWeight: 'bold' }}>{passenger.flight}</td>
                  <td style={{ padding: '15px', color: '#333' }}>{passenger.seatNumber}</td>
                  <td style={{ padding: '15px' }}>
                    <span style={{
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '13px',
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
        </div>
      </main>
    </div>
  );
}
