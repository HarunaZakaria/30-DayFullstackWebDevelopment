export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>&copy;Copyright {currentYear}</p>
      </footer>
    </div>
  );
}
