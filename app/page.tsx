'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Cpu, Layers, Rocket, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <main className="min-h-screen bg-gradient-to-tr from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-xl space-y-8">
            <Badge className="uppercase tracking-wider text-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text border-0">
              Build Smarter Agents
            </Badge>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
              The Future of Workflow Builders is Here
            </h1>
            <p className="text-lg text-slate-300">
              Create intelligent agents effortlessly with our powerful SaaS platform. Automate, customize, and scale your workflows with ease.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 shadow-lg hover:brightness-110 transition"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-500 hover:border-indigo-500 hover:text-indigo-400 transition"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-indigo-600 ring-opacity-30">
            <Image
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Futuristic technology"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Our Workflow Builder?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard
            icon={<Cpu className="w-10 h-10 text-indigo-400" />}
            title="AI-Powered Automation"
            description="Leverage cutting-edge AI to automate complex workflows and boost productivity."
          />
          <FeatureCard
            icon={<Layers className="w-10 h-10 text-purple-400" />}
            title="Visual Workflow Designer"
            description="Drag and drop to build your agents with an intuitive visual interface."
          />
          <FeatureCard
            icon={<Rocket className="w-10 h-10 text-pink-400" />}
            title="Scale Effortlessly"
            description="Deploy and manage your agents at scale with robust cloud infrastructure."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-xl space-y-6 text-white">
            <h2 className="text-4xl font-bold">Build Your Agent in 3 Simple Steps</h2>
            <ol className="list-decimal list-inside space-y-4 text-lg">
              <li>
                <strong>Design:</strong> Use our visual builder to create workflows tailored to your needs.
              </li>
              <li>
                <strong>Train:</strong> Integrate AI models and customize agent behavior.
              </li>
              <li>
                <strong>Deploy:</strong> Launch your agent instantly and monitor performance.
              </li>
            </ol>
            <Button size="lg" className="mt-6 bg-white text-indigo-900 font-semibold hover:brightness-90 transition">
              Start Building Now
            </Button>
          </div>
          <div className="flex-1 relative w-full max-w-lg aspect-[16/9] rounded-3xl overflow-hidden shadow-lg ring-2 ring-indigo-500 ring-opacity-60">
            <Image
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Workflow builder interface"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Testimonial
            quote="This platform transformed how we build and deploy agents. The visual builder is intuitive and powerful."
            name="Alex Johnson"
            role="CTO, Tech Innovators"
            avatar="https://randomuser.me/api/portraits/men/32.jpg"
          />
          <Testimonial
            quote="The AI automation features saved us countless hours. Highly recommend for any SaaS team."
            name="Maria Rodriguez"
            role="Product Manager, SaaSify"
            avatar="https://randomuser.me/api/portraits/women/44.jpg"
          />
          <Testimonial
            quote="Scalable, reliable, and easy to use. Our workflows have never been smoother."
            name="Liam Smith"
            role="Founder, AgentWorks"
            avatar="https://randomuser.me/api/portraits/men/76.jpg"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-3 text-white font-bold text-xl">
            <Zap className="w-8 h-8 text-indigo-500" />
            <span>AgentFlow</span>
          </div>
          <nav className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-indigo-400 transition">
              Features
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Pricing
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Docs
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Contact
            </a>
          </nav>
          <p className="text-xs">&copy; {new Date().getFullYear()} AgentFlow. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gradient-to-tr from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center space-y-4 hover:scale-[1.03] transition-transform cursor-default">
      <div className="p-4 bg-indigo-700 rounded-full">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}

function Testimonial({
  quote,
  name,
  role,
  avatar,
}: {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <div className="bg-slate-800 rounded-2xl p-8 shadow-lg flex flex-col justify-between">
      <p className="text-slate-300 italic mb-6">“{quote}”</p>
      <div className="flex items-center space-x-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-indigo-500"
          loading="lazy"
          width={56}
          height={56}
        />
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-slate-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
