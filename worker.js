/**
 * RUDEN TRANSPORT — Cloudflare Worker for SEO Optimization
 * Добавляет правильные headers для Google ботов и AI crawlers
 */

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    
    // Clone response to add headers
    const newResponse = new Response(response.body, response);
    
    // SEO Headers
    newResponse.headers.set('X-Robots-Tag', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    newResponse.headers.set('X-Content-Type-Options', 'nosniff');
    newResponse.headers.set('X-Frame-Options', 'SAMEORIGIN');
    newResponse.headers.set('X-XSS-Protection', '1; mode=block');
    
    // Cache headers for performance (Core Web Vitals)
    if (request.url.includes('.js') || request.url.includes('.css')) {
      newResponse.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (request.url.includes('.html')) {
      newResponse.headers.set('Cache-Control', 'public, max-age=3600');
    } else if (request.url.includes('.jpg') || request.url.includes('.png') || request.url.includes('.webp')) {
      newResponse.headers.set('Cache-Control', 'public, max-age=2592000');
    }
    
    // Allow AI crawlers
    newResponse.headers.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
    
    // CORS headers
    newResponse.headers.set('Access-Control-Allow-Origin', '*');
    
    // Security headers
    newResponse.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    return newResponse;
  },
};
