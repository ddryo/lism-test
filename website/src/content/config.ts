import { defineCollection, z } from 'astro:content';

// z: Zodを使ったFrontmatterの受け取り

// Type-check frontmatter using a schema
const docsSchema = 
	z.object({
		// type: 'content',
		title: z.string(),
		description: z.string(),
		i18n: z.boolean().default(false),
		heroImage: z.string().optional(),
	});


const docs = defineCollection({
	type: 'content',
	schema: docsSchema,
});

export const collections = { docs };
