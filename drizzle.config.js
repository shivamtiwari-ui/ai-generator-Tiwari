/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:J4RwOzbijg1B@ep-solitary-leaf-a5ilsnn7.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };
  