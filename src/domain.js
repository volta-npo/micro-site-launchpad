export const domain = {
    "kind": "site-builder",
    "title": "Micro-Site Launchpad",
    "purpose": "A purpose-built site builder interface for opinionated one-week website tools for restaurants, salons, tutors, local services, and nonprofits.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Site content pack",
    "metricLabels": [
        "Launch Readiness",
        "Content Completeness",
        "Accessibility Basics"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Riverside Community Bakery",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "days from intake to publishable first draft",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Industry preset selected",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "Static content pack",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Industry preset selected",
        "Page map generated",
        "Hero copy drafted",
        "Services/offers complete",
        "Contact/CTA present",
        "Schema snippet generated",
        "Asset inventory complete",
        "Handoff checklist complete",
        "Homepage wireframe generated",
        "SEO metadata drafted",
        "Publish checklist completed",
        "Owner edit guide created"
    ],
    "artifacts": [
        "Static content pack",
        "Sitemap",
        "Owner handoff checklist",
        "One-page site brief",
        "SEO metadata sheet",
        "Owner edit guide"
    ],
    "checks": [
        "CTA/contact required",
        "Alt text required for assets",
        "Meta descriptions under limits",
        "Every page needs a primary CTA",
        "Owner edit guide required for handoff",
        "Publish checklist needs rollback contact"
    ],
    "modules": [
        {
            "name": "Site brief generator",
            "description": "Converts owner goals, audience, offer, proof, and CTA into a one-page site strategy.",
            "metrics": [
                "Brief completeness",
                "Audience clarity",
                "CTA confidence"
            ],
            "deliverable": "Owner-approved site brief"
        },
        {
            "name": "Page assembly planner",
            "description": "Builds homepage/offer/contact sections, required copy blocks, and asset placeholders.",
            "metrics": [
                "Sections ready",
                "Asset gaps",
                "Copy readiness"
            ],
            "deliverable": "Micro-site page map"
        },
        {
            "name": "Launch QA cockpit",
            "description": "Tracks mobile, accessibility, metadata, analytics, forms, and DNS handoff checks.",
            "metrics": [
                "QA pass rate",
                "Launch blockers",
                "Owner dependencies"
            ],
            "deliverable": "Launch checklist"
        },
        {
            "name": "Owner training pack",
            "description": "Packages edit instructions, renewal reminders, content cadence, and support boundaries.",
            "metrics": [
                "Training coverage",
                "Maintenance tasks",
                "Support clarity"
            ],
            "deliverable": "Owner handoff guide"
        }
    ],
    "plays": [
        {
            "name": "One-page launch sprint",
            "trigger": "Client needs a credible first website quickly.",
            "outcome": "A launchable one-page site map with copy, CTA, and proof assets."
        },
        {
            "name": "Offer-page conversion pass",
            "trigger": "The site exists but does not explain the offer or next step.",
            "outcome": "Hero, proof, FAQ, CTA, and contact sections are specified."
        },
        {
            "name": "Owner-maintained handoff",
            "trigger": "The site is ready but ownership could fail after launch.",
            "outcome": "Plain-language edit, renewal, and support instructions."
        }
    ],
    "economics": {
        "buyer": "Small business owner, nonprofit founder, or student web pod lead",
        "valueMetric": "Owner-approved site launches",
        "priceHint": "$199 launchpad license or $899 guided micro-site launch",
        "northStar": "Sites launched with passed owner handoff"
    },
    "exportSuite": [
        "Site brief markdown",
        "Section-by-section copy deck",
        "Launch QA checklist",
        "Owner update guide",
        "Static content manifest"
    ],
    "sampleClient": "Riverside Community Bakery",
    "saas": {
        "personas": ["Student site builder", "Local service owner", "Mentor QA reviewer"],
        "stages": [
            { "name": "Site intake", "goal": "Turn owner interview notes into a page map, offers, and audience promise.", "rowPatterns": ["Industry|Page map|Hero|Services"] },
            { "name": "Launch assembly", "goal": "Generate publishable content, metadata, schema, and asset inventory.", "rowPatterns": ["Schema|Asset|metadata|wireframe"] },
            { "name": "Owner handoff", "goal": "Give the owner a launch checklist and editable maintenance guide.", "rowPatterns": ["Handoff|Publish|Owner edit|checklist"] }
        ],
        "sampleValues": { "primary-goal": "ship a polished first micro-site draft in one week" },
        "sampleRows": { "Business goal captured": "Primary offer, audience, service area, and launch deadline documented", "Page sections selected": "Hero, services, proof, about, FAQ, and contact sections selected", "Owner-approved copy drafted": "Plain-language copy drafted in owner voice with approval notes", "Images/assets inventoried": "Logo, hero image, product photos, and missing assets listed", "Contact CTA verified": "Phone, email, map, and form CTA verified on mobile and desktop", "Domain/hosting plan selected": "Domain owner, DNS path, hosting target, and renewal risk documented", "Accessibility/mobile QA passed": "Headings, alt text, contrast, tap targets, and keyboard checks passed", "Owner handoff guide generated": "Edit instructions, recurring tasks, and support boundaries prepared", "SEO title and meta drafted": "Title, description, local service terms, and social preview copy drafted", "Privacy/contact policy noted": "Contact form privacy language and data handling notes added", "Launch analytics plan selected": "Basic analytics/traffic check plan selected with owner consent", "Post-launch update cadence set": "Monthly update cadence and owner reminder schedule defined" }
    }
};
//# sourceMappingURL=domain.js.map