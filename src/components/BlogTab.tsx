import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/blogData';
import { AnimatedCounter } from './common/AnimatedCounter';
import {
  Clock,
  BookOpen,
  Mail,
  CheckCircle2,
  ArrowRight,
  Send,
  X,
  Calendar,
  User,
  Tag,
  Download,
  Check,
  Printer,
  ChevronRight,
  Flame,
} from 'lucide-react';

interface BlogTabProps {
  onOpenQuoteModal: (service?: string) => void;
}

// ─── CATEGORY COLOURS ────────────────────────────────────────────────────────
const categoryColors: Record<string, string> = {
  'Market Intelligence': 'bg-blue-100 text-blue-800 border-blue-200',
  'Commodities & Trade': 'bg-amber-100 text-amber-800 border-amber-200',
  'Policy & Geopolitics': 'bg-red-100 text-red-800 border-red-200',
  'Tech & Innovation': 'bg-emerald-100 text-emerald-800 border-emerald-200',
  'Downstream Logistics': 'bg-purple-100 text-purple-800 border-purple-200',
  'Energy Transition': 'bg-teal-100 text-teal-800 border-teal-200',
};

const categoryDotColors: Record<string, string> = {
  'Market Intelligence': 'bg-blue-500',
  'Commodities & Trade': 'bg-amber-500',
  'Policy & Geopolitics': 'bg-red-500',
  'Tech & Innovation': 'bg-emerald-500',
  'Downstream Logistics': 'bg-purple-500',
  'Energy Transition': 'bg-teal-500',
};

// ─── ARTICLE DETAIL MODAL ────────────────────────────────────────────────────
interface ArticleModalProps {
  post: BlogPost;
  onClose: () => void;
  onConsult: () => void;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose, onConsult }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const text = `================================================================================
THE DEVELOPERS ENERGY LIMITED - EXECUTIVE BLOG ARTICLE
================================================================================
TITLE    : ${post.title}
CATEGORY : ${post.category}
DATE     : ${post.date} | ${post.readTime}
AUTHOR   : ${post.author.name} - ${post.author.role}

SUBTITLE:
${post.subtitle ?? ''}

EXECUTIVE SUMMARY:
"${post.excerpt}"

TAGS: ${post.tags.join(', ')}

--------------------------------------------------------------------------------
FULL ARTICLE:
--------------------------------------------------------------------------------
${post.content.join('\n\n')}

================================================================================
(c) The Developers Energy Limited | info@developersenergy.com | Accra, Ghana
================================================================================
`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `TDE_Article_${post.id}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  // Render a single content paragraph, recognising ## headings
  const renderParagraph = (text: string, idx: number) => {
    if (text.startsWith('## ')) {
      return (
        <h3
          key={idx}
          className="text-lg sm:text-xl font-extrabold text-neutral-900 mt-8 mb-2 pb-2 border-b border-neutral-200 tracking-tight"
        >
          {text.replace('## ', '')}
        </h3>
      );
    }
    return (
      <p key={idx} className="text-neutral-700 text-sm sm:text-base leading-relaxed">
        {text}
      </p>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white border border-neutral-200 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-neutral-200 px-6 sm:px-8 py-4 flex items-center justify-between z-10">
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
              categoryColors[post.category] ?? 'bg-neutral-100 text-neutral-700 border-neutral-200'
            }`}
          >
            {post.category}
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Article body */}
        <div className="px-6 sm:px-10 pt-6 pb-4 space-y-5">
          {/* Title + meta */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 leading-tight">
              {post.title}
            </h2>
            {post.subtitle && (
              <p className="text-sm sm:text-base text-neutral-600 font-medium leading-snug">
                {post.subtitle}
              </p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500 pt-1">
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-neutral-400" />
                <span className="font-semibold text-neutral-700">{post.author.name}</span>
                <span>&middot;</span>
                <span>{post.author.role}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Export toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-neutral-50 border border-neutral-200">
            <span className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
              Export this article
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-700 transition-colors shadow-sm"
              >
                {downloaded ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Download className="w-3.5 h-3.5" />
                )}
                {downloaded ? 'Downloaded!' : 'Download (.TXT)'}
              </button>
              <button
                onClick={() => window.print()}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-neutral-700 bg-white border border-neutral-300 hover:bg-neutral-100 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                Print
              </button>
            </div>
          </div>

          {/* Executive summary quote */}
          <blockquote className="border-l-4 border-amber-500 bg-amber-50/60 px-5 py-4 rounded-r-2xl italic text-sm text-neutral-800 leading-relaxed">
            &ldquo;{post.excerpt}&rdquo;
          </blockquote>

          {/* Hero image */}
          {post.imageUrl && (
            <div className="rounded-2xl overflow-hidden border border-neutral-200 aspect-video">
              <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Article content */}
          <div className="space-y-4 pb-2">
            {post.content.map((paragraph, idx) => renderParagraph(paragraph, idx))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-200">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-100 text-[11px] font-semibold text-neutral-600 border border-neutral-200"
              >
                <Tag className="w-3 h-3" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 bg-white/95 backdrop-blur-sm border-t border-neutral-200 px-6 sm:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 transition-colors"
          >
            Close Article
          </button>
          <button
            onClick={() => {
              onClose();
              onConsult();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <span>Consult Advisory Desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// ─── BLOG POST CARD (grid) ───────────────────────────────────────────────────
interface PostCardProps {
  post: BlogPost;
  onClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => (
  <button
    onClick={onClick}
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
      <span
        className={`self-start px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border ${
          categoryColors[post.category] ?? 'bg-neutral-100 text-neutral-600 border-neutral-200'
        }`}
      >
        {post.category}
      </span>

      <h3 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug group-hover:text-amber-700 transition-colors line-clamp-3">
        {post.title}
      </h3>

      <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3 flex-1">
        {post.excerpt}
      </p>

      <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-neutral-700">{post.date}</span>
          <span>&middot;</span>
          <span>{post.readTime}</span>
        </div>
        <span className="inline-flex items-center gap-1 text-amber-600 font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
          Read <ChevronRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  </button>
);

// ─── MAIN BLOG TAB ───────────────────────────────────────────────────────────
export const BlogTab: React.FC<BlogTabProps> = ({ onOpenQuoteModal }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

  const filteredPosts =
    activeCategory === 'All' ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const featuredPost = filteredPosts.find((p) => p.featured) ?? filteredPosts[0];
  const gridPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmailInput('');
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 bg-neutral-50 text-neutral-900 font-sans">

      {/* 1. EDITORIAL HEADER */}
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

      {/* 2. STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-10 relative z-20">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={BLOG_POSTS.length} suffix="+" duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Articles Published
            </span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              100%
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Expert Editorial Focus
            </span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-amber-500 tracking-tight">
              <AnimatedCounter value={categories.length - 1} suffix=" Pillars" duration={1.8} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Core Energy Themes
            </span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              2026
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Horizon Perspectives
            </span>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY FILTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-md'
                  : 'bg-white text-neutral-600 border-neutral-200 hover:border-amber-400 hover:text-amber-700'
              }`}
            >
              {cat !== 'All' && (
                <span
                  className={`inline-block w-2 h-2 rounded-full mr-1.5 ${
                    categoryDotColors[cat] ?? 'bg-neutral-400'
                  }`}
                />
              )}
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 4. FEATURED ARTICLE HERO */}
      {featuredPost && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
          <button
            onClick={() => setSelectedPost(featuredPost)}
            className="group w-full text-left bg-white rounded-3xl border border-neutral-200 hover:border-amber-400 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {featuredPost.imageUrl && (
                <div className="aspect-video lg:aspect-auto lg:min-h-[340px] overflow-hidden">
                  <img
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-8 sm:p-10 flex flex-col justify-center space-y-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-neutral-950 text-[10px] font-extrabold uppercase tracking-wider">
                    <Flame className="w-3 h-3" />
                    Featured
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider border ${
                      categoryColors[featuredPost.category] ?? ''
                    }`}
                  >
                    {featuredPost.category}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-900 leading-tight group-hover:text-amber-700 transition-colors">
                  {featuredPost.title}
                </h2>

                {featuredPost.subtitle && (
                  <p className="text-sm text-neutral-600 leading-relaxed font-medium">
                    {featuredPost.subtitle}
                  </p>
                )}

                <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                  {featuredPost.excerpt}
                </p>

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

                <div className="inline-flex items-center gap-2 text-xs font-bold text-neutral-900 group-hover:text-amber-700 uppercase tracking-wider transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </button>
        </section>
      )}

      {/* 5. ARTICLES GRID */}
      {gridPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
              More Articles
            </h2>
            <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gridPosts.map((post) => (
              <PostCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />
            ))}
          </div>
        </section>
      )}

      {/* 6. NEWSLETTER + CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 rounded-3xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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

      {/* ARTICLE DETAIL MODAL */}
      {selectedPost && (
        <ArticleModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          onConsult={() => onOpenQuoteModal(`Advisory on: ${selectedPost.title}`)}
        />
      )}
    </div>
  );
};
