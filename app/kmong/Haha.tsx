import React, { use } from 'react';
import { delay } from '../streaming/delay';

async function fetchData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 15 },
  });
  const data = await res.json();
  return data;
}

function Haha() {
  use(fetchData(1));
  return <div>Haha</div>;
}

export default Haha;
