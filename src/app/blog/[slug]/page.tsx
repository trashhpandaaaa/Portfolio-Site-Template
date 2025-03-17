import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import React from 'react';

// Fix the type definition for the page props
interface BlogPostParams {
  params: {
    slug: string;
  };
}

// Use the correct typing for the generateMetadata function
export async function generateMetadata({ params }: BlogPostParams): Promise<Metadata> {
  // Fetch the blog post data based on the slug
  // This is a placeholder, replace with your actual data fetching logic
  const post = await fetchBlogPost(params.slug);
  
  return {
    title: post.title,
    description: post.description,
    // Add other metadata as needed
  };
}

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 'my-ghibli-inspiration',
    title: 'My Ghibli Inspiration Journey',
    excerpt: 'How the magical worlds of Studio Ghibli shaped my design philosophy and approach to digital art.',
    date: 'May 15, 2024',
    coverImage: '/images/blog-ghibli.jpg',
    readTime: '5 min read',
    tags: ['Design', 'Inspiration', 'Animation'],
    content: `
      <p>Ever since I first watched "My Neighbor Totoro" as a child, I've been captivated by the magical worlds created by Studio Ghibli. There's something special about how Hayao Miyazaki and his team blend fantasy with reality, creating spaces that feel both magical and familiar.</p>
      
      <p>The attention to detail in Ghibli films is extraordinary. From the way light filters through leaves to the thoughtful portrayal of everyday moments—preparing food, cleaning a house, or simply sitting in silence—these films celebrate the beauty in ordinary life.</p>
      
      <h2>Finding My Design Voice</h2>
      
      <p>As I grew into my career as a designer and developer, I found myself constantly returning to these films for inspiration. What could I learn from Ghibli's approach to storytelling and apply to digital experiences?</p>
      
      <p>I realized that what makes Ghibli films so captivating is their balance of:</p>
      
      <ul>
        <li>Attention to small details that create atmosphere</li>
        <li>Allowing space for quiet moments</li>
        <li>Balancing technology with nature</li>
        <li>Creating characters that feel real with genuine emotions</li>
      </ul>
      
      <h2>Translating Film to Web</h2>
      
      <p>When I design websites and apps, I try to incorporate these principles. How can a digital space feel both magical and down-to-earth? How can I add small, delightful details without overwhelming the user?</p>
      
      <p>My dust sprites animation is one small example of this approach—a subtle nod to "Spirited Away" that brings a touch of magic without distracting from the content.</p>
      
      <p>I believe the best digital experiences, like the best Ghibli films, leave room for quiet discovery and make users feel something genuine.</p>
    `
  },
  {
    id: 'creating-dust-sprites',
    title: 'Creating the Dust Sprites Animation',
    excerpt: 'A technical breakdown of how I built the animated dust sprites that float around the site.',
    date: 'May 10, 2024',
    coverImage: '/images/blog-sprites.jpg',
    readTime: '8 min read',
    tags: ['Animation', 'React', 'Tutorial'],
    content: `
      <p>One of my favorite Ghibli characters are the soot sprites (or susuwatari) from "My Neighbor Totoro" and "Spirited Away". These little dust balls with eyes are simple yet full of personality.</p>
      
      <p>In this post, I'll walk through how I created the animated dust sprites that float around this website using React and Framer Motion.</p>
      
      <h2>The Basic Approach</h2>
      
      <p>The animation consists of three main components:</p>
      
      <ol>
        <li>The sprite visual design</li>
        <li>Random movement patterns</li>
        <li>Performance optimization</li>
      </ol>
      
      <h2>Creating the Sprite Component</h2>
      
      <p>Each sprite is a React component with a simple black circle and two small white dots for eyes. I use SVG for crisp rendering at any size.</p>
      
      <pre><code>function DustSprite({ size, delay, duration }) {
  return (
    &lt;motion.div
      initial={{ scale: 0 }}
      animate={{ 
        scale: [0, 1, 1, 0],
        opacity: [0, 0.8, 0.8, 0] 
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }}
      className="absolute"
      style={{ width: size, height: size }}
    &gt;
      &lt;div className="relative w-full h-full bg-black rounded-full"&gt;
        &lt;div className="absolute w-1/5 h-1/5 bg-white rounded-full top-1/4 left-1/4"&gt;&lt;/div&gt;
        &lt;div className="absolute w-1/5 h-1/5 bg-white rounded-full top-1/4 right-1/4"&gt;&lt;/div&gt;
      &lt;/div&gt;
    &lt;/motion.div&gt;
  );
}</code></pre>
      
      <h2>Generating Random Movement</h2>
      
      <p>To create natural-looking motion, I use random values for:</p>
      
      <ul>
        <li>Starting position</li>
        <li>Movement trajectory</li>
        <li>Speed and timing</li>
        <li>Size variations</li>
      </ul>
      
      <p>The key is to make the movement feel organic rather than mechanical.</p>
      
      <h2>Performance Considerations</h2>
      
      <p>Animation can be resource-intensive, so I made several optimizations:</p>
      
      <ul>
        <li>Limiting the number of active sprites</li>
        <li>Using CSS transforms instead of position changes when possible</li>
        <li>Implementing lazy loading so sprites only animate when in viewport</li>
      </ul>
      
      <p>The result is a delightful little detail that brings a touch of Ghibli magic to the site without slowing it down.</p>
    `
  },
  {
    id: 'responsive-design-principles',
    title: 'Responsive Design Principles I Follow',
    excerpt: 'My approach to creating websites that work beautifully across all devices and screen sizes.',
    date: 'May 3, 2024',
    coverImage: '/images/blog-responsive.jpg',
    readTime: '6 min read',
    tags: ['Web Design', 'Responsive', 'CSS'],
    content: `
      <p>In today's multi-device world, responsive design isn't optional—it's essential. But creating truly responsive experiences goes beyond adding a few media queries. Here are the principles I follow in my work.</p>
      
      <h2>Mobile-First, But Not Mobile-Only</h2>
      
      <p>I start with the mobile experience, but I don't stop there. Each screen size deserves careful consideration:</p>
      
      <ul>
        <li>Mobile layouts focus on readability and essential actions</li>
        <li>Tablet layouts optimize touch interactions and reading comfort</li>
        <li>Desktop layouts take advantage of the additional space without feeling empty</li>
      </ul>
      
      <h2>Content Choreography</h2>
      
      <p>As screens resize, content shouldn't just stack—it should be choreographed to maintain hierarchy and flow:</p>
      
      <ul>
        <li>Critical content stays prominent across all breakpoints</li>
        <li>Secondary elements adapt more dramatically or may be hidden on smaller screens</li>
        <li>Navigation transforms thoughtfully, not just collapsing into a hamburger menu</li>
      </ul>
      
      <h2>Fluid Typography</h2>
      
      <p>Text should be comfortable to read at any size. I use a combination of:</p>
      
      <ul>
        <li>Base font sizes that scale with viewport width</li>
        <li>Minimum and maximum sizes to prevent extremes</li>
        <li>Line heights that adjust for readability</li>
      </ul>
      
      <pre><code>html {
  font-size: clamp(16px, 1vw + 14px, 22px);
}</code></pre>
      
      <h2>Performance as a Feature</h2>
      
      <p>Responsive sites must be fast on all devices, especially mobile with potentially slower connections:</p>
      
      <ul>
        <li>Images are appropriately sized and use modern formats</li>
        <li>Critical CSS is inlined for faster initial rendering</li>
        <li>JavaScript is loaded strategically and kept minimal</li>
      </ul>
      
      <p>By following these principles, I create sites that feel at home on any device—adapting not just in layout, but in overall experience.</p>
    `
  }
];

type BlogParams = {
  params: {
    slug: string;
  };
};

export default function BlogPost({ params }: BlogParams) {
  const post = blogPosts.find((post) => post.id === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          href="/blog"
          className="inline-flex items-center text-sage hover:text-forest dark:text-gray-400 dark:hover:text-green-400 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-sage dark:text-gray-400 mb-3">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-forest dark:text-green-400">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-forest/10 dark:bg-green-900/30 text-forest dark:text-green-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-video w-full mb-10 overflow-hidden rounded-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div 
            className="prose prose-lg dark:prose-invert prose-headings:text-forest dark:prose-headings:text-green-400 prose-a:text-forest dark:prose-a:text-green-400 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
}

// This is a placeholder function - replace with your actual data fetching logic
async function fetchBlogPost(slug: string) {
  // In a real app, you would fetch data from your API or CMS
  return {
    title: `Blog Post: ${slug}`,
    description: `Description for ${slug}`,
    content: `<p>This is the content for ${slug}</p>`
  };
}