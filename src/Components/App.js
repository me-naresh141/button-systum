import Button from "./Button";
const App = () => {
  return (
    <>
      <Button
        label="Click me 1"
        type="secondary"
        size="--small"
        disabled={true}
      />
      <Button label="Click me 2" type="secondary" size="--medium" />
      <Button label="Click me 3" type="tertiary" size="large" />
    </>
  );
};

export default App;
