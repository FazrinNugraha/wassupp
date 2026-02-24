import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function RecentActivities() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <section
            id="decisions"
            className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 pb-12 sm:pb-16 scroll-mt-20 transition-colors duration-300"
            style={{ backgroundColor: 'var(--bg-primary)' }}
        >
            <div className="space-y-6 pt-12" style={{ borderTop: '2px solid var(--border-color)' }}></div>
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Recent Activities</h2>
            </div>

            <div className="space-y-8">
                {/* Decision 1 */}
                <div className="space-y-3">
                    <p
                        className="text-sm font-medium uppercase tracking-wide"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        PHASE : FEB 2026 - JUN 2026
                    </p>
                    <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                        Coding Camp 2026 powered by DBS Foundation
                    </h2>
                    <p
                        className="text-justify leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        Got into Coding Camp 2026 powered by DBS Foundation and chose the AI Engineer track. Currently going through an intensive 4-5 month program learning machine learning, deep learning, and MLOps.
                    </p>
                </div>

                {/* Decision 2 */}
                <div className="space-y-3 pt-8 ">
                    <p
                        className="text-sm font-medium uppercase tracking-wide"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        PHASE : SEPT 2025
                    </p>
                    <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                        Finalist Hackaton x Amartha 2025
                    </h3>
                    <p
                        className="text-justify leading-relaxed"
                        style={{ color: 'var(--text-secondary)' }}
                    >
                        My first hackathon - made it to Finalist Top 15 out of 150+ teams. Spent 24 hours building SocialCollateral AI as the frontend dev in a 5-person team. We created a system that uses graph analytics, NLP, and computer vision to help microfinance lenders assess group trust.
                    </p>
                </div>

            </div>
        </section>
    );
}
