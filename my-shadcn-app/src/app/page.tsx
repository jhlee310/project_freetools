// app/page.tsx
"use client";

import { Navbar } from "@/components/navbar";
import { ToggleBlock } from "@/components/toggle-block";
import { FlowTimeline } from "@/components/flow-timeline";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        id="hero"
        className="relative h-screen flex flex-col items-center justify-center text-center px-6"
      >
        {/* 배경 패턴 */}
        <div className="absolute inset-0 bg-pastelPink mix-blend-multiply opacity-20 rounded-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-xl bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-pastelBlue">
            전세 거래, 완전 새로워진 경험
          </h2>
          <p className="text-gray-600 mb-6">
            복잡한 전세 과정을 블록으로 쪼개어<br />
            손쉽게 관리하고 놓치지 마세요.
          </p>
          <div className="flex justify-center space-x-4">
            <Button>무료 체험</Button>
            <Button variant="outline">문의하기</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-6 text-center text-pastelBlue">
          주요 기능
        </h3>
        <ToggleBlock title="단계별 가이드">
          <ul className="list-disc list-inside space-y-1">
            <li>매물 요청 폼</li>
            <li>중개인 자동 매칭</li>
            <li>체크리스트 관리</li>
          </ul>
        </ToggleBlock>
        <ToggleBlock title="실시간 알림">
          <p>이메일·푸시 알림으로 중요한 일정을 알려드립니다.</p>
        </ToggleBlock>
        <ToggleBlock title="계약서 관리">
          <p>자동 문서 생성부터 공유·보관까지 한번에!</p>
        </ToggleBlock>
      </section>

      {/* Flow */}
      <section id="flow" className="container mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-6 text-center text-pastelBlue">
          전세 거래 플로우
        </h3>
        <FlowTimeline />
      </section>

      {/* Contact */}
      <section id="contact" className="bg-white py-16 px-6">
        <div className="max-w-md mx-auto bg-pastelGreen bg-opacity-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-4 text-pastelBlue">문의하기</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="이메일"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="tel"
              placeholder="전화번호"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              placeholder="문의 내용"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <Button className="w-full">전송하기</Button>
          </form>
        </div>
      </section>
    </>
  );
}
