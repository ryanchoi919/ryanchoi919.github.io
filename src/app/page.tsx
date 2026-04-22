"use client";
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { ArrowRight, BarChart3, Database, Network } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  const typingTexts = [
    "ML 기반 매출 예측 (R² 97.8%)",
    "n8n 업무 자동화 파이프라인 구축",
    "AppSheet 기반 CRM 시스템 설계"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, [typingTexts.length]);
  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-8 py-8">

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.4) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
          animate={{
            y: [0, -40],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            },
            opacity: {
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-32 space-y-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block rounded-lg bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-sm text-indigo-400 font-medium"
        >
          Business Architect & Data Strategist
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-foreground max-w-4xl leading-tight"
        >
          복잡한 비즈니스 이슈를 데이터로 해체하고 자동화로 해결하는 <span className="text-indigo-500">비즈니스 아키텍트</span> 최윤혁입니다.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground h-16 flex items-start"
        >
          <span className="mr-2">I build: </span>
          <div className="relative flex-1 overflow-hidden h-10">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute text-indigo-400 font-semibold"
              >
                {typingTexts[currentTextIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-4 flex gap-4"
        >
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
            <Link href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-400">
            <Link href="/about">About Me</Link>
          </Button>
        </motion.div>
      </section>

      {/* Impact Widgets */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-bold tracking-tight mb-8">Business Impact</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-card/50 border-muted">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                ML 매출 예측
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">R² 97.8%</div>
              <p className="text-sm text-muted-foreground mt-1">
                XGBoost 기반 판매량 추정 정확도
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-muted">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                데이터 스크래핑
              </CardTitle>
              <Database className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">9,800건+</div>
              <p className="text-sm text-muted-foreground mt-1">
                일일 자동 수집 및 파이프라인 처리
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-muted">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                데이터 정합성
              </CardTitle>
              <Network className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">100%</div>
              <p className="text-sm text-muted-foreground mt-1">
                교사 네트워크 DB 정합성 확보
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section id="projects" className="py-12 border-t">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Recent Projects</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-1">
          {/* Project 1 */}
          <Card className="overflow-hidden bg-card/40 hover:bg-card/60 transition-colors border-muted">
            <div className="md:flex">
              <div className="md:w-1/3 bg-muted/50 p-6 flex flex-col justify-center border-r border-border/50">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary mb-4 w-fit">
                  Data Science / ML
                </div>
                <h3 className="text-2xl font-bold mb-2">ML 기반 판매량 추정 및 시장 인텔리전스</h3>
                <p className="text-muted-foreground text-sm">
                  Yes24 판매지수와 실판매량 간의 상관관계 분석 및 XGBoost 기반 역산 모델 설계
                </p>
              </div>
              <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-1">Problem</h4>
                    <p className="text-sm text-muted-foreground">경쟁사 및 시장 전체의 실판매량 데이터를 직접 확보하기 어려워 정확한 시장 점유율 및 수요 예측이 불가능한 상황.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">공개된 판매지수를 역산하여 실제 판매량을 추정하는 XGBoost 회귀 모델 파이프라인 구축.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">R² Score: 97.8%</span>
                  <Button variant="secondary" asChild>
                    <Link href="/projects/ml-sales-prediction">View Detail <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Project 2 */}
          <Card className="overflow-hidden bg-card/40 hover:bg-card/60 transition-colors border-muted">
            <div className="md:flex">
              <div className="md:w-1/3 bg-muted/50 p-6 flex flex-col justify-center border-r border-border/50">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary mb-4 w-fit">
                  AI / Automation
                </div>
                <h3 className="text-2xl font-bold mb-2">n8n 기반 AI 컨텍스트 DB 자동화 파이프라인</h3>
                <p className="text-muted-foreground text-sm">
                  비정형 회의록 청킹 및 Gemini API 연동 키워드 자동 태깅 시스템
                </p>
              </div>
              <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-1">Problem</h4>
                    <p className="text-sm text-muted-foreground">수많은 회의록과 문서가 비정형 텍스트로 방치되어, 과거 인사이트를 검색하고 연관 부서에 공유하는데 많은 리소스 소요.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">n8n 워크플로우를 통해 문서를 자동 수집하고, LLM을 활용해 문맥 파악 후 관련 태그를 DB에 적재하는 파이프라인 구축.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">Zero-Touch Workflow</span>
                  <Button variant="secondary" asChild>
                    <Link href="/projects/n8n-automation">View Detail <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Project 3 */}
          <Card className="overflow-hidden bg-card/40 hover:bg-card/60 transition-colors border-muted">
            <div className="md:flex">
              <div className="md:w-1/3 bg-muted/50 p-6 flex flex-col justify-center border-r border-border/50">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary mb-4 w-fit">
                  No-Code / System
                </div>
                <h3 className="text-2xl font-bold mb-2">AppSheet & API 기반 교사 네트워크 관리 앱</h3>
                <p className="text-muted-foreground text-sm">
                  Google Sheets DB 기반 일정 자동 동기화 및 네트워크 관리 시스템
                </p>
              </div>
              <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-1">Problem</h4>
                    <p className="text-sm text-muted-foreground">수천 명의 교사 네트워크 데이터를 엑셀로 수기 관리하여 데이터 유실 위험이 높고 담당자 간 일정 공유가 원활하지 않음.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">AppSheet를 활용해 모바일/웹 접근성을 높이고, Outlook API 연동으로 스케줄링을 자동화한 사내 인하우스 앱 개발.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">Data Integrity 100%</span>
                  <Button variant="secondary" asChild>
                    <Link href="/projects/appsheet-network">View Detail <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
