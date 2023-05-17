import logo from './logo.svg';
import styles from './App.module.css';

function App() {

  // Example: solid/components-return-once 
  /*
  if (typeof window === "undefined") {
    return null;
  } 
  */

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img 
        src={logo}
        // Example: solid/jsx-no-duplicate-props
        /*
        src={logo}
        */
         class={styles.logo} 
         alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
}

export default App;
