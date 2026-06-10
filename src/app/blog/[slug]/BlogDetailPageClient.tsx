'use client';

import { MarkdownRenderer } from '@/components/blog/MarkdownRenderer';

interface BlogDetailPageClientProps {
  content: string;
}

export function BlogDetailPageClient({ content }: BlogDetailPageClientProps) {
  return <MarkdownRenderer content={content} />;
}
