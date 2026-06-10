'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import { useMemo } from 'react';

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const components = useMemo(
    () => ({
      h1: ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1 className="font-[family-name:var(--font-plus-jakarta)] text-3xl md:text-4xl font-bold text-[#18181B] mt-12 mb-6 leading-tight tracking-tight">
          {children}
        </h1>
      ),
      h2: ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2 className="font-[family-name:var(--font-plus-jakarta)] text-2xl md:text-3xl font-bold text-[#18181B] mt-10 mb-4 leading-tight tracking-tight">
          {children}
        </h2>
      ),
      h3: ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3 className="font-[family-name:var(--font-plus-jakarta)] text-xl md:text-2xl font-semibold text-[#18181B] mt-8 mb-3 leading-snug tracking-tight">
          {children}
        </h3>
      ),
      h4: ({ children }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4 className="font-[family-name:var(--font-plus-jakarta)] text-lg font-semibold text-[#18181B] mt-6 mb-2 leading-snug">
          {children}
        </h4>
      ),
      p: ({ children }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="font-[family-name:var(--font-inter)] text-base md:text-[17px] text-[#3F3F46] leading-[1.8] mb-6">
          {children}
        </p>
      ),
      ul: ({ children }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="font-[family-name:var(--font-inter)] text-base md:text-[17px] text-[#3F3F46] leading-[1.8] mb-6 ml-6 list-disc space-y-2">
          {children}
        </ul>
      ),
      ol: ({ children }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="font-[family-name:var(--font-inter)] text-base md:text-[17px] text-[#3F3F46] leading-[1.8] mb-6 ml-6 list-decimal space-y-2">
          {children}
        </ol>
      ),
      li: ({ children }: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="pl-1">{children}</li>
      ),
      strong: ({ children }: React.HTMLAttributes<HTMLElement>) => (
        <strong className="font-semibold text-[#18181B]">{children}</strong>
      ),
      em: ({ children }: React.HTMLAttributes<HTMLElement>) => (
        <em className="italic">{children}</em>
      ),
      a: ({ href, children }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a
          href={href}
          className="text-[#F97316] underline underline-offset-4 decoration-[#F97316]/40 hover:decoration-[#F97316] transition-colors duration-200"
          target={href?.startsWith('http') ? '_blank' : undefined}
          rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      ),
      blockquote: ({ children }: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote className="border-l-4 border-[#F97316] pl-6 py-2 my-8 bg-[#FFF7ED]/50 rounded-r-lg">
          {children}
        </blockquote>
      ),
      code: ({
        className,
        children,
        ...props
      }: React.HTMLAttributes<HTMLElement> & { inline?: boolean }) => {
        const isInline = !className;
        if (isInline) {
          return (
            <code
              className="font-[family-name:var(--font-jetbrains-mono)] text-sm bg-[#F5F5F0] text-[#EA580C] px-1.5 py-0.5 rounded-md border border-[#E4E4E7]"
              {...props}
            >
              {children}
            </code>
          );
        }
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
      pre: ({ children }: React.HTMLAttributes<HTMLPreElement>) => (
        <pre className="font-[family-name:var(--font-jetbrains-mono)] text-sm leading-relaxed bg-[#1E1E2E] text-[#CDD6F4] rounded-xl p-6 my-8 overflow-x-auto border border-[#313244]">
          {children}
        </pre>
      ),
      hr: () => (
        <hr className="my-10 border-none h-px bg-gradient-to-r from-transparent via-[#F97316]/30 to-transparent" />
      ),
      table: ({ children }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-8 overflow-x-auto rounded-xl border border-[#E4E4E7]">
          <table className="w-full text-left font-[family-name:var(--font-inter)] text-sm">
            {children}
          </table>
        </div>
      ),
      thead: ({ children }: React.HTMLAttributes<HTMLTableSectionElement>) => (
        <thead className="bg-[#F5F5F0] border-b border-[#E4E4E7]">{children}</thead>
      ),
      th: ({ children }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th className="px-4 py-3 font-semibold text-[#18181B] text-sm">{children}</th>
      ),
      td: ({ children }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td className="px-4 py-3 text-[#52525B] border-b border-[#E4E4E7] last:border-b-0">
          {children}
        </td>
      ),
      img: ({ src, alt }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <figure className="my-8">
          <img
            src={src}
            alt={alt || ''}
            className="w-full rounded-xl border border-[#E4E4E7]"
          />
          {alt && (
            <figcaption className="mt-2 text-center text-sm text-[#A1A1AA] font-[family-name:var(--font-inter)]">
              {alt}
            </figcaption>
          )}
        </figure>
      ),
    }),
    []
  );

  return (
    <div className="prose-albos">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
