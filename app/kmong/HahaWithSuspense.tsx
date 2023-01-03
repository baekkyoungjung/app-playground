import React, { use } from 'react';
import { delay } from '../streaming/delay';

async function fetchData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 15 },
  });
  const data = await res.json();
  await delay(2000);
  return data;
}

function HahaWithSuspense() {
  use(fetchData(1));
  return <div>HahaWithSuspense</div>;
}

export default HahaWithSuspense;
