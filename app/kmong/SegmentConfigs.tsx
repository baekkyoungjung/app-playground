import React, { use } from 'react';

/**
 * @see https://beta.nextjs.org/docs/api-reference/segment-config
 */
// dynamic이 'force-dynamic' 이라면 항상 SSR
export const dynamic = 'auto';
export const dynamicParams = true;
// revalidate 가 0이라면 항상 SSR
export const revalidate = 15;
export const fetchCache = 'auto';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';

async function fetchData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

function SegmentConfigs() {
  use(fetchData(1));
  return <div>SegmentConfigs</div>;
}

export default SegmentConfigs;
