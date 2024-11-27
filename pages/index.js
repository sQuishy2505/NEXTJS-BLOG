import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <Head>
        <title>Your Name - Resume</title>
      </Head>
      <header className="bg-white w-full shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Your Name</h1>
          <nav>
            <a href="#about" className="px-4 text-gray-700 hover:underline">
              About
            </a>
            <a href="#experience" className="px-4 text-gray-700 hover:underline">
              Experience
            </a>
            <a href="#contact" className="px-4 text-gray-700 hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section id="about" className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700">
            Brief introduction about yourself, your skills, and what you’re passionate about.
          </p>
        </section>
        <section id="experience" className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">Experience</h2>
          <div>
            <h3 className="text-lg font-semibold">Job Title</h3>
            <p className="text-gray-500">Company Name | Date Range</p>
            <p className="text-gray-700 mt-2">
              Brief description of your responsibilities and achievements.
            </p>
          </div>
          {/* Repeat for additional experiences */}
        </section>
        <section id="contact" className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700">
            Email: <a href="mailto:youremail@example.com" className="text-blue-600 underline">youremail@example.com</a>
          </p>
          <p className="text-gray-700">
            LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 underline">linkedin.com/in/yourprofile</a>
          </p>
        </section>
      </main>
      <footer className="bg-gray-800 text-white w-full py-4 text-center">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
