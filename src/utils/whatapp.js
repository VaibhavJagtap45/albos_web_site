/** WhatsApp helpers */

export const WA_NUMBER = "919766650411";

/**
 * Returns a WhatsApp deep-link URL.
 * @param {string} message – Pre-filled text (optional)
 */
export function waLink(message = "Hi, I'd like to discuss a project with Albos Technologies.") {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Opens WhatsApp in a new tab.
 */
export function openWhatsApp(message) {
  window.open(waLink(message), "_blank", "noopener,noreferrer");
}