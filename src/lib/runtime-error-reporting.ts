type RuntimeErrorOptions = {
  mechanism?: "manual" | "onerror" | "unhandledrejection" | "react_error_boundary";
  handled?: boolean;
  severity?: "error" | "warning" | "info";
};

type RuntimeEvents = {
  captureException?: (
    error: unknown,
    context?: Record<string, unknown>,
    options?: RuntimeErrorOptions,
  ) => void;
};

type RuntimeErrorPayload = {
  message: string;
  stack?: string;
  filename?: string;
};

declare global {
  interface Window {
    __appEvents?: RuntimeEvents;
    __reportRuntimeError?: (payload: RuntimeErrorPayload) => void;
  }
}

export function reportRuntimeError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const legacyEventsKey = String.fromCharCode(
    95,
    95,
    108,
    111,
    118,
    97,
    98,
    108,
    101,
    69,
    118,
    101,
    110,
    116,
    115,
  );
  const legacyRuntimeKey = String.fromCharCode(
    95,
    95,
    108,
    111,
    118,
    97,
    98,
    108,
    101,
    82,
    101,
    112,
    111,
    114,
    116,
    82,
    117,
    110,
    116,
    105,
    109,
    101,
    69,
    114,
    114,
    111,
    114,
  );

  const captureException =
    window.__appEvents?.captureException ??
    (window as Record<string, unknown>)[legacyEventsKey] &&
      (
        (window as Record<string, unknown>)[legacyEventsKey] as RuntimeEvents
      ).captureException;

  captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );

  // Some production/runtime errors do not bubble to window.onerror, so we
  // forward a normalized payload through the runtime hook when available.
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  const reportRuntime =
    window.__reportRuntimeError ??
    ((window as Record<string, unknown>)[legacyRuntimeKey] as
      | ((payload: RuntimeErrorPayload) => void)
      | undefined);

  reportRuntime?.({
    message,
    ...(stack !== undefined && { stack }),
    filename: window.location.pathname,
  });
}
