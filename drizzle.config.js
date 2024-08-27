/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:Ibo8x7mgcOMV@ep-round-hill-a5nsmclw.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require",
  },
};
