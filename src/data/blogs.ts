export interface IBlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  profile: string;
  tags: string[];
  description: string;
  coverImage: string;
  excerpt: string;
  readTime: string;
  category: string;
}

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Building Responsive Layouts with Modern CSS Grid',
    excerpt:
      'Learn how to create complex, responsive layouts using CSS Grid. This comprehensive guide covers everything from basic grid concepts to advanced techniques for creating magazine-style layouts.',
    coverImage: '/placeholder.svg?height=600&width=1200',
    date: 'March 15, 2024',
    category: 'CSS',
    readTime: '8 min read',
    content: `
      <h2>Introduction to CSS Grid</h2>
      <p>CSS Grid Layout is a two-dimensional layout system designed specifically for the web. It allows you to organize content into rows and columns and has many features that make building complex layouts straightforward.</p>
      
      <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning. To get started with CSS Grid, you need to define a container element as a grid with <code>display: grid</code>, set the column and row sizes with <code>grid-template-columns</code> and <code>grid-template-rows</code>, and then place its child elements into the grid with properties like <code>grid-column</code> and <code>grid-row</code>.</p>
      
      <h2>Basic Grid Concepts</h2>
      <p>Before diving into complex layouts, it's important to understand the basic concepts of CSS Grid:</p>
      
      <h3>Grid Container</h3>
      <p>The element on which <code>display: grid</code> is applied. It's the direct parent of all the grid items.</p>
      
      <pre><code>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 200px;
  gap: 20px;
}
      </code></pre>
      
      <h3>Grid Items</h3>
      <p>The children of the grid container. Grid items are placed in the grid according to the grid lines.</p>
      
      <h3>Grid Lines</h3>
      <p>The dividing lines that make up the structure of the grid. They can be either vertical ("column grid lines") or horizontal ("row grid lines").</p>
      
      <h2>Creating a Basic Grid Layout</h2>
      <p>Let's start with a simple example of a grid layout with three columns and two rows:</p>
      
      <pre><code>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
  gap: 20px;
}
      </code></pre>
      
      <p>This creates a grid with three equal-width columns (each taking up 1 fraction of the available space) and two rows with specific heights. The gap property adds spacing between grid items.</p>
      
      <h2>Advanced Grid Techniques</h2>
      <p>Once you're comfortable with the basics, you can explore more advanced techniques:</p>
      
      <h3>Grid Template Areas</h3>
      <p>The <code>grid-template-areas</code> property allows you to name grid areas and create layouts in a more visual way:</p>
      
      <pre><code>
.container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar content aside"
    "footer footer footer";
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }
      </code></pre>
      
      <h3>Auto-placement</h3>
      <p>CSS Grid has powerful auto-placement algorithms that can automatically place items in the grid based on their order in the source code and available space.</p>
      
      <h2>Responsive Grid Layouts</h2>
      <p>CSS Grid really shines when it comes to creating responsive layouts. You can use media queries to change the grid structure based on the viewport size:</p>
      
      <pre><code>
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: 1fr 2fr 1fr;
  }
}
      </code></pre>
      
      <h2>Conclusion</h2>
      <p>CSS Grid is a powerful tool for creating complex, responsive layouts. By understanding the basic concepts and exploring advanced techniques, you can create sophisticated designs that adapt to different screen sizes and devices.</p>
      
      <p>In this article, we've covered the fundamentals of CSS Grid and explored some advanced techniques. With practice, you'll be able to create complex layouts with ease.</p>
    `,
    tags: ['CSS', 'Web Design', 'Responsive Design', 'Frontend Development'],
    relatedPosts: ['2', '3', '4'],
  },
  {
    id: '2',
    title: 'State Management in React: Context API vs. Redux',
    excerpt:
      "Comparing two popular state management solutions in React. We'll explore when to use Context API for simpler applications and when Redux makes more sense for complex state requirements.",
    coverImage: '/placeholder.svg?height=600&width=1200',
    date: 'February 28, 2024',
    category: 'React',
    readTime: '10 min read',
  },
  {
    id: '3',
    title: 'Optimizing Next.js Applications for Performance',
    excerpt:
      'Discover practical techniques to improve the performance of your Next.js applications. From image optimization to code splitting, learn how to create lightning-fast user experiences.',
    coverImage: '/placeholder.svg?height=600&width=1200',
    date: 'January 12, 2024',
    category: 'Next.js',
    readTime: '12 min read',
  },
  {
    id: '4',
    title: 'Creating Accessible UI Components from Scratch',
    excerpt:
      'A deep dive into building UI components with accessibility in mind. Learn how to create components that are usable by everyone, including people with disabilities.',
    coverImage: '/placeholder.svg?height=600&width=1200',
    date: 'December 5, 2023',
    category: 'Accessibility',
    readTime: '15 min read',
  },
];
