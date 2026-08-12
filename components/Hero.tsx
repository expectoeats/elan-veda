"use client";

import {
  Leaf,
  CheckCircle2,
  Mountain,
  Stethoscope,
  Star,
  ArrowRight,
  FlaskConical,
  ShieldCheck,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 pt-2 lg:px-8">
      <div className="grid items-center gap-10 rounded-card border border-surface-border bg-surface p-6 shadow-card lg:grid-cols-[1.15fr_1fr] lg:p-12">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-badge-green-bg px-3.5 py-1.5 text-[12px] font-bold text-badge-green-text">
            <Leaf size={13} className="fill-badge-green-text" />
            Formulated by VedaPure Academy of Ayurveda
          </span>

          <h1 className="mt-5 font-heading text-[34px] font-extrabold leading-[1.15] text-ink lg:text-[48px]">
            Modern Ayurveda for Real Results.{" "}
            <span className="text-brand">Scientifically Tested.</span>
          </h1>

          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-2.5 text-[15px] font-medium text-ink">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 fill-badge-green-bg text-badge-green-text" />
              Shilajit sourced from 18,000 Ft. in the Himalayas.
            </li>
            <li className="flex items-start gap-2.5 text-[15px] font-medium text-ink">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 fill-badge-green-bg text-badge-green-text" />
              Free consultation with certified Ayurvedic Doctors.
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 rounded-[12px] bg-brand px-6 py-4 text-[15px] font-bold text-canvas shadow-cta transition-colors hover:bg-accent">
              Take 2-Min Health Quiz
              <ArrowRight size={17} />
            </button>
            <button className="rounded-[12px] border-2 border-brand px-6 py-[14px] text-[15px] font-bold text-brand transition-colors hover:bg-brand hover:text-canvas">
              Explore Products
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-surface-border pt-5 text-[12px] font-semibold text-muted">
            <span className="flex items-center gap-1.5">
              <FlaskConical size={15} className="text-brand" /> Lab Tested Batches
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-brand" /> GMP Certified
            </span>
            <span className="flex items-center gap-1.5">
              <Stethoscope size={15} className="text-brand" /> Doctor Backed
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="flex aspect-[4/3.4] items-center justify-center rounded-card border border-surface-border bg-canvas shadow-card">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className="flex h-28 w-28 items-center justify-center rounded-full bg-brand shadow-cta">
                <Mountain size={52} className="text-accent" />
              </span>
              <div>
                <p className="font-heading text-[20px] font-bold text-brand">
                  Himalayan Shilajit Resin
                </p>
                <p className="mt-1 text-[13px] font-medium text-muted">
                  Purity certified | 20g Jar
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -left-3 top-6 flex items-center gap-1.5 rounded-full border border-surface-border bg-surface px-3.5 py-2 text-[12px] font-bold text-ink shadow-card-hover">
            <Star size={14} className="fill-accent text-accent" />
            4.8 Rated by 20,000+ Users
          </div>
          <div className="absolute -right-3 bottom-8 flex items-center gap-1.5 rounded-full border border-surface-border bg-surface px-3.5 py-2 text-[12px] font-bold text-ink shadow-card-hover">
            <Mountain size={14} className="text-brand" />
            Sourced at 18,000 Ft.
          </div>
        </div>
      </div>
    </section>
  );
}
