export default function Maps() {
  return (
    <section className="py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Lokasi Acara</h2>
      <div className="mx-auto max-w-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}