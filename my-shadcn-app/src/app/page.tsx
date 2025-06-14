// app/page.tsx
"use client";

import { Navbar } from "@/components/navbar";
import { ToggleBlock } from "@/components/toggle-block";
import { FlowTimeline } from "@/components/flow-timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Code, Zap, Sparkles, Users, Star, HelpCircle, Check } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { HoverCard } from "@/components/hover-card";
import { PricingCard } from "@/components/pricing-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section - Glassmorphism & Animation */}
      <section className="relative flex items-center justify-center min-h-[60vh] py-24 px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-3xl mx-auto"
        >
          <Card className="backdrop-blur-xl bg-white/30 dark:bg-gray-900/30 border border-white/40 dark:border-gray-700/60 shadow-2xl rounded-3xl p-10 flex flex-col items-center relative overflow-hidden">
            <span className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
            <span className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-400/30 rounded-full blur-3xl animate-pulse" />
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="h-8 w-8 text-blue-500 animate-bounce" />
              <span className="text-lg font-semibold tracking-wide bg-white/60 dark:bg-gray-800/60 px-3 py-1 rounded-full border border-white/30 dark:border-gray-700/40 shadow-sm backdrop-blur-md">
                New in 2024
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-lg mb-6">
              Build Something <span className="text-blue-500 bg-white/40 dark:bg-gray-800/40 px-2 rounded-xl">Amazing</span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-xl mx-auto drop-shadow">
              Create stunning web applications with <span className="font-bold text-blue-500">Shadcn UI</span>, <span className="font-bold text-purple-500">Tailwind CSS</span>, and <span className="font-bold text-pink-500">modern animation</span>.<br />
              <span className="text-base text-gray-500 dark:text-gray-400">Beautiful. Fast. Effortless.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button size="lg" className="backdrop-blur bg-blue-500/80 hover:bg-blue-600/90 text-white shadow-xl px-8 py-4 text-lg rounded-2xl transition-all duration-200">
                <ArrowRight className="mr-2 h-5 w-5" /> Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-white/60 dark:border-gray-700/60 bg-white/40 dark:bg-gray-900/40 text-blue-600 dark:text-blue-300 shadow px-8 py-4 text-lg rounded-2xl transition-all duration-200 hover:bg-white/70 dark:hover:bg-gray-800/70">
                <Sparkles className="mr-2 h-5 w-5" /> Live Demo
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Features Section - Glassmorphism & Animation */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: <Code className="h-8 w-8 text-blue-500" />,
              title: "Modern Stack",
              description: "Built with the latest technologies and best practices",
              content: "Leverage the power of Next.js, React, and Tailwind CSS to build modern web applications.",
              color: "from-blue-200/60 to-blue-100/10",
            },
            {
              icon: <Zap className="h-8 w-8 text-pink-500" />,
              title: "Lightning Fast",
              description: "Optimized for performance and speed",
              content: "Experience blazing fast load times and smooth interactions with our optimized stack.",
              color: "from-pink-200/60 to-pink-100/10",
            },
            {
              icon: <Sparkles className="h-8 w-8 text-purple-500" />,
              title: "Beautiful UI",
              description: "Stunning design out of the box",
              content: "Create beautiful interfaces with our pre-built components and design system.",
              color: "from-purple-200/60 to-purple-100/10",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
            >
              <Card className={`relative overflow-hidden backdrop-blur-xl bg-gradient-to-br ${feature.color} border border-white/40 dark:border-gray-700/60 shadow-xl rounded-3xl p-8 flex flex-col items-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl`}> 
                <span className="absolute -top-8 -left-8 w-24 h-24 bg-white/30 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
                <span className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-2xl font-bold mb-2 text-gray-900 dark:text-white drop-shadow">{feature.title}</CardTitle>
                <CardDescription className="mb-2 text-base text-gray-600 dark:text-gray-300">{feature.description}</CardDescription>
                <CardContent className="text-gray-700 dark:text-gray-200 text-center text-base">
                  {feature.content}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section - Glassmorphism & Animation */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            The passionate people behind our success
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              name: "Sarah Johnson",
              role: "CEO & Founder",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
              color: "from-blue-200/60 to-blue-100/10",
            },
            {
              name: "Michael Chen",
              role: "CTO",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
              color: "from-pink-200/60 to-pink-100/10",
            },
            {
              name: "Emily Rodriguez",
              role: "Lead Designer",
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
              color: "from-purple-200/60 to-purple-100/10",
            },
          ].map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
            >
              <Card className={`relative overflow-hidden backdrop-blur-xl bg-gradient-to-br ${member.color} border border-white/40 dark:border-gray-700/60 shadow-xl rounded-3xl p-8 flex flex-col items-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                <span className="absolute -top-8 -left-8 w-24 h-24 bg-white/30 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
                <span className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
                <div className="relative w-28 h-28 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="rounded-full object-cover border-4 border-white/60 shadow-lg"
                  />
                </div>
                <CardTitle className="text-xl font-bold mb-1 text-gray-900 dark:text-white drop-shadow text-center">{member.name}</CardTitle>
                <CardDescription className="mb-2 text-base text-blue-600 dark:text-blue-300 text-center">{member.role}</CardDescription>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section - Glassmorphism & Animation */}
      <section className="container mx-auto px-4 py-20 bg-gray-50 dark:bg-gray-800/50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose the perfect plan for your needs
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              name: "Starter",
              price: "Free",
              description: "Perfect for side projects and small teams",
              features: [
                "Up to 5 team members",
                "Basic analytics",
                "Community support",
                "1GB storage",
                "Basic integrations",
              ],
              buttonText: "Get Started",
              popular: false,
              color: "from-blue-200/60 to-blue-100/10",
            },
            {
              name: "Pro",
              price: "$29",
              period: "/month",
              description: "Best for growing businesses",
              features: [
                "Up to 20 team members",
                "Advanced analytics",
                "Priority support",
                "10GB storage",
                "Advanced integrations",
                "Custom domain",
                "API access",
              ],
              buttonText: "Start Free Trial",
              popular: true,
              color: "from-pink-200/60 to-pink-100/10",
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "For large organizations",
              features: [
                "Unlimited team members",
                "Custom analytics",
                "24/7 support",
                "Unlimited storage",
                "Custom integrations",
                "Custom domain",
                "API access",
                "Dedicated account manager",
              ],
              buttonText: "Contact Sales",
              popular: false,
              color: "from-purple-200/60 to-purple-100/10",
            },
          ].map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
            >
              <Card className={`relative overflow-hidden backdrop-blur-xl bg-gradient-to-br ${plan.color} border border-white/40 dark:border-gray-700/60 shadow-xl rounded-3xl p-8 flex flex-col items-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                {plan.popular && (
                  <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">POPULAR</span>
                )}
                <span className="absolute -top-8 -left-8 w-24 h-24 bg-white/30 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
                <span className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
                <CardTitle className="text-2xl font-bold mb-2 text-gray-900 dark:text-white drop-shadow text-center">{plan.name}</CardTitle>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.period && <span className="ml-1 text-lg text-gray-500 dark:text-gray-300">{plan.period}</span>}
                </div>
                <CardDescription className="mb-4 text-base text-gray-600 dark:text-gray-300 text-center">{plan.description}</CardDescription>
                <CardContent className="mb-4 w-full">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="w-full flex justify-center">
                  <Button size="lg" className="w-full rounded-xl shadow-md bg-blue-500/80 hover:bg-blue-600/90 text-white transition-all duration-200">
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section - Glassmorphism & Animation */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about our platform
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {[
            {
              question: "What technologies do you use?",
              answer: "We use Next.js, React, Tailwind CSS, and other modern web technologies to build fast and beautiful applications.",
              color: "from-blue-200/60 to-blue-100/10",
            },
            {
              question: "How do I get started?",
              answer: "Simply sign up for an account and follow our getting started guide. We'll help you every step of the way.",
              color: "from-pink-200/60 to-pink-100/10",
            },
            {
              question: "Can I customize the components?",
              answer: "Yes, all our components are fully customizable. You can modify the styles, add new features, or create your own components.",
              color: "from-purple-200/60 to-purple-100/10",
            },
            {
              question: "Do you offer support?",
              answer: "Yes, we offer 24/7 support for all our customers. You can reach us through email, chat, or our support portal.",
              color: "from-blue-200/60 to-blue-100/10",
            },
          ].map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
            >
              <Card className={`relative overflow-hidden backdrop-blur-xl bg-gradient-to-br ${faq.color} border border-white/40 dark:border-gray-700/60 shadow-xl rounded-3xl p-8 flex flex-col group transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
                <span className="absolute -top-8 -left-8 w-24 h-24 bg-white/30 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
                <span className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
                <CardTitle className="flex items-center text-lg font-bold mb-2 text-gray-900 dark:text-white drop-shadow">
                  <HelpCircle className="h-5 w-5 text-blue-500 mr-2" />
                  {faq.question}
                </CardTitle>
                <CardContent className="text-gray-700 dark:text-gray-200 text-base">
                  {faq.answer}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section - Glassmorphism & Animation */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          <Card className="inline-block backdrop-blur-xl bg-gradient-to-br from-blue-200/60 to-purple-100/10 border border-white/40 dark:border-gray-700/60 shadow-2xl rounded-3xl px-12 py-10">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Join thousands of developers building amazing applications
            </p>
            <Button size="lg" className="backdrop-blur bg-blue-500/80 hover:bg-blue-600/90 text-white shadow-xl px-8 py-4 text-lg rounded-2xl transition-all duration-200">
              <ArrowRight className="mr-2 h-5 w-5" /> Get Started
            </Button>
          </Card>
        </motion.div>
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
    </main>
  );
}
