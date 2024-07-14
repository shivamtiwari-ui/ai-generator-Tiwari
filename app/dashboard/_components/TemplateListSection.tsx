// import Templates from '@/app/(data)/Templates';
// import React from 'react';
// import TemplateCard from './TemplateCard';

// export interface TEMPLATE {
//     name: string;
//     desc: string;
//     icon: string;
//     category: string;
//     slug: string;
//     aiPrompt: string;
//     form?: FORM[];
// }

// export interface FORM {
//     label: string;
//     field: string;
//     name: string;
//     required?: boolean;
// }

// function TemplateListSection() {
//   return (
//     <div>
//         {Templates.map((item: TEMPLATE, index: number) => {
//            <TemplateCard {...item} />
//         })}
//     </div>
//   );
// }

// export default TemplateListSection;

import React, { useEffect, useState } from 'react';
import Templates, { TEMPLATE } from '@/app/(data)/Templates'; // Adjust the import path as per your project structure
import TemplateCard from './TemplateCard';

interface TemplateListSectionProps {
  userSearchInput: string;
}

function TemplateListSection({ userSearchInput }: TemplateListSectionProps) {
  const [templateList, setTemplateList] = useState<TEMPLATE[]>(Templates);

  useEffect(() => {
    if (userSearchInput) {
      const filteredTemplates = Templates.filter((template) =>
        template.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
      {templateList.map((item: TEMPLATE, index: number) => (
        <TemplateCard key={index} item={item} />
      ))}
    </div>
  );
}

export default TemplateListSection;


