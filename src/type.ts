const Devices = ["Web", "iOS", "Android", "TV", "Car", "Watch", "VR"] as const;

/**
 * This structure in contrast to Adele in purpose does not include too many fields.
 *
 * This is to avoid sync issues, as many things can change in the repositories/code side of things,
 * but are not reflected properly as the data are not updated that frequently.
 */
export type CompanyData = {
  /** The name of the company */
  name: string;
  /**
   * The favicon of the company from Clearbit:
   * https://clearbit.com/logo
   * Right-click on the logo and hit "Copy Image Address"
   */
  // Not all companies are in Clearbit, like 18F so let users add proper link
  // logo?: `https://logo.clearbit.com/${string}`;
  logo?: string;
  /**
   * The name of the system the company is using
   * Example: Needle
   */
  systemName?: string;
  /**
   * Devices the company is targeting
   * If any missing please add them here
   * Example: Web, iOS, Android, TV
   */
  devices?: (typeof Devices)[number][];
  /**
   * Where the code documentation lives
   * Example: https://eui.elastic.co/
   */
  codeDocumentation?: string;
  /**
   * Where the code lives if it's open source
   * Example: https://github.com/neo4j/neo4j-design
   */
  codeRepository?: string;
  /**
   * If a Figma UI kit is provided.
   * Example: https://www.figma.com/community/file/1009804548779380471/Neo4j-Design-System
   */
  figmaKit?: string;
  /**
   * URL of the brand guidelines
   * Example: https://www.neo4j.design/40a8cff71/p/46db15-brand-overview
   */
  brandGuidelines?: string;
  /**
   * URL of the voice & tone page
   * Example: https://www.neo4j.design/40a8cff71/p/57fca7-voice-and-personality
   */
  voiceAndTone?: string;
  /**
   * If the system is taking use of design tokens
   */
  designTokens?: boolean;
  /**
   * Storybook Link of the system
   * Example: https://mongodb.github.io/leafygreen-ui/
   */
  storybook?: string;
  /**
   * If the design system is multi-brand
   */
  multiBrand?: boolean;
};
