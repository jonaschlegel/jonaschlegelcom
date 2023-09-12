import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogSearch = ({ blogItems }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (blogItems && !Array.isArray(blogItems)) {
      const blogArray = Object.values(blogItems);
      setSuggestions(blogArray);
    } else {
      setSuggestions(blogItems);
    }
  }, [blogItems]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.length > 0) {
      const regex = new RegExp(`^${query}`, 'i');
      setSuggestions(suggestions.filter(blog => blog.keywords && blog.keywords.some(keyword => regex.test(keyword))));
    } else {
      setSuggestions([]);
    }
  };

  console.log('Suggestions:', JSON.stringify(suggestions, null, 2));

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search blogs..." />
      {searchTerm.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>
              {/* Extract slug and title from the suggestion object */}
              <Link href="/blog/[slug]" as={`/blog/${suggestion.slug}`}>{suggestion.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default BlogSearch;
