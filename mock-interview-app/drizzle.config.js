/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview_owner:IXCVgPv0D3Aw@ep-super-tree-a522oxlo.us-east-2.aws.neon.tech/ai-interview?sslmode=require',
    }
  };