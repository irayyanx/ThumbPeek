# ThumbPeek

ThumbPeek is a browser extension that adds an "Open Thumbnail" option to the right-click context menu on YouTube video links and thumbnails. It extracts the video ID from the right-clicked element and opens the full-resolution thumbnail (`maxresdefault.jpg`) in a new tab. If the maximum resolution thumbnail is unavailable, it automatically falls back to the high-quality thumbnail (`hqdefault.jpg`).

## Features
- Right-click integration on `youtube.com`
- Extracts high-resolution (`maxresdefault.jpg`) and fallback (`hqdefault.jpg`) thumbnails directly from video links or existing thumbnails.
- Compatible with Google Chrome (Manifest V3) and Mozilla Firefox (Manifest V2).

## Installation

### Google Chrome
1. Download or clone this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** using the toggle switch in the top right corner.
4. Click the **Load unpacked** button and select the `ThumbPeek` repository directory.

### Mozilla Firefox
1. Download or clone this repository.
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Click on the **Load Temporary Add-on...** button.
4. Select the `manifest_firefox.json` file located in the `ThumbPeek` directory.

## Usage
1. Open YouTube (`https://www.youtube.com`).
2. Right-click on any video thumbnail or a link leading to a YouTube video.
3. Select the **"Open Thumbnail"** option from the context menu.
4. The thumbnail will open in a new tab.