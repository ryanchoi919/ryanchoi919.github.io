"use client"

import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts"

const data = [
  { index: 100, sales: 110 },
  { index: 200, sales: 190 },
  { index: 300, sales: 320 },
  { index: 400, sales: 380 },
  { index: 500, sales: 510 },
  { index: 600, sales: 580 },
  { index: 700, sales: 720 },
  { index: 800, sales: 790 },
  { index: 900, sales: 910 },
  { index: 1000, sales: 980 },
]

export function MLChart() {
  return (
    <div className="w-full h-[400px] mt-8 mb-8 p-4 border rounded-xl bg-card">
      <div className="mb-4 text-center">
        <h4 className="text-lg font-semibold text-foreground">Yes24 판매지수 vs 실판매량 상관관계 (Predicted)</h4>
        <p className="text-sm text-muted-foreground">R² = 0.978</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
          <XAxis
            type="number"
            dataKey="index"
            name="판매지수"
            stroke="var(--color-muted-foreground)"
            tick={{ fill: 'var(--color-muted-foreground)' }}
          />
          <YAxis
            type="number"
            dataKey="sales"
            name="판매량"
            stroke="var(--color-muted-foreground)"
            tick={{ fill: 'var(--color-muted-foreground)' }}
          />
          <ZAxis type="number" range={[50, 50]} />
          <Tooltip
            cursor={{ strokeDasharray: '3 3' }}
            contentStyle={{ backgroundColor: 'var(--color-popover)', borderColor: 'var(--color-border)', color: 'var(--color-popover-foreground)' }}
            itemStyle={{ color: 'var(--color-primary)' }}
          />
          <Scatter name="상관관계" data={data} fill="var(--color-primary)" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}
