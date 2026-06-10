'use client';

import { MarkdownRenderer } from '@/components/blog/MarkdownRenderer';

interface CaseStudyDetailPageClientProps {
  content: string;
}

export function CaseStudyDetailPageClient({ content }: CaseStudyDetailPageClientProps) {
  return <MarkdownRenderer content={content} />;
}
