export default function Footer() {
  return (
    <footer className="bg-pink-100 text-center py-4 mt-8">
      <p>© 2025 Raisa & Aldi. Dibuat dengan ❤️ oleh Teman Baik.</p>
      <audio controls autoPlay loop className="mx-auto mt-2">
        <source src="/music/love-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </footer>
  );
}