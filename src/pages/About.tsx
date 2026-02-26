import React from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <div className="mx-auto max-w-3xl flex flex-col gap-12 py-8">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground font-serif">About VibeStack</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            VibeStack is a curated intelligence dashboard built specifically for AI-native developers. 
            The AI ecosystem moves too fast for traditional news feeds or social media. We filter the noise 
            so you can focus on what actually matters for your production stack.
          </p>
          
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[var(--radius)] border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Signal over noise</h3>
              <p className="text-sm text-muted-foreground">We don't post rumors or marketing fluff. Only actionable updates about models, tools, and frameworks.</p>
            </div>
            <div className="rounded-[var(--radius)] border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Built for shippers</h3>
              <p className="text-sm text-muted-foreground">Every update is evaluated on its utility for production applications, not just hype.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[var(--radius)] border border-border bg-card p-8 sm:p-10">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-[var(--radius)] bg-muted border border-border shadow-inner">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-card-foreground mb-3 font-serif">The Weekly Vibe</h2>
            <p className="text-muted-foreground">
              Get the top 5 updates from the last 7 days delivered straight to your inbox every Monday morning. 
              No spam, just the essentials.
            </p>
          </div>

          <form className="w-full max-w-md mt-2 flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="developer@company.com" 
              className="flex-1 rounded-[var(--radius)] border border-input bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
              required
            />
            <button 
              type="submit"
              className="rounded-[var(--radius)] bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>

          <div className="flex items-center gap-6 mt-4 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
