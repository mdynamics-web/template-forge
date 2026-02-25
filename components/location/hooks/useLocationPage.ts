import { useEffect, useState, useCallback, useMemo } from "react";
import { CityType } from "../types/location.types";
import { getLocationData } from "../data/locationData";

interface UseLocationPageProps {
  city?: CityType;
  t: (key: string) => string;
}

export const useLocationPage = ({ city = "alicante", t }: UseLocationPageProps) => {
  const [stickyVisible, setStickyVisible] = useState(false);

  // Memoize location data to avoid recalculating on every render
  const locationData = useMemo(() => getLocationData(city, t), [city, t]);

  // Setup meta tags
  useEffect(() => {
    document.title = locationData.metaTitle;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", locationData.metaDescription);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = locationData.metaDescription;
      document.head.appendChild(meta);
    }
    
    // Scroll to top on mount
    window.scrollTo(0, 0);

    return () => {
      // Cleanup if needed
    };
  }, [locationData.metaTitle, locationData.metaDescription]);

  // Handle sticky CTA visibility
  useEffect(() => {
    const handleScroll = () => {
      setStickyVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to contact form
  const scrollToForm = useCallback(() => {
    const element = document.getElementById("location-contact");
    element?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return {
    locationData,
    stickyVisible,
    scrollToForm,
  };
};
