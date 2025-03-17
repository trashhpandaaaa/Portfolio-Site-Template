import Link from 'next/link';
import Image from 'next/image';

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 'my-ghibli-inspiration',
    title: 'My Ghibli Inspiration Journey',
    excerpt: 'How the magical worlds of Studio Ghibli shaped my design philosophy and approach to digital art.',
    date: 'May 15, 2024',
    coverImage: '/images/blog-ghibli.jpg',
    readTime: '5 min read',
    tags: ['Design', 'Inspiration', 'Animation']
  },
  {
    id: 'creating-dust-sprites',
    title: 'Creating the Dust Sprites Animation',
    excerpt: 'A technical breakdown of how I built the animated dust sprites that float around the site.',
    date: 'May 10, 2024',
    coverImage: '/images/blog-sprites.jpg',
    readTime: '8 min read',
    tags: ['Animation', 'React', 'Tutorial']
  },
  {
    id: 'responsive-design-principles',
    title: 'Responsive Design Principles I Follow',
    excerpt: 'My approach to creating websites that work beautifully across all devices and screen sizes.',
    date: 'May 3, 2024',
    coverImage: '/images/blog-responsive.jpg',
    readTime: '6 min read',
    tags: ['Web Design', 'Responsive', 'CSS']
  },
];

export default function Blog() {
  return (
    <main className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-forest dark:text-green-400">Blog</h1>
          <p className="text-xl text-sage dark:text-gray-300 max-w-2xl mx-auto">
            Thoughts, tutorials, and musings about design, development, and the magical world of Studio Ghibli
          </p>
        </div>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.id}`} className="block">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="relative aspect-video md:aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 text-sm text-sage dark:text-gray-400 mb-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-semibold mb-3 group-hover:text-forest dark:group-hover:text-green-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
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
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
} 