
import { describe, it, expect } from '@jest/globals';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ArticleDetails from './ArticleDetails';

describe('ArticleDetails', () => {
  it('displays "Select an article to view details" when article is null', () => {
    render(<ArticleDetails article={null} />);
    expect(screen.getByText('Select an article to view details')).toBeInTheDocument();
  });

  it('displays article details when article is provided', () => {
    const article = {
      title: 'Test Article',
      abstract: 'This is a test article.',
      url: 'https://example.com/test-article',
    };
    render(<ArticleDetails article={article} />);
    expect(screen.getByText(article.abstract)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /read more/i })).toHaveAttribute('href', article.url);
  });
});
