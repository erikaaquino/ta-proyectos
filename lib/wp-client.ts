// lib/wp-client.ts
const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'http://localhost:8881/wp-json';

interface WPPage {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  featured_media?: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

interface WPPost extends WPPage {
  date: string;
  modified: string;
}

/**
 * Fetch a page by slug from WordPress
 * @param slug - page slug (e.g., 'home', 'about', 'contact')
 */
export async function fetchPageBySlug(slug: string): Promise<WPPage | null> {
  try {
    const url = `${WP_API_URL}/wp/v2/pages?slug=${slug}&_embed`;
    const res = await fetch(url, {
      next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
    });

    if (!res.ok) {
      console.error(`WP fetch error: ${res.status} ${url}`);
      return null;
    }

    const data = (await res.json()) as WPPage[];
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error fetching page from WordPress:', error);
    return null;
  }
}

/**
 * Fetch all posts with pagination
 */
export async function fetchPosts(page = 1, per_page = 10): Promise<WPPost[]> {
  try {
    const url = `${WP_API_URL}/wp/v2/posts?page=${page}&per_page=${per_page}&_embed`;
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`WP fetch error: ${res.status} ${url}`);
      return [];
    }

    return (await res.json()) as WPPost[];
  } catch (error) {
    console.error('Error fetching posts from WordPress:', error);
    return [];
  }
}

/**
 * Fetch custom post type (e.g., 'projects')
 */
export async function fetchCustomPostType(
  cptSlug: string,
  per_page = 100
): Promise<WPPage[]> {
  try {
    const url = `${WP_API_URL}/wp/v2/${cptSlug}?per_page=${per_page}&_embed`;
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`WP fetch error: ${res.status} ${url}`);
      return [];
    }

    return (await res.json()) as WPPage[];
  } catch (error) {
    console.error(`Error fetching ${cptSlug} from WordPress:`, error);
    return [];
  }
}
