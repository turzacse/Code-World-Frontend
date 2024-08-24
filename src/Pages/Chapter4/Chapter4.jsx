
import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { NavLink } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Swal from 'sweetalert2';

const Chapter4 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const snippetsPerPage = 5;
    const codeSnippets = [
        {
            title: "Heading + Paragraph with Bold, Underline, Italic",
            description: `This example demonstrates how to use the <b>bold</b>, <i>italic</i>, and <u>underline</u> HTML tags within paragraphs. 
                          The <h1> tag is used for the main heading, which is displayed in larger and bold text. 
                          The <b> tag makes the text within it bold, the <i> tag makes the text italicized, 
                          and the <u> tag underlines the text. Each of these tags helps to emphasize different parts of your content.`,
            code: `
    <html>
    <head>
        <title>Styled Text Example</title>
    </head>
    <body>
        <h1>This is a Heading</h1>
        <p>This is a <b>bold</b> paragraph.</p>
        <p>This is an <i>italic</i> paragraph.</p>
        <p>This is an <u>underlined</u> paragraph.</p>
    </body>
    </html>
            `
        },
        {
            title: "Table Example",
            description: `This example demonstrates how to create a table using the <table>, <tr>, <th>, and <td> tags. 
                          The <table> tag defines the table structure, <tr> is used to create rows, 
                          <th> creates header cells which are bold by default, and <td> creates data cells. 
                          The table is styled with a border around each cell, using the 'border' attribute.`,
            code: `
    <html>
    <head>
        <title>Table Example</title>
    </head>
    <body>
        <table border="2">
            <tr>
                <th>Heading 1</th>
                <th>Heading 2</th>
                <th>Heading 3</th>
            </tr>
            <tr>
                <td>Row 1, Cell 1</td>
                <td>Row 1, Cell 2</td>
                <td>Row 1, Cell 3</td>
            </tr>
            <tr>
                <td>Row 2, Cell 1</td>
                <td>Row 2, Cell 2</td>
                <td>Row 2, Cell 3</td>
            </tr>
        </table>
    </body>
    </html>
            `
        },
        {
            title: "Ordered and Unordered List",
            description: `This example shows how to create ordered and unordered lists using the <ol> and <ul> tags respectively.
                          The <ol> tag creates an ordered list with numbers, and each item is wrapped in an <li> tag. 
                          The <ul> tag creates an unordered list, which displays bullet points instead of numbers.`,
            code: `
    <html>
    <head>
        <title>List Example</title>
    </head>
    <body>
        <h2>Ordered List</h2>
        <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
        </ol>
        <h2>Unordered List</h2>
        <ul>
            <li>Item one</li>
            <li>Item two</li>
            <li>Item three</li>
        </ul>
    </body>
    </html>
            `
        },
        {
            title: "Anchor Tag Example",
            description: `This example explains the usage of the <a> (anchor) tag, which is used to create hyperlinks in HTML.
                          The 'href' attribute specifies the URL of the page the link goes to, and the 'target="_blank"' attribute 
                          makes the link open in a new tab or window. This example includes two anchor tags linking to Google and Wikipedia.`,
            code: `
    <html>
    <head>
        <title>Anchor Tag Example</title>
    </head>
    <body>
        <h2>Useful Links</h2>
        <p>Visit your teacher <a href="https://web.facebook.com/fahimmontasir.siam/" target="_blank" >Facebook</a> Profile.</p>
        <p>Visit the <a href="https://www.wikipedia.org" >Wikipedia</a> website.</p>

    </body>
    </html>
            `
        },
        {
            title: "Text Formatting Tags",
            description: `
                This example demonstrates various HTML text formatting tags:
    
                - The <small> tag makes the text appear smaller.
                - The <big> tag makes the text appear larger.
                - The <b> tag makes the text bold.
                - The <strong> tag also makes the text bold, but with semantic importance.
                - The <i> tag italicizes the text.
                - The <em> tag italicizes the text and gives it semantic emphasis.
                - The <u> tag underlines the text.
                - The <del> tag represents deleted or removed text, often shown as strikethrough.
                - The <strike> tag also creates strikethrough text, similar to <del>.
                - The <sub> tag creates subscript text, which is smaller and lowered.
                - The <sup> tag creates superscript text, which is smaller and raised.
    
                These tags help to style and emphasize different parts of your content.
            `,
            code: `
    <html>
    <head>
        <title>Text Formatting Example</title>
    </head>
    <body>
        <p>HTML <small>Small</small> Formatting</p>
        <p>HTML <big>Big</big> Formatting</p>
        <p><b>This is bold text</b></p>
        <p><strong>This is strong text</strong></p>
        <p><i>This is italic text</i></p>
        <p><em>This is emphasized text</em></p>
        <p><u>This is underline text</u></p>
        <p><del>This is deleted text</del></p>
        <p><strike>This is striked text</strike></p>
        <p>This is <sub>subscript</sub> text</p>
        <p>This is <sup>superscript</sup> text</p>
    </body>
    </html>
            `
        },
        {
            title: "Displaying Mathematical Equations with Superscript",
            description: `This example demonstrates how to display a mathematical equation using the <sup> (superscript) HTML tag. The <sup> tag is used to define text that is displayed slightly above the normal line of text, typically used for exponents in mathematical expressions. In this example, we display the expansion of the equation (a+b)² = a² + 2ab + b² using the <sup> tag for proper formatting.`,
            code: `
        <html>
        <head>
            <title>Mathematical Equation Example</title>
        </head>
        <body>
            <p>(a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup></p>
        </body>
        </html>
            `
        }

    ];

    const totalPages = Math.ceil(codeSnippets.length / snippetsPerPage);

    const currentSnippets = codeSnippets.slice(
        (currentPage - 1) * snippetsPerPage,
        currentPage * snippetsPerPage
    );


    const createIframeContent = (htmlContent) => {
        const iframeDocument = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body { margin: 0; padding: 10px; font-family: Arial, sans-serif; }
                    table { width: 100%; border-collapse: collapse; }
                    th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
                </style>
            </head>
            <body>${htmlContent}</body>
            </html>
        `;
        return iframeDocument;
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        window.scroll(0, 0);
    }, [])



    return (
        <div className='md:container md:mx-auto mx-5'>
            {currentSnippets.map((snippet, index) => (
                <div key={index} className='my-10'>
                    <h2 className='text-xl font-medium text-warning'>{snippet.title}</h2>
                    <div className='flex lg:flex-row flex-col justify-between lg:gap-10 gap-5'>
                        {/* <div className='lg:w-1/2 w-full relative'>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-info font-medium text-lg'>HTML Code</h3>
                                <NavLink to='/Chapter-4/code-editor' className='btn btn-sm btn-warning'>Try yourself</NavLink>
                            </div>
                            <CopyToClipboard text={snippet.code}>
                                <button
                                    className='absolute top-6 right-2 p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600'
                                    aria-label="Copy code to clipboard"
                                >
                                    Copy
                                </button>
                            </CopyToClipboard>
                            <SyntaxHighlighter className='bg-gray-300 rounded-md' language="html" style={coy}>
                                {snippet.code}
                            </SyntaxHighlighter>
                        </div> */}
                        <div className='lg:w-1/2 w-full relative'>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-info font-medium text-lg'>HTML Code</h3>
                                <NavLink to='/Chapter-4/code-editor' className='btn btn-sm btn-warning'>Try yourself</NavLink>
                            </div>
                            <CopyToClipboard text={snippet.code}>
                                <button
                                    onClick={() => {
                                        Swal.fire({
                                            // title: 'Code Copied!',
                                            text: 'The code has been copied to your clipboard.',
                                            icon: 'success',
                                            customClass: {
                                                container: 'swal-container',
                                                popup: 'swal-popup'
                                            },
                                            background: '#090125', // Custom background color
                                            color: '#ffffff' // Text color for better contrast
                                        });
                                    }}
                                    className='absolute btn btn-sm top-10 right-0 p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 z-10'
                                    aria-label="Copy code to clipboard"
                                >
                                    Copy
                                </button>
                            </CopyToClipboard>
                            <SyntaxHighlighter className='bg-gray-300 rounded-md mt-8 text-[8px] md:text-base' language="html" style={coy}>
                                {snippet.code}
                            </SyntaxHighlighter>
                        </div>

                        <div className='lg:w-1/2 w-full'>
                            <h3 className='text-info font-medium text-lg'>Output</h3>
                            <iframe
                                className='w-full rounded-md h-[300px] bg-gray-300 border border-gray-400 my-2'
                                title={`Output-${index}`}
                                srcDoc={createIframeContent(snippet.code)}
                                sandbox="allow-scripts"
                            />
                            <div className='mt-5 rounded-md bg-gray-300 p-4 text-black'>
                                <p>{snippet.description}</p>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
            <div className='flex justify-center mt-10'>
                <nav>
                    <ul className='flex space-x-4'>
                        {Array.from({ length: totalPages }, (_, pageIndex) => (
                            <li key={pageIndex}>
                                <button
                                    onClick={() => handlePageChange(pageIndex + 1)}
                                    className={`px-4 py-2 rounded-md ${currentPage === pageIndex + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                                >
                                    {pageIndex + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Chapter4;
