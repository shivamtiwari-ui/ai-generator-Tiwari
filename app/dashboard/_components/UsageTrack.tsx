// "use client";
// import { Button } from '@/components/ui/button';
// import { db } from '@/utils/db';
// import { AIOutput } from '@/utils/schema';
// import { useUser } from '@clerk/nextjs';
// import { eq } from 'drizzle-orm';
// import React, { useEffect, useState } from 'react';

// function UsageTrack() {
//     const { user } = useUser();
//     const [totalUsage, setTotalUsage] = useState(0);

//     useEffect(() => {
//         if (user) {
//             GetData();
//         }
//     }, [user]);

//     const GetData = async () => {
//         const result = await db.select().from(AIOutput).where(
//             eq(AIOutput.createdBy, user?.fullName || user?.primaryEmailAddress?.emailAddress)
//         );

//         console.log("Data fetched:", result);
//         if (result.length > 0) {
//             GetTotalUsage(result);
//         } else {
//             console.log("No data found for the current user.");
//         }
//     };

//     const GetTotalUsage = (history: any[]) => {
//         let total = 0;
//         history.forEach(element => {
//             total += Number(element.aiResponse?.length);
//         });
//         setTotalUsage(total);
//         console.log("Total usage calculated:", total);
//     };

//     return (
//         <div className='m-5'>
//             <div className='bg-primary text-white p-3 rounded-lg'>
//                 <h2 className='font-medium'>Credits</h2>
//                 <div className='h-2 bg-[#9981f9] rounded-full mt-3'>
//                     <div
//                         className='h-2 bg-white rounded-full'
//                         style={{
//                             width: `${(totalUsage / 10000) * 100}%` // Assuming 10,000 is the max
//                         }}
//                     ></div>
//                 </div>
//                 <h2 className='text-sm my-2'>{totalUsage}/10,000 credits used</h2>
//             </div>
//             <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
//         </div>
//     );
// }

// export default UsageTrack;




// // "use client";
// // import { Button } from '@/components/ui/button';
// // import { db } from '@/utils/db';
// // import { AIOutput } from '@/utils/schema';
// // import { useUser } from '@clerk/nextjs';
// // import { eq } from 'drizzle-orm';
// // import React, { useEffect, useState } from 'react';

// // const UsageTrack = () => {
// //     const { user } = useUser();
// //     const [creditUsed, setCreditUsed] = useState(0);
// //     const totalCredits = 10000; // Total credits available

// //     useEffect(() => {
// //         if (user?.primaryEmailAddress?.emailAddress) {
// //             fetchData();
// //         }
// //     }, [user]);

// //     const fetchData = async () => {
// //         try {
// //             const result = await db
// //                 .select()
// //                 .from(AIOutput)
// //                 .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
// //                 .execute();

// //             GetTotalUsage(result);
// //         } catch (error) {
// //             console.error('Error fetching usage data:', error);
// //         }
// //     };

// //     const GetTotalUsage = (result) => {
// //         let total = 0;
// //         result.forEach(element => {
// //             total += Number(element.aiResponse?.length || 0);
// //         });
// //         setCreditUsed(total);
// //     };

// //     return (
// //         <div className='m-5'>
// //             <div className='bg-primary text-white p-3 rounded-lg'>
// //                 <h2 className='font-medium'>Credits</h2>
// //                 <div className='h-2 bg-[#9981f9] rounded-full mt-3'>
// //                     <div
// //                         className='h-2 bg-white rounded-full'
// //                         style={{
// //                             width: `${(creditUsed / totalCredits) * 100}%`
// //                         }}
// //                     ></div>
// //                 </div>
// //                 <h2 className='text-sm my-2'>{creditUsed}/{totalCredits} credits used</h2>
// //             </div>
// //             <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
// //         </div>
// //     );
// // };

// // export default UsageTrack;


"use client";
import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';

function UsageTrack() {
    const { user } = useUser();
    const [totalUsage, setTotalUsage] = useState(0);

    useEffect(() => {
        if (user) {
            GetData();
        }
    }, [user]);

    const GetData = async () => {
        const userIdentifier = user.fullName || user.primaryEmailAddress?.emailAddress || '';
        
        const result = await db.select().from(AIOutput).where(
            eq(AIOutput.createdBy, userIdentifier)
        );

        console.log("Data fetched:", result);
        if (result.length > 0) {
            GetTotalUsage(result);
        } else {
            console.log("No data found for the current user.");
        }
    };

    const GetTotalUsage = (history: any[]) => {
        let total = 0;
        history.forEach(element => {
            total += Number(element.aiResponse?.length);
        });
        setTotalUsage(total);
        console.log("Total usage calculated:", total);
    };

    return (
        <div className='m-5'>
            <div className='bg-primary text-white p-3 rounded-lg'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-[#9981f9] rounded-full mt-3'>
                    <div
                        className='h-2 bg-white rounded-full'
                        style={{
                            width: `${(totalUsage / 10000) * 100}%`
                        }}
                    ></div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/10,000 credits used</h2>
            </div>
            <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
        </div>
    );
}

export default UsageTrack;


