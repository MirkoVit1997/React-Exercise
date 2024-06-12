export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.target);
  }

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        Click me!
      </button>
      <button name="two" onClick={handleButtonClick}>
        <img width={24} height={24} />
        Click me!
      </button>
    </div>
  );
}
