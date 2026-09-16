export {};

declare global {
  /** Tenant-facing settings object the embed seeds from `data-*` attrs and
   *  mutates in place on every `argide('update', …)`. */
  interface ArgideSettings {
    user_id?: string;
    name?: string;
    email?: string;
    visibility?: boolean;
    [key: string]: unknown;
  }

  interface Window {
    argide?: (command: string, payload?: unknown) => void;
    ArgideSettings?: ArgideSettings;
  }
}
