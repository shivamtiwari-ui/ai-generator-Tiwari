// // TotalUsageContext.tsx
// import { createContext } from 'react';

// export const TotalUsageContext = createContext<{ totalUsage: number; setTotalUsage: React.Dispatch<React.SetStateAction<number>> }>({ totalUsage: 0, setTotalUsage: () => {} });

import { createContext } from 'react';

// Define the context type
interface TotalUsageContextType {
  totalUsage: number;
  setTotalUsage: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with a default value
// Set default value to undefined, since the context provider should be the only source of truth for the context value
export const TotalUsageContext = createContext<TotalUsageContextType | undefined>(undefined);
