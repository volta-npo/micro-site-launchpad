export declare const domain: {
    kind: string;
    title: string;
    purpose: string;
    inputTitle: string;
    previewTitle: string;
    tableTitle: string;
    metricLabels: string[];
    fields: ({
        id: string;
        label: string;
        type: string;
        sample: string;
        placeholder: string;
    } | {
        id: string;
        label: string;
        type: string;
        sample: number;
        placeholder: string;
    })[];
    rows: string[];
    artifacts: string[];
    checks: string[];
    modules: {
        name: string;
        description: string;
        metrics: string[];
        deliverable: string;
    }[];
    plays: {
        name: string;
        trigger: string;
        outcome: string;
    }[];
    economics: {
        buyer: string;
        valueMetric: string;
        priceHint: string;
        northStar: string;
    };
    exportSuite: string[];
    sampleClient: string;
    saas: {
        personas: string[];
        stages: {
            name: string;
            goal: string;
            rowPatterns: string[];
        }[];
        sampleValues: {
            "primary-goal": string;
        };
        sampleRows: {
            "Business goal captured": string;
            "Page sections selected": string;
            "Owner-approved copy drafted": string;
            "Images/assets inventoried": string;
            "Contact CTA verified": string;
            "Domain/hosting plan selected": string;
            "Accessibility/mobile QA passed": string;
            "Owner handoff guide generated": string;
            "SEO title and meta drafted": string;
            "Privacy/contact policy noted": string;
            "Launch analytics plan selected": string;
            "Post-launch update cadence set": string;
        };
    };
};
