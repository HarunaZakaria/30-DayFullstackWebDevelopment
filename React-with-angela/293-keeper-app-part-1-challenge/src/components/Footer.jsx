export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>&copy;Copyright {currentYear}</footer>
    </div>
  );
}
