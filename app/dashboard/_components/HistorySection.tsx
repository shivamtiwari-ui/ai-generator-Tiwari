"use client";

import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { Button } from '@/components/ui/button';
import { Copy, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const HistorySection = () => {
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await db.select().from(AIOutput).execute();
        setHistory(result);
      } catch (error) {
        console.error('Error fetching history:', error);
      }
    };

    fetchData();
  }, []);

  const handleCopy = (item: any) => {
    const content = `FormData: ${item.FormData}\nAI Response: ${item.aiResponse}\nTemplate Slug: ${item.templateSlug}\nCreated By: ${item.createdBy}\nCreated At: ${new Date(item.createdAt).toLocaleString()}`;
    navigator.clipboard.writeText(content).then(() => {
      alert('Content copied to clipboard!');
    }).catch((err) => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow-lg">
      <Link href="/dashboard" className="mb-4 inline-block">
        <Button className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Button>
      </Link>

      <h2 className="text-2xl font-bold mb-4">History</h2>
      <div className="flex flex-col gap-4">
        {history.map((item, index) => (
          <div key={index} className="flex justify-between items-center border border-gray-200 rounded-lg p-4 shadow-sm w-full">
            <div className="flex-grow">
              <p className="text-gray-700"><strong>FormData:</strong> {item.FormData}</p>
              <p className="text-gray-700"><strong>AI Response:</strong> {item.aiResponse || 'No Response'}</p>
              <p className="text-gray-700"><strong>Template Slug:</strong> {item.templateSlug}</p>
              <p className="text-gray-700"><strong>Created By:</strong> {item.createdBy}</p>
              <p className="text-gray-700"><strong>Created At:</strong> {new Date(item.createdAt).toLocaleString()}</p>
            </div>
            <Button onClick={() => handleCopy(item)}>
              <Copy className="w-4 h-4" /> Copy
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistorySection;
