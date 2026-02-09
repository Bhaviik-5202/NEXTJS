export default async function RecordsPage({ params }: { params: { pageNo: string } }) {
    // Await the params promise
    const { pageNo } = await params;
    const currentPage = parseInt(pageNo);
    const recordsPerPage = 10;

    // Calculate start and end indices
    const startIndex = (currentPage - 1) * recordsPerPage + 1;
    const endIndex = currentPage * recordsPerPage;

    return (
        <div style={
            {
                padding: '20px',
                backgroundColor: '#f43f5e',
                borderRadius: '10px',
                maxWidth: '600px',
                margin: '40px auto',
                fontFamily: 'Arial, sans-serif'
            }
        }>
            <h1>Pagination Records</h1>
            <p>Current Page: {currentPage}</p>
            <p>Records per page: {recordsPerPage}</p>

            <div style={{
                backgroundColor: '#f43f5e',
                padding: '20px',
                borderRadius: '10px',
                margin: '20px 0'
            }}>
                <h3>Record Indices:</h3>
                <p>Start Index: <strong>{startIndex}</strong></p>
                <p>End Index: <strong>{endIndex}</strong></p>
            </div>

            <div style={{ marginTop: '30px' }}>
                <h3 style={{ color: "#0f0f0f" }}>Navigation:</h3>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {[1, 2, 3, 4, 5, 10, 20, 50].map((page) => (
                        <a
                            key={page}
                            href={`/records/${page}`}
                            style={{
                                padding: '10px 15px',
                                backgroundColor: currentPage === page ? '#0070f3' : '#e0e0e0',
                                color: currentPage === page ? 'white' : 'black',
                                borderRadius: '5px',
                                textDecoration: 'none'
                            }}
                        >
                            Page {page}
                        </a>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#111111', borderRadius: '5px' }}>
                <h4>Explanation:</h4>
                <ul>
                    <li>For page {currentPage}, records displayed would be from index {startIndex} to {endIndex}</li>
                    <li>If you have 100 total records, page 1 shows 1-10, page 2 shows 11-20, etc.</li>
                    <li>This is useful for database queries with LIMIT and OFFSET</li>
                </ul>
            </div>
        </div>
    );
}