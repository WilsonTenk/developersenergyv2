import React, { useState, useEffect } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogData';
import {
  Clock,
  BookOpen,
  Mail,
  CheckCircle2,
  ArrowRight,
  Send,
  Calendar,
  User,
  Tag,
  Download,
  Check,
  Printer,
  ArrowLeft,
  Flame,
} from 'lucide-react';

interface BlogTabProps {
  onOpenQuoteModal: (service?: string) => void;
}

// ─── CATEGORY BADGE COLOURS ───────────────────────────────────────────────────
const categoryColors: Record<string, string> = {
  'Market Intelligence': 'bg-blue-100 text-blue-800 border-blue-200',
  'Commodities & Trade': 'bg-amber-100 text-amber-800 border-amber-200',
  'Policy & Geopolitics': 'bg-red-100 text-red-800 border-red-200',
  'Tech & Innovation': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'Downstream Logistics': 'bg-purple-100 text-purple-800 border-purple-200',
  'Energy Transition': 'bg-teal-100 text-teal-800 border-teal-200',
};

// ─── FULL-PAGE ARTICLE READER ─────────────────────────────────────────────────
interface ArticlePageProps {
  post: BlogPost;
  onBack: () => void;
  onOpenQuoteModal: (service?: string) => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ post, onBack, onOpenQuoteModal }) => {
  const [downloaded, setDownloaded] = useState(false);

  // Scroll to top when article opens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleDownload = () => {
    const text = `================================================================================
THE DEVELOPERS ENERGY LIMITED — EXECUTIVE BLOG ARTICLE
================================================================================
TITLE    : ${post.title}
CATEGORY : ${post.category}
DATE     : ${post.date} | ${post.readTime}
AUTHOR   : ${post.author.name} — ${post.author.role}

SUBTITLE : ${post.subtitle ?? ''}

EXECUTIVE SUMMARY:
"${post.excerpt}"

TAGS: ${post.tags.join(', ')}

--------------------------------------------------------------------------------
FULL ARTICLE
--------------------------------------------------------------------------------
${post.content.join('\n\n')}

================================================================================
© The Developers Energy Limited | info@developersenergy.com | Accra, Ghana
================================================================================
`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TDE_Article_${post.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  // Render each content item — ## headings or normal paragraphs
  const renderBlock = (text: string, idx: number) => {
    if (text.startsWith('## ')) {
      return (
        <h2
          key={idx}
          className="text-xl sm:text-2xl font-extrabold text-neutral-900 mt-10 mb-3 pb-3 border-b-2 border-neutral-200 tracking-tight"
        >
          {text.replace('## ', '')}
        </h2>
      );
    }
    return (
      <p key={idx} className="text-neutral-700 text-base sm:text-lg leading-relaxed">
        {text}
      </p>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">

      {/* ── BACK BAR ── */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-600 hover:text-amber-700 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          {/* Export actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-700 transition-colors shadow-sm"
            >
              {downloaded ? (
                <><Check className="w-3.5 h-3.5 text-emerald-400" /> Downloaded!</>
              ) : (
                <><Download className="w-3.5 h-3.5" /> Download</>
              )}
            </button>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-100 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" /> Print
            </button>
          </div>
        </div>
      </div>

      {/* ── ARTICLE HERO ── */}
      <div className="bg-neutral-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-6">
          {/* Category + featured badge */}
          <div className="flex items-center gap-3 flex-wrap">
            {post.featured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-neutral-950 text-[10px] font-extrabold uppercase tracking-wider">
                <Flame className="w-3 h-3" />
                Featured Article
              </span>
            )}
            <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${categoryColors[post.category] ?? 'bg-neutral-700 text-white border-neutral-600'}`}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            {post.title}
          </h1>

          {/* Subtitle */}
          {post.subtitle && (
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {post.subtitle}
            </p>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 pt-2 text-sm text-neutral-400 border-t border-neutral-800">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4 text-neutral-500" />
              <span>
                <span className="font-bold text-white">{post.author.name}</span>
                <span className="mx-1.5 text-neutral-600">·</span>
                {post.author.role}
              </span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-neutral-500" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-neutral-500" />
              {post.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* ── HERO IMAGE ── */}
      {post.imageUrl && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-xl aspect-video">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* ── ARTICLE BODY ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">

        {/* Executive summary blockquote */}
        <blockquote className="border-l-4 border-amber-500 bg-amber-50 px-6 py-5 rounded-r-2xl italic text-neutral-800 text-base sm:text-lg leading-relaxed">
          &ldquo;{post.excerpt}&rdquo;
        </blockquote>

        {/* Divider */}
        <div className="flex items-center gap-3 py-2">
          <div className="flex-1 h-px bg-neutral-200" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Article</span>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        {/* Main content blocks */}
        <div className="space-y-5">
          {post.content.map((block, idx) => renderBlock(block, idx))}
        </div>

        {/* Tags */}
        <div className="pt-8 border-t border-neutral-200 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">Tags</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-neutral-100 text-xs font-semibold text-neutral-600 border border-neutral-200"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* About TDE */}
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-10 space-y-4 mt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
            About The Developers Energy Limited
          </p>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            At <span className="font-bold text-white">The Developers Energy Limited</span>, we bridge the gap between global energy markets and African opportunity — providing market intelligence, commercial analysis, project and transaction support, and strategic insight across Ghana and the wider African energy market.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
            <button
              onClick={() => onOpenQuoteModal('Strategic Energy Advisory')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              <span>Consult Our Advisory Desk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── BLOG LISTING PAGE ────────────────────────────────────────────────────────
export const BlogTab: React.FC<BlogTabProps> = ({ onOpenQuoteModal }) => {
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  // When user navigates away from article, scroll back to top of listing
  const handleBack = () => {
    setReadingPost(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show full-page article reader instead of the listing
  if (readingPost) {
    return (
      <ArticlePage
        post={readingPost}
        onBack={handleBack}
        onOpenQuoteModal={onOpenQuoteModal}
      />
    );
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmailInput('');
    }
  };

  const featuredPost = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 bg-neutral-50 text-neutral-900 font-sans">

      {/* ── 1. HEADER ── */}
      <section className="bg-neutral-950 text-white py-16 sm:py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-neutral-950 uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm">
            <BookOpen className="w-3.5 h-3.5" />
            Executive Perspectives &amp; Thought Leadership
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Energy Blog &amp; Industry Perspectives
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base max-w-3xl leading-relaxed">
            Market commentary, downstream policy briefings, trade finance mechanisms, and operational insights from The Developers Energy executive desk.
          </p>
        </div>
      </section>

      {/* ── 2. ARTICLES SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 -mt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
            Published Articles
          </h2>
          <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">
            {BLOG_POSTS.length} article{BLOG_POSTS.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Featured article — large hero card */}
        {featuredPost && (
          <button
            onClick={() => setReadingPost(featuredPost)}
            className="group w-full text-left bg-white rounded-3xl border border-neutral-200 hover:border-amber-400 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {featuredPost.imageUrl && (
                <div className="aspect-video lg:aspect-auto lg:min-h-[360px] overflow-hidden">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-5">
                {/* Badges */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-neutral-950 text-[10px] font-extrabold uppercase tracking-wider">
                    <Flame className="w-3 h-3" />
                    Latest Article
                  </span>
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border ${categoryColors[featuredPost.category] ?? ''}`}>
                    {featuredPost.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight group-hover:text-amber-700 transition-colors">
                  {featuredPost.title}
                </h2>

                {/* Subtitle */}
                {featuredPost.subtitle && (
                  <p className="text-sm text-neutral-600 leading-relaxed font-medium">
                    {featuredPost.subtitle}
                  </p>
                )}

                {/* Excerpt */}
                <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                {/* Author + meta */}
                <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                  <div className="space-y-0.5">
                    <p className="text-xs font-bold text-neutral-800">{featuredPost.author.name}</p>
                    <p className="text-[11px] text-neutral-500">{featuredPost.author.role}</p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-neutral-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 text-xs font-bold text-neutral-900 group-hover:text-amber-700 uppercase tracking-wider transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </button>
        )}

        {/* Remaining articles grid (if any in future) */}
        {BLOG_POSTS.filter((p) => p.id !== featuredPost?.id).length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.filter((p) => p.id !== featuredPost?.id).map((post) => (
              <button
                key={post.id}
                onClick={() => setReadingPost(post)}
                className="group text-left bg-white rounded-2xl border border-neutral-200 hover:border-amber-400 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden cursor-pointer"
              >
                {post.imageUrl && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1 space-y-3">
                  <span className={`self-start px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border ${categoryColors[post.category] ?? 'bg-neutral-100 text-neutral-600 border-neutral-200'}`}>
                    {post.category}
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900 leading-snug group-hover:text-amber-700 transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                    <span className="font-semibold text-neutral-700">{post.date} · {post.readTime}</span>
                    <span className="text-amber-600 font-bold uppercase tracking-wider flex items-center gap-1">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* ── 3. NEWSLETTER + ADVISORY CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Newsletter */}
          <div className="space-y-5">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                Market Intelligence Brief
              </span>
              <h3 className="text-2xl font-extrabold text-white leading-tight">
                Subscribe for New Article Releases
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Receive executive analysis, market commentary, and downstream insights directly to your inbox.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" />
                Subscribed! You&apos;ll receive our next article release.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter corporate email..."
                  className="flex-1 px-4 py-3 rounded-xl bg-neutral-800 border border-neutral-700 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 cursor-pointer shadow-md"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Advisory CTA */}
          <div className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white font-extrabold text-lg leading-snug">
              Ready to go beyond reading?
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Speak directly with our advisory desk on market intelligence, trade structuring, and energy strategy across Ghana and the wider African market.
            </p>
            <button
              onClick={() => onOpenQuoteModal('Strategic Energy Advisory')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
            >
              <span>Direct Inquiry with Advisory Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
