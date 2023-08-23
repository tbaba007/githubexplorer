import { lazy, Suspense } from 'react';

import './App.css';

const GithubRepo=lazy(()=>import ('./pages/GitRepo'));
const Loading=lazy(()=>import('./components/ui/Loader'))

document.title="Git hub repo"
function App() {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
         <GithubRepo/>
      </Suspense>
    </div>
  );
}

export default App;
