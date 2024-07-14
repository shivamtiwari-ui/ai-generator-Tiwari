// app/dashboard/settings/page.tsx

import { UserProfile } from '@clerk/nextjs';
import React from 'react';

function Settings() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-semibold mb-5">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <UserProfile routing="hash" />
      </div>
    </div>
  );
}

export default Settings;
