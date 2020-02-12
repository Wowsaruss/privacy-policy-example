import React from 'react';
import './App.css';

const pageURL = window.location.search;

const searchParams = new URLSearchParams(pageURL);

const createUrl = () => {
  const domain = searchParams.get('auth0_domain');
  const state = searchParams.get('state');
  return `https://${domain}/continue?state=${state || ''}`;
};

function App() {
  const url = createUrl();
  console.info(url);
  return (
    <div className="App">
      <header className="App-header">
        various-jellyfish.surge.sh
        <form action={url} method="post" enctype="text/html">
          <div>
            <label>
              <input type="checkbox" name="confirm" value="yes" />I agree
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
