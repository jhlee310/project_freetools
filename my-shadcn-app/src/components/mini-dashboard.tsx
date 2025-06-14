// src/components/mini-dashboard.tsx
"use client";

import React from "react";

interface MiniDashboardProps {
  step: {
    id: number;
    title: string;
    videoDescription: string;
    // icon 은 여기선 사용하지 않으므로 생략했습니다
  };
}

export default function MiniDashboard({ step }: MiniDashboardProps) {
  return (
    <div className="mt-8 mx-auto max-w-2xl bg-white rounded-xl shadow-lg p-6 animate-fadeInUp">
      <h4 className="font-heading text-xl mb-2">{step.title} 미리보기</h4>
      <p className="text-gray-600 mb-4">{step.videoDescription}</p>
      {/* 여기에 실제 대시보드 UI나 진행률 바, 타이머, 버튼 등 원하는 시뮬레이션 UI를 넣으세요 */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-primary text-white rounded-lg">
          다음 단계 보기
        </button>
        <button className="px-4 py-2 border border-primary text-primary rounded-lg">
          단계 완료 처리
        </button>
      </div>
    </div>
  );
}
