import { useEffect } from "react";

export function usePageTitle(title) {
  useEffect(() => {
    document.title = `Greatfortheplanet | ${title}`;
  }, [title]);
}