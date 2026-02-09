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
                color: '#000000',
                backgroundColor: '#1cdfe2',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '20vh'
            }
        }>
            <h1>Starting Index: {startingIndex}</h1>
            <h1>End Index: {endIndex}</h1>
        </div>
    );
}

export default Page;