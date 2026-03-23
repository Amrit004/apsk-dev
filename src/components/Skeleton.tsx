"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded bg-slate-800",
        className
      )}
    />
  );
}

export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-6 w-2/3" />
            <div className="flex gap-3 pt-4">
              <Skeleton className="h-12 w-32" />
              <Skeleton className="h-12 w-36" />
            </div>
          </div>
          <Skeleton className="h-80 w-full rounded-xl" />
        </div>
      </div>
    </section>
  );
}

export function CardSkeleton() {
  return (
    <div className="card space-y-4">
      <Skeleton className="h-6 w-1/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <Skeleton className="h-4 w-4/6" />
    </div>
  );
}
