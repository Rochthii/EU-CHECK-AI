import { HeroStorySection } from "@/components/landing/HeroStorySection";
import { PainPointsStorySection } from "@/components/landing/PainPointsStorySection";
import { SolutionEngineSection } from "@/components/landing/SolutionEngineSection";
import { WorkflowStepsSection } from "@/components/landing/WorkflowStepsSection";
import { RoiCalculatorSection } from "@/components/landing/RoiCalculatorSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FaqSection } from "@/components/landing/FaqSection";

export default function LandingPage() {
  return (
    <>
      <HeroStorySection />
      <PainPointsStorySection />
      <SolutionEngineSection />
      <WorkflowStepsSection />
      <RoiCalculatorSection />
      <PricingSection />
      <FaqSection />
    </>
  );
}
