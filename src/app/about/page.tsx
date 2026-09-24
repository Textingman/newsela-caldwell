import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Caldwell School District 132",
  description: "Learn about Caldwell School District 132 and our commitment to student success.",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-5 py-3.5 sticky top-0 z-50">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full bg-[#1a3a6b] flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="text-base font-semibold text-gray-900 tracking-tight">
            Caldwell School District 132
          </span>
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-5 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">About Us</h1>

        <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Who We Are
            </h2>
            <p className="leading-relaxed">
              Caldwell School District 132 serves the students and families of Caldwell, Idaho. We are dedicated to fostering academic excellence, character development, and lifelong learning for all students. Our district provides a comprehensive educational experience from kindergarten through 8th grade, with a focus on preparing students for high school and beyond.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Our Mission
            </h2>
            <p className="leading-relaxed">
              To provide every student with a rigorous, relevant, and engaging education that develops the knowledge, skills, and character needed for success in school, career, and life.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Our Commitment to Communication
            </h2>
            <p className="leading-relaxed">
              Caldwell School District 132 is committed to keeping students, parents, and community members informed and connected. We use modern communication tools, including SMS text messaging, to deliver important transactional account alerts and customer care notifications directly to families. Our messaging is used exclusively for account-related updates, important announcements, and customer support — never for unsolicited marketing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Contact Us
            </h2>
            <p className="leading-relaxed">
              We welcome your questions and feedback. Please reach out to us at:
            </p>
            <ul className="list-none space-y-2 mt-3">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@caldwellschools132.org" className="text-[#1a3a6b] underline">
                  support@caldwellschools132.org
                </a>
              </li>
              <li>
                <strong>Phone:</strong> 208-455-3345 x1711
              </li>
              <li>
                <strong>Address:</strong> 1200 Grant St, Caldwell, ID 83605
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
