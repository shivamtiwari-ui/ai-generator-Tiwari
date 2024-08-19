// import React from 'react';
// import { Button } from '@/components/ui/button';

// function Billing() {
//   return (
//     <div className="p-5">
//       <h1 className="text-2xl font-semibold mb-5">Billing</h1>

//       {/* Free Subscription Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//         <h2 className="text-xl font-semibold mb-3">Free Subscription</h2>
//         <p className="text-primary mb-4 font-bold">$0 per month</p>
//         <ul className="list-disc list-inside mb-4 text-gray-600">
//           <li>1,000 words/month</li>
//           <li>40+ content templates</li>
//           <li>One week of download and copy content</li>
//           <li>One week of history</li>
//         </ul>
//         <Button variant="primary" className='bg-primary text-white'>
//           Start Free Trial
//         </Button>
//       </div>

//       {/* Monthly Subscription Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-3">Monthly Subscription</h2>
//         <p className="text-primary mb-4 font-bold">$99.99 per month</p>
//         <ul className="list-disc list-inside mb-4 text-gray-600">
//           <li>1,000 words/month</li>
//           <li>40+ content templates</li>
//           <li>Download and copy content</li>
//           <li>History</li>
//         </ul>
//         <Button variant="primary" className='bg-primary text-white'>
//           Subscribe Now
//         </Button>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { Button } from '@/components/ui/button';

function Billing() {
  return (
    <div className="p-5">
      {/* Free Subscription Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-3">Free Subscription</h2>
        <p className="text-primary mb-4 font-bold">$0 per month</p>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li>1,000 words/month</li>
          <li>40+ content templates</li>
          <li>One week of download and copy content</li>
          <li>One week of history</li>
        </ul>
        <Button variant="default" className='text-white'>
          Start Free Trial
        </Button>
      </div>

      {/* Monthly Subscription Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-3">Monthly Subscription</h2>
        <p className="text-primary mb-4 font-bold">$99.99 per month</p>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li>1,000 words/month</li>
          <li>40+ content templates</li>
          <li>Download and copy content</li>
          <li>History</li>
        </ul>
        <Button variant="default" className='text-white'>
          Subscribe Now
        </Button>
      </div>
    </div>
  );
}

export default Billing;



