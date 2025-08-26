import Link from "next/link"

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "CV", href: "/cv" },
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold font-sans">
              NTSIKA.DEV
            </Link>
            <p className="mt-2 text-sm font-mono text-background/70">
              Full-stack developer and tech innovator from South Africa
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:text-center">
            <h3 className="text-lg font-bold font-sans mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-mono text-background/70 hover:text-background transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:text-right">
            <h3 className="text-lg font-bold font-sans mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href="mailto:ntsikangilane.dev@gmail.com"
                className="block text-sm font-mono text-background/70 hover:text-background transition-colors duration-200"
              >
                ntsikangilane.dev@gmail.com
              </a>
              <a
                href="https://github.com/Ntsika-Ngilane"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-mono text-background/70 hover:text-background transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://instagram.com/ntsika.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-mono text-background/70 hover:text-background transition-colors duration-200"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-background/20 text-center">
          <p className="text-sm font-mono text-background/70">© 2025 Ntsika Ngilane. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
