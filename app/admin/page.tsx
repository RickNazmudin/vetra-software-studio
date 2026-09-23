"use client";

import * as React from "react";
import Link from "next/link";
import {
  DollarSign,
  ShoppingBag,
  Key,
  Users,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { formatIDR } from "@/lib/utils";

export default function AdminOverviewPage() {
  const metrics = [
    { title: "Total Revenue", value: "Rp48.920.000", change: "+18.4%", icon: DollarSign },
    { title: "Paid Orders", value: "38", change: "+4 this week", icon: ShoppingBag },
    { title: "Active Licenses", value: "38", change: "100% Validated", icon: Key },
    { title: "Registered Customers", value: "42", change: "+6 this month", icon: Users },
  ];

  const recentOrders = [
    { id: "ORD-20260922-101", customer: "retail.nusantara@gmail.com", product: "TOKOin-POS", plan: "Lifetime License", amount: 8900000, status: "PAID", time: "15 mins ago" },
    { id: "ORD-20260922-100", customer: "cafe.senja@bisnis.id", product: "TOKOin-POS", plan: "Monthly Subscription", amount: 399000, status: "PAID", time: "2 hours ago" },
    { id: "ORD-20260921-099", customer: "butik.cantika@yahoo.com", product: "TOKOin-POS", plan: "Lifetime License", amount: 8900000, status: "PAID", time: "Yesterday" },
    { id: "ORD-20260920-098", customer: "minimarket.barokah@gmail.com", product: "TOKOin-POS", plan: "Lifetime License", amount: 8900000, status: "PAID", time: "2 days ago" },
  ];

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="border-b border-[#181c25] pb-6">
        <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
          Vetra Studio Command Center
        </span>
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Admin Dashboard Overview
        </h1>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div
              key={idx}
              className="rounded-[6px] border border-[#1e2433] bg-[#0c0e14] p-5 space-y-2"
            >
              <div className="flex items-center justify-between text-neutral-400">
                <span className="text-[11px] font-mono uppercase tracking-wider">{m.title}</span>
                <Icon className="w-4 h-4 text-neutral-400" />
              </div>
              <div className="text-2xl font-bold font-mono text-white">{m.value}</div>
              <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>{m.change}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Transactions Table */}
      <div className="rounded-[8px] border border-[#1e2433] bg-[#0c0e14] overflow-hidden">
        <div className="p-4 bg-[#11141c] border-b border-[#1b202c] flex items-center justify-between">
          <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            Live Payment Transactions
          </h3>
          <Link href="/admin/orders" className="text-xs text-neutral-400 hover:text-white">
            View all orders →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#181c25] bg-[#0e1016] text-neutral-400 font-mono">
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Software</th>
                <th className="p-4">Plan</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#181c25] text-neutral-300">
              {recentOrders.map((ord, idx) => (
                <tr key={idx} className="hover:bg-[#11131a]">
                  <td className="p-4 font-mono font-bold text-white">#{ord.id}</td>
                  <td className="p-4 text-neutral-200">{ord.customer}</td>
                  <td className="p-4 font-semibold text-white">{ord.product}</td>
                  <td className="p-4 font-mono text-neutral-400">{ord.plan}</td>
                  <td className="p-4 font-mono font-bold text-white">
                    {formatIDR(ord.amount)}
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 rounded-[3px] bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-[10px] font-mono font-bold uppercase">
                      {ord.status}
                    </span>
                  </td>
                  <td className="p-4 text-right font-mono text-neutral-400">
                    {ord.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
