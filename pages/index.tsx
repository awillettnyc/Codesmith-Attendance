import React from 'react';
import Link from 'next/link';
import '../src/styles.module.css';

const Page = () => (

<div>
  <h1>Index Page</h1>
  <Link href='/cohorts'>
    <a>Link</a>
  </Link>
  </div>
)

export default Page;