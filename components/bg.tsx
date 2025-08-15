export default function Background() {
  return (
    <img
      src={"/background.jpg"}
      alt="Background"
      className="fixed top-0 w-screen h-screen animate-reverse-pulse blur-[15px] -z-[1]"
    />
  );
}
