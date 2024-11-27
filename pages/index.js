import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <div class="flex flex-col items-center p-6 bg-card rounded-lg shadow-lg max-w-md mx-auto">
  <div class="flex items-center justify-between w-full">
    <span class="text-muted-foreground">195 views</span>
    <button class="bg-secondary text-secondary-foreground p-2 rounded-full">
      <img aria-hidden="true" alt="theme-toggle" src="https://openui.fly.dev/openui/24x24.svg?text=🌙" />
    </button>
  </div>
  <div class="mt-4">
    <h1 class="text-3xl font-bold text-primary">Hello!</h1>
    <h2 class="text-2xl font-semibold text-primary">I'M Aueaoangkun Aunmueang</h2>
    <p class="text-lg text-muted-foreground">Software Engineer 66</p>
    <p class="mt-2 text-base text-muted-foreground">
      A Software Engineering student passionate about web application development with expertise in React, Node.js, and a strong commitment to learning software development best practices.
    </p>
  </div>
  <div class="mt-4 flex space-x-4">
    <a href="mailto:66023096@up.ac.th" class="bg-secondary text-secondary-foreground p-2 rounded-lg">📧 66023096@up.ac.th</a>
    <a href="tel:0843236188" class="bg-secondary text-secondary-foreground p-2 rounded-lg">📞 0843236188</a>
    <a href="https://github.com/SofterM" class="bg-secondary text-secondary-foreground p-2 rounded-lg">GitHub</a>
  </div>
  <img class="mt-4 w-24 h-24" src="https://openui.fly.dev/openui/24x24.svg?text=🐦" alt="cute bird illustration" />
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
