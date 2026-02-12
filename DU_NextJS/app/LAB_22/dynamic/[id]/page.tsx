export default async function IdPage({ params }: { params: Promise<{ id: string }> }) {
    const idParam = await params;
    return (
        <>
            <div style={
            {
                color: "#f43f5e",
                border: "3px solid #7c2d12",
                background: "#fef2f2",
                padding: '2rem',
                borderRadius: '8px',
                fontFamily: 'Arial, sans-serif'
            }
        }>
                <h3>Dynamic Route: ID</h3>
                <p>ID: <strong>{idParam.id ?? 'No ID found'}</strong></p>
            </div>
        </>
    );
}
