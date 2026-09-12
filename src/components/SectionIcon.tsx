import { Activity, Baby, Building2, CircleHelp, Cpu, Eye, Flag, Heart, HeartHandshake, Layers, Mail, ScanLine, ShieldCheck, ShoppingBag, Smartphone, Sparkles, Target, Trophy, Users, Waves } from "lucide-react";

export default function SectionIcon({ topic = "care", inline = false }: { topic?: string; inline?: boolean }) {
  const value = topic.toLowerCase();
  const Icon = /team|leadership|who we|about/.test(value) ? Users
    : /partner|together/.test(value) ? HeartHandshake
    : /award|recognition|achievement/.test(value) ? Trophy
    : /mission|purpose/.test(value) ? Target
    : /vision|research/.test(value) ? Eye
    : /technology|connected|ai|inside/.test(value) ? Cpu
    : /design|layer|form|component/.test(value) ? Layers
    : /skin|scan|photo/.test(value) ? ScanLine
    : /app|digital|web/.test(value) ? Smartphone
    : /order|product|yours|step/.test(value) ? ShoppingBag
    : /contact|message/.test(value) ? Mail
    : /question|clarity|know/.test(value) ? CircleHelp
    : /impact|progress/.test(value) ? Activity
    : /problem|risk|safety/.test(value) ? ShieldCheck
    : /invest|business/.test(value) ? Building2
    : /birth|mother|baby/.test(value) ? Baby
    : /comfort|support/.test(value) ? Waves
    : /approach|journey/.test(value) ? Flag
    : /feature|experience/.test(value) ? Sparkles : Heart;
  return <span className={`section-icon${inline ? " section-icon-inline" : ""}`} aria-hidden="true"><Icon size={24} strokeWidth={1.6} /></span>;
}
