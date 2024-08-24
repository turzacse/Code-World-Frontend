// import React, { useState } from 'react';
// import Editor from 'react-simple-code-editor';
// import { highlight, languages } from 'prismjs';
// import 'prismjs/themes/prism.css'; // You can import other Prism themes as well

// const CodeEditor = () => {
//     const [htmlCode, setHtmlCode] = useState('');

//     const handleInputChange = (code) => {
//         setHtmlCode(code);
//     };

//     return (
//         <div className='md:container md:mx-auto bg-gray-300'>
//             <div className='mt-10 mx-20 text-black flex justify-between gap-5'>
//                 <div className='w-1/2'>
//                     <h2>Enter HTML Code</h2>
//                     <Editor
//                         value={htmlCode}
//                         onValueChange={handleInputChange}
//                         highlight={code => highlight(code, languages.html, 'html')}
//                         padding={10}
//                         style={{
//                             fontFamily: '"Fira code", "Fira Mono", monospace',
//                             backgroundColor: '#f5f5f5',
//                             color: '#333',
//                             borderRadius: '5px',
//                             border: '1px solid #ccc',
//                             minHeight: '300px',
//                             overflow: 'auto',
//                         }}
//                     />
//                 </div>
//                 <div className='w-1/2'>
//                     <h2>Output</h2>
//                     <div
//                         className='bg-gray-400 h-[500px] overflow-auto'
//                         style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}
//                         dangerouslySetInnerHTML={{ __html: htmlCode }}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CodeEditor;



import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

const CodeEditor = () => {
    const [htmlCode, setHtmlCode] = useState('');

    const handleEditorChange = (value) => {
        setHtmlCode(value || '');
    };

    return (
        <div className='md:container md:mx-auto bg-gray-300'>
            <div className='mt-10 lg:mx-20 mx-5 text-black flex flex-col md:flex-row justify-between gap-5'>
                <div className='lg:w-1/2 w-full'>
                    <h2>Enter HTML Code</h2>
                    <div
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            backgroundColor: '#f5f5f5',
                            color: '#333',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            overflow: 'auto',
                            minHeight: '300px',
                        }}
                    >
                        <MonacoEditor
                            height="500px"
                            language="html"
                            theme="vs-dark" // You can change this to "light" for a light theme
                            value={htmlCode}
                            onChange={handleEditorChange}
                            options={{
                                minimap: { enabled: false },
                                autoClosingBrackets: 'always',
                                autoClosingQuotes: 'always',
                                automaticLayout: true,
                            }}
                        />
                    </div>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <h2>Output</h2>
                    <div
                        className='bg-gray-400 h-[500px] overflow-auto'
                        style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}
                        dangerouslySetInnerHTML={{ __html: htmlCode }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CodeEditor;

