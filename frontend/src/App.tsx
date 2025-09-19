import React, { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-100">
      <header className="app-header">
        <h1>Welcome to iCollect</h1>
      </header>

      <main className="app-main">
        <section>
          <p>Button clicks: {count}</p>
          <button onClick={() => setCount((c) => c + 1)}>Increment</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </section>
      </main>

      <footer className="app-footer">
        <small>© {new Date().getFullYear()} iCollect</small>
      </footer>
    </div>
  );
};

export default App;