export function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer id="footer" className="footer"><div className="site-grid gap-y-10">
      <p className="brand col-span-4 md:col-span-3">STUDIO / FORM</p>
      <nav className="col-span-2 flex flex-col items-start gap-2 text-sm uppercase md:col-span-2" aria-label="Footer navigation"><button onClick={() => scrollTo("work")}>Work</button><button onClick={() => scrollTo("services")}>Services</button><button onClick={() => scrollTo("contact")}>Contact</button></nav>
      <nav className="col-span-2 flex flex-col items-start gap-2 text-sm uppercase md:col-span-2" aria-label="Social links"><a href="https://instagram.com">Instagram</a><a href="https://behance.net">Behance</a><a href="https://linkedin.com">LinkedIn</a></nav>
      <div className="col-span-4 text-sm uppercase md:col-span-3 md:col-start-10"><p>Ahmedabad · India</p><a className="mt-2 inline-block" href="mailto:hello@studio.com">hello@studio.com</a></div>
      <p className="col-span-4 border-t border-current pt-5 text-xs uppercase md:col-span-12">© 2026 Studio / Form</p>
    </div></footer>
  );
}