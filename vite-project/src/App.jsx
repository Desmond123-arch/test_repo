import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import usePageSEO from './hooks/usePageSEO'
function App() {
  const [count, setCount] = useState(0)
  usePageSEO({
    title: 'My Awesome Page',
    description: 'This is a description of my awesome page.',
    keywords: ['awesome', 'page', 'SEO'],
    ogTitle: 'My Awesome Page on Social Media',
    ogDescription: 'Check out this awesome page!',
    ogImage: 'https://res.cloudinary.com/duocksbuc/image/upload/v1/media/news/images/1000298989_nsufd4',
    ogUrl: 'https://example.com/my-awesome-page',
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
