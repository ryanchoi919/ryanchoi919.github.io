"use client"

import { motion } from "framer-motion"
import { Calendar, Briefcase, ChevronRight, Terminal, Cpu, Database, Blocks } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const techCategories = [
    {
      title: "Strategy",
      icon: <Briefcase className="h-5 w-5 text-indigo-400" />,
      skills: ["Business Strategy", "BM Planning", "KPI Setup"]
    },
    {
      title: "Data/AI",
      icon: <Database className="h-5 w-5 text-indigo-400" />,
      skills: ["Python (XGBoost)", "SQL", "ML Modeling", "Web Scraping"]
    },
    {
      title: "Automation",
      icon: <Cpu className="h-5 w-5 text-indigo-400" />,
      skills: ["n8n", "AppSheet", "Google Apps Script", "VBA"]
    },
    {
      title: "Tools",
      icon: <Terminal className="h-5 w-5 text-indigo-400" />,
      skills: ["Cursor", "Claude/Gemini API", "Notion", "Figma"]
    }
  ]

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-24 space-y-24">
      {/* Section 1: Summary */}
      <motion.section
        initial="initial"
        animate="animate"
        variants={fadeIn}
        className="space-y-6"
      >
        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-indigo-500/10 text-indigo-400 mb-4">
          Philosophy
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
          기획은 실행을 담보해야 한다.
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          전통적인 교육 비즈니스 환경에 AI와 데이터 기술을 이식하는 <span className="text-indigo-400 font-semibold">비즈니스 전략가이자 아키텍트</span>입니다. 단순히 전략 리포트를 쓰는 데 그치지 않고 Python, n8n, AppSheet를 활용해 <span className="text-indigo-400 font-semibold">실질적인 운영 임팩트를 만드는 시스템을 직접 설계</span>합니다.
        </p>
      </motion.section>

      {/* Section 2: Key Career Timeline */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="space-y-12"
      >
        <div className="flex items-center gap-2 mb-8">
          <Calendar className="h-6 w-6 text-indigo-500" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Key Career Timeline</h2>
        </div>

        <div className="relative border-l-2 border-muted pl-8 ml-4 md:ml-0 space-y-16">
          {/* Timeline Item 1 */}
          <div className="relative">
            <div className="absolute -left-[41px] bg-background border-2 border-indigo-500 rounded-full h-5 w-5 mt-1.5" />
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
              <h3 className="text-xl font-bold text-foreground">(주)엔이능률</h3>
              <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md w-fit">2023.04 ~ 현재</span>
            </div>

            <div className="space-y-6">
              <Card className="bg-card/40 border-muted/60">
                <CardContent className="p-5 space-y-2">
                  <h4 className="font-semibold text-base flex items-center gap-2">
                    <Blocks className="h-4 w-4 text-indigo-400" />
                    ML 기반 시장 인텔리전스 구축
                  </h4>
                  <p className="text-sm text-muted-foreground pl-6">
                    Yes24 판매지수 분석을 통한 매출 예측 모델링 (정확도 <span className="text-indigo-400 font-bold">97.8%</span>)
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/40 border-muted/60">
                <CardContent className="p-5 space-y-2">
                  <h4 className="font-semibold text-base flex items-center gap-2">
                    <Blocks className="h-4 w-4 text-indigo-400" />
                    전사 AX (AI Transformation) 주도
                  </h4>
                  <p className="text-sm text-muted-foreground pl-6">
                    <span className="text-indigo-400 font-medium">n8n</span> 기반 회의록 자동 분석 및 컨텍스트 DB 구축
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/40 border-muted/60">
                <CardContent className="p-5 space-y-2">
                  <h4 className="font-semibold text-base flex items-center gap-2">
                    <Blocks className="h-4 w-4 text-indigo-400" />
                    교사 네트워크 CRM 앱 개발
                  </h4>
                  <p className="text-sm text-muted-foreground pl-6">
                    <span className="text-indigo-400 font-medium">AppSheet</span>와 구글/아웃룩 API 연동을 통한 일정 관리 자동화
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative">
            <div className="absolute -left-[41px] bg-background border-2 border-muted-foreground rounded-full h-5 w-5 mt-1.5" />
            <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
              <h3 className="text-xl font-bold text-foreground">(주)해커스어학연구소</h3>
              <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md w-fit">2014.09 ~ 2023.04</span>
            </div>

            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 text-indigo-500/70 shrink-0 mt-0.5" />
                <span>전사 중장기 사업 로드맵 수립 및 수익성 최적화 시뮬레이션</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 text-indigo-500/70 shrink-0 mt-0.5" />
                <span>국내 영어 부문 TOP 100 도서 중 <span className="text-indigo-400 font-bold">22권</span> 기획 및 제작 리딩</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="h-5 w-5 text-indigo-500/70 shrink-0 mt-0.5" />
                <span><span className="text-indigo-400 font-medium">VBA</span> 기반 업무 자동화 프로그램을 통한 콘텐츠 제작 공정 효율화</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Section 3: Tech Stack */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        className="space-y-8"
      >
        <div className="flex items-center gap-2 mb-8">
          <Terminal className="h-6 w-6 text-indigo-500" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Tech Stack</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techCategories.map((category, index) => (
            <Card key={index} className="bg-card/30 border-muted">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 font-semibold text-lg border-b border-border/50 pb-2">
                  {category.icon}
                  {category.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="inline-flex items-center rounded-md border border-indigo-500/20 bg-indigo-500/10 px-2.5 py-1 text-sm font-medium text-indigo-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
