import BrandLoader from "@/components/ui/brand-loader";

export default function Loading() {
  return (
    <div className="min-h-[55vh] flex flex-col items-center justify-center gap-6">
      <BrandLoader size="lg" />
      <p className="text-sm text-muted-foreground">Cargando...</p>
    </div>
  );
}
