export default function Header({ mainRef }) {
  const skipToContent = () => {
    mainRef.current.tabIndex = "0";
    mainRef.current.focus();
    mainRef.current.removeAttribute("tabIndex");
  };
  return (
    <header>
      <button type="button" onClick={skipToContent}>
        Skip to Content
      </button>
    </header>
  );
}
