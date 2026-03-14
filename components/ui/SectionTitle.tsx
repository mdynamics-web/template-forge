/**
 * @file SectionTitle.tsx
 * @description
 * -----------------------------------------------------
 * Archivo que contiene los estilos para los títulos de las secciones
 * -----------------------------------------------------
 * @version 0.0.1a
 * @created 2026-03-07
 * @author Corexia
 * @author Mohammed Derfoufi
 * @copyright © Corexia
 * @license Private
 * */
export interface SectionTitleProps {
  firstTitle: string;
  secondTitle: string;
  className?: string;
  description?: string;
}

export default function SectionTitle({
  firstTitle,
  secondTitle,
  className,
  description
}: SectionTitleProps) {
  return (
    <>
    <h2 className={`${className ? className : "font-display font-bold text-3xl md:text-5xl text-foreground mt-3"}`}>
      {firstTitle} <br className="hidden lg:block" />{" "}
      <span className="gradient-text">{secondTitle}</span>
    </h2>
    {description && <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">{description}</p>}
    </>
    
  );
}
