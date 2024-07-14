// import React from 'react';
// import { TEMPLATE, FORM } from './TemplateListSection';

// interface FormSectionProps {
//     selectedTemplate?: TEMPLATE;
// }

// const FormSection: React.FC<FormSectionProps> = ({ selectedTemplate }) => {
//     if (!selectedTemplate) {
//         return <div>Loading...</div>; // Handle loading state if needed
//     }

//     return (
//         <div>
//             <h2>{selectedTemplate.name}</h2>
//             <p>{selectedTemplate.desc}</p>
//             <form>
//                 {selectedTemplate.form?.map((field: FORM, index: number) => (
//                     <div key={index} className="my-4">
//                         <label className="block">{field.label}</label>
//                         {field.field === 'input' ? (
//                             <input
//                                 type="text"
//                                 name={field.name}
//                                 required={field.required}
//                                 className="border border-gray-300 rounded-md px-3 py-2 w-full"
//                             />
//                         ) : field.field === 'textarea' ? (
//                             <textarea
//                                 name={field.name}
//                                 className="border border-gray-300 rounded-md px-3 py-2 w-full"
//                             ></textarea>
//                         ) : null}
//                     </div>
//                 ))}
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
//                     Submit
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default FormSection;




"use client";
import React, { useState } from 'react';
import { TEMPLATE } from '@/app/(data)/Templates'; // Adjust the import path as per your project structure
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';

interface Props {
  selectedTemplate?: TEMPLATE; // Define selectedTemplate as optional since it might be undefined initially
  userFormInput:any,
  loading:boolean
}

const FormSection: React.FC<Props> = ({ selectedTemplate , userFormInput , loading}) => {

const [formData , setFormData]=useState<any>();

  const handleInputChange = (event: any) => {
    // Handle input change logic here
    const {name , value}=event.target;
    setFormData({...formData,[name]:value})
  }

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData)
    // Handle form submission logic here
  }

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
      {/* Render your form components here based on the selectedTemplate */}
      {selectedTemplate ? (
        <>
          <Image src={selectedTemplate.icon} alt='icon' width={70} height={70} />
          <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate.name}</h2>
          <p className='text-gray-500 text-sm'>{selectedTemplate.desc}</p>
          {/* Render form fields based on selectedTemplate.form if needed */}
          <form className='mt-6' onSubmit={onSubmit}>
            {selectedTemplate.form?.map((item, index) => (
              <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
                <label className='block text-sm font-medium text-gray-700 font-bold'>{item.label}</label>
                {item.field === 'input' && (
                  <input
                    type='text'
                    name={item.name}
                    required={item.required}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary'
                    onChange={handleInputChange} />
                )}
                {item.field === 'textarea' && (
                  <textarea
                    name={item.name}
                    required={item.required}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary'
                    onChange={handleInputChange} /> 
                )}
              </div>
            ))}
            <Button type='submit' 
            className='w-full py-6'
            disabled={loading}
            >
              {loading&&<Loader2Icon className='animate-spin' />}
              Generate Content</Button>
          </form>
        </>
      ) : (
        <p>No template selected</p>
      )}
    </div>
  );
}

export default FormSection;


