// async function Page({
//     params,
// }: {
//     params: Promise<{ pageNo: string }>;
// }) {
//     const { pageNo } = await params;

//     const page = Number(pageNo);

//     const startingIndex = (page - 1) * 10 + 1;
//     const endIndex = page * 10;

//     return (
//         <div>
//             <h1>Starting Index: {startingIndex}</h1>
//             <h1>End Index: {endIndex}</h1>
//         </div>
//     );
// }

// export default Page;

import { Metadata } from 'next';

// Generate metadata if needed
export async function generateMetadata({
    params,
}: {
    params: Promise<{ pageNo: string }>;
}): Promise<Metadata> {
    const { pageNo } = await params;
    return {
        title: `Page ${pageNo}`,
    };
}

async function Page({
    params,
}: {
    params: Promise<{ pageNo: string }>;
}) {
    const { pageNo } = await params;

    const page = Number(pageNo);

    const startingIndex = (page - 1) * 10 + 1;
    const endIndex = page * 10;

    return (
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
            <h1>Starting Index: {startingIndex}</h1>
            <h1>End Index: {endIndex}</h1>
        </div>
    );
}

export default Page;