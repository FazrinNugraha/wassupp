import React from "react";

export default function RecentActivities() {
    return (
        <section id="decisions" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-20">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#FAFAFA]">Recent Activities</h2>
                {/* <a
          href="#all-decisions"
          className="text-[#A3A3A3] hover:text-[#FAFAFA] font-medium hover:underline"
        >
          View all
        </a> */}
            </div>

            <div className="space-y-8">
                {/* Decision 1 */}
                <div className="space-y-3">
                    <p className="text-sm text-[#A3A3A3] font-medium text-[#A3A3A3] uppercase tracking-wide">
                        PHASE : FEB 2026 - JUN 2026
                    </p>
                    <h2 className="text-2xl font-bold text-[#FAFAFA]">
                        Coding Camp 2026 powered by DBS Foundation
                    </h2>
                    <p className="text-[#A3A3A3] text-justify leading-relaxed">
                        Got into Coding Camp 2026 powered by DBS Foundation and chose the AI Engineer track. Currently going through an intensive 4-5 month program learning machine learning, deep learning, and MLOps.
                    </p>
                </div>

                

                {/* Decision 2 */}
                <div className="space-y-3 pt-8 border-t-2 border-[#262626]">
                    <p className="text-sm text-[#A3A3A3] font-medium text-[#A3A3A3] uppercase tracking-wide">
                        PHASE : SEPT 2025
                    </p>
                    <h3 className="text-2xl font-bold text-[#FAFAFA]">
                        Finalist Hackaton x Amartha 2025
                    </h3>
                    <p className="text-[#A3A3A3] text-justify leading-relaxed">
                        My first hackathon—made it to top 15 out of 200+ teams. Spent 24 hours building SocialCollateral AI as the frontend dev in a 5-person team. We created a system that uses graph analytics, NLP, and computer vision to help microfinance lenders assess group trust.
                    </p>
                </div>
                
            </div>
        </section>
    );
}
