import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';
import { AnimatedCounter } from './common/AnimatedCounter';
import { motion, AnimatePresence } from 'motion/react';
import {
  Search,
  Clock,
  Calendar,
  User,
  ArrowRight,
  ArrowLeft,
  Mail,
  CheckCircle2,
  BookOpen,
  Share2,
  Copy,
  Check,
  Linkedin,
  Twitter,
  MessageCircle,
  Tag,
  Bookmark,
  Heart,
  Eye,
  SlidersHorizontal,
  Sparkles,
  ChevronRight,
  Send,
  Printer,
  Compass
} from 'lucide-react';

interface BlogTabProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const BlogTab: React.FC<BlogTabProps> = ({ onOpenQuoteModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [linkCopied, setLinkCopied] = useState(false);
  const [savedPosts, setSavedPosts] = useState<string[]>([]);
  const [likedPosts, setLikedPosts] = useState<Record<string, number>>({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [largeText, setLargeText] = useState(false);

  const categories = [
    'All',
    'Commodities & Trade',
    'Policy & Geopolitics',
    'Tech & Innovation',
    'Energy Transition',
    'Downstream Logistics',
  ];

  // Scroll listener for reading progress bar
  useEffect(() => {
    if (!activePost) {
      setScrollProgress(0);
      return;
    }

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePost]);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmailInput('');
    }
  };

  const handleCopyLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2500);
    });
  };

  const toggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSavedPosts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleLike = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedPosts((prev) => {
      const current = prev[id] || 0;
      return { ...prev, [id]: current + 1 };
    });
  };

  const handleShareSocial = (platform: 'linkedin' | 'twitter' | 'whatsapp' | 'native') => {
    if (!activePost) return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`${activePost.title} - The Developers Energy Journal`);

    if (platform === 'linkedin') {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    } else if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, '_blank');
    } else if (platform === 'native') {
      if (navigator.share) {
        navigator.share({
          title: activePost.title,
          text: activePost.excerpt,
          url: window.location.href,
        }).catch(() => {});
      } else {
        handleCopyLink();
      }
    }
  };

  // ==========================================
  // ARTICLE READING VIEW
  // ==========================================
  if (activePost) {
    const relatedPosts = BLOG_POSTS.filter((p) => p.id !== activePost.id).slice(0, 2);
    const isBookmarked = savedPosts.includes(activePost.id);
    const likesCount = (likedPosts[activePost.id] || 0) + 18;

    return (
      <div className="bg-white min-h-screen pb-24 text-neutral-900 selection:bg-amber-100 selection:text-amber-900">
        {/* Reading Progress Indicator */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-neutral-100 z-50">
          <div
            className="h-full bg-amber-500 transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Sticky Action Header */}
        <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 py-3.5 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
            <button
              onClick={() => {
                setActivePost(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Articles</span>
            </button>

            {/* Action Tools */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setLargeText(!largeText)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                  largeText
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                }`}
                title="Toggle Reading Font Size"
              >
                Aa
              </button>

              <button
                onClick={(e) => toggleBookmark(activePost.id, e)}
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'bg-amber-50 border-amber-300 text-amber-600'
                    : 'bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50'
                }`}
                title={isBookmarked ? 'Saved to bookmarks' : 'Save article'}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>

              <button
                onClick={() => handleShareSocial('native')}
                className="p-2 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer"
                title="Share Article"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => window.print()}
                className="hidden sm:inline-flex p-2 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors cursor-pointer"
                title="Print Article"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Article Container */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 space-y-10"
        >
          {/* Article Header Metadata */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-neutral-950 text-white uppercase tracking-wider">
                {activePost.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                {activePost.date}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                {activePost.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
              {activePost.title}
            </h1>

            {activePost.subtitle && (
              <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed border-l-2 border-amber-500 pl-4 py-1">
                {activePost.subtitle}
              </p>
            )}

            {/* Author Profile Strip */}
            <div className="flex items-center justify-between py-4 border-y border-neutral-200">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-neutral-950 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                  {activePost.author.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">{activePost.author.name}</h4>
                  <p className="text-xs text-neutral-500 font-medium">{activePost.author.role}</p>
                </div>
              </div>

              {/* Like / Clap Interaction */}
              <button
                onClick={(e) => toggleLike(activePost.id, e)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-neutral-200 hover:border-amber-300 hover:bg-amber-50/50 text-neutral-700 transition-all cursor-pointer active:scale-95"
              >
                <Heart className="w-4 h-4 text-amber-600 fill-amber-500" />
                <span className="text-xs font-bold">{likesCount}</span>
              </button>
            </div>
          </div>

          {/* Hero Cover Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg border border-neutral-200 aspect-[16/9] relative bg-neutral-100">
            <img
              src={activePost.imageUrl}
              alt={activePost.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body Content */}
          <div
            className={`space-y-6 text-neutral-800 leading-relaxed font-normal ${
              largeText ? 'text-lg sm:text-xl leading-loose' : 'text-base sm:text-lg leading-relaxed'
            }`}
          >
            {activePost.content.map((paragraph, index) => (
              <p key={index} className="tracking-normal">
                {paragraph}
              </p>
            ))}

            {/* Key Takeaways Callout Box */}
            <div className="my-10 p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-3 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-600 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Executive Summary & Takeaways</span>
              </div>
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                Structured deal mechanisms, strict verification of fuel specifications (Gasoil 10ppm / Mogas 95), and automated inventory telemetry will determine competitive advantage across West African port corridors through 2026.
              </p>
            </div>
          </div>

          {/* Tags Strip */}
          <div className="pt-6 border-t border-neutral-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-neutral-400 mr-2 flex items-center gap-1">
                <Tag className="w-3.5 h-3.5" /> Topics:
              </span>
              {activePost.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200/60"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Social Share Bar */}
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-bold text-neutral-900">
              Did you find this briefing valuable? Share with your trade desk:
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="px-3 py-2 rounded-xl bg-white border border-neutral-200 hover:bg-neutral-100 text-neutral-800 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                {linkCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-amber-600" />
                    <span>Link Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-neutral-600" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
              <button
                onClick={() => handleShareSocial('linkedin')}
                className="p-2 rounded-xl bg-white border border-neutral-200 hover:bg-blue-50 text-neutral-700 hover:text-blue-600 transition-colors cursor-pointer shadow-sm"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShareSocial('twitter')}
                className="p-2 rounded-xl bg-white border border-neutral-200 hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer shadow-sm"
                title="Share on X"
              >
                <Twitter className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleShareSocial('whatsapp')}
                className="p-2 rounded-xl bg-white border border-neutral-200 hover:bg-emerald-50 text-neutral-700 hover:text-emerald-600 transition-colors cursor-pointer shadow-sm"
                title="Share on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Trade Desk Consultation CTA */}
          <div className="p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 space-y-4 shadow-xl">
            <h3 className="text-xl font-bold text-white">Need Customized Advisory for Your Trading Operations?</h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl leading-relaxed">
              Our Accra physical trading and advisory team provides real-time market data, structured finance facilitation, and port clearance support tailored to your requirements.
            </p>
            <button
              onClick={() => onOpenQuoteModal(activePost.title)}
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Consult Our Trade Desk</span>
              <ArrowRight className="w-4 h-4 text-neutral-950" />
            </button>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="pt-10 space-y-6">
              <h3 className="text-xl font-bold text-neutral-900">Recommended Executive Briefs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((post) => (
                  <div
                    key={post.id}
                    onClick={() => {
                      setActivePost(post);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-400 transition-all cursor-pointer space-y-3 group"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                      {post.category}
                    </span>
                    <h4 className="text-sm font-bold text-neutral-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-neutral-600 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 pt-1 group-hover:translate-x-1 transition-transform">
                      <span>Read Brief</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.article>
      </div>
    );
  }

  // ==========================================
  // MAIN BLOG CATALOG VIEW
  // ==========================================
  return (
    <div className="space-y-16 sm:space-y-20 pb-20 bg-white min-h-screen">
      {/* PAGE HEADER */}
      <section className="bg-white py-14 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
              Energy Thought Leadership & Executive Blog
            </h1>
            <p className="text-neutral-600 text-base sm:text-lg max-w-3xl leading-relaxed">
              Strategic analysis, regulatory developments, and market intelligence on West African physical oil trading, downstream infrastructure, and energy transition dynamics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EDITORIAL METRICS STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-neutral-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={BLOG_POSTS.length} duration={1.2} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Published Briefs
            </span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-amber-500 tracking-tight">
              <AnimatedCounter value={5} duration={1.2} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Core Disciplines
            </span>
          </div>
          <div className="space-y-1 border-r border-neutral-100 last:border-none">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              6 min
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Avg. Reading Time
            </span>
          </div>
          <div className="space-y-1">
            <span className="block text-2xl sm:text-4xl font-black text-neutral-900 tracking-tight">
              <AnimatedCounter value={100} suffix="%" duration={1.5} />
            </span>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              Industry Aligned
            </span>
          </div>
        </motion.div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-neutral-200 pb-6">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? BLOG_POSTS.length
                  : BLOG_POSTS.filter((p) => p.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-neutral-950 text-white shadow-md'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200/80'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-200 text-neutral-700'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, tags or authors..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700 font-bold"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-neutral-50 rounded-3xl border border-neutral-200 space-y-3">
            <BookOpen className="w-10 h-10 text-neutral-400 mx-auto" />
            <h3 className="text-base font-bold text-neutral-900">No articles matched your criteria</h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto">
              Try choosing a different category or clearing your search term to view our full library.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-neutral-950 hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredPosts.map((post) => {
                const isBookmarked = savedPosts.includes(post.id);

                return (
                  <motion.article
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    key={post.id}
                    onClick={() => {
                      setActivePost(post);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group bg-white rounded-3xl p-5 sm:p-6 border border-neutral-200 hover:border-neutral-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 cursor-pointer"
                  >
                    <div className="space-y-4">
                      {/* Image Thumbnail */}
                      <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-100 relative">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-neutral-950/90 text-white backdrop-blur-sm shadow-sm">
                            {post.category}
                          </span>
                        </div>
                        <button
                          onClick={(e) => toggleBookmark(post.id, e)}
                          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 hover:bg-white text-neutral-700 transition-colors shadow-sm cursor-pointer"
                          title="Save Article"
                        >
                          <Bookmark
                            className={`w-3.5 h-3.5 ${
                              isBookmarked ? 'text-amber-500 fill-amber-500' : 'text-neutral-600'
                            }`}
                          />
                        </button>
                      </div>

                      {/* Header Meta */}
                      <div className="flex items-center justify-between text-[11px] text-neutral-500">
                        <span className="flex items-center gap-1 font-medium">
                          <Calendar className="w-3 h-3 text-neutral-400" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                          <Clock className="w-3 h-3 text-neutral-400" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Title & Excerpt */}
                      <h3 className="text-lg font-bold text-neutral-900 leading-snug group-hover:text-amber-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Read CTA */}
                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-neutral-950 text-white text-[10px] font-bold flex items-center justify-center">
                          {post.author.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <span className="font-semibold text-neutral-800 text-[11px]">
                          {post.author.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-1 font-bold text-neutral-900 group-hover:text-amber-600 group-hover:translate-x-1 transition-all">
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* NEWSLETTER SUBSCRIPTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 text-white border border-neutral-800 rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500 text-neutral-950 uppercase tracking-wider inline-flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              Executive Energy Digest
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Stay Ahead of West African Energy Markets
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
              Get our monthly physical petroleum briefs, NPA policy analysis, and terminal storage updates delivered directly to your inbox.
            </p>
          </div>

          <div className="relative z-10 max-w-md mx-auto">
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>You are subscribed! Next monthly brief will arrive in your inbox.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your corporate email"
                  className="flex-1 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
