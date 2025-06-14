// components/flow-timeline.tsx
"use client";

import { useState } from "react";
import {
  Map,
  ClipboardList,
  Hammer,
  FileText,
  CheckCircle,
  ShieldCheck,
  Mail,
  Rocket,
} from "lucide-react";

const steps = [
  { id: 1, title: "매물 요청", desc: "희망 조건을 입력하고 요청서를 전송합니다.", icon: Map },
  { id: 2, title: "매물 추천", desc: "중개인이 매물 리스트를 추천해 줍니다.", icon: ClipboardList },
  { id: 3, title: "현장 방문", desc: "일정을 조율해 현장을 직접 확인합니다.", icon: Hammer },
  { id: 4, title: "계약 진행", desc: "계약서 작성·검토 후 서명·날인합니다.", icon: FileText },
  { id: 5, title: "잔금 & 확정일자", desc: "잔금을 납부하고 확정일자를 받습니다.", icon: CheckCircle },
  { id: 6, title: "전입신고", desc: "주민센터에서 전입신고를 완료합니다.", icon: ShieldCheck },
  { id: 7, title: "관리비 정산", desc: "입주 전·후 관리비를 정산합니다.", icon: Mail },
  { id: 8, title: "보증금 반환", desc: "집주인에게 보증금을 돌려받습니다.", icon: Rocket },
];

export function FlowTimeline() {
  const [active, setActive] = useState(1);
  const step = steps.find((s) => s.id === active)!;

  return (
    <>
      <div className="flex items-center justify-center space-x-6 overflow-x-auto py-4 mb-8">
        {steps.map((s, i) => (
          <div key={s.id} className="flex items-center">
            <button
              onClick={() => setActive(s.id)}
              className={`p-3 rounded-full shadow ${
                active === s.id
                  ? "bg-pastelBlue text-white"
                  : "bg-white text-pastelBlue"
              }`}
            >
              <s.icon className="w-5 h-5" />
            </button>
            {i < steps.length - 1 && (
              <div className="w-8 h-[2px] bg-pastelBlue"></div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 text-gray-700">
        <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
        <p className="leading-relaxed">{step.desc}</p>
      </div>
    </>
  );
}
