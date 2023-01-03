/**
 * @description 일반적인 client 에서만 작동하는 hooks를 사용하기 위해선 이 컴포넌트는 반드시 클라이언트 컴포넌트가 되어야합니다.
 * 즉 use client가 필수입니다.
 * 그리고 여기서부터 자식으로 렌더링되는 컴포넌트는 서버 컴포넌트 일 수 없습니다.
 */
'use client';

import React, { useState } from 'react';

function Form() {
  const [a, setA] = useState('');

  return (
    <div>
      <input value={a} onChange={(e) => setA(e.target.value)} />
    </div>
  );
}

export default Form;
