function isPrime(num: number) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

export default async function PrimeNumbersPage({ params }: { params: { start: string; end: string } }) {
    // Await the params promise
    const { start, end } = await params;
    const startNum = parseInt(start);
    const endNum = parseInt(end);

    const primeNumbers = [];

    for (let i = startNum; i <= endNum; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }

    return (
        <div style={
            {
                padding: '20px',
                color: '#333',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#a21caf',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }
        }>
            <p>Start: {startNum}</p>
            <p>End: {endNum}</p>
            <p>Total prime numbers found: {primeNumbers.length}</p>

            {primeNumbers.length > 0 ? (
                <div>
                    <h3>Prime Numbers:</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {primeNumbers.map((prime, index) => (
                            <div
                                key={index}
                                style={
                                    {
                                        color: 'black',
                                        minWidth: '10px',
                                        textAlign: 'center'
                                    }
                                }
                            >
                                {prime}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No prime numbers found in the given range.</p>
            )}
        </div>
    );
}