# Projects Feature

This folder keeps all project-page content in one place so new projects can be added without rewiring the routes.

## Structure

- `data/projects.ts` - project catalog, filter labels, related projects, and detail-page content.
- `components/` - shared project UI blocks for future reuse.
- `index.ts` - exports for routes and other app code.

## Add a new project

1. Add a new project entry to `data/projects.ts`.
2. Add the matching slug to the route link on the Projects page.
3. If needed, add the project to `relatedProjects` and gallery images in the same data file.
