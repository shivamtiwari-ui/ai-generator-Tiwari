// import React, { useRef } from 'react'
// import '@toast-ui/editor/dist/toastui-editor.css';

// import { Editor } from '@toast-ui/react-editor';
// import { Button } from '@/components/ui/button';
// import { Copy } from 'lucide-react';


// function OutputSection() {
//     const editorRef:any=useRef();
//   return (
//     <div className='bg-white shadow-lg border rounded-lg'>
//         <div className='flex justify-between items-center p-5'>
//             <h2>Your Result</h2>
//             <Button><Copy/>Copy</Button>
//         </div>
//          <Editor
//          ref={editorRef}
//     initialValue="Your result will appear here"
//     initialEditType="wysiwyg"
//     height="600px"
//     useCommandShortcut={true}
//     onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
//   />
//     </div>
//   )
// }

// export default OutputSection


import React, { useRef, useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface Props {
  aiResponse: string; // Define the aiResponse prop as a string
}

const OutputSection: React.FC<Props> = ({ aiResponse }) => {
  const editorRef = useRef<any>(null); // Use `any` type for the editorRef

  useEffect(() => {
    // Update editor content when aiResponse changes
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiResponse);
    }
  }, [aiResponse]);

  const handleCopy = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      const content = editorInstance.getMarkdown();
      navigator.clipboard.writeText(content).then(() => {
        alert('Content copied to clipboard!');
      }).catch((err) => {
        console.error('Could not copy text: ', err);
      });
    }
  };

  return (
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button className='flex gap-2' onClick={handleCopy}>
          <Copy className='w-4 h-4' />Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current?.getInstance().getMarkdown())}
      />
    </div>
  );
}

export default OutputSection;

