import { ImageResponse } from 'next/og';

export const runtime = 'edge';

/**
 * Dynamic Open Graph Image Generator for Alicante Landing
 * 
 * INSTRUCCIONES DE USO:
 * ======================
 * 
 * OPCIÓN 1: Generar imagen con este endpoint
 * -------------------------------------------
 * 1. Ejecutar: npm run dev
 * 2. Visitar: http://localhost:3000/api/og-alicante
 * 3. Hacer clic derecho > "Guardar imagen como..." > og-alicante.png
 * 4. Colocar el archivo guardado en: /public/og-alicante.png
 * 5. Listo! Ya está referenciado en los metadatos de la página
 * 
 * OPCIÓN 2: Usar herramienta online (más fácil)
 * ----------------------------------------------
 * Ver archivo: GUIA-IMAGEN-OG-ALICANTE.md
 * 
 * OPCIÓN 3: Usar el SVG template
 * ------------------------------
 * 1. Abrir: /public/og-alicante-template.svg
 * 2. Convertir a PNG con: https://cloudconvert.com/svg-to-png
 * 3. Dimensiones: 1200x630px
 * 4. Guardar como: /public/og-alicante.png
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Optional: Allow dynamic subtitle via query params
    const subtitle = searchParams.get('subtitle') || 'Webs que Posicionan en Google\ny Generan Clientes Reales';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0a0d1e 0%, #1a1f3a 50%, #0f1229 100%)',
            fontFamily: 'system-ui, sans-serif',
            position: 'relative',
            padding: '60px 80px',
          }}
        >
          {/* Decorative gradient circles */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0, 194, 255, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              width: '350px',
              height: '350px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />

          {/* Logo/Brand */}
          <div
            style={{
              position: 'absolute',
              top: 40,
              left: 60,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <div
              style={{
                color: '#00C2FF',
                fontSize: 36,
                fontWeight: 'bold',
                letterSpacing: '-0.5px',
              }}
            >
              Corexia
            </div>
          </div>

          {/* Main Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              zIndex: 10,
            }}
          >
            {/* Title */}
            <h1
              style={{
                fontSize: 76,
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1.1,
                marginBottom: 30,
                maxWidth: '900px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              <span>Diseño Web en </span>
              <span
                style={{
                  background: 'linear-gradient(90deg, #00C2FF, #A855F7)',
                  backgroundClip: 'text',
                  color: 'transparent',
                  marginLeft: '16px',
                }}
              >
                Alicante
              </span>
              <span style={{ marginLeft: '12px' }}>🚀</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: 38,
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.4,
                marginBottom: 50,
                maxWidth: '800px',
              }}
            >
              {subtitle}
            </p>

            {/* Features */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
                fontSize: 26,
                color: 'rgba(255, 255, 255, 0.65)',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span>✓</span>
                <span>Next.js & SEO Local</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span>✓</span>
                <span>Consultoría Gratuita 48h</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span>✓</span>
                <span>Servicio toda la provincia</span>
              </div>
            </div>
          </div>

          {/* Footer URL */}
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              right: 60,
              color: '#00C2FF',
              fontSize: 24,
              fontWeight: 500,
            }}
          >
            www.corexia.es
          </div>

          {/* Decorative line */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, transparent, #00C2FF, #A855F7, transparent)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    const error = e as Error;
    console.log(`${error.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
