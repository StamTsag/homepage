export default function Background() {
  return (
    <img
      src={"/background.jpg"}
      alt="Background"
      className="fixed top-0 opacity-50 w-screen h-screen animate-reverse-pulse blur-sm -z-[1]"
    />
  );
}
