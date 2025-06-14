// app/page.tsx
"use client";

import { Navbar } from "@/components/navbar";
import { FlowTimeline } from "@/components/flow-timeline";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-pastelBlue via-pastelPink to-pastelGreen"
      >
        <div className="absolute inset-0 bg-white/50 dark:bg-gray-800/50 mix-blend-multiply"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl p-8 rounded-xl backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-xl"
        >
          <h2 className="text-4xl font-extrabold mb-4 text-pastelBlue">
            새로운 전세 경험을 만나보세요
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            복잡한 과정을 깔끔하게 관리하고 실시간 알림을 받아보세요.
          </p>
          <div className="flex justify-center gap-4">
            <Button>무료 체험</Button>
            <Button variant="outline">문의하기</Button>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold mb-8 text-center text-pastelBlue">
          주요 기능
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h4 className="font-semibold mb-2">단계별 가이드</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              <li>매물 요청 폼</li>
              <li>중개인 자동 매칭</li>
              <li>체크리스트 관리</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h4 className="font-semibold mb-2">실시간 알림</h4>
            <p className="text-gray-700 dark:text-gray-300">
              이메일과 푸시로 중요한 일정을 알려드립니다.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h4 className="font-semibold mb-2">계약서 관리</h4>
            <p className="text-gray-700 dark:text-gray-300">
              자동 문서 생성부터 공유까지 한번에 처리하세요.
            </p>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="container mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold mb-6 text-center text-pastelBlue">
          전세 거래 플로우
        </h3>
        <FlowTimeline />
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-pastelGreen/20">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
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
