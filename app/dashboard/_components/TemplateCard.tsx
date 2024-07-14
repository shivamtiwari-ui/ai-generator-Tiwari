// import React from 'react';
// import { TEMPLATE } from './TemplateListSection';
// import Image from 'next/image';

// function TemplateCard(item: TEMPLATE) {
//   return (
//     <div>
//       <Image src={item.icon} alt={item.name} width={50} height={50} />
//       <h2>{item.name}</h2>
//       <p>{item.desc}</p>
//       <p>Category: {item.category}</p>
//     </div>
//   );
// }

// export default TemplateCard;

import React from 'react';
import { TEMPLATE } from '@/app/(data)/Templates';
import Image from 'next/image';
import Link from 'next/link';

interface TemplateCardProps {
  item: TEMPLATE;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ item }) => {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
      <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
        <Image src={item.icon} alt={item.name} width={50} height={50} />
        <h2 className='font-medium text-lg'>{item.name}</h2>
        <p className='text-gray-500 line-clamp-3'>{item.desc}</p>
      </div>
    </Link>
  );
};

export default TemplateCard;


