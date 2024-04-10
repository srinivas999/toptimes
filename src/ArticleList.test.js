
import { describe, it, expect } from '@jest/globals';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList', () => {
  const articles = [
    { id: 1, title: 'Article 1', abstract: 'Abstract 1', url: 'https://example.com/article1' },
    { id: 2, title: 'Article 2', abstract: 'Abstract 2', url: 'https://example.com/article2' },
  ];

  it('renders article titles correctly', () => {
    render(<ArticleList articles={articles} />);
    articles.forEach((article) => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
    });
  });

  it('expands article details when an article is clicked', () => {
    render(<ArticleList articles={articles} />);
    fireEvent.click(screen.getByText(articles[0].title));
    expect(screen.getByText(articles[0].abstract)).toBeInTheDocument();
    expect(screen.getByText('Read More')).toBeInTheDocument();
  });
});
