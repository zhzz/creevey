import React from "react";
import { css } from "@emotion/core";
import { SideBySideView } from "./SideBySideView";
import { SwapView } from "./SwapView";
import { SlideView } from "./SlideView";
import { BlendView } from "./BlendView";

export interface ViewProps {
  actual: string;
  diff: string;
  expect: string;
}

export type ViewMode = "side-by-side" | "swap" | "slide" | "blend";

interface ImagesViewProps {
  imageName: string;
  url: string;
  actual: string;
  diff?: string;
  expect?: string;
  approved: boolean;
  mode: ViewMode;
}

const views = {
  "side-by-side": SideBySideView,
  swap: SwapView,
  slide: SlideView,
  blend: BlendView
};

export class ImagesView extends React.Component<ImagesViewProps> {
  render() {
    const { url, actual, diff, expect, approved, mode } = this.props;
    const ViewComponent = views[mode];
    return (
      <div
        css={css`
          background: #eee;
          text-align: center;
          padding: 20px;
        `}
      >
        {approved ? (
          <a href={`${url}/${actual}`} target="_blank">
            <img
              src={`${url}/${actual}`}
              css={css`
                border: 1px solid #419d14;
                max-width: 100%;
              `}
            />
          </a>
        ) : (
          <>
            {diff && expect ? (
              <ViewComponent actual={`${url}/${actual}`} diff={`${url}/${diff}`} expect={`${url}/${expect}`} />
            ) : (
              <a href={`${url}/${actual}`} target="_blank">
                <img
                  src={`${url}/${actual}`}
                  css={css`
                    border: 1px solid #419d14;
                    margin-bottom: 20px;
                    max-width: 100%;
                  `}
                />
              </a>
            )}
          </>
        )}
      </div>
    );
  }
}
