import "./styles.css";

const App = ({ Component, pageProps }) => (
  <div className="app">
    <Component {...pageProps} />
  </div>
);

export default App;
