import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.scss';

import React from 'react'

const App = () => {
    const [markdown, setMarkdown] = useState('## Markdown Preview')

    return (
        <main>
            <section className="markdown">
                <textarea 
                    className="input" 
                    value={markdown} 
                    onChange={e => setMarkdown(e.target.value)} 
                    >
                </textarea>
                <article className="result">
                    <ReactMarkdown>
                        {markdown}
                    </ReactMarkdown>
                </article>
            </section>
        </main>
    )
}

export default App

