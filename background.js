chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openThumbnail",
    title: "Open Thumbnail",
    contexts: ["link", "image", "video"],
    documentUrlPatterns: ["*://*.youtube.com/*"]
  });
});

function extractVideoId(url) {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname.includes("youtube.com")) {
      return urlObj.searchParams.get("v");
    } else if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.substring(1);
    }
  } catch (e) {
    return null;
  }
  return null;
}

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openThumbnail") {
    let targetUrl = info.linkUrl || info.srcUrl || info.pageUrl;
    let videoId = extractVideoId(targetUrl);

    if (videoId) {
      const maxresUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      const hqUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

      fetch(maxresUrl, { method: 'HEAD' })
        .then(response => {
          if (response.ok && response.status !== 404) {
            chrome.tabs.create({ url: maxresUrl });
          } else {
            chrome.tabs.create({ url: hqUrl });
          }
        })
        .catch(() => {
          chrome.tabs.create({ url: hqUrl });
        });
    }
  }
});
