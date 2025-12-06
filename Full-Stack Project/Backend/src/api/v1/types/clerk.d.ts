import "@clerk/express";

declare module "express-serve-static-core" {
  interface Request {
    auth?: {
      userId: string | null;
      sessionId: string | null;
      getToken?: (token: string) => Promise<string | null>;
    };
  }
}
