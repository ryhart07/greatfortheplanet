import { useEffect } from "react";

export function usePageTitle(title, icon) {
  useEffect(() => {
    document.title = `Greatfortheplanet | ${title}`;

    if (icon) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = icon;
    }
  }, [title, icon]);
}