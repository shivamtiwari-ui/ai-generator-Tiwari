// "use client";
// import React, { useState, useContext } from 'react';
// import Link from 'next/link';
// import FormSection from '../_components/FormSection';
// import OutputSection from '../_components/OutputSection';
// import Templates, { TEMPLATE } from '@/app/(data)/Templates';
// import { Button } from '@/components/ui/button';
// import { ArrowLeft } from 'lucide-react';
// import { chatSession } from '@/utils/AiModal';
// import { db } from '@/utils/db';
// import { AIOutput } from '@/utils/schema';
// import { useUser } from '@clerk/nextjs';
// import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
// import { useRouter } from 'next/navigation'; // Correct import for Next.js 13+

// interface Props {
//     params: {
//         'template-slug': string;
//     };
// }

// function CreateNewContent(props: Props) {
//     const { 'template-slug': templateSlug } = props.params;
//     const { user } = useUser(); // Get user info
//     const router = useRouter();
//     const { totalUsage } = useContext(TotalUsageContext); // Access total usage from context

//     // Find the selected template based on templateSlug
//     const selectedTemplate: TEMPLATE | undefined = Templates.find(item => item.slug === templateSlug);

//     const [loading, setLoading] = useState(false);
//     const [aiResponse, setAiResponse] = useState('');

//     const GenerateAIContent = async (formData: any) => {
//         if (totalUsage >= 10000) {
//             alert("You have reached your credit limit of 10,000. Please Upgrade");
//             router.push('/dashboard/billing')
//             return; // Exit early if usage limit is reached
//         }

//         setLoading(true);
//         try {
//             const SelectedPrompt = selectedTemplate?.aiPrompt;
//             const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

//             const result = await chatSession.sendMessage(FinalAIPrompt);
//             const responseText = await result.response.text();
//             console.log(responseText);
//             setAiResponse(responseText);

//             // Save to database (optional)
//             await SaveInDb(formData, responseText);
//         } catch (error) {
//             console.error("Error generating AI content:", error);
//         } finally {
//             setLoading(false);
//         }
//     }

//     const SaveInDb = async (formData: any, aiResponse: string) => {
//         try {
//             // Ensure AIOutput matches your schema definition
//             await db.insert(AIOutput).values({
//                 FormData: JSON.stringify(formData), // Adjust according to your schema
//                 aiResponse: aiResponse,
//                 templateSlug: templateSlug, // Assuming templateSlug is accessible here
//                 createdBy: user?.fullName || user?.primaryEmailAddress?.emailAddress || 'Unknown User', // Use user's full name or email
//                 createdAt: new Date().toISOString()
//             }).execute();
//             console.log("Data saved successfully!");
//         } catch (error) {
//             console.error("Error saving data to database:", error);
//         }
//     }

//     return (
//         <div className='p-5'>
//             <Link href="/dashboard">
//                 <Button className="flex items-center gap-2">
//                     <ArrowLeft />
//                     Back
//                 </Button>
//             </Link>
//             <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
//                 {/* Pass selectedTemplate to FormSection */}
//                 <FormSection
//                     selectedTemplate={selectedTemplate}
//                     userFormInput={(v: any) => GenerateAIContent(v)}
//                     loading={loading}
//                 />
//                 {/* OutputSection component */}
//                 <div className='col-span-2'>
//                     <OutputSection aiResponse={aiResponse} />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CreateNewContent;


"use client";
import React, { useState, useContext } from 'react';
import Link from 'next/link';
import FormSection from '../_components/FormSection';
import OutputSection from '../_components/OutputSection';
import Templates, { TEMPLATE } from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { chatSession } from '@/utils/AiModal';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/navigation'; // Correct import for Next.js 13+

interface Props {
    params: {
        'template-slug': string;
    };
}

function CreateNewContent(props: Props) {
    const { 'template-slug': templateSlug } = props.params;
    const { user } = useUser(); // Get user info
    const router = useRouter();
    const context = useContext(TotalUsageContext);

    if (!context) {
        // Handle the case where context is undefined
        throw new Error("TotalUsageContext is undefined. Ensure the context provider is correctly set up.");
    }

    const { totalUsage, setTotalUsage } = context; // Destructure from context

    // Find the selected template based on templateSlug
    const selectedTemplate: TEMPLATE | undefined = Templates.find(item => item.slug === templateSlug);

    const [loading, setLoading] = useState(false);
    const [aiResponse, setAiResponse] = useState('');

    const GenerateAIContent = async (formData: any) => {
        if (totalUsage >= 10000) {
            alert("You have reached your credit limit of 10,000. Please Upgrade");
            router.push('/dashboard/billing');
            return; // Exit early if usage limit is reached
        }

        setLoading(true);
        try {
            const SelectedPrompt = selectedTemplate?.aiPrompt;
            const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

            const result = await chatSession.sendMessage(FinalAIPrompt);
            const responseText = await result.response.text();
            console.log(responseText);
            setAiResponse(responseText);

            // Save to database (optional)
            await SaveInDb(formData, responseText);
        } catch (error) {
            console.error("Error generating AI content:", error);
        } finally {
            setLoading(false);
        }
    }

    const SaveInDb = async (formData: any, aiResponse: string) => {
        try {
            // Ensure AIOutput matches your schema definition
            await db.insert(AIOutput).values({
                FormData: JSON.stringify(formData), // Adjust according to your schema
                aiResponse: aiResponse,
                templateSlug: templateSlug, // Assuming templateSlug is accessible here
                createdBy: user?.fullName || user?.primaryEmailAddress?.emailAddress || 'Unknown User', // Use user's full name or email
                createdAt: new Date().toISOString()
            }).execute();
            console.log("Data saved successfully!");
        } catch (error) {
            console.error("Error saving data to database:", error);
        }
    }

    return (
        <div className='p-5'>
            <Link href="/dashboard">
                <Button className="flex items-center gap-2">
                    <ArrowLeft />
                    Back
                </Button>
            </Link>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
                {/* Pass selectedTemplate to FormSection */}
                <FormSection
                    selectedTemplate={selectedTemplate}
                    userFormInput={(v: any) => GenerateAIContent(v)}
                    loading={loading}
                />
                {/* OutputSection component */}
                <div className='col-span-2'>
                    <OutputSection aiResponse={aiResponse} />
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;

