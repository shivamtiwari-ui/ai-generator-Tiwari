const Templates = [
    {
        name: 'Blog Title',
        desc: 'An AI tool that generates blog titles based on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4180/4180996.png',
        aiPrompt: 'Give me 5 blog topic ideas in bullet points based on the given niche & outline and give me the result in Rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'A tool that serves as your personal blog post title',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/9623/9623631.png',
        aiPrompt: 'Generate Blog Content based on topic and outline',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter blog outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Blog Topic Ideas',
        desc: 'An AI tool that serves as your personal blog post title',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/3959/3959425.png',
        slug: 'blog-topic-idea',
        aiPrompt: 'Generate top 5 blog topic ideas in bullet points only',
        form: [
            {
                label: 'Enter your niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Youtube SEO Title',
        desc: 'An AI tool that serves as your personal blog post title',
        category: 'Youtube Tools',
        icon: 'https://cdn-icons-png.flaticon.com/128/16393/16393962.png',
        slug: 'youtube-seo-title',
        aiPrompt: 'Give me the best SEO optimized high ranked 5 title ideas',
        form: [
            {
                label: 'Enter your YouTube video topic keywords',
                field: 'input',
                name: 'keywords',
                required: true
            },
            {
                label: 'Enter YouTube description outline here',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Youtube Description',
        desc: 'An AI tool that serves as your personal blog post title',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/10101/10101391.png',
        slug: 'youtube-description',
        aiPrompt: 'Generate a YouTube description with emojis under 4-5 titles',
        form: [
            {
                label: 'Enter your blog topic/title',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter YouTube outline here',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Youtube Tags',
        desc: 'An AI tool that serves as your personal blog post title',
        category: 'Youtube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/1384/1384086.png',
        slug: 'youtube-tag',
        aiPrompt: 'Generate 10 YouTube tags in bullet points based on the outline',
        form: [
            {
                label: 'Enter your YouTube title',
                field: 'textarea',
                name: 'title',
            }
        ]
    },
    {
        name: 'Rewrite Article (Plagiarism Free)',
        desc: 'Use this tool to rewrite an existing article',
        icon: 'https://cdn-icons-png.flaticon.com/128/6612/6612250.png',
        category: 'Rewriting Tool',
        slug: 'rewrite-article',
        aiPrompt: 'Rewrite the given article without any plagiarism in rich text format',
        form: [
            {
                label: 'Provide your article/blog post or any other text',
                field: 'textarea',
                name: 'article',
                required: true
            }
        ]
    },
    {
        name: 'Add Emoji to Text',
        desc: 'An AI tool that serves as your personal blog post title',
        icon: 'https://cdn-icons-png.flaticon.com/128/1665/1665944.png',
        category: 'Blog',
        slug: 'add-emoji-to-text',
        aiPrompt: 'Add emojis to outline text based on the outline and rewrite',
        form: [
            {
                label: 'Enter your text to add emojis',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Instagram Post Generator',
        desc: 'An AI tool that serves as your personal blog post title',
        icon: 'https://cdn-icons-png.flaticon.com/128/15713/15713420.png',
        category: 'Blog',
        slug: 'instagram-post-generator',
        aiPrompt: 'Generate 3 Instagram posts based on a given keyword',
        form: [
            {
                label: 'Enter keywords for your post',
                field: 'input',
                name: 'keywords',
                required: true
            }
        ]
    }
];

export default Templates;
