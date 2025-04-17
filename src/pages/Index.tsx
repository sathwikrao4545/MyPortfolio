
import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const sectionsRef = useRef<HTMLElement[]>([]);

  // Add smooth scrolling animation when clicking on navigation links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.closest('a')?.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
          
          // Update URL without page refresh
          window.history.pushState(null, '', href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Add intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            
            // Add specific animation class based on section id
            const sectionId = entry.target.id;
            if (sectionId === 'home') {
              entry.target.classList.add('animate-fade-in');
            } else if (sectionId === 'about') {
              entry.target.classList.add('animate-scale-in');
            } else if (sectionId === 'skills') {
              entry.target.classList.add('animate-bounce-in');
            } else if (sectionId === 'experience') {
              entry.target.classList.add('animate-slide-in');
            } else if (sectionId === 'projects') {
              entry.target.classList.add('animate-bounce-in');
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the section is visible
    );

    // Get all section elements
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
