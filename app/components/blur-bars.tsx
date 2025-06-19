export default function BlurBars() {
  return (
    <>
      <div className="fixed z-[10] bottom-0 h-8 w-screen backdrop-blur-sm"></div>
      <div className="fixed z-[10] top-0 h-12 w-screen backdrop-blur-sm"></div>
    </>
  );
}
