import React, { useState } from 'react';
import { FYP_PROJECT } from '../data/portfolioData';
import {
  Smartphone,
  Server,
  Cpu,
  FolderGit2,
  ExternalLink,
  Play,
  CheckCircle,
  Activity,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Utensils,
  ChevronRight,
  Info,
} from 'lucide-react';
import { ProjectItem } from '../types';

interface FYPSectionProps {
  onViewProject: (project: ProjectItem) => void;
  onOpenGithub: (project: ProjectItem) => void;
}

export const FYPSection: React.FC<FYPSectionProps> = ({ onViewProject, onOpenGithub }) => {
  const [showDemo, setShowDemo] = useState<boolean>(false);

  // Demo state
  const [childAge, setChildAge] = useState<number>(24); // months
  const [childWeight, setChildWeight] = useState<number>(10.2); // kg
  const [childHeight, setChildHeight] = useState<number>(82); // cm
  const [muac, setMuac] = useState<number>(13.2); // cm (Mid-Upper Arm Circumference)
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<{
    status: string;
    level: 'normal' | 'moderate' | 'severe';
    wfhZScore: number;
    hfaZScore: number;
    muacStatus: string;
    recommendations: string[];
    priorityFoods: string[];
  } | null>({
    status: 'Mild Wasting Risk Detected (Acute Malnutrition Alert)',
    level: 'moderate',
    wfhZScore: -1.8,
    hfaZScore: -0.9,
    muacStatus: 'Yellow Zone (12.5cm – 13.5cm) – Borderline',
    recommendations: [
      'Increase caloric and micro-nutrient density with fortified porridge and legumes.',
      'Introduce mashed eggs, boiled lentils, and vitamin-A rich purees (sweet potato, carrots).',
      'Schedule a physical follow-up assessment with community health worker within 14 days.',
    ],
    priorityFoods: ['Fortified Cereal', 'Lentils & Beans', 'Boiled Egg Yolk', 'Mashed Papaya / Carrots', 'Clean Boiled Water'],
  });

  const runSimulation = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      // Anthropometric calculation logic
      let level: 'normal' | 'moderate' | 'severe' = 'normal';
      let status = 'Normal Nutritional Growth Parameters';
      let wfh = (childWeight - 12) / 1.5;
      let hfa = (childHeight - 86) / 3.0;

      if (muac < 11.5 || wfh < -3) {
        level = 'severe';
        status = 'Severe Acute Malnutrition (SAM) Alert';
      } else if (muac < 12.5 || wfh < -2) {
        level = 'moderate';
        status = 'Moderate Acute Malnutrition (MAM) Risk Detected';
      } else if (muac < 13.5 || wfh < -1) {
        level = 'moderate';
        status = 'Mild Underweight / Wasting Risk Detected';
      } else {
        level = 'normal';
        status = 'Healthy Growth & Nutrition Alignment';
      }

      const recommendations =
        level === 'severe'
          ? [
              'Urgent referral to primary healthcare facility or therapeutic feeding clinic.',
              'Administer Ready-to-Use Therapeutic Food (RUTF) strictly per clinical protocol.',
              'Ensure continuous hydration and monitor for acute infection or fever.',
            ]
          : level === 'moderate'
          ? [
              'Increase daily caloric intake with lipid-based nutritional supplements and eggs.',
              'Combine energy-dense grains with local iron and zinc sources (lentils, dark greens).',
              'Re-measure MUAC and weight every 7 to 10 days to confirm upward trajectory.',
            ]
          : [
              'Maintain balanced dietary diversity across all five essential food groups.',
              'Continue active growth monitoring at recommended pediatric intervals.',
              'Ensure age-appropriate immunization and clean sanitation practices.',
            ];

      const foods =
        level === 'severe'
          ? ['Therapeutic Paste (RUTF)', 'F-75 / F-100 Therapeutic Milk', 'Clean Electrolyte Water']
          : level === 'moderate'
          ? ['Mashed Lentils & Spinach', 'Egg Mash with Boiled Rice', 'Peanut Paste', 'Mashed Banana & Porridge']
          : ['Seasonal Fruits', 'Whole Grains & Pulses', 'Dairy / Milk Products', 'Cooked Green Vegetables'];

      setAnalysisResult({
        status,
        level,
        wfhZScore: parseFloat(wfh.toFixed(2)),
        hfaZScore: parseFloat(hfa.toFixed(2)),
        muacStatus:
          muac < 11.5
            ? 'Red Zone (<11.5cm) – Severe'
            : muac < 12.5
            ? 'Yellow Zone (11.5–12.5cm) – Moderate'
            : 'Green Zone (≥12.5cm) – Adequate',
        recommendations,
        priorityFoods: foods,
      });
      setIsAnalyzing(false);
    }, 600);
  };

  const handleDemoClick = () => {
    setShowDemo(!showDemo);
    if (!showDemo) {
      setTimeout(() => {
        const demoEl = document.getElementById('fyp-live-demo-panel');
        if (demoEl) {
          demoEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <section id="fyp" className="py-20 md:py-24 border-t border-slate-800/80 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            <span>Final Year Capstone Project</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Featured Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            AI-Based Mobile Application for Early Detection of Child Malnutrition and Diet Recommendation System
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            An applied healthcare solution developed to bridge pediatric anthropometric diagnostics with
            accessible mobile computer vision and automated nutrition planning.
          </p>
        </div>

        {/* Highlight Showcase Box */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 md:p-8 overflow-hidden mb-10 shadow-xl shadow-black/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Visual Mockup */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 aspect-video lg:aspect-4/3">
                <img
                  src={FYP_PROJECT.image}
                  alt="Child Malnutrition Detection Mobile App"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-200 bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700/70">
                  <span className="font-semibold text-white">Flutter Client &amp; Flask Server</span>
                  <span className="mx-2 text-slate-500">·</span>
                  <span>Early Diagnostic Workflow</span>
                </div>
              </div>
            </div>

            {/* Right Column: Core Architecture & Required Buttons */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Integrated Diagnostic &amp; Dietary Guidance Pipeline
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Caregivers capture physical measurements and photographs of the child using the Flutter
                  mobile interface. The Python/Flask inference engine analyzes nutritional risk indicators
                  (such as stunting, wasting, and underweight indicators), and immediately formulates
                  culturally accessible dietary interventions.
                </p>
              </div>

              {/* Explicit Technology Specification */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Technology Stack:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <Smartphone className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">Flutter</div>
                      <div className="text-[11px] text-slate-400">Frontend Mobile UI</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <Server className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">Python / Flask</div>
                      <div className="text-[11px] text-slate-400">Backend Microservice</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                    <Cpu className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">AI / ML</div>
                      <div className="text-[11px] text-slate-400">Image Analysis</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Role Statement */}
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-slate-200">Engineering Role: </span>
                {FYP_PROJECT.role}
              </div>

              {/* REQUIRED FYP BUTTONS:
                  * View Project
                  * GitHub
                  * Demo
              */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onViewProject(FYP_PROJECT)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm shadow-indigo-600/30 transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Project</span>
                </button>

                <button
                  onClick={() => onOpenGithub(FYP_PROJECT)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <FolderGit2 className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                </button>

                <button
                  onClick={handleDemoClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-800/80 rounded-lg transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  <span>{showDemo ? 'Hide Interactive Demo' : 'Live Interactive Demo'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE FYP LIVE DEMO PANEL (Triggered by Demo button) */}
        {showDemo && (
          <div
            id="fyp-live-demo-panel"
            className="p-6 md:p-8 rounded-2xl bg-slate-900 border border-indigo-500/40 shadow-2xl transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                  <Activity className="w-4 h-4" />
                  <span>Interactive System Simulation</span>
                </div>
                <h3 className="text-xl font-bold text-white mt-1">
                  Malnutrition Diagnostic &amp; Dietary Recommendation Engine
                </h3>
              </div>
              <div className="text-xs text-slate-400 max-w-sm">
                Adjust test anthropometric parameters below to simulate the Flask inference engine and diet generator.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
              {/* Controls Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Patient Test Metrics (Flutter Input Mock):
                  </h4>

                  {/* Age slider */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Child Age:</span>
                      <span className="font-semibold text-white">{childAge} months</span>
                    </div>
                    <input
                      type="range"
                      min={6}
                      max={59}
                      value={childAge}
                      onChange={(e) => setChildAge(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                  </div>

                  {/* Weight slider */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Weight (kg):</span>
                      <span className="font-semibold text-white">{childWeight} kg</span>
                    </div>
                    <input
                      type="range"
                      min={4.0}
                      max={20.0}
                      step={0.1}
                      value={childWeight}
                      onChange={(e) => setChildWeight(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                  </div>

                  {/* Height slider */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Height (cm):</span>
                      <span className="font-semibold text-white">{childHeight} cm</span>
                    </div>
                    <input
                      type="range"
                      min={55}
                      max={115}
                      value={childHeight}
                      onChange={(e) => setChildHeight(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                  </div>

                  {/* MUAC slider */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Mid-Upper Arm Circumference (MUAC):</span>
                      <span className="font-semibold text-white">{muac} cm</span>
                    </div>
                    <input
                      type="range"
                      min={9.5}
                      max={16.5}
                      step={0.1}
                      value={muac}
                      onChange={(e) => setMuac(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                      <span className="text-red-400">&lt;11.5cm Severe</span>
                      <span className="text-amber-400">11.5-12.5cm Moderate</span>
                      <span className="text-emerald-400">&gt;12.5cm Normal</span>
                    </div>
                  </div>

                  {/* Run button */}
                  <button
                    onClick={runSimulation}
                    disabled={isAnalyzing}
                    className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isAnalyzing ? (
                      <>
                        <Activity className="w-4 h-4 animate-spin" />
                        <span>Processing Neural Model &amp; Anthropometrics...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Run Nutritional Diagnosis &amp; Diet Plan</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Results & Recommendation Column */}
              <div className="lg:col-span-7">
                {analysisResult && (
                  <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Diagnostic Evaluation Output
                      </span>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded font-medium ${
                          analysisResult.level === 'severe'
                            ? 'bg-red-950 text-red-300 border border-red-800'
                            : analysisResult.level === 'moderate'
                            ? 'bg-amber-950 text-amber-300 border border-amber-800'
                            : 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        }`}
                      >
                        {analysisResult.status}
                      </span>
                    </div>

                    {/* Stats metrics */}
                    <div className="grid grid-cols-3 gap-2.5 py-3 border-y border-slate-800 text-xs">
                      <div>
                        <div className="text-slate-400 text-[11px]">WFH Z-Score:</div>
                        <div className="font-semibold text-white font-mono">{analysisResult.wfhZScore} SD</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-[11px]">HFA Z-Score:</div>
                        <div className="font-semibold text-white font-mono">{analysisResult.hfaZScore} SD</div>
                      </div>
                      <div>
                        <div className="text-slate-400 text-[11px]">MUAC Reading:</div>
                        <div className="font-semibold text-white">{analysisResult.muacStatus}</div>
                      </div>
                    </div>

                    {/* Clinical Recommendations */}
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-2">
                        <Info className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Clinical Dietary Recommendations:</span>
                      </div>
                      <ul className="space-y-1.5">
                        {analysisResult.recommendations.map((rec, i) => (
                          <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Priority Nutrient-Dense Foods */}
                    <div className="pt-2">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-2">
                        <Utensils className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Targeted Food Interventions:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {analysisResult.priorityFoods.map((food, i) => (
                          <span
                            key={i}
                            className="text-xs text-emerald-300 bg-emerald-950/40 border border-emerald-800/60 px-2 py-0.5 rounded"
                          >
                            {food}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
