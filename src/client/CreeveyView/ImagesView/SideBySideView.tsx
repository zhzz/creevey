import React from 'react';
import { css } from '@emotion/core';
import { ViewProps } from './ImagesView';

export function SideBySideView({ actual, diff, expect }: ViewProps): JSX.Element {
  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-between;
      `}
    >
      <a href={expect} target="_blank" rel="noopener noreferrer">
        <img
          alt="expect"
          src={expect}
          css={css`
            margin: 20px 0;
            border: 1px solid #419d14;
            max-width: 100%;
          `}
        />
      </a>
      <a href={diff} target="_blank" rel="noopener noreferrer">
        <img
          alt="diff"
          src={diff}
          css={css`
            margin: 20px 0;
            border: 1px solid #1d85d0;
            max-width: 100%;
          `}
        />
      </a>
      <a href={actual} target="_blank" rel="noopener noreferrer">
        <img
          alt="actual"
          src={actual}
          css={css`
            margin: 20px 0;
            border: 1px solid #d9472b;
            max-width: 100%;
          `}
        />
      </a>
    </div>
  );
}