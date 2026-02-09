export default async function IdPage({ params }: { params: Promise<{ id: string }> }) {
    const idParam = await params;
    return (
        <div style={
            {
                color: "#f43f5e",
                background: "#fef2f2",
                padding: '2rem',
                borderRadius: '8px',
                fontFamily: 'Arial, sans-serif'
            }
        }>
            <h1>Dynamic Route: ID</h1>
            <p>ID: <strong>{idParam.id ?? 'No ID found'}</strong></p>
        </div>
    );
}
