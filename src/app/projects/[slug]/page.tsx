import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { HTMLAttributes } from 'react'

import { MLChart } from '@/components/mdx/ml-chart'
import { MermaidDiagram } from '@/components/mdx/mermaid-diagram'
import { Button } from '@/components/ui/button'

const components = {
  MLChart,
  MermaidDiagram,
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => <h1 className="mt-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...props} />,
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0" {...props} />,
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />,
  p: (props: HTMLAttributes<HTMLParagraphElement>) => <p className="leading-7 [&:not(:first-child)]:mt-6 text-muted-foreground" {...props} />,
  ul: (props: HTMLAttributes<HTMLUListElement>) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  li: (props: HTMLAttributes<HTMLLIElement>) => <li className="text-muted-foreground" {...props} />,
  strong: (props: HTMLAttributes<HTMLElement>) => <strong className="font-semibold text-foreground" {...props} />,
}

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'src/content/projects'))
  const paths = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }))
  return paths
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), 'src/content/projects', `${slug}.mdx`)

  let source = ''
  try {
    source = fs.readFileSync(filePath, 'utf8')
  } catch {
    notFound()
  }

  return (
    <article className="container mx-auto max-w-4xl px-4 md:px-8 py-12 md:py-24">
      <div className="mb-8">
        <Button variant="ghost" asChild className="mb-8 -ml-4 text-muted-foreground">
          <Link href="/#projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={source} components={components} />
      </div>
    </article>
  )
}
