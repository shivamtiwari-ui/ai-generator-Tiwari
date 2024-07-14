// "use client"
// import React, { useState } from 'react'
// import SearchSection from './_components/SearchSection'
// import TemplateListSection from './_components/TemplateListSection'

// function Dashboard() {
//   const {userSearchInput , setUserSearchInput}=useState<string>()
//   return (
//     <div>
//       {/* {Search Section } */}
//       <SearchSection onSearchInput={(value:string)=>console.log(value)}/>

//       {/* {Template List Section } */}
//       <TemplateListSection/>
//     </div>
//   )
// }

// export default Dashboard


"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import SearchSection from './_components/SearchSection';
import TemplateListSection from './_components/TemplateListSection';

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>('');

  const handleSearchInput = (value: string) => {
    setUserSearchInput(value);
    console.log(value);
  };

  return (
    <div>
      {/* {Search Section } */}
      <SearchSection onSearchInput={handleSearchInput} />

      {/* {Template List Section } */}
      <TemplateListSection userSearchInput={userSearchInput} />

      {/* Link to the History page */}
      <div className="mt-4">
        <Link href="/dashboard/history" legacyBehavior>
          <a className="text-blue-500">View History</a>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;

