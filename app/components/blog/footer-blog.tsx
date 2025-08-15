export default function FooterBlog() {
  return (
    <footer className="fixed bottom-4 right-0 left-0 w-max m-auto bg-white/5 backdrop-blur-lg p-3 rounded-3xl">
      <p className="text-xs text-primary/50">
        © {new Date().getFullYear()} Stamatis Tsagkliotis. All rights reserved.
      </p>
    </footer>
  );
}
