import { defineConfig } from 'drizzle-kit';
export default defineConfig({
	schema: './src/lib/server/schemas.ts',
	out: './drizzle',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.DATABASE_URL!
	}
});
