import { serial, varchar, text } from "drizzle-orm/pg-core"; // Use pg-core for PostgreSQL
import { pgTable } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mockInterview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(), // Assuming this is a text field
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt').notNull(),
    mockId: varchar('mockId').notNull()
});
