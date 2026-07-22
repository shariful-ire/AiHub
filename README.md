### 📦 Installation Of React Toastify
---
## (1st Step)
bash
npm install react-toastify
📝 Step-by-Step Setup
Step 1: Import in Your File
jsx
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
---
## Step 2: Add ToastContainer (Just Once)
jsx
function App() {
  return (
    <div>
      <h1>My App</h1>
      
      {/* This is the container - add it once in your main file */}
      <ToastContainer />
    </div>
  );
}
---
## Step 3: Use toast() Anywhere
jsx
function MyComponent() {
  const handleClick = () => {
    toast.success('Button clicked! 🎉');
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}
---

## 🎨 4 Types of Toast Messages
jsx
// 1. Success (Green)
toast.success('Successfully done!');

// 2. Error (Red)
toast.error('Something went wrong!');

// 3. Warning (Yellow)
toast.warning('Please check again!');

// 4. Info (Blue)
toast.info('New update available!');

// 5. Simple (Default)
toast('Hello there!');