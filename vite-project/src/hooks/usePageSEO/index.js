import { useEffect } from "react";

const usePageSEO = ({
    title,
    description = 'Default description',
    keywords = ['default', 'keywords'],
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
}) => {
    useEffect(() => {
        document.title = title || 'Default Title';
        setMetaTag('name', 'description', description);
        setMetaTag('name', 'keywords', keywords.join(', '));
        setMetaTag('property', 'og:title', ogTitle || title || 'Default OG Title');
        setMetaTag('property', 'og:description', ogDescription || description);
        setMetaTag('property', 'og:image', ogImage || 'https://example.com/default-image.jpg');
        setMetaTag('property', 'og:url', ogUrl || window.location.href);
    }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl]);

    const setMetaTag = (attr, key, content) => {
        if (content) {
            let element = document.querySelector(`meta[${attr}="${key}"]`);

            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, key);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        }
    };
};

export default usePageSEO;
