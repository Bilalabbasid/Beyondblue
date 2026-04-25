import Image from "next/image";

// Renders a real country flag image from flagcdn.com (no emoji — reliable cross-platform)
interface FlagProps {
  code: string;   // ISO 3166-1 alpha-2 lowercase — e.g. "gb", "us", "ca"
  name: string;   // Alt text — e.g. "United Kingdom"
  size?: number;  // Width in px (height auto-calculated at ~0.67 ratio)
  className?: string;
}

export default function Flag({ code, name, size = 28, className = "" }: FlagProps) {
  return (
    <Image
      src={`https://flagcdn.com/w80/${code}.png`}
      width={size}
      height={Math.round(size * 0.67)}
      alt={`${name} flag`}
      className={`rounded-sm object-cover inline-block flex-shrink-0 ${className}`}
      unoptimized
    />
  );
}

// Lookup table: country slug → ISO code
export const FLAG_CODES: Record<string, string> = {
  uk:          "gb",
  usa:         "us",
  canada:      "ca",
  australia:   "au",
  italy:       "it",
  spain:       "es",
  germany:     "de",
  france:      "fr",
  sweden:      "se",
  hungary:     "hu",
  netherlands: "nl",
  "new-zealand": "nz",
};

// Used in Hero floating cards
export const CARD_FLAG_CODES: Record<string, string> = {
  "🇨🇦": "ca",
  "🇬🇧": "gb",
  "🇩🇪": "de",
  "🇺🇸": "us",
  "🇦🇺": "au",
  "🇮🇹": "it",
  "🇪🇸": "es",
  "🇫🇷": "fr",
  "🇸🇪": "se",
  "🇭🇺": "hu",
  "🇳🇱": "nl",
  "🇳🇿": "nz",
};
