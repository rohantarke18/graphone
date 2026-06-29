"use client";

import React, { useState } from "react";
import Link from "next/link";

const NAV_TABS = [
  { id: "overview",    label: "1. Overview" },
  { id: "timeline",   label: "2. Timeline" },
  { id: "funding",    label: "3. Funding" },
  { id: "ownership",  label: "4. Ownership" },
  { id: "investors",  label: "5. Investors" },
  { id: "leadership", label: "6. Leadership" },
  { id: "products",   label: "7. Products" },
  { id: "more",       label: "More ▾" },
];

const TIMELINE_EVENTS = [
  { year: "2015", label: "OpenAI\nFounded" },
  { year: "2019", label: "GPT-2\nReleased" },
  { year: "2020", label: "GPT-3\nReleased" },
  { year: "2022", label: "ChatGPT\nLaunched" },
  { year: "2023", label: "GPT-4\nReleased" },
  { year: "2024", label: "Sora\nReleased" },
  { year: "2025", label: "Operator\nReleased" },
];

const FUNDING_ROUNDS = [
  { round: "Seed",      date: "2016", amount: "$10M" },
  { round: "Series A",  date: "2019", amount: "$100M" },
  { round: "Series B",  date: "2021", amount: "$300M" },
  { round: "Growth",    date: "2023", amount: "$10B" },
  { round: "Growth-II", date: "2025", amount: "$40B" },
];

const OWNERSHIP_DATA = [
  { label: "Microsoft", pct: 49, color: "#F87171" },
  { label: "Employees", pct: 18, color: "#FB923C" },
  { label: "Founders",  pct: 12, color: "#A78BFA" },
  { label: "Investors", pct: 21, color: "#94A3B8" },
];

const SEED_INVESTORS = [
  { name: "Y Combinator", icon: "🟠" },
  { name: "Sam Altman",   icon: "👤" },
  { name: "Peter Thiel",  icon: "👤" },
];
const SERIES_INVESTORS = [
  { name: "Sequoia Capital",      icon: "🏦" },
  { name: "Andreessen Horowitz",  icon: "👤" },
];
const GROWTH_INVESTORS = [
  { name: "Microsoft",   icon: "🪟" },
  { name: "SoftBank",    icon: "🏦" },
  { name: "Tiger Global", icon: "🐯" },
];

const LEADERSHIP = [
  { name: "Sam Altman",     role: "CEO",                   initials: "SA", color: "linear-gradient(135deg,#f97316,#ef4444)" },
  { name: "Greg Brockman",  role: "President & Co-founder", initials: "GB", color: "linear-gradient(135deg,#6366f1,#8b5cf6)" },
  { name: "Ilya Sutskever", role: "Chief Scientist & Co-founder", initials: "IS", color: "linear-gradient(135deg,#0ea5e9,#6366f1)" },
];

const PRODUCTS = [
  { name: "ChatGPT",  desc: "Conversational\nAI assistant",   icon: "🤖" },
  { name: "GPT-4o",   desc: "Multimodal\nAI model",           icon: "🧠" },
  { name: "Codex",    desc: "AI for software\ndevelopment",   icon: "💻" },
  { name: "Sora",     desc: "Text-to-video\nmodel",           icon: "🎬" },
  { name: "Operator", desc: "AI agent for\ntasks",            icon: "⚙️" },
  { name: "Agents",   desc: "Autonomous\nAI agents",          icon: "🕹️" },
];

const ACQUISITIONS = [
  { company: "Rockset",  icon: "R", date: "2024", focus: "Database technology" },
  { company: "Io",       icon: "○", date: "2025", focus: "AI device startup" },
];

const INVESTMENTS = [
  { company: "Figure",             icon: "🤖", focus: "Humanoid Robotics", stage: "Series B" },
  { company: "Harvey",             icon: "⚖️", focus: "Legal AI",          stage: "Series C" },
  { company: "Physical Intelligence", icon: "🦾", focus: "Robotics AI",    stage: "Series A" },
];

const DIRECT_COMPETITORS   = ["Anthropic", "Google DeepMind", "xAI", "Mistral AI", "Cohere"];
const ADJACENT_COMPETITORS = ["Perplexity", "Cursor", "Replit"];

const ECOSYSTEM_NODES = [
  { label: "Microsoft",           color: "#DBEAFE", left: "6%",  top: "28%" },
  { label: "Sequoia Capital",     color: "#D1FAE5", left: "6%",  top: "50%" },
  { label: "Andreessen Horowitz", color: "#FEF9C3", left: "6%",  top: "70%" },
  { label: "SoftBank",            color: "#F3E8FF", left: "6%",  top: "88%" },
  { label: "Tiger Global",        color: "#FFEDD5", left: "18%", top: "10%" },
  { label: "Y Combinator",        color: "#E0F2FE", left: "18%", top: "88%" },
  { label: "Rockset (2024)",      color: "#FEE2E2", left: "68%", top: "28%" },
  { label: "Io (2025)",           color: "#F0FDF4", left: "68%", top: "50%" },
  { label: "Figure",              color: "#EFF6FF", left: "68%", top: "70%" },
  { label: "Harvey",              color: "#FDF4FF", left: "68%", top: "88%" },
  { label: "Physical Intelligence", color: "#FFF7ED", left: "68%", top: "10%" },
];

const PRODUCT_TABS_TOP = ["ChatGPT", "GPT-4o", "Codex", "Sora", "Operator", "Agents"];

const NEWS = [
  { title: "OpenAI launches GPT-4o with improved multimodal capabilities", date: "May 13, 2025" },
  { title: "OpenAI raises $40B in new funding round led by SoftBank",       date: "Mar 31, 2025" },
  { title: "OpenAI releases Operator, an AI agent for everyday tasks",      date: "Jan 23, 2025" },
  { title: "OpenAI acquires io, co-founded by Jony Ive",                    date: "May 21, 2025" },
  { title: "OpenAI announces Sora API for video generation",                date: "Feb 15, 2025" },
];

const OPEN_JOBS = [
  { role: "Research Scientist",           dept: "Research",    loc: "San Francisco, CA", type: "Full-time" },
  { role: "Software Engineer, Infrastructure", dept: "Engineering", loc: "San Francisco, CA", type: "Full-time" },
  { role: "Product Manager, ChatGPT",     dept: "Product",     loc: "San Francisco, CA", type: "Full-time" },
  { role: "Safety Systems Engineer",      dept: "Safety",      loc: "Tokyo",             type: "Full-time" },
  { role: "ML Engineer, Training",        dept: "Engineering", loc: "San Francisco, CA", type: "Full-time" },
];

const RESEARCH_PAPERS = [
  { title: "GPT-4 Technical Report",           date: "Mar 2023" },
  { title: "GPT-4o System Card",               date: "May 2024" },
  { title: "Sora: A Review",                   date: "Feb 2024" },
  { title: "DALL-E 3 Technical Report",        date: "Oct 2023" },
  { title: "Whisper: Robust Speech Recognition", date: "Sep 2022" },
];

const PATENTS = [
  { patent: "System for training large language models", category: "AI / ML", owner: "OpenAI", filed: "2022-10-14", published: "2023-09-21" },
  { patent: "Methods for aligning AI models",           category: "AI Safety", owner: "OpenAI", filed: "2023-01-11", published: "2023-12-28" },
  { patent: "Efficient inference for transformer models", category: "AI / ML", owner: "OpenAI", filed: "2022-05-09", published: "2023-11-02" },
];

const ALUMNI    = ["Anthropic", "Perplexity", "Thinking Machines Lab", "Safe Superintelligence", "World Labs", "xAI"];
const COLLECTIONS = ["AI Labs", "Foundation Models", "Generative AI", "Top AI Companies", "YC AI Companies"];
const SIMILAR   = ["Anthropic", "Google DeepMind", "Mistral AI", "Cohere", "xAI"];

// ─── Donut Chart ──────────────────────────────────────────────────────────────
function DonutChart() {
  const cx = 65, cy = 65, r = 50, inner = 28;
  let cum = 0;
  const slices = OWNERSHIP_DATA.map((d) => {
    const start = cum; cum += d.pct;
    return { ...d, start, end: cum };
  });
  const arc = (s: number, e: number) => {
    const deg = (p: number) => ((p / 100) * 360 - 90) * (Math.PI / 180);
    const x1 = cx + r * Math.cos(deg(s)), y1 = cy + r * Math.sin(deg(s));
    const x2 = cx + r * Math.cos(deg(e)), y2 = cy + r * Math.sin(deg(e));
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${e - s > 50 ? 1 : 0} 1 ${x2} ${y2} Z`;
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <svg width={130} height={130} viewBox="0 0 130 130">
        {slices.map((s) => <path key={s.label} d={arc(s.start, s.end)} fill={s.color} />)}
        <circle cx={cx} cy={cy} r={inner} fill="white" />
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {OWNERSHIP_DATA.map((d) => (
          <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#374151" }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: d.color, display: "inline-block", flexShrink: 0 }} />
            {d.label}
            <span style={{ color: "#9CA3AF", marginLeft: 4 }}>{d.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
const SH = (n: string, t: string) => (
  <h2 style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: "0 0 16px 0" }}>{n}. {t}</h2>
);
const Card = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
  <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 10, padding: "20px 22px", ...style }}>
    {children}
  </div>
);
const More = ({ label }: { label: string }) => (
  <a href="#" style={{ fontSize: 12, color: "#FF385C", textDecoration: "none", display: "block", marginTop: 12 }}>{label} →</a>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function OpenAICompanyPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div style={{ fontFamily: "'Inter', -apple-system, sans-serif", background: "#F9FAFB", minHeight: "100vh", color: "#111827" }}>

      {/* Top Bar */}
      <header style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", display: "flex", alignItems: "center", padding: "0 28px", height: 56, gap: 8 }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: 20, color: "#FF385C", fontWeight: 700 }}>❖ airbnb</span>
        </Link>
        <div style={{ flex: 1, margin: "0 28px" }}>
          <div style={{ background: "#F3F4F6", borderRadius: 20, padding: "7px 16px", fontSize: 13, color: "#9CA3AF", maxWidth: 440 }}>
            🔍 Search for companies, people, investors, and more...
          </div>
        </div>
        <nav style={{ display: "flex", gap: 20, fontSize: 13, color: "#374151", alignItems: "center" }}>
          <span style={{ cursor: "pointer" }}>Explore</span>
          <span style={{ cursor: "pointer" }}>Collections</span>
          <span style={{ cursor: "pointer" }}>Log in</span>
          <span style={{ background: "#FF385C", color: "#fff", borderRadius: 6, padding: "5px 14px", cursor: "pointer", fontWeight: 600 }}>Sign up</span>
        </nav>
      </header>

      {/* Section Tabs */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", display: "flex", padding: "0 28px", overflowX: "auto" }}>
        {NAV_TABS.map((t) => (
          <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
            padding: "13px 16px", fontSize: 13, fontWeight: 500,
            border: "none", background: "none", cursor: "pointer",
            color: activeTab === t.id ? "#FF385C" : "#6B7280",
            borderBottom: activeTab === t.id ? "2px solid #FF385C" : "2px solid transparent",
            whiteSpace: "nowrap",
          }}>
            {t.label}
          </button>
        ))}
      </nav>

      <main style={{ maxWidth: 920, margin: "0 auto", padding: "24px 16px 80px" }}>
     {/* 1. Overview */}
<Card style={{ 
  marginBottom: 16,
  position: "relative",
  backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.92) 50%, rgba(255, 255, 255, 0.85) 100%), url('/openaiback.png')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  overflow: "hidden"
}}>
  <div style={{ display: "flex", gap: 18, alignItems: "flex-start", position: "relative", zIndex: 2 }}>
    {/* Explicitly scaled wrapper to contain the OpenAI image asset perfectly */}
    <div style={{ 
      width: 72, 
      height: 72, 
      borderRadius: 14, 
      background: "#000", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      overflow: "hidden",
      flexShrink: 0 
    }}>
      <img 
        src="/openai.png" 
        alt="OpenAI Logo" 
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover",
          pointerEvents: "none"
        }} 
      />
    </div>
    
    <div style={{ flex: 1 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0, color: "#0f172a" }}>OpenAI</h1>
<span
  style={{
    fontSize: 11,
    borderRadius: 4,
    padding: "2px 7px",
    fontWeight: 500,   // ✅ Correct
  }}
>
  ✔ Verified
</span>      </div>
      <p style={{ fontSize: 13, color: "#334155", margin: "0 0 12px", lineHeight: 1.6, fontWeight: 500 }}>
        AI research and deployment company building safe and beneficial artificial general intelligence.
      </p>
      
      {/* Meta Metrics Block with Clean Balanced Spacing */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12, color: "#475569", fontWeight: 600 }}>
        {/* Row 1: Core Company Meta */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px" }}>
          <span>🌐 openai.com</span>
          <span>📅 Founded 2015</span>
          <span>📍 San Francisco, CA, USA</span>
        </div>
        {/* Row 2: Industry & Entity Status pushed gracefully to its own line */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px" }}>
          <span>🤖 Artificial Intelligence</span>
          <span>🔒 Privately Held</span>
          <span>👥 1,000+ employees (est.)</span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 14, marginTop: 12, fontSize: 17 }}>
        {["𝕏", "in", "▶", "🐙"].map((icon, i) => (
          <span key={i} style={{ cursor: "pointer", color: "#475569" }}>{icon}</span>
        ))}
      </div>
    </div>
  </div>
  
  {/* Tags Array Container */}
  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16, position: "relative", zIndex: 2 }}>
    {["Artificial Intelligence", "Machine Learning", "Generative AI", "Foundation Models", "AI Research"].map((tag) => (
      <span key={tag} style={{ background: "rgba(255, 241, 242, 0.9)", color: "#E11D48", border: "1px solid #FECDD3", borderRadius: 20, padding: "3px 12px", fontSize: 12, cursor: "pointer", fontWeight: 500 }}>
        {tag}
      </span>
    ))}
  </div>
</Card>
        {/* 2. Timeline */}
        <Card style={{ marginBottom: 16 }}>
          {SH("2", "Timeline")}
          <div style={{ display: "flex", alignItems: "flex-start", overflowX: "auto", paddingBottom: 4 }}>
            {TIMELINE_EVENTS.map((ev, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, minWidth: 90 }}>
                <div style={{ fontSize: 11, color: "#9CA3AF", marginBottom: 5 }}>{ev.year}</div>
                <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
                  {i > 0 && <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />}
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF385C", flexShrink: 0 }} />
                  {i < TIMELINE_EVENTS.length - 1 && <div style={{ flex: 1, height: 1, background: "#E5E7EB" }} />}
                </div>
                <div style={{ fontSize: 11, color: "#374151", textAlign: "center", marginTop: 6, whiteSpace: "pre-line", lineHeight: 1.4 }}>
                  {ev.label}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* 3 + 4 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <Card>
            {SH("3", "Funding Timeline")}
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ color: "#9CA3AF" }}>
                  <th style={{ textAlign: "left", padding: "3px 0", fontWeight: 500 }}>Round</th>
                  <th style={{ textAlign: "left", padding: "3px 0", fontWeight: 500 }}>Date</th>
                  <th style={{ textAlign: "left", padding: "3px 0", fontWeight: 500 }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {FUNDING_ROUNDS.map((r) => (
                  <tr key={r.round} style={{ borderTop: "1px solid #F3F4F6" }}>
                    <td style={{ padding: "8px 0", color: "#374151" }}>{r.round}</td>
                    <td style={{ padding: "8px 0", color: "#6B7280" }}>{r.date}</td>
                    <td style={{ padding: "8px 0", fontWeight: 600 }}>{r.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <More label="View funding history" />
          </Card>
          <Card>
            {SH("4", "Ownership")}
            <DonutChart />
          </Card>
        </div>

        {/* 5. Investors */}
        <Card style={{ marginBottom: 16 }}>
          {SH("5", "Investors")}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", marginBottom: 10 }}>Seed Investors</div>
              {SEED_INVESTORS.map((inv) => (
                <div key={inv.name} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#374151", marginBottom: 8 }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#F3F4F6", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{inv.icon}</span>
                  {inv.name}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", marginBottom: 10 }}>Series Investors</div>
              {SERIES_INVESTORS.map((inv) => (
                <div key={inv.name} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#374151", marginBottom: 8 }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#EFF6FF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{inv.icon}</span>
                  {inv.name}
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", marginBottom: 10 }}>Growth Investors</div>
              {GROWTH_INVESTORS.map((inv) => (
                <div key={inv.name} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#374151", marginBottom: 8 }}>
                  <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#F5F3FF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0 }}>{inv.icon}</span>
                  {inv.name}
                </div>
              ))}
            </div>
          </div>
        </Card>

       {/* 6. Leadership */}
<Card style={{ marginBottom: 16 }}>
  {SH("6", "Founders & Leadership")}
  <div style={{ display: "flex", gap: 28, flexWrap: "wrap", alignItems: "center" }}>
    {[
      { name: 'Greg Brockman', role: 'Co-Founder', img: '/greg.jpg' },
      { name: 'Ilya Sutskever', role: 'Co-Founder', img: '/llya.jpg' },
      { name: 'Sam Altman', role: 'CEO', img: '/sam.jpg' },
    ].map((l) => (
      <div key={l.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {/* Photo Container */}
        <div style={{ 
          width: 46, 
          height: 46, 
          borderRadius: "50%", 
          overflow: "hidden", 
          flexShrink: 0,
          border: "1px solid #e5e7eb" 
        }}>
          <img 
            src={l.img} 
            alt={l.name} 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
          />
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>{l.name}</div>
          <div style={{ fontSize: 12, color: "#6B7280" }}>{l.role}</div>
        </div>
      </div>
    ))}
    <a href="#" style={{ marginLeft: "auto", fontSize: 12, color: "#FF385C", textDecoration: "none" }}>View all leadership →</a>
  </div>
</Card>

       {/* 7. Products */}
<Card style={{ marginBottom: 16 }}>
  {SH("7", "Products")}
  <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16, marginTop: 16 }}>
    {[
      { name: 'ChatGPT', sub: 'Conversational', sub2: 'AI assistant', logo: '/chatgpt.png' },
      { name: 'GPT-4o', sub: 'Multimodal', sub2: 'AI model', logo: '/gpt40.png' },
      { name: 'Codex', sub: 'AI for software', sub2: 'development', logo: '/codex.png' },
      { name: 'Sora', sub: 'Text-to-video', sub2: 'model', logo: '/sora.png' },
      { name: 'Operator', sub: 'AI agent for', sub2: 'tasks', logo: '/operator.png' },
      { name: 'Agents', sub: 'Autonomous', sub2: 'AI agents', logo: '/agnets.png' },
    ].map((p) => (
      <div key={p.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <img 
          src={p.logo} 
          alt={p.name} 
          style={{ width: 48, height: 48, borderRadius: 12, objectFit: "cover" }} 
        />
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#000" }}>{p.name}</div>
          <div style={{ fontSize: 11, color: "#6B7280", lineHeight: 1.2, marginTop: 2 }}>
            <div>{p.sub}</div>
            <div>{p.sub2}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
</Card>

        {/* 8 + 9 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <Card>
            {SH("8", "Acquisitions")}
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ color: "#9CA3AF" }}>
                  <th style={{ textAlign: "left", padding: "3px 0", fontWeight: 500 }}>Company</th>
                  <th style={{ textAlign: "left", padding: "3px 0", fontWeight: 500 }}>Date</th>
                  <th style={{ textAlign: "left", padding: "3px 0", fontWeight: 500 }}>Focus</th>
                </tr>
              </thead>
              <tbody>
                {ACQUISITIONS.map((a) => (
                  <tr key={a.company} style={{ borderTop: "1px solid #F3F4F6" }}>
                    <td style={{ padding: "8px 0", color: "#374151", display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ width: 20, height: 20, borderRadius: 4, background: "#F3F4F6", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700 }}>{a.icon}</span>
                      {a.company}
                    </td>
                    <td style={{ padding: "8px 0", color: "#6B7280" }}>{a.date}</td>
                    <td style={{ padding: "8px 0", color: "#374151" }}>{a.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <More label="View all acquisitions" />
          </Card>
          <Card>
            {SH("9", "Investments")}
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ color: "#9CA3AF" }}>
                  <th style={{ textAlign: "left", padding: "3px 0", fontWeight: 500 }}>Company</th>
                  <th style={{ textAlign: "left", padding: "3px 0", fontWeight: 500 }}>Focus</th>
                  <th style={{ textAlign: "left", padding: "3px 0", fontWeight: 500 }}>Stage</th>
                </tr>
              </thead>
              <tbody>
                {INVESTMENTS.map((inv) => (
                  <tr key={inv.company} style={{ borderTop: "1px solid #F3F4F6" }}>
                    <td style={{ padding: "8px 0", color: "#374151" }}>
                      <span style={{ marginRight: 6 }}>{inv.icon}</span>{inv.company}
                    </td>
                    <td style={{ padding: "8px 0", color: "#6B7280" }}>{inv.focus}</td>
                    <td style={{ padding: "8px 0", color: "#374151" }}>{inv.stage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <More label="View all investments" />
          </Card>
        </div>


{/* 10. Competitor Landscape */}
<Card style={{ marginBottom: 16 }}>
  {SH("10", "Competitor Landscape")}
  
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
    {/* Direct Competitors List */}
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", marginBottom: 12 }}>Direct Competitors</div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {[
          { name: "Anthropic", logo: "/anthropic.png" },
          { name: "Google DeepMind", logo: "/googledeepmind.png" },
          { name: "xAI", logo: "/xai.png" },
          { name: "Mistral AI", logo: "/mistralailogo.png" },
          { name: "Cohere", logo: "/coherelogo.png" }
        ].map((c) => (
          <div key={c.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <div style={{ width: 38, height: 38, borderRadius: 9, background: "#F3F4F6", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={c.logo} alt={c.name} style={{ width: "80%", height: "80%", objectFit: "contain" }} />
            </div>
            <span style={{ fontSize: 10, color: "#374151", textAlign: "center" }}>{c.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Adjacent Competitors List */}
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "#6B7280", marginBottom: 12 }}>Adjacent Competitors</div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {[
          { name: "Perplexity", logo: "/perplexitylogo.png" },
          { name: "Cursor", logo: "/cursorlogo.png" },
          { name: "Replit", logo: "/replit.png" }
        ].map((c) => (
          <div key={c.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <div style={{ width: 38, height: 38, borderRadius: 9, background: "#F3F4F6", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={c.logo} alt={c.name} style={{ width: "80%", height: "80%", objectFit: "contain" }} />
            </div>
            <span style={{ fontSize: 10, color: "#374151", textAlign: "center" }}>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</Card>
{/* 11. AI Ecosystem Graph */}
<Card style={{ marginBottom: 16 }}>
  {SH("11", "AI Ecosystem Graph")}
  <div style={{ 
    width: "100%", 
    padding: "16px", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center",
    background: "#ffffff"
  }}>
    <img 
      src="/aiecosystem.png" 
      alt="AI Ecosystem Graph" 
      style={{ 
        width: "100%", 
        height: "auto", 
        objectFit: "contain",
        borderRadius: 8
      }} 
    />
  </div>
</Card>
        {/* 12 + 13 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <Card>
            {SH("12", "News")}
            {NEWS.map((n) => (
              <div key={n.title} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, borderBottom: "1px solid #F3F4F6", padding: "8px 0", gap: 10 }}>
                <a href="#" style={{ color: "#374151", textDecoration: "none", flex: 1, lineHeight: 1.45 }}>{n.title}</a>
                <span style={{ color: "#9CA3AF", whiteSpace: "nowrap", flexShrink: 0 }}>{n.date}</span>
              </div>
            ))}
            <More label="View all news" />
          </Card>
          <Card>
            {SH("13", "Open Jobs")}
            {OPEN_JOBS.map((j) => (
              <div key={j.role} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, borderBottom: "1px solid #F3F4F6", padding: "8px 0", gap: 8 }}>
                <div>
                  <div style={{ color: "#374151", fontWeight: 500 }}>{j.role}</div>
                  <div style={{ color: "#9CA3AF", marginTop: 2 }}>{j.dept}</div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ color: "#6B7280" }}>{j.loc}</div>
                  <div style={{ color: "#9CA3AF" }}>{j.type}</div>
                </div>
              </div>
            ))}
            <More label="View all jobs" />
          </Card>
        </div>

        {/* 14 + 15 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <Card>
            {SH("14", "Research Papers")}
            {RESEARCH_PAPERS.map((r) => (
              <div key={r.title} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, padding: "7px 0", borderBottom: "1px solid #F3F4F6" }}>
                <a href="#" style={{ color: "#374151", textDecoration: "none" }}>{r.title}</a>
                <span style={{ color: "#9CA3AF", marginLeft: 10, whiteSpace: "nowrap" }}>{r.date}</span>
              </div>
            ))}
            <More label="View all papers" />
          </Card>
          <Card>
            {SH("15", "Patents")}
            <table style={{ width: "100%", fontSize: 11, borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ color: "#9CA3AF" }}>
                  {["Patent", "Category", "Owner", "Filed", "Published"].map((h) => (
                    <th key={h} style={{ textAlign: "left", padding: "3px 4px 3px 0", fontWeight: 500 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PATENTS.map((p, i) => (
                  <tr key={i} style={{ borderTop: "1px solid #F3F4F6" }}>
                    <td style={{ padding: "6px 4px 6px 0", color: "#374151", maxWidth: 90, fontSize: 10 }}>{p.patent}</td>
                    <td style={{ color: "#6B7280", whiteSpace: "nowrap", paddingRight: 4 }}>{p.category}</td>
                    <td style={{ color: "#6B7280", whiteSpace: "nowrap", paddingRight: 4 }}>{p.owner}</td>
                    <td style={{ color: "#9CA3AF", whiteSpace: "nowrap", paddingRight: 4 }}>{p.filed}</td>
                    <td style={{ color: "#9CA3AF", whiteSpace: "nowrap" }}>{p.published}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <More label="View all patents" />
          </Card>
        </div>

        {/* 16 + 17 + 18 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 16 }}>
          <Card>
            {SH("16", "Alumni Companies")}
            {ALUMNI.map((a) => (
              <div key={a} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#374151", padding: "6px 0", borderBottom: "1px solid #F9FAFB" }}>
                <span style={{ width: 20, height: 20, borderRadius: 4, background: "#F3F4F6", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>🏢</span>
                {a}
              </div>
            ))}
            <More label="View all alumni companies" />
          </Card>
          <Card>
            {SH("17", "Collections")}
            {COLLECTIONS.map((c) => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#374151", padding: "6px 0", borderBottom: "1px solid #F9FAFB" }}>
                <span style={{ width: 20, height: 20, borderRadius: 4, background: "#EFF6FF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>📁</span>
                {c}
              </div>
            ))}
            <More label="View all collections" />
          </Card>
          <Card>
            {SH("18", "Similar Companies")}
            {SIMILAR.map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#374151", padding: "6px 0", borderBottom: "1px solid #F9FAFB" }}>
                <span style={{ width: 20, height: 20, borderRadius: 4, background: "#F5F3FF", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>💡</span>
                {s}
              </div>
            ))}
            <More label="View more similar companies" />
          </Card>
        </div>

        <div style={{ textAlign: "center", fontSize: 12, color: "#9CA3AF", paddingTop: 8 }}>
          © 2025 Airbnb, Inc.
        </div>
      </main>
    </div>
  );
}